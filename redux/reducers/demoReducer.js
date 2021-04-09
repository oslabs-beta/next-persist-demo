import * as types from '../constants/actionTypes';

const initialState = {
  counter: 0,
  lightStatus: false,
  initialTime: new Date(),
  currentTime: new Date(),
  username: 'Guest',
  userImage: 'guest.png',
};

const demoReducer = (state = initialState, action) => {
  let counter;
  let lightStatus;
  let initialTime;
  let currentTime;
  let username;
  let userImage;

  switch (action.type) {
    case types.UPDATE_COUNTER:
      const change = action.payload;
      counter = state.counter + change;
      return {
        ...state,
        counter,
      };

    case types.UPDATE_LIGHT_STATUS:
      lightStatus = action.payload;
      return {
        ...state,
        lightStatus,
      };

    case types.TICK:
      currentTime = action.payload;
      return {
        ...state,
        currentTime,
      };

    case types.RESTART_TIME:
      console.log('Restart Time');
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
