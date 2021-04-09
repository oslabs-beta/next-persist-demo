import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import useInterval from '../lib/useInterval';
import actions from '../redux/actions/actions';

export default function timer() {
  const { initialTime, currentTime } = useSelector((state) => state);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(actions.tick(new Date()));
  }, 1000);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const elapsedTime = new Date(currentTime - initialTime)
    .toJSON()
    .slice(11, 19);

  return (
    <div>
      <h1>This is the Timer Page</h1>
      <h4>Initial Time: {initialTime.toJSON().slice(11, 19)}</h4>
      <h4>Current Time: {currentTime.toJSON().slice(11, 19)}</h4>
      <h4>Time Passed: {elapsedTime}</h4>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
