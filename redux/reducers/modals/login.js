const loginToggleReducer = (state = { openModal: false }, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      // console.log(action, ' ACTION');
      return { openModal: true };
    case 'CLOSE_LOGIN':
      return { openModal: false };
    default:
      return { ...state };
  }
};

export default loginToggleReducer;
