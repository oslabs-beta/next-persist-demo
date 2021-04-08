import React from 'react';
import Link from 'next/link';

function userinfo() {
  return (
    <div>
      <h1>This is the UserInfo Page</h1>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}

export default userinfo;
