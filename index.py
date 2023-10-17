import os
import re
import logging
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from yt_dlp import YoutubeDL
from starlette.responses import FileResponse
from typing import Optional

app = FastAPI()

origins = ["*"]

# Apply CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def sanitize(video_title: str):
    # Remove special characters using regular expression
    sanitized_string = re.sub(r"[^\w\s]", "", video_title)

    # Replace spaces with underscores and convert to lowercase
    sanitized_and_lowercased = sanitized_string.replace(" ", "_").lower()

    # Remove consecutive underscores and ensure there's only one
    sanitized_final = re.sub(r"_+", "_", sanitized_and_lowercased)

    return sanitized_final


@app.post("/api/upload_youtube")
async def upload_youtube_video(request_data: dict):
    try:
        video_url = request_data.get("video_url")
        if not video_url:
            raise HTTPException(status_code=400, detail="No video URL provided.")

        ydl_opts = {
            "format": "best",
            "outtmpl": "/tmp/temp.%(ext)s",
        }

        with YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(video_url, download=True)

        video_title = sanitize(info_dict["title"])
        video_extension = info_dict["ext"]
        file_to_upload = f"{video_title}.{video_extension}"
        video_file_path = f"/tmp/{file_to_upload}"

        os.rename(f"/tmp/temp.{video_extension}", video_file_path)

        return FileResponse(
            video_file_path,
            headers={"Content-Type": "video/mp4"},
            filename=file_to_upload,
        )

    except Exception as e:
        logging.error(f"Error uploading the video: {str(e)}")
        raise HTTPException(
            status_code=500, detail=f"Error uploading the video: {str(e)}"
        )


@app.get("/api/get_thumbnail_url")
async def get_thumbnail_url(
    video_url: str = Query(..., description="YouTube video URL")
):
    try:
        ydl_opts = {
            "skip_download": True,
            "write_thumbnail": True,
            "outtmpl": "%(title)s.%(ext)s",
        }

        with YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(video_url, download=False)
            thumbnail_url = info_dict["thumbnail"]
            video_title = info_dict["title"]

        if thumbnail_url:
            response_data = {"url": thumbnail_url, "title": sanitize(video_title)}
            return response_data
        else:
            raise HTTPException(status_code=404, detail="No thumbnail available.")

    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error getting the thumbnail URL: {str(e)}"
        )
