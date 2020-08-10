import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBV61znI1Sd7EgOyIetvSap8zcDv-RxC6o",
  authDomain: "yt-playlists-6aefd.firebaseapp.com",
  databaseURL: "https://yt-playlists-6aefd.firebaseio.com",
  projectId: "yt-playlists-6aefd",
  storageBucket: "yt-playlists-6aefd.appspot.com",
  messagingSenderId: "451160551983",
  appId: "1:451160551983:web:e87201207521c81ee7ccda",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

export const storage = firebase.storage();
