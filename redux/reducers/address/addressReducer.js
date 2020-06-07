const addressReducer = (state = { address: {} }, action) => {
  let address;
  if (action.payload) {
    address = action.payload.address;
  } else {
    if (typeof localStorage != 'undefined') {
      address = JSON.parse(localStorage.getItem('address'));
    }
  }
  switch (action.type) {
    case 'SET_ADDRESS':
      return {
        address,
      };
    default:
      return state;
  }
};

export default addressReducer;
