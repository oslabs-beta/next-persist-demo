import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInterval from '../lib/useInterval';
import actions from '../redux/actions/actions';
import styles from '../styles/Demo.module.css';

export default function Timer() {
  const { initialTime, currentTime } = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(actions.updateCurrentTime(new Date()));
  }, 1000);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const elapsedTime = new Date((currentTime || 0) - new Date(initialTime))
    .toJSON()
    .slice(11, 19);

  return (
    <div className={styles.compContainer}>
      <div className={styles.displayBox}>
        <p className={styles.displayName}>Elapsed Time</p>
      </div>
      <div className={styles.displayContent}>
        <p className={styles.displayTimer}>{elapsedTime}</p>
      </div>
    </div>
  );
}
