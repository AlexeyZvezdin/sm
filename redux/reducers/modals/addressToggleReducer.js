const addressModalReducer = (state = { openModalBg: false }, action) => {
  switch (action.type) {
    case 'OPEN_ADDRESS_MODAL':
      return { openModalBg: true };
    case 'CLOSE_ADDRESS_MODAL':
      return { openModalBg: false };
    default:
      return { ...state };
  }
};

export default addressModalReducer;
