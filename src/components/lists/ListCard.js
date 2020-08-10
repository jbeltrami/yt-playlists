import React from "react";
import { NavLink } from "react-router-dom";
const ListCard = (props) => {
  const id = props[0];
  const { name, cover, description } = props[1];

  return (
    <NavLink to={`/list/${id}`}>
      <div className='card w-100 h-100'>
        <img src={cover} className='card-img-top' alt='List Cover' />
        <div className='card-body'>
          <h5 className='card-title mt-auto'>{name}</h5>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ListCard;
