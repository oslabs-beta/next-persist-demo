import { createStore } from 'redux';
import demoReducer from '../reducers/demoReducer';

const store = createStore(demoReducer);

export default store;
