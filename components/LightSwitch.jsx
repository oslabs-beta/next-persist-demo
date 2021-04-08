import React from 'react';

function LightSwitch(props) {
  let lightStatus = '';
  if (props.lightSwitch) {
    lightStatus = 'On';
  } else {
    lightStatus = 'Off';
  }

  return (
    <div>
      <h3>This is the LightSwitch Component</h3>
      <h4>Lightswitch: {lightStatus}</h4>
    </div>
  );
}

export default LightSwitch;
