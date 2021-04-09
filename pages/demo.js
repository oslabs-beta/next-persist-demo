import React from 'react';
import Link from 'next/link';

import DemoContainer from '../containers/DemoContainer';

export default function demo() {
  return (
    <div>
      <h1>This is the Demo Page</h1>
      <DemoContainer />
      <Link href="/">
        <a> Back to Home </a>
      </Link>
    </div>
  );
}
