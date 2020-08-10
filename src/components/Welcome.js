import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ListsIndex from "./lists/ListsIndex";

const Welcome = () => {
  const auth = useSelector(({ firebase: { auth } }) => auth && auth.uid);

  if (auth)
    return (
      <div className='container'>
        <ListsIndex />
      </div>
    );

  return (
    <div>
      <p>Please sign-up or sign-in to start using this App.</p>
    </div>
  );
};

export default Welcome;
