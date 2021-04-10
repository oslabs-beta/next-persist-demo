import demoReducer from '../redux/reducers/demoReducer';

describe('Demo App Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      counter: 0,
      lightStatus: false,
      initialTime: 0, // does not test date object
      currentTime: 0, // does not test date object
      username: 'Guest',
      userIcon: '👤',
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect({
        ...demoReducer(undefined, { type: undefined }),
        initialTime: 0,
        currentTime: 0,
      }).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'NOT_A_REAL_ACTION' };
      expect({
        ...demoReducer(state, action),
        initialTime: 0,
        currentTime: 0,
      }).toEqual(state);
    });
  });

  describe('demo app functionality', () => {
    it('should update the counter', () => {
      const action = { type: 'UPDATE_COUNTER', payload: 1 };
      const { counter } = demoReducer(state, action);
      expect(counter).toBe(1);
    });

    it('should reset the counter', () => {
      const actionUpdate = { type: 'UPDATE_COUNTER', payload: 1 };
      demoReducer(state, actionUpdate);
      const actionReset = { type: 'RESET_COUNTER' };
      const { counter } = demoReducer(state, actionReset);
      expect(counter).toBe(0);
    });

    it('should update the light status', () => {
      const action = { type: 'UPDATE_LIGHT_STATUS', payload: true };
      const { lightStatus } = demoReducer(state, action);
      expect(lightStatus).toBe(true);
    });

    it('should update the username', () => {
      const action = { type: 'UPDATE_USERNAME', payload: 'loser' };
      const { username } = demoReducer(state, action);
      expect(username).toBe('loser');
    });

    it('should update the user icon', () => {
      const action = { type: 'UPDATE_USER_ICON', payload: '💩' };
      const { userIcon } = demoReducer(state, action);
      expect(userIcon).toBe('💩');
    });
  });
});
