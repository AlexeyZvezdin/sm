export const addressModal = (data) => {
  console.log(data, ' DATA');
  return {
    type: 'PUT_ADDRESS_DATA',
    payload: data,
  };
};
