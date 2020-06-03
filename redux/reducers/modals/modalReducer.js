import { CLOSE_MODAL, CLOSE_MODAL_CITY, OPEN_MODAL, OPEN_MODAL_CITY } from '../../actionTypes'

const modalReducer = (
  state = { openModalBg: false, openModalCity: false },
  action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModalBg: true };
    case CLOSE_MODAL:
      return { ...state, openModalBg: false };
    case OPEN_MODAL_CITY:
      return { ...state, openModalCity: true };
    case CLOSE_MODAL_CITY:
      return { ...state, openModalCity: false };
    default:
      return { ...state };
  }
};

export default modalReducer;
