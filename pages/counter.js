import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import actions from '../redux/actions/actions';

export default function counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is the Counter Page</h1>
      <h4>Counter: {counter}</h4>
      <div>
        <button onClick={() => dispatch(actions.updateCounter(1))}>+</button>
        <button onClick={() => dispatch(actions.updateCounter(-1))}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(actions.resetCounter())}>
          RESET COUNTER
        </button>
      </div>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
