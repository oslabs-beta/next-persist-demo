import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Page.module.css';

import actions from '../redux/actions/actions';

export default function lightswitch() {
  const lightStatus = useSelector((state) => state.demo.lightStatus);
  const dispatch = useDispatch();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  let lightStatusText = '';
  if (lightStatus) {
    lightStatusText = 'On';
  } else {
    lightStatusText = 'Off';
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <h1 className={styles.displayName}>Light Switch</h1>
        <label className={styles.displaySwitch}>
          <input
            type="checkbox"
            defaultChecked={lightStatus}
            onClick={() => dispatch(actions.updateLightStatus(!lightStatus))}
          ></input>
          <span className={styles.slider}></span>
        </label>
        <p className={styles.displaySwitchStatus}>{lightStatusText}</p>
      </div>
      <Link href="/demo">
        <a className={styles.backButton}>Back to Demo</a>
      </Link>
    </div>
  );
}
