import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInterval from '../lib/useInterval';
import actions from '../redux/actions/actions';

export default function Timer() {
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
      <h3>This is the Timer Component</h3>
      <h4>Time Passed: {elapsedTime}</h4>
    </div>
  );
}
