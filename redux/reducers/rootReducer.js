import initialReducer from './initialReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  initialReducer: initialReducer,
});

export default rootReducer;
