export const concatCardProductsWhenStorageIsEmpty = async (product) => {
  // Мне нужно создать Объект продукта
  let cardProduct = {};
  cardProduct[`inCardProduct:${product.id}`] = {
    product: product,
    quantity: 1,
  };
  console.log(cardProduct, ' HOW cardProduct LOOKS');
  // сделано
  // мне нужно проверять есть ли в локалсторадже уже объект
  // мне нужно записывать в объект стораджа через деструктуризацию объекты чтобы перезаписывать имеющиеся на новые данные
  let cardProductsFromStorage = await JSON.parse(
    localStorage.getItem('cardProducts')
  );
  if (cardProductsFromStorage == null) {
    // если продукты в сторадже не равны нулю, то мне надо вытащить их и склеить с новым продуктом и при совпадении заменить
    let cardProductsFromStorageWhenNull = cardProduct;
    await localStorage.setItem(
      'cardProducts',
      JSON.stringify(cardProductsFromStorageWhenNull)
    );
    console.log(
      cardProductsFromStorageWhenNull,
      ' cardProductsFromStorageWhenNull'
    );
  } else {
    let cardProductsFromStorage = await JSON.parse(
      localStorage.getItem('cardProducts')
    );
    let newObject = Object.assign(cardProductsFromStorage, cardProduct);
    console.log(
      cardProductsFromStorage,
      ' cardProductsFromStorage in global else if there is any products'
    );
    console.log(newObject, ' newObject');
    await localStorage.setItem('cardProducts', JSON.stringify(newObject));
  }
};
