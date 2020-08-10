const authReducer = (state = { authError: "" }, action) => {
  switch (action.type) {
    case "CREATE_USER":
      console.log("USER CREATED SUCCESSFULLY", action.payload.email);
      return state;
    case "CREATE_USER_ERROR":
      console.log("CREATE_USER_ERROR", action.payload);
      return { ...state, authError: action.payload.message };

    case "USER_SIGN_IN":
      console.log("USER SIGNED IN SUCCESSFULLY");
      return state;

    case "USER_SIGN_IN_FAIL":
      console.log("USER SIGN IN FAIL");
      return { ...state, authError: action.payload.message };

    case "USER_SIGN_OUT":
      console.log("USER SIGN OUT");
      return state;

    case "USER_SIGN_OUT_FAIL":
      console.log("USER SIGN OUT FAIL");
      return { ...state, authError: action.payload.message };
    default:
      return state;
  }
};

export default authReducer;
