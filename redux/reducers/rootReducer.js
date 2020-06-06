import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/modalReducer';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
import sumCounter from './card/sumCounter';
import cityReducer from './city/cityReducer';
const rootReducer = combineReducers({
  store: initialReducer,
  modal: modalReducer,
  city: cityReducer,
  card: combineReducers({ cardReducer, cardCounter, sumCounter }),
});

export default rootReducer;
