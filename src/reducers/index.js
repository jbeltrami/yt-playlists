import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import listReducer from "./listReducer";
import videoReducer from "./videoReducer";

const rootReducer = combineReducers({
  appAuth: authReducer,
  lists: listReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  videos: videoReducer,
});

export default rootReducer;
