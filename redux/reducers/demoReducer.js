import * as types from '../constants/actionTypes';

const initialState = {
  counter: 0,
  lightSwitch: false,
  initialTime: new Date(),
  username: 'Guest',
  userImage: 'guest.png',
};

const demoReducer = (state = initialState, action) => {
  let counter;
  let lightSwitch;
  let initialTime;
  let username;
  let userImage;

  switch (action.type) {
    case types.INCREASE_COUNTER:
      console.log('Increased Counter');
      return state;

    case types.DECREASE_COUNTER:
      console.log('Increased Counter');
      return state;

    case types.SWITCH_ON:
      console.log('Switch On');
      return state;

    case types.SWITCH_OFF:
      console.log('Switch Off');
      return state;

    case types.RESTART_TIME:
      console.log('Restart Time');
      return state;

    case types.TICK:
      console.log('Tick');
      return state;

    case types.UPDATE_USERNAME:
      console.log('Update Username');
      return state;

    case types.UPDATE_USER_IMAGE:
      console.log('Update User Image');
      return state;

    default:
      return state;
  }
};

export default demoReducer;
