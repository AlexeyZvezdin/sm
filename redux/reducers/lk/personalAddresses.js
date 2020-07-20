const personalAddresses = (state = {}, action) => {
  switch (action.type) {
    case 'PERSONAL_ADDRESSES':
      console.log(action.payload, 'PERSONAL_ADDRESSES');
      return { persAddresses: action.payload.result };

    default:
      return { ...state };
  }
};

export default personalAddresses;
