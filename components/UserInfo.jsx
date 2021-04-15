import React from 'react';

import styles from '../styles/Demo.module.css';

export default function UserInfo(props) {
  return (
    <div className={styles.compContainer}>
      <div className={styles.displayBox}>
        <p className={styles.displayName}>Welcome!</p>
      </div>
      <div className={styles.displayContent}>
        <p className={styles.displayUserInfo}>
          {props.username} - {props.userIcon}
        </p>
      </div>
    </div>
  );
}
