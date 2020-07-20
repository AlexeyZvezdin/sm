import {
  cardCounterIncrement,
  cardCounterDecrement,
} from '../../redux/actions/cardCounter';
import { cardProductsDispatch } from '../../redux/actions/cardProducts';
import { totalSumCounter } from '../../redux/actions/totalSumCounter';
import { connect } from 'react-redux';

import {
  concatCardProductsWhenStorageIsEmpty,
  concatCardProductsWhenStorageHasProducts,
} from '../../utils/Product/concatCardProductsWhenStorageIsEmpty';

import p_s from './products.module.scss';

const mapDispatch = (dispatch) => {
  return {
    cardProductsDispatch: (products) =>
      dispatch(cardProductsDispatch(products)),
    cardCounterDecrement: () => dispatch(cardCounterDecrement()),
    cardCounterIncrement: () => dispatch(cardCounterIncrement()),
    totalSumCounter: (type, sum) => dispatch(totalSumCounter(type, sum)),
  };
};

export default connect(
  null,
  mapDispatch
)(({ item, quantity, ...props }) => {
  const [cartButtonCounter, setCartButtonCounter] = React.useState(0);
  const [localProductCounter, setlocalProductCounter] = React.useState(0);
  const [productInfo, setProductInfo] = React.useState(true);

  // Количество для каждого продукта
  const returnEachProductFromStorage = () => {
    // localy there is no localstorage
    if (typeof window === undefined) {
      return 'window is undefined';
    }
    // const preResult = localStorage.getItem(`inCardProduct:${product.id}`);
    const preResult = item;
    if (!preResult) {
      return false;
    } else {
      const result = item;
      // Потом отрефакторить немного
      setCartButtonCounter(result.quantity);

      let res = getCounterFromLS();
      setlocalProductCounter(res);
      return res;
    }
  };

  const handleCounterClick = async (action) => {
    if (action === 'inc') {
      await localStorage.setItem(
        'cardCounter',
        Number(localStorage.getItem('cardCounter')) + 1
      );
      await props.cardCounterIncrement();
      await handleEachProduct('inc');
    } else if (action === 'dec') {
      await localStorage.setItem(
        'cardCounter',
        Number(localStorage.getItem('cardCounter')) - 1
      );
      await props.cardCounterDecrement();
      await handleEachProduct('dec');
    }
  };

  const calcProductTotalPrice = () => {
    return Number(item.product.priceVariants[0].price) * Number(item.quantity);
  };

  const getCounterFromLS = () => {
    if (typeof window == 'undefined') {
      return 0;
    } else if (
      typeof window === 'object' ||
      typeof localStorage != 'undefined'
    ) {
      const LSobject = JSON.parse(
        localStorage.getItem(`inCardProduct:${item.product.id}`)
      );
      //   let LSobject = item;
      // await
      // console.log(LSobject, ' LSobject');
      if (!LSobject) {
        return 0;
      }
      return LSobject.quantity;
    }
  };

  // обработка каждого продукта, его счетчик и объект, который будет передаваться в корзину
  const handleEachProduct = async (action) => {
    // проверка есть ли этот продукт в корзине
    const isProductAlreadyInStorage = await returnEachProductFromStorage();
    if (isProductAlreadyInStorage) {
      const quantity = isProductAlreadyInStorage;
      console.log(quantity, ' quantity');
      if (action === 'inc') {
        // данный продукт прибавляет плюс 1 к своему количеству
        let product = item.product;
        await localStorage.setItem(
          `inCardProduct:${product.id}`,
          JSON.stringify({
            product,
            quantity: quantity + 1,
          })
        );
        // Попробуй потом вынести выше чтобы не повторялось в функциях вынесеных
        const toDispatchResult = await concatCardProductsWhenStorageHasProducts(
          action,
          product,
          quantity
        );

        props.cardProductsDispatch(toDispatchResult);
        props.totalSumCounter('ADD', product.priceVariants[0].price);
        // конец заеба
        await setCartButtonCounter(quantity + 1);
        // Вот это ниже обязательно надо, асинхронность на рендере на сср не работает как надо
        let res = await getCounterFromLS();
        setlocalProductCounter(res);
      } else if (action === 'dec') {
        let product = item.product;

        await localStorage.setItem(
          `inCardProduct:${item.product.id}`,
          JSON.stringify({
            product,
            quantity: quantity - 1,
          })
        );
        // Попробуй потом вынести выше чтобы не повторялось в функциях вынесеных

        const toDispatchResult = await concatCardProductsWhenStorageHasProducts(
          action,
          product,
          quantity
        );

        props.cardProductsDispatch(toDispatchResult);
        props.totalSumCounter('SUB', product.priceVariants[0].price);
        // конец заеба
        await setCartButtonCounter(quantity - 1);
        let res = await getCounterFromLS();
        setlocalProductCounter(res);
      }
    } else {
      console.log('shit is false');
      let product = item.product;
      // тут вся магия
      const toDispatchResult = await concatCardProductsWhenStorageIsEmpty(
        product
      );
      localStorage.setItem(
        `inCardProduct:${product.id}`,
        JSON.stringify({
          product,
          quantity: 1,
        })
      );
      props.cardProductsDispatch(toDispatchResult);
      props.totalSumCounter('ADD', product.priceVariants[0].price);
      await setCartButtonCounter(1);
      let res = await getCounterFromLS();
      setlocalProductCounter(res);
    }
  };

  if (getCounterFromLS() === 0) return '';
  else
    return (
      <div className="card_product">
        <div className="card_product-sub">
          {/* picture */}
          <div className="card_product-img">
            <img
              src={`https://client-api.sushi-master.ru/pics/${item.product.mainPictureId}?width=400`}
              alt=""
            />
          </div>
          {/* info block */}
          <div className="card_product-text">
            <p className="card_product-name">{item.product.name}</p>
            <p className="card_product-info">
              {item.product.priceVariants[0].pieces} шт.
            </p>
            <p className="card_product-info">
              {Number(item.quantity) *
                Number(item.product.nutritionalElement.weight)}{' '}
              гр.
            </p>
          </div>
        </div>

        {/* counter */}
        <div className="cart-button cart-button-border">
          <div className="cart-button__expanded">
            <div
              className="cart-button__expanded__minus"
              onClick={() => {
                setCartButtonCounter(cartButtonCounter - 1);
                handleCounterClick('dec');
              }}
            ></div>
            <div className="cart-button__expanded__count">
              {/* {getCounterFromLS()} */}
              {getCounterFromLS()}
            </div>
            <div
              className="cart-button__expanded__plus"
              onClick={() => {
                setCartButtonCounter(cartButtonCounter + 1);
                handleCounterClick('inc');
              }}
            ></div>
          </div>
        </div>
        {/* price */}
        <div className="card_product-right">
          <p className="card_product-price">
            {Number(item.product.priceVariants[0].price) *
              Number(getCounterFromLS())}{' '}
            ₽
          </p>
          <button className="card_product-trash"></button>
        </div>
      </div>
    );
});
