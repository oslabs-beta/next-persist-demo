import * as types from '../constants/actionTypes';

const actions = {};

actions.increaseCounter = () => ({
  type: types.INCREASE_COUNTER,
  payload: 0,
});

actions.decreaseCounter = () => ({
  type: types.DECREASE_COUNTER,
  payload: 0,
});

// ?? do we need on and off
actions.switchOn = (status) => ({
  type: types.SWITCH_ON,
  payload: status,
});

// ?? do we need on and off
actions.switchOff = (status) => ({
  type: types.SWITCH_OFF,
  payload: status,
});

// ?? not sure how time is going to work
actions.restartTime = (newTime) => ({
  type: types.RESTART_TIME,
  payload: newTime,
});

// ?? not sure how time is going to work
actions.tick = () => ({
  type: types.TICK,
  payload: 0,
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
