const listReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      console.log("CREATE LIST SUCCESS");
      return state;

    case "CREATE_LIST_ERROR":
      console.log("CREATE LIST ERROR");
      return { ...state, listError: action.payload.message };

    case "ADD_TO_LIST":
      console.log("ADD TO LIST SUCCESS");
      return state;

    case "ADD_TO_LIST_FAIL":
      console.log("ADD TO LIST ERROR", action.payload.message);
      return { ...state, listError: action.payload.message };

    case "REMOVE_FROM_LIST":
      console.log("REMOVE FROM LIST SUCCESS");
      return state;

    case "REMOVE_FROM_LIST_FAIL":
      console.log("REMOVE FROM LIST ERROR", action.payload.message);
      return { ...state, listError: action.payload.message };

    default:
      return state;
  }
};

export default listReducer;
