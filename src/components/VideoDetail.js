import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    const mode = this.props.theme === "dark" ? "inverted" : "red";

    if (!this.props.video) {
      return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>

        <div className={`ui ${mode} segment`}>
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
