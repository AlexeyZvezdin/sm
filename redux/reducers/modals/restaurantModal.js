const restaurantModal = (state = { openModalBg: false }, action) => {
  switch (action.type) {
    case 'OPEN_REST_MODAL':
      return { openModalBg: true };
    case 'CLOSE_MODAL':
      return { openModalBg: false };
    default:
      return { ...state };
  }
};

export default restaurantModal;
