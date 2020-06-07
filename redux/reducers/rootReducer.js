import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import cityModalReducer from './modals/cityModalReducer';
import modalReducer from './modals/modalReducer';
import addressModalReducer from './modals/addressModalReducer';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
import sumCounter from './card/sumCounter';
import cityReducer from './city/cityReducer';
// Сделать общее решение для модалок
const rootReducer = combineReducers({
  store: initialReducer,
  modalReducer: combineReducers({
    modalReducer,
    addressModalReducer,
    cityModalReducer,
  }),
  city: cityReducer,
  card: combineReducers({ cardReducer, cardCounter, sumCounter }),
});

export default rootReducer;
