const favProducts = (state = {}, action) => {
  switch (action.type) {
    case 'FAVOURITE_PRODUCTS':
      console.log(action.payload, 'FAVOURITE_PRODUCTS');
      return { favProducts: action.payload.result.items };

    default:
      return { ...state };
  }
};

export default favProducts;
