import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/cityModalReducer';
import addressModalReducer from './modals/addressModalReducer';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
import sumCounter from './card/sumCounter';
import cityReducer from './city/cityReducer';
// Сделать общее решение для модалок
const rootReducer = combineReducers({
  store: initialReducer,
  cityModal: modalReducer,
  addressModal: addressModalReducer,
  city: cityReducer,
  card: combineReducers({ cardReducer, cardCounter, sumCounter }),
});

export default rootReducer;
