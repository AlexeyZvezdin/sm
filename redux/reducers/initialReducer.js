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
    case 'POPULATE_INITIAL_CATEGORIES':
      return { ...state, categories: action.payload.result };
    default:
      return { ...state };
  }
};

export default counterReducer;
