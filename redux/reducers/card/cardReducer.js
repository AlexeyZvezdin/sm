const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      // console.log(action, ' ACTION');
      return {};
    case 'CLOSE_MODAL':
      return {};
    default:
      return { ...state };
  }
};

export default modalReducer;
