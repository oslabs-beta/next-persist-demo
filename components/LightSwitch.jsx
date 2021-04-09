import React from 'react';

export default function LightSwitch(props) {
  let lightStatus = '';
  if (props.lightStatus) {
    lightStatus = 'On';
  } else {
    lightStatus = 'Off';
  }

  return (
    <div>
      <h3>This is the Light Switch Component</h3>
      <h4>Light Switch: {lightStatus}</h4>
    </div>
  );
}
