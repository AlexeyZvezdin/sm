const cardReducer = (state = { cardProducts: {} }, action) => {
  console.log(action, ' ADCTION DISPATCH');
  let cardProducts;
  if (action.payload) {
    console.log('action.payload.cardProducts when they are not null ?');
    cardProducts = action.payload.cardProducts;
  } else {
    console.log(
      action.payload,
      'action.payload.cardProducts when they are  null ?'
    );
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
  // console.log(action, ' ACTION cardReducer');

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
