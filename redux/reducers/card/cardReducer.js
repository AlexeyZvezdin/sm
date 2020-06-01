const cardReducer = (state = { cardProducts: {} }, action) => {
  let cardProducts;
  if (action.payload) {
    cardProducts = action.payload.cardProducts;
  } else {
    if (typeof localStorage != 'undefined') {
      cardProducts = JSON.parse(localStorage.getItem('cardProducts'));
    }
  }
  switch (action.type) {
    case 'CARD_PRODUCTS':
      return {
        cardProducts: cardProducts,
      };

    default:
      return state;
  }
};

export const cardCounter = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // console.log(action, ' ACTION');
      // localStorage.setItem()
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
};

export default cardReducer;
