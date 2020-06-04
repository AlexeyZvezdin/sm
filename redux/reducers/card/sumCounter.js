const sumCounter = (state = { sum: 0 }, action) => {
  console.log(state.sum, ' state YEAH');
  // Не надежный счет, проверку на то что ниже нуля быть ен может
  switch (action.type) {
    case 'ADD':
      return {
        sum: state.sum + Number(action.payload),
      };
    case 'SUB':
      if (state.sum - Number(action.payload) < 0)
        return {
          sum: 0,
        };
      return {
        sum: state.sum - Number(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default sumCounter;
