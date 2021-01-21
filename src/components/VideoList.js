import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ theme, videos, selectedVideo, onVideoSelect }) => {
  const mode = theme === "dark" ? "inverted" : "";

  const renderedList = videos.map((video) => {
    if (selectedVideo) {
      if (video.id.videoId === selectedVideo.id.videoId) {
        return <div key={video.id.videoId}></div>;
      }
    }
    return (
      <VideoItem
        selectedVideo={selectedVideo}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return (
    <div className={`ui ${mode} relaxed divided list`}>{renderedList}</div>
  );
};

export default VideoList;
