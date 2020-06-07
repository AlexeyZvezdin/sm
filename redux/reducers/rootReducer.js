import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/cityModalReducer';
import addressModalReducer from './modals/addressToggleReducer';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
import sumCounter from './card/sumCounter';
import cityReducer from './city/cityReducer';
import addressReducer from './address/addressReducer';
// Сделать общее решение для модалок
const rootReducer = combineReducers({
  store: initialReducer,
  cityModal: modalReducer,
  addressModal: addressModalReducer,
  city: cityReducer,
  address: addressReducer,
  card: combineReducers({ cardReducer, cardCounter, sumCounter }),
});

export default rootReducer;
