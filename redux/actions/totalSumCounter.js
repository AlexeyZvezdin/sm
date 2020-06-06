export const totalSumCounter = (type, sum) => {
  return {
    type: type,
    payload: sum,
  };
};
