import React from 'react';
import Link from 'next/link';

export default function userinfo() {
  return (
    <div>
      <h1>This is the UserInfo Page</h1>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}
