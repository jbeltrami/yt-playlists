export const createList = (list) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  const ownerId = getState().firebase.auth.uid;

  try {
    await firebase
      .firestore()
      .collection("lists")
      .doc()
      .set({
        ownerId,
        name: list.name || "",
        cover:
          list.cover ||
          "https://s3.amazonaws.com/build-sunrise/wp-content/uploads/2018/06/05130030/Book-Cover-placeholder-copy.jpg",
        description: list.description || "",
        videos: [],
        createdAt: new Date(),
      });

    await dispatch({ type: "CREATE_LIST", payload: list });
  } catch (error) {
    await dispatch({ type: "CREATE_LIST_ERROR", payload: error });
  }
};

export const addToList = (videoObj, listId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();

  try {
    await firebase
      .firestore()
      .collection("lists")
      .doc(listId)
      .update({
        videos: firebase.firestore.FieldValue.arrayUnion(videoObj),
      });

    await dispatch({ type: "ADD_TO_LIST", payload: videoObj });
  } catch (error) {
    await dispatch({ type: "ADD_TO_LIST_FAIL", payload: error });
  }
};

export const removeFromList = (videoObj, listId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();

  try {
    await firebase
      .firestore()
      .collection("lists")
      .doc(listId)
      .update({ videos: firebase.firestore.FieldValue.arrayRemove(videoObj) });

    await dispatch({ type: "REMOVE_FROM_LIST" });
  } catch (error) {
    await dispatch({ type: "REMOVE_FROM_LIST_FAIL", payload: error });
  }
};
