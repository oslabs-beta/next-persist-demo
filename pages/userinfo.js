import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../redux/actions/actions';

export default function userinfo() {
  const { username, userIcon } = useSelector((state) => state);
  const dispatch = useDispatch();

  // ADD: submit on enter
  const submitUsername = () => {
    const usernameInput = document.getElementById('username').value || 'Guest';
    dispatch(actions.updateUsername(usernameInput));
    document.getElementById('username').value = '';
  };

  const changeUserIcon = () => {
    const userIcon = document.getElementById('userIcon').value;
    dispatch(actions.updateUserIcon(userIcon));
  };

  return (
    <div>
      <h1>This is the User Info Page</h1>

      <h4>
        Welcome! {username} - {userIcon}
      </h4>

      <h4>Change Username:</h4>
      <input type="text" name="username" id="username"></input>
      <button
        onClick={() => {
          submitUsername();
        }}
      >
        SUBMIT
      </button>

      <h4>Change User Icon:</h4>
      <div>
        <select
          id="userIcon"
          defaultValue={userIcon}
          onChange={() => {
            changeUserIcon();
          }}
        >
          <option value="👤">👤</option>
          <option value="🐱">🐱</option>
          <option value="🐶">🐶</option>
          <option value="🦄">🦄</option>
          <option value="🤡">🤡</option>
        </select>
      </div>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
