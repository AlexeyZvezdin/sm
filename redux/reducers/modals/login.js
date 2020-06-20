const loginToggleReducer = (state = { openModal: false, loggedIn: false }, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      //console.log(action, ' ACTION');
      return { ...state, openModal: true };
    case 'CLOSE_LOGIN':
      return { ...state, openModal: false };
    case 'LOGGED_IN_SUCCESS':
      return { ...state, openModal: false, loggedIn: true};
    default:
      return { ...state };
  }
};

export default loginToggleReducer;
