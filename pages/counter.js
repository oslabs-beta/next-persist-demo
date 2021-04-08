import React from 'react';
import Link from 'next/link';

function counter(pageProps) {
  return (
    <div>
      <h1>This is the Counter Page</h1>
      <h4>Counter: {pageProps.props.counter}</h4>
      <Link href="/demo">
        <a>Back to Demo</a>
      </Link>
    </div>
  );
}

// how do we access state in here
// how do we modify state from here
counter.getInitialProps = async () => {
  const counter = 420;
  return {
    props: {
      counter,
    },
  };
};

export default counter;
