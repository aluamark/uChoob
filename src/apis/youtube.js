import axios from "axios";

const KEY = "AIzaSyBzI2B_XCnyQSFHzt7OJs7YF3lItOAC2Oc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
