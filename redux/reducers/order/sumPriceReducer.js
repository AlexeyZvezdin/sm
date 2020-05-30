// not using while
const sumPriceReducer = (
  state = {
    totalSum: 0,
    products: [],
    productsCount: {},
  },
  action
) => {
  switch (action.type) {
    case 'add':
      let totalSum = totalSum + action.product.price;
      let products = [...products, action.product];
      //   { id, name, sum, price, quantity } = products count

      let sum = productsCount[`${action.product.id}`]
        ? productsCount[`${action.product.id}`].sum + action.price
        : action.price;
      // quantity по идее должен правильно приходить из продукта
      let productsCount: {
        ...productsCount,
        [action.product.id]: {
          id: action.product.id,
          name: action.product.name,
          sum: sum,
          price: action.product.price,
          quantity: action.quantity,
        },
      };
      return { totalSum };
    case 'del':
      return { totalSum };
    default:
      return { totalSum };
  }
};

export default sumPriceReducer;
