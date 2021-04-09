import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../redux/actions/actions';

export default function lightswitch() {
  const lightStatus = useSelector((state) => state.lightStatus);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is the LightSwitch Page</h1>
      <div>
        Light Switch:
        <input
          type="checkbox"
          defaultChecked={lightStatus}
          onClick={() => dispatch(actions.updateLightStatus(!lightStatus))}
        ></input>
      </div>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
