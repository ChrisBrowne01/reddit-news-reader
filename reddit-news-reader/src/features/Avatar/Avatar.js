import React from 'react';
import './Avatar.css';
import getRandomNumber from '../../utils/getRandomNumber';

const Avatar = (props) => {
  const { name } = props;

  // Generates randomised default placeholder Reddit Snoo avatar to display 
  return (
    <img src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${getRandomNumber(1, 7)}.png`}
      alt={`${name} profile`}
      className="avatar-image"
    />
  );
};

export default Avatar;
