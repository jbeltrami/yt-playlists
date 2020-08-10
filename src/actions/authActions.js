export const signUp = (form) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    const fbNewUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password);

    await firebase.firestore().collection("users").doc(fbNewUser.user.uid).set({
      email: form.email,
      password: form.password,
      createdAt: new Date(),
    });

    await dispatch({ type: "CREATE_USER", payload: form });
  } catch (error) {
    await dispatch({ type: "CREATE_USER_ERROR", payload: error });
  }
};

export const signIn = (user) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    await dispatch({ type: "USER_SIGN_IN", payload: user });
  } catch (error) {
    await dispatch({ type: "USER_SIGN_IN_FAIL", payload: error });
  }
};

export const signOut = () => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    await firebase.auth().signOut();
    await dispatch({ type: "USER_SIGN_OUT" });
  } catch (error) {
    await dispatch({ type: "USER_SIGN_OUT_FAIL", payload: error });
  }
};
