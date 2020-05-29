import { connect } from 'react-redux';
import p_s from './products.module.scss';

import {
  cardCounterIncrement,
  cardCounterDecrement,
} from '../../redux/actions/cardCounter';

function Product({ product, store, ...props }) {
  // console.log(props, ' props');
  // console.log(store, ' store');
  const [cartButtonCounter, setCartButtonCounter] = React.useState(0);
  const [productInfo, setProductInfo] = React.useState(true);

  const handleCounterClick = (action) => {
    if (action === 'inc') {
      localStorage.setItem(
        'cardCounter',
        Number(localStorage.getItem('cardCounter')) + 1
      );
      props.cardCounterIncrement();
    } else if (action === 'dec') {
      localStorage.setItem(
        'cardCounter',
        Number(localStorage.getItem('cardCounter')) - 1
      );
      props.cardCounterDecrement();
    }
  };
  console.log(product, ' PROPS PRODUCTs');
  console.log(store, ' PROPS store');
  console.log(props, ' PROPS props');
  return (
    <div className={p_s['product']} key={product.id}>
      <div
        // Забавное поведение, если сделать так, то будет убираться ТОЛЬКО обертка, нижние отобразятся
        // className={
        //   p_s[
        //     `${
        //   //    !productInfo ? 'product-info product-info-display' : 'product-info'
        //     }`
        //   ]
        // }
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
      <a href="#">
        <img
          src={`https://client-api.sushi-master.ru/pics/${product.mainPictureId}?width=400`}
          alt=""
        />
      </a>
      <a href="#">
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
          {cartButtonCounter === 0 ? (
            <div
              className="product-bottom_right-buy"
              onClick={() => {
                setCartButtonCounter(cartButtonCounter + 1);
                handleCounterClick('inc');
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
                  {cartButtonCounter}
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
    cardCounterDecrement: () => dispatch(cardCounterDecrement()),
    cardCounterIncrement: () => dispatch(cardCounterIncrement()),
  };
};

export default connect(mapState, mapDispatch)(Product);
