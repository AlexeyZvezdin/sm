import Cookies from 'js-cookie';

const cityReducer = (state = {}, action) => {
  // console.log(action, ' CITY');
  switch (action.type) {
    case 'SELECT_CITY':
      // localStorage.setItem('city_domain', action.payload.domain);
      Cookies.set('cityId', action.payload.cityId);
      window.location.reload();
      return { city: action.payload };
    default:
      return state;
  }
};

export default cityReducer;
