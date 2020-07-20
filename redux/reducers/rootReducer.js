import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import modalReducer from './modals/cityModalReducer';
import addressModalReducer from './modals/addressToggleReducer';
import restaurantModal from './modals/restaurantModal';
import cardReducer from './card/cardReducer';
import { cardCounter } from './card/cardReducer';
import sumCounter from './card/sumCounter';
import cityReducer from './city/cityReducer';
import addressReducer from './address/addressReducer';
import loginToggleReducer from './modals/login';
import profileInfo from './lk/profileInfo';
import favProducts from './lk/favProducts';
import promos from './lk/promos';
import personalAddresses from './lk/personalAddresses';
// Сделать общее решение для модалок
const rootReducer = combineReducers({
  store: initialReducer,
  cityModal: modalReducer,
  addressModal: addressModalReducer,
  loginModal: loginToggleReducer,
  city: cityReducer,
  address: addressReducer,
  restModal: restaurantModal,
  card: combineReducers({ cardReducer, cardCounter, sumCounter }),
  lk: combineReducers({ favProducts, personalAddresses, profileInfo, promos }),
});

export default rootReducer;
