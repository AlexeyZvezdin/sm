export const totalSumCounter = (type, sum) => {
  console.log(sum, ' TYPE');

  return {
    type: type,
    payload: sum,
  };
};
