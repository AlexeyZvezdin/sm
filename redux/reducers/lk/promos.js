const promos = (state = {}, action) => {
  switch (action.type) {
    case 'PROMOS':
      console.log(action.payload, 'PROMOS');
      return { inviteFriend: action.payload.result };

    default:
      return { ...state };
  }
};

export default promos;
