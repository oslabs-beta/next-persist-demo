import React from 'react';

function UserInfo(props) {
  return (
    <div>
      <h3>This is the UserInfo Component</h3>
      <img src={`/assets/${props.userImage}`}></img>
      <h4>Username: {props.username}</h4>
    </div>
  );
}

export default UserInfo;
