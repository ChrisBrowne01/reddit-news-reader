import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  const { name } = props;

  return (
    <img src={`https://api.adorable.io/avatars/10/${name}`}/* <-add a new fetch */
      alt={`${name} profile`}
      className="avatar-image"
    />
  );
};

export default Avatar;
