const addressModalReducer = (state = { openModalBg: false }, action) => {
  switch (action.type) {
    case 'OPEN_ADDRESS_MODAL':
      console.log(action, ' ACTION');
      return { openModalBg: true };
    case 'CLOSE_ADDRESS_MODAL':
      return { openModalBg: false };
    default:
      return { ...state };
  }
};

export default addressModalReducer;
