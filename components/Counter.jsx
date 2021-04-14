import React from 'react';
import styles from '../styles/Demo.module.css';

export default function Counter(props) {
  return (
    <div className={styles.compContainer}>
      <div className={styles.displayBox}>
        <p className={styles.displayName}>Counter</p>
      </div>
      <div className={styles.displayContent}>
        <p className={styles.displayCounter}>{props.counter}</p>
      </div>
    </div>
  );
}
