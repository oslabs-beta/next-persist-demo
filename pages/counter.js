import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from '../styles/Page.module.css'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import actions from '../redux/actions/actions';

export default function counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <h1 className={styles.displayName}>Counter</h1>
        <p className={styles.displayCounter}>{counter}</p>
        <div className={styles.buttons}>
          <div className={styles.buttonContainer}>
            <Button variant='contained' disableRipple={true} color='primary' onClick={() => dispatch(actions.updateCounter(1))}>+</Button>
            <Button variant='contained' disableRipple={true} color='primary' onClick={() => dispatch(actions.updateCounter(-1))}>-</Button>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant='contained' disableRipple={true} color='primary' onClick={() => dispatch(actions.resetCounter())}>Reset Counter</Button>
          </div>
        </div>
      </div>
      <Link href="/demo">
        <a className={styles.backButton}>Back to Demo</a>
      </Link>
    </div>
  );
}
