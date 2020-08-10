import React, { useState } from "react";
import { removeFromList } from "../../actions/listActions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [deleteVideo, setDeleteVideo] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDeleteVideo = () => {
    dispatch(removeFromList(video, id));
  };

  const renderDeleteCard = (bool) => {
    if (bool)
      return (
        <div className='d-flex flex-column'>
          Are you sure you want to delete this video?
          <div className='d-flex'>
            <button
              className='btn btn-dark'
              onClick={() => setDeleteVideo(false)}
            >
              No
            </button>
            <button
              className='btn btn-dark ml-auto'
              onClick={() => handleDeleteVideo()}
            >
              Yes
            </button>
          </div>
        </div>
      );
  };

  return (
    <div className='col-md-3'>
      <div className='card h-100' style={{ width: "100%" }}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className='card-img-top'
          alt='...'
        />
        <div className='card-body d-flex flex-column align-items-stretch'>
          <h5 className='card-title'>{video.snippet.title}</h5>
          <p>Channel: {video.snippet.channelTitle}</p>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            className='d-block btn btn-primary mt-auto'
            target='_blank'
            rel='noopener noreferrer'
          >
            Watch on Youtube
          </a>

          <button
            className='btn btn-danger mt-2'
            onClick={() => setDeleteVideo(true)}
          >
            Delete from this playlist
          </button>
          {renderDeleteCard(deleteVideo)}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
