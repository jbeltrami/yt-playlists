import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../actions/authActions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth.email);

  const handleLogout = async () => {
    await dispatch(signOut());
  };

  const renderLogout = (someAuth) => {
    if (someAuth)
      return (
        <li className='nav-item ml-auto'>
          <NavLink to='/'>
            <button className='btn btn-light' onClick={handleLogout}>
              Logout
            </button>
          </NavLink>
        </li>
      );

    return (
      <>
        <li className='nav-item'>
          <NavLink to='/sign-in'>
            <div className='nav-link'>Sign In</div>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/sign-up'>
            <div className='nav-link'>Sign Up</div>
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <ul className='navbar-nav mr-auto w-100'>
        <li className='nav-item'>
          <NavLink to='/'>
            <div className='nav-link'>Home</div>
          </NavLink>
        </li>

        {renderLogout(auth)}
      </ul>
    </nav>
  );
};

export default Navbar;
