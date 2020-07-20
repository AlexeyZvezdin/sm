const profileInfo = (state = {}, action) => {
  switch (action.type) {
    case 'USER_INFO':
      console.log(action, ' ACTION');
      return { user: action.payload.result.user };

    default:
      return { ...state };
  }
};

export default profileInfo;
