import React, { useState, useEffect } from 'react';

function Timer(props) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <h3>This is the Timer Component</h3>
      <h4>Timer: {props.initialTime.toJSON().slice(11, 19)}</h4>
    </div>
  );
}

export default Timer;
