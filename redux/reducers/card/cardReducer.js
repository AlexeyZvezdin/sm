const cardReducer = (state = { cardProducts: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      // localStorage.setItem()
      return { ...state, cardProducts: [] };
    case 'REMOVE':
      return { ...state, cardProducts: [] };
    default:
      return { ...state };
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
