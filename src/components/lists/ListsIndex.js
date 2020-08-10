import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import ListCard from "./ListCard";

const ListsIndex = () => {
  useFirestoreConnect(["lists"]);

  const user = useSelector((state) => state.firebase.auth.uid);
  const lists = useSelector((state) => state.firestore.data.lists);

  const filteredLists =
    lists && Object.entries(lists).filter((list) => list[1].ownerId === user);

  const renderLists = (someList) => {
    const myList = someList;

    return (
      myList &&
      myList.map((e, i) => {
        return (
          <div className='col-md-4' key={`list-${i}`}>
            <ListCard {...e} />
          </div>
        );
      })
    );
  };

  return <div className='row'>{renderLists(filteredLists)}</div>;
};

export default ListsIndex;
