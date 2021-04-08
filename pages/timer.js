import React from 'react';
import Link from 'next/link';

function timer() {
  return (
    <div>
      <h1>This is the Timer Page</h1>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}

export default timer;
