import os
import re
from flask import Flask, request, jsonify, request, send_file
from flask_cors import CORS, cross_origin
from yt_dlp import YoutubeDL
import logging
from supabase import create_client


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"

SUPABASE_URL = "https://hhltmpiizvmmcjlkxeos.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobHRtcGlpenZtbWNqbGt4ZW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5MDA3NTEsImV4cCI6MTk3ODQ3Njc1MX0.dwT1L_WD0CZV1XSrc91wqByVOtlgfwWeLm7Dls4aQxk"
SUPABASE_BUCKET_NAME = "images"

supabase_client = create_client(SUPABASE_URL, SUPABASE_KEY)


def sanitize(input_string):
    # Remove special characters using regular expression
    sanitized_string = re.sub(r"[^\w\s]", "", input_string)

    # Replace spaces with underscores and convert to lowercase
    sanitized_and_lowercased = sanitized_string.replace(" ", "_").lower()

    # Remove consecutive underscores and ensure there's only one
    sanitized_final = re.sub(r"_+", "_", sanitized_and_lowercased)

    return sanitized_final


@app.route("/api/upload_youtube", methods=["POST"])
@cross_origin()
def upload_youtube_video():
    try:
        video_url = request.json.get("video_url")
        if not video_url:
            return jsonify({"error": "No video URL provided."}), 400

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

        # Return the video file as a response for download
        response = send_file(
            video_file_path,
            as_attachment=True,
            download_name=file_to_upload,
            mimetype="video/mp4",
        )

        os.remove(video_file_path)  # Clean up the temporary file

        return response

    except Exception as e:
        logging.error(f"Error uploading the video: {str(e)}")
        return jsonify({"error": f"Error uploading the video: {str(e)}"}), 500


@app.route("/api/get_thumbnail_url", methods=["GET"])
@cross_origin()
def get_thumbnail_url():
    video_url = request.args.get("video_url")
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
            return jsonify(response_data), 200
        else:
            return jsonify({"message": "No thumbnail available."}), 404
    except Exception as e:
        return jsonify({"error": f"Error getting the thumbnail URL: {str(e)}"}), 500


if __name__ == "__main__":
    app.run()
