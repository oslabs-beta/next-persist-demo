import * as types from '../constants/actionTypes';

const initialState = {
  counter: 0,
  lightStatus: false,
  initialTime: new Date(),
  currentTime: new Date(),
  username: 'Guest',
  userIcon: '👤',
};

const demoReducer = (state = initialState, action) => {
  let counter;
  let change;
  let lightStatus;
  let initialTime;
  let currentTime;
  let username;
  let userIcon;

  switch (action.type) {
    case types.UPDATE_COUNTER:
      change = action.payload;
      counter = state.counter + change;
      return {
        ...state,
        counter,
      };

    case types.RESET_COUNTER:
      counter = 0;
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

    case types.UPDATE_CURRENT_TIME:
      currentTime = action.payload;
      return {
        ...state,
        currentTime,
      };

    case types.RESET_INITIAL_TIME:
      initialTime = action.payload;
      return {
        ...state,
        initialTime,
      };

    case types.UPDATE_USERNAME:
      username = action.payload;
      return {
        ...state,
        username,
      };

    case types.UPDATE_USER_ICON:
      userIcon = action.payload;
      return {
        ...state,
        userIcon,
      };

    default:
      return state;
  }
};

export default demoReducer;
