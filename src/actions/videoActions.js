import axios from "axios";
const KEY = "AIzaSyBV61znI1Sd7EgOyIetvSap8zcDv-RxC6o";

export const searchVideos = (searchQuery) => async (
  dispatch,
  getState,
  getFirebase
) => {
  try {
    const videos = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: searchQuery,
          part: "snippet",
          type: "video",
          key: KEY,
        },
      }
    );
    const ytVideos = await videos.data.items;
    await dispatch({ type: "SEARCH_VIDEO", payload: ytVideos });
  } catch (error) {
    await dispatch({ type: "SEARCH_VIDEO_FAIL", payload: error });
  }
};

export const clearVideos = () => async (dispatch, getState, getFirebase) => {
  await dispatch({ type: "CLEAR_SEARCH" });
};
