import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import useInterval from '../lib/useInterval';
import actions from '../redux/actions/actions';

export default function timer() {
  const { initialTime, currentTime } = useSelector((state) => state);
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

  const elapsedTime = new Date(currentTime - new Date(initialTime))
    .toJSON()
    .slice(11, 19);

  return (
    <div>
      <h1>This is the Timer Page</h1>
      <h4>Time Passed Since Reset: {elapsedTime}</h4>
      <div>
        <button onClick={() => dispatch(actions.resetInitialTime(new Date()))}>
          RESET TIMER
        </button>
      </div>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
