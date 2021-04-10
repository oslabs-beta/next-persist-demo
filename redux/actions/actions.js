import * as types from '../constants/actionTypes';

const actions = {};

actions.updateCounter = (change) => ({
  type: types.UPDATE_COUNTER,
  payload: change,
});

actions.resetCounter = () => ({
  type: types.RESET_COUNTER,
});

actions.updateLightStatus = (status) => ({
  type: types.UPDATE_LIGHT_STATUS,
  payload: status,
});

actions.updateCurrentTime = (currentTime) => ({
  type: types.UPDATE_CURRENT_TIME,
  payload: currentTime,
});

actions.resetInitialTime = (newTime) => ({
  type: types.RESET_INITIAL_TIME,
  payload: newTime,
});

actions.updateUsername = (newUsername) => ({
  type: types.UPDATE_USERNAME,
  payload: newUsername,
});

actions.updateUserIcon = (newUserIcon) => ({
  type: types.UPDATE_USER_ICON,
  payload: newUserIcon,
});

export default actions;
