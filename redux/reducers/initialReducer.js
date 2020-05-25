import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../actions/counterActions';

const counterReducer = (
  state = { value: 0, city: {}, categories: {} },
  action
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    case 'POPULATE_INITIAL_STATE':
      return { ...state, city: action.payload.result };
    case 'CATALOG_STRUCTURE':
      return { ...state, catalogStructure: action.payload.result };
    case 'INITIAL_CATEGORIES':
      return { ...state, categories: action.payload.result };
    case 'INITIAL_PRODUCTS':
      console.log(action.payload, ' action.payload');
      return { ...state, products: action.payload };
    case 'INITIAL_BANNERS':
      return { ...state, banners: action.payload };
    case 'DISPATCH_CATEGORIES_WITH_MAIN':
      console.log(action.payload, ' ITS WORK');
      return { ...state, stickyTabs: action.payload };
    default:
      return { ...state };
  }
};

export default counterReducer;
