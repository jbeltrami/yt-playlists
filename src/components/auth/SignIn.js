import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const authId = useSelector(({ firebase: { auth } }) => auth && auth.uid);
  const authError = useSelector((state) => state.appAuth.authError);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(form));
  };

  const handleFormChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [field]: value });
  };

  if (!authId)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <form onSubmit={handleFormSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  aria-describedby='emailHelp'
                  onChange={handleFormChange}
                />
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  onChange={handleFormChange}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>

            {authError ? <p className='mt-4 text-danger'>{authError}</p> : ""}
          </div>
        </div>
      </div>
    );

  return <Redirect to='/' />;
};

export default SignIn;
