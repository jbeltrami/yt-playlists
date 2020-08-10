const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_VIDEO":
      console.log("SEARCH VIDEO SUCCESS");
      return [...action.payload];

    case "SEARCH_VIDEO_FAIL":
      console.log("SEARCH VIDEO ERROR", action.payload.message);
      return { ...state, searchError: action.payload.message };

    case "CLEAR_SEARCH":
      console.log("SEARCH VIDEO CLEARED");
      return [];

    default:
      return state;
  }
};

export default videoReducer;
