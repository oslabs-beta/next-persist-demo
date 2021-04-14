import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Page.module.css';
import Button from '@material-ui/core/Button';

import useInterval from '../lib/useInterval';
import actions from '../redux/actions/actions';

export default function timer() {
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
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <h1 className={styles.displayName}>Elapsed Time</h1>
        <p className={styles.displayTimer}>{elapsedTime}</p>
        <div>
          <Button
            variant="contained"
            disableRipple={true}
            color="primary"
            onClick={() => dispatch(actions.resetInitialTime(new Date()))}
          >
            RESET TIMER
          </Button>
        </div>
      </div>
      <Link href="/demo">
        <a className={styles.backButton}>Back to Demo</a>
      </Link>
    </div>
  );
}
