import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import actions from '../redux/actions/actions';
import styles from '../styles/Page.module.css';

export default function userinfo() {
  const { username, userIcon } = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  const checkEnter = (e) => {
    if (e.keyCode == 13) {
      submitUsername();
    }
  };

  const submitUsername = () => {
    const usernameInput = document.getElementById('username').value || 'Guest';
    dispatch(actions.updateUsername(usernameInput));
    document.getElementById('username').value = '';
  };

  const changeUserIcon = (e) => {
    dispatch(actions.updateUserIcon(e.target.value));
  };

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <h1 className={styles.displayName}>Welcome!</h1>
        <h3>
          {username} - {userIcon}
        </h3>
        <TextField
          id="username"
          label="Update Username"
          variant="outlined"
          size="small"
          onKeyDown={(e) => {
            checkEnter(e);
          }}
        />
        <Button
          variant="contained"
          disableRipple={true}
          color="primary"
          onClick={() => {
            submitUsername();
          }}
        >
          SUBMIT
        </Button>

        <div className={styles.updateIcon}>
          <h4 className={styles.updateIconText}>Update Icon:</h4>
          <Select
            id="userIcon"
            value={userIcon}
            onChange={(e) => {
              changeUserIcon(e);
            }}
          >
            <MenuItem value="👤">👤</MenuItem>
            <MenuItem value="🐱">🐱</MenuItem>
            <MenuItem value="🐶">🐶</MenuItem>
            <MenuItem value="🦄">🦄</MenuItem>
            <MenuItem value="🤡">🤡</MenuItem>
          </Select>
        </div>
      </div>
      <Link href="/demo" className={styles.backButton}>Back to Demo</Link>
    </div>
  );
}
