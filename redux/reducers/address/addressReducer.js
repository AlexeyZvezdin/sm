const addressReducer = (state = { address: '' }, action) => {
  // let address;
  // if (action.payload) {
  //   address = action.payload.address;
  // } else {
  //   if (typeof localStorage != 'undefined') {
  //     address = JSON.parse(localStorage.getItem('address'));
  //   }
  // }
  // console.log(action.payload, ' action.payload');
  switch (action.type) {
    case 'DELIVERY_ADDRESS_DATA':
      return {
        address: action.payload,
      };
    case 'PICKUP_ADDRESS_DATA':
      return {
        address: action.payload,
      };
    default:
      return { ...state };
  }
};

export default addressReducer;
