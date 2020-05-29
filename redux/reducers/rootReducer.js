import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/modalReducer';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
const rootReducer = combineReducers({
  store: initialReducer,
  modal: modalReducer,
  card: combineReducers({ cardReducer, cardCounter }),
});

export default rootReducer;
