import React from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';

import DemoContainer from '../containers/DemoContainer';
import store from '../redux/store/index';

function demo() {
  return (
    <div>
      <h1>This is the Demo Page</h1>
      <Provider store={store}>
        <DemoContainer />
      </Provider>
      <Link href="/">
        <a> Back to Home </a>
      </Link>
    </div>
  );
}

export default demo;
