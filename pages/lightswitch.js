import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Page.module.css'
import { Button, Switch } from '@material-ui/core'

import actions from '../redux/actions/actions';

export default function lightswitch() {
  const lightStatus = useSelector((state) => state.lightStatus);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <h1 className={styles.displayName}>Light Switch</h1>
        <div className={styles.displaySwitch}>
          
          <Switch size='medium' checked={lightStatus} color='primary' onChange={() => dispatch(actions.updateLightStatus(!lightStatus))}></Switch>
          {/* <input
            type="checkbox"
            defaultChecked={lightStatus}
            onClick={() => dispatch(actions.updateLightStatus(!lightStatus))}
          ></input> */}
        </div>
        <Link href="/demo">
          <Button variant='contained' disableRipple={true} color='primary' className={styles.backButton}>Back to Demo</Button>
        </Link>
      </div>
    </div>
  );
}
