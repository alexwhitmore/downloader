from flask import Flask, request, jsonify, request, Response, send_file
from flask_cors import CORS, cross_origin
from azure.storage.blob import BlobServiceClient
from yt_dlp import YoutubeDL

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"

# Initialize Azure BlobServiceClient
connection_string = "DefaultEndpointsProtocol=https;AccountName=dlprodwus2st;AccountKey=jSoIuWP0h5sFiCOUBDbWmiHr6SfJkKKQBTSKzS/AbMA6qLffbDuB4n1VeKc9KdoYwcjWGOGsOD5t+AStYPtriA==;EndpointSuffix=core.windows.net"
blob_service_client = BlobServiceClient.from_connection_string(connection_string)
container_name = "videos"


@app.route("/api/upload_youtube", methods=["POST"])
@cross_origin()
def upload_youtube_video():
    try:
        video_url = request.json.get("video_url")
        if not video_url:
            return jsonify({"error": "No video URL provided."}), 400

        ydl_opts = {
            "format": "best",  # Choose the best quality format
            "outtmpl": "/tmp/temp.%(ext)s",  # Specify the tmp directory
        }

        with YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(video_url, download=True)

        video_file_path = f"/tmp/temp.{info_dict['ext']}"

        # Upload the video file to Azure Blob Storage
        container_client = blob_service_client.get_container_client(container_name)
        with open(video_file_path, "rb") as video_file:
            container_client.upload_blob(name="temp.mp4", data=video_file)

        return jsonify({"message": "Video uploaded successfully."}), 200
    except Exception as e:
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
            response_data = {"url": thumbnail_url, "title": video_title}
            return jsonify(response_data), 200
        else:
            return jsonify({"message": "No thumbnail available."}), 404
    except Exception as e:
        return jsonify({"error": f"Error getting the thumbnail URL: {str(e)}"}), 500


@app.route("/api/download_video", methods=["GET"])
@cross_origin()
def download_video():
    try:
        # Specify the file name you want to download
        blob_name = "temp.mp4"  # Replace with the desired file name

        container_client = blob_service_client.get_container_client(container_name)

        # Get the blob client for the specified file
        blob_client = container_client.get_blob_client(blob=blob_name)

        # Check if the file exists in Azure Blob Storage
        if not blob_client.exists():
            return jsonify({"error": "File not found."}), 404

        # Stream the file from Azure Blob Storage to the client
        response = Response(blob_client.download_blob().readall())
        response.headers["Content-Disposition"] = f"attachment; filename={blob_name}"
        return response
    except Exception as e:
        return jsonify({"error": f"Error downloading the file: {str(e)}"}), 500


# @app.route("/api/download", methods=["GET"])
# @cross_origin()
# def download_video():
#     try:
#         # Get the desired blob name (file name) from the request
#         blob_name = request.args.get("file_name")
#         if not blob_name:
#             return jsonify({"error": "No file name provided."}), 400

#         container_client = blob_service_client.get_container_client(container_name)

#         # Get the blob client for the specified file
#         blob_client = container_client.get_blob_client(blob=blob_name)

#         # Check if the file exists in Azure Blob Storage
#         if not blob_client.exists():
#             return jsonify({"error": "File not found."}), 404

#         # Stream the file from Azure Blob Storage to the client
#         response = Response(blob_client.download_blob().readall())
#         response.headers["Content-Disposition"] = f"attachment; filename={blob_name}"
#         return response
#     except Exception as e:
#         return jsonify({"error": f"Error downloading the file: {str(e)}"}), 500


if __name__ == "__main__":
    app.run()
