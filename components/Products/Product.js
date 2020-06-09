import { connect } from 'react-redux';
import {
  concatCardProductsWhenStorageIsEmpty,
  concatCardProductsWhenStorageHasProducts,
} from '../../utils/Product/concatCardProductsWhenStorageIsEmpty';
import p_s from './products.module.scss';
import { totalSumCounter } from '../../redux/actions/totalSumCounter';
import {
  cardCounterIncrement,
  cardCounterDecrement,
} from '../../redux/actions/cardCounter';
import { cardProductsDispatch } from '../../redux/actions/cardProducts';
import { useRouter } from 'next/router';

function Product({ product, store, ...props }) {
  const [cartButtonCounter, setCartButtonCounter] = React.useState(0);
  const [localProductCounter, setlocalProductCounter] = React.useState(0);
  const [productInfo, setProductInfo] = React.useState(true);
  const router = useRouter();
  const handleCounterClick = async (action) => {
    if (props.card.cardCounter.counter === 0) {
      props.dispatchAddressModalStatus();
    }
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
  // console.log(product, ' PROPS PRODUCTs');
  // console.log(store, ' PROPS store');
  // console.log(props, ' PROPS props');

  React.useEffect(() => {
    // для каждого продукта вернуть количество в сторадже
    returnEachProductFromStorage();
  }, [`${product.id}`]);

  // обработка каждого продукта, его счетчик и объект, который будет передаваться в корзину
  const handleEachProduct = async (action) => {
    // проверка есть ли этот продукт в корзине
    const isProductAlreadyInStorage = await returnEachProductFromStorage();
    if (isProductAlreadyInStorage) {
      const quantity = isProductAlreadyInStorage;
      console.log(quantity, ' quantity');
      if (action === 'inc') {
        // данный продукт прибавляет плюс 1 к своему количеству
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
        await localStorage.setItem(
          `inCardProduct:${product.id}`,
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

  const getCounterFromLS = () => {
    if (typeof window == 'undefined') {
      return 0;
    } else if (
      typeof window === 'object' ||
      typeof localStorage != 'undefined'
    ) {
      const LSobject = JSON.parse(
        localStorage.getItem(`inCardProduct:${product.id}`)
      );
      // await
      // console.log(LSobject, ' LSobject');
      if (!LSobject) {
        return 0;
      }
      return LSobject.quantity;
    }
  };
  // Количество для каждого продукта
  const returnEachProductFromStorage = () => {
    // localy there is no localstorage
    if (typeof window === undefined) {
      return 'window is undefined';
    }
    const preResult = localStorage.getItem(`inCardProduct:${product.id}`);
    if (!preResult) {
      return false;
    } else {
      const result = JSON.parse(preResult);
      // Потом отрефакторить немного
      setCartButtonCounter(result.quantity);

      let res = getCounterFromLS();
      setlocalProductCounter(res);
      return res;
    }
  };

  return (
    <div className={p_s['product']} key={product.id}>
      <div
        // Забавное поведение, если сделать так, то будет убираться ТОЛЬКО обертка, нижние отобразятся
        // className={p_s[`${!productInfo ? 'product-info product-info-display' : 'product-info'}`]}
        className={p_s['product-info']}
        hidden={productInfo}
        onClick={() => setProductInfo(!productInfo)}
      >
        <span className={p_s['product-info__close']}></span>
        <div className={p_s['product-info-block']}>
          <div className={p_s['product-info-block-desc']}>
            {product.description}
          </div>
          <div className={p_s['product-info-block-nutrients']}>
            <span>Пищевая ценность продукта:</span>
          </div>
          <ul>
            <li>Углеводы: {product.nutritionalElement.carbohydrate} гр.</li>
            <li>Белки: {product.nutritionalElement.protein} гр.</li>
            <li>Жиры: {product.nutritionalElement.fat} гр.</li>
            <li>
              Энергетическая ценность: {product.nutritionalElement.kilocalorie}{' '}
              ккал
            </li>
          </ul>
        </div>
      </div>
      {/* delimeter */}
      <a href={`/menu/${router.query.path}/${product.url}`}>
        <img
          src={`https://client-api.sushi-master.ru/pics/${product.mainPictureId}?width=400`}
          alt=""
        />
      </a>
      <a href={`/menu/${router.query.path}/${product.url}`}>
        <h3 className={p_s['product-name']}>{product.name}</h3>
      </a>
      <p className={p_s['product-description']}>
        <span>{product.description.slice(0, 60) + '...'}</span>
        <span className="product-weight">
          {product.nutritionalElement.weight + ' гр.'}
        </span>
      </p>
      <div className="product-bottom">
        <div className="product-prices">
          <div className="price-prev">
            {product.priceVariants[0].previousPrice
              ? product.priceVariants[0].previousPrice + ' ₽'
              : ''}
          </div>
          <div className="price-current">
            {product.priceVariants[0].price + ' ₽'}
          </div>
        </div>
        <div className="product-bottom_right">
          <div
            className="product-bottom_right-info"
            onClick={() => setProductInfo(!productInfo)}
          >
            <img src="/img/icons/icon-info-white.svg" alt="Инфо" />
          </div>
          {/* тут */}
          {getCounterFromLS() === 0 ? (
            <div
              className="product-bottom_right-buy"
              onClick={async () => {
                setCartButtonCounter(cartButtonCounter + 1);
                await handleCounterClick('inc');
              }}
            >
              <div className="product-bottom_right-buy-collapsed">
                <span>Хочу</span> <img src="/img/icons/icon-cart.svg" alt="" />
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

// Product.getInitialProps = ({ store, isServer, pathname, query }) => {
//   //store.dispatch(cardCounterIncrement()); // The component can read from the store's state when rendered
//   return { store }; // You can pass some custom props to the component from here
// };

// const mapState = ({ card: { cardCounter } }) => ({ cardCounter });
const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    cardProductsDispatch: (products) =>
      dispatch(cardProductsDispatch(products)),
    cardCounterDecrement: () => dispatch(cardCounterDecrement()),
    cardCounterIncrement: () => dispatch(cardCounterIncrement()),
    totalSumCounter: (type, sum) => dispatch(totalSumCounter(type, sum)),
    dispatchAddressModalStatus: (status) =>
      dispatch({ type: 'OPEN_ADDRESS_MODAL' }),
  };
};

export default connect(mapState, mapDispatch)(Product);
