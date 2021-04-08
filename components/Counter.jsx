import React from 'react';

function Counter(props) {
  return (
    <div>
      <h3>This is the Counter Component</h3>
      <h4>Counter: {props.counter}</h4>
    </div>
  );
}

export default Counter;
