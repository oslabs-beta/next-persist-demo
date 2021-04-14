import React from 'react';
import styles from '../styles/Demo.module.css';

export default function LightSwitch(props) {
  let lightStatus = '';
  if (props.lightStatus) {
    lightStatus = 'On';
  } else {
    lightStatus = 'Off';
  }

  return (
    <div className={styles.compContainer}>
      <div className={styles.displayBox}>
        <p className={styles.displayName}>Light Switch</p>
      </div>
      <div className={styles.displayContent}>
        <p className={styles.displaySwitchStatus}>{lightStatus}</p>
      </div>
    </div>
  );
}
