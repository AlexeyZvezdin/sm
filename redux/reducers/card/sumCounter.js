const sumCounter = (state = { sum: 0 }, action) => {
  // console.log(state.sum, ' state YEAH');
  // Не надежный счет, проверку на то что ниже нуля быть ен может
  let result;
  let prevRes;
  switch (action.type) {
    case 'ADD':
      prevRes = localStorage.getItem('sumCounter');
      result = Number(prevRes) + Number(action.payload);
      localStorage.setItem('sumCounter', result);
      return {
        sum: state.sum + Number(action.payload),
      };
    case 'SUB':
      prevRes = localStorage.getItem('sumCounter');
      result = Number(prevRes) - Number(action.payload);
      localStorage.setItem('sumCounter', result);
      // if (state.sum - Number(action.payload) < 0)
      //   localStorage.setItem('sumCounter', 0);
      // return {
      //   sum: 0,
      // };
      return {
        sum: state.sum - Number(action.payload),
      };
    default:
      // if (typeof localStorage === undefined) {
      //   console.log(localStorage.getItem('sumCounter'), 'return shit');
      //   state.sum = localStorage.getItem('sumCounter');
      //   return { ...state };
      // }
      return {
        ...state,
      };
  }
};

export default sumCounter;
