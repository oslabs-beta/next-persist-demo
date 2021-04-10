import React from 'react';

export default function UserInfo(props) {
  return (
    <div>
      <h3>This is the User Info Component</h3>
      <h4>
        Username: {props.username} - {props.userIcon}
      </h4>
    </div>
  );
}
