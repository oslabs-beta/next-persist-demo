import React from 'react';
import Link from 'next/link';

function lightswitch() {
  return (
    <div>
      <h1>This is the LightSwitch Page</h1>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}

export default lightswitch;
