import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchVideos } from "../../actions/videoActions";

const VideoSearch = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchVideos(form.video));
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Video</label>
              <input
                type='text'
                className='form-control'
                name='video'
                onChange={handleInputChange}
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoSearch;
