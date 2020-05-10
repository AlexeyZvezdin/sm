import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/modalReducer';
const rootReducer = combineReducers({
  store: initialReducer,
  modal: modalReducer,
});

export default rootReducer;
