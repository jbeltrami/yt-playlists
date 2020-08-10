import React, { useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../actions/listActions";
import { clearVideos } from "../../actions/videoActions";
import VideoSearch from "../videos/VideoSearch";
import VideoCard from "../videos/VideoCard";
import GoBack from "../../helper/GoBack";

const SingleList = () => {
  useFirestoreConnect(["lists"]);
  const { id } = useParams();
  const searchVideos = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  const list = useSelector(
    (state) =>
      state.firestore.ordered.lists &&
      state.firestore.ordered.lists.filter((list) => list.id === id)
  );

  const addToPlaylist = (data) => {
    dispatch(addToList(data, id));
    dispatch(clearVideos());
  };

  const renderSearchVideos = (videoList) => {
    if (videoList)
      return videoList.map((video, i) => {
        return (
          <div className='col-md-4' key={video.id.videoId}>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            <img
              className='img-fluid'
              src={video.snippet.thumbnails.medium.url}
              alt=''
            />
            <p>{video.snippet.channelTitle}</p>

            <button
              onClick={() => {
                addToPlaylist(video);
              }}
            >
              Add to this playlist
            </button>
          </div>
        );
      });
  };

  const renderListVideos = (videoList) => {
    if (videoList)
      return videoList.map((video, i) => (
        <VideoCard video={video} key={video.id.videoId} />
      ));
  };

  if (list)
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <GoBack />
              <h1>{list[0].name}</h1>
              <p>{list[0].description}</p>
            </div>
          </div>
          <div className='row'>{renderListVideos(list[0].videos)}</div>
        </div>
        <VideoSearch />
        <div className='container'>
          <div className='row'>{renderSearchVideos(searchVideos)}</div>
        </div>
      </>
    );

  return "";
};

export default SingleList;
