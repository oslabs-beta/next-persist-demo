import * as types from '../constants/actionTypes';

const actions = {};

actions.updateCounter = (change) => ({
  type: types.UPDATE_COUNTER,
  payload: change,
});

actions.updateLightStatus = (status) => ({
  type: types.UPDATE_LIGHT_STATUS,
  payload: status,
});

actions.tick = (currentTime) => ({
  type: types.TICK,
  payload: currentTime,
});

// ?? not sure how time is going to work
actions.restartTime = (newTime) => ({
  type: types.RESTART_TIME,
  payload: newTime,
});

actions.updateUsername = (newUsername) => ({
  type: types.UPDATE_USERNAME,
  payload: newUsername,
});

actions.updateUserImage = (newUserImage) => ({
  type: types.UPDATE_USER_IMAGE,
  payload: newUserImage,
});

export default actions;
