import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themes";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideo from "../hooks/useVideo";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("");
  const [theme, setTheme] = useState("dark");
  const mode = theme === "dark" ? "lightbulb outline" : "lightbulb";
  const loaderMode = theme === "dark" ? "" : "inverted";

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="ui container">
          <h1 style={{ marginTop: "10px", cursor: "pointer" }}>
            uChoob
            <i style={{ marginLeft: "5px" }} className="ph flag" />
            <button
              onClick={() => themeToggler()}
              className="ui right floated icon button"
            >
              <i className={`${mode} icon`} />
            </button>
          </h1>
          <SearchBar theme={theme} onFormSubmit={search} />
          {videos.length > 0 ? (
            <div className="ui two column stackable grid">
              <div className="eleven wide column">
                <VideoDetail theme={theme} video={selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  theme={theme}
                  onVideoSelect={setSelectedVideo}
                  selectedVideo={selectedVideo}
                  videos={videos}
                />
              </div>
            </div>
          ) : (
            <div className="ui segment">
              <div className={`ui active ${loaderMode} dimmer`}>
                <div className="ui text loader">Waiting for a keyword..</div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
