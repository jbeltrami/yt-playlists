import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../../actions/listActions";
import { Redirect } from "react-router-dom";
import GoBack from "../../helper/GoBack";

const CreateList = ({ history }) => {
  const [list, setList] = useState({});
  const dispatch = useDispatch();
  const authId = useSelector(({ firebase: { auth } }) => auth && auth.uid);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createList(list));
    history.push("/");
  };

  const handleFormChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setList({ ...list, [field]: value });
  };

  if (authId)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <GoBack />
            <form onSubmit={handleFormSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  onChange={handleFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cover'>Cover</label>
                <input
                  type='text'
                  className='form-control'
                  name='cover'
                  placeholder='Paste the URL of a squared image on this field'
                  onChange={handleFormChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea
                  className='form-control'
                  name='description'
                  cols='30'
                  rows='10'
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );

  return <Redirect to='/' />;
};

export default CreateList;
