import './cart.module.scss';
import Link from 'next/link';
// import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { parseCookies } from '../../utils/parseCookies';
import CardProduct from '../../components/Products/CardProduct';
import SubHeader from '../../components/Basic/SubHeader';
import fetcher from '../../utils/fetcher';
import browserFetch from '../../utils/browserFetch';
import { getDeviceToken } from '../../config/device-token';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../../config/api';

const makeProducts = (prods) => {
  let products = Object.values(prods);
  let productsForReq = products.map((item) => {
    return {
      count: item.quantity,
      priceVariantId: item.product.priceVariants[0].id,
      productId: item.product.id,
      type: 'DEFAULT',
    };
  });

  return productsForReq;
};

class cart extends React.Component {
  // static async getInitialProps(ctx) {
  // const cookies = parseCookies(req);
  // }
  state = {
    products: [],
    cardSum: 0,
    promocode: '',
  };

  async componentDidMount() {
    // Если не выбран адрес, то ставим его
    const AddressId = JSON.parse(localStorage.getItem('currentPickUpAddress'));
    const deliveryAddress = JSON.parse(
      localStorage.getItem('currentDeliveryAddress')
    );
    if (!(AddressId || deliveryAddress)) {
      await this.props.dispatchAddressModalStatus();
    }
    // Из редакса если есть то берем их, если нет то триггерим локалстор
    if (this.props.cardProducts) {
      let cardProducts = await JSON.parse(localStorage.getItem('cardProducts'));
      this.setState({
        products: cardProducts,
      });
      console.log(cardProducts, ' cardProducts');
    } else {
      this.setState({
        products: this.props.cardProducts,
      });
    }
    // Cookie.set(JSON.stringify(this.props.cardProducts), 'cardProducts');
    let sumCounter = await localStorage.getItem('sumCounter');
    // console.log(LScounter, ' LScounter');
    if (this.props.sum === 0 && sumCounter) {
      this.setState({ ...this.state, cardSum: sumCounter });
    }
    // Унифицировать
    if (this.state.products) {
      let productsForReq = makeProducts(this.state.products);

      const deviceToken = getDeviceToken();
      this.setState({
        ...this.state,
        deviceToken: deviceToken,
      });

      const res = await browserFetch(
        `v1/cart`,
        'POST',
        JSON.stringify({
          cityId: this.props.city.cityId,
          products: productsForReq,
          promocode: this.state.promocode,
        }),
        deviceToken
      );

      this.setState({
        ...this.state,
        cardResponse: res.result,
      });
      console.log(res, ' RESULXT CARD');
    }
  }

  renderIfNoProducts() {
    return (
      <div className="card_noproducts">
        <div className="card_noproducts-centered">
          <div className="card__placeholder__section">
            Добавьте что-нибудь из меню
          </div>
          <a href="/" className="card_noproducts-link">
            <button className="card_noproducts-button">В каталог</button>
          </a>
        </div>
      </div>
    );
  }

  renderCardProducts() {
    if (this.state.products === null) {
      return <h1>Добавьте что-нибудь в корзину</h1>;
    } else if (typeof window !== undefined) {
      let values = Object.values(this.state.products);
      return values.map((item, index) =>
        item.quantity === 0 ? (
          ''
        ) : (
          <div key={index}>
            <CardProduct item={item} quantity={item.quantity} />
          </div>
        )
      );
    }
  }
  // Вот тут внимательно. Нужно перед редиректом скорее всего делать еще один
  // запрос /кард, для формирования запроса в сейлплей
  // это я завтра уточню
  // handleOrder = () => {
  //   // const res = fetcher(`https://client-api.sushi-master.ru/api/v1/cart`);
  // };

  handlePromocode = (e) => {
    e.preventDefault();
    let cardProducts = JSON.parse(localStorage.getItem('cardProducts'));

    let productsForReq = makeProducts(cardProducts);

    const res = browserFetch(
      `v1/cart`,
      'POST',
      JSON.stringify({
        cityId: this.props.city.cityId,
        products: productsForReq,
        promocode: e.target.promocode.value,
      }),
      this.state.deviceToken
    ).then((res) =>
      this.setState({
        ...this.state,
        promocode: res.result,
        promocodeState: res.result.promocodeState,
      })
    );
  };
  // После запроса промокода вроде как должен еще раз запрос кард
  // надо очередную обертку над запросами делать
  render() {
    console.log(this.state.promocode, ' RES RES PROMOCODE');

    const renderWidget = () => {
      return (
        <div className="cart-order-widget">
          {/* промокод */}
          <form
            className="cart-order-widget-promocode"
            onSubmit={this.handlePromocode}
          >
            <div>
              <input
                className="order-inner-container_input"
                type="text"
                name="promocode"
                id="promocode"
                placeholder="Промокод"
              />
              {this.state.promocodeState === 'VALID' ? (
                <div className="promocode_highlight"></div>
              ) : (
                ''
              )}
            </div>
            <button type="submit" className="inner-container__promocode_enter">
              <span className="inner-container__promocode_arrow"></span>
            </button>
          </form>

          {/* информация */}
          <div className="cart-content-info">
            {/* Товары */}
            <div className="cart-content-info-products_price">
              <p>Товары</p>
              <div className="cart-content-info-products_price-sum">
                {this.props.sum
                  ? Number(this.state.cardSum) + Number(this.props.sum)
                  : this.state.cardSum}{' '}
                ₽
              </div>
            </div>
            {/* Итого */}
            {/* забыл как два стиля импортировать, пздц */}
            <div className="cart-content-info-products_price_bold">
              <p className="products_price_bold">Итого</p>

              <div className="products_price_bold">
                {this.props.sum
                  ? Number(this.state.cardSum) + Number(this.props.sum)
                  : this.state.cardSum}{' '}
                ₽
              </div>
            </div>
            {/* Кнопка оформить заказ */}
            <a href="/cart/order">
              <button
                onClick={this.handleOrder}
                className="order-inner-container__submit-button"
              >
                Оформить заказ
              </button>
            </a>
          </div>
        </div>
      );
    };

    return (
      <div className="cart-container">
        <div className="cart-container-back">
          <SubHeader>
            <p className="cart-container-back-text">КОРЗИНА</p>
          </SubHeader>
        </div>
        <section className="cart-content">
          <div className="cart-products-box">
            <div className="cart-products-box-label">
              <span>Товары</span>
            </div>
            {/* products */}
            {this.state.cardSum != 0 ? (
              <div className="card_products">{this.renderCardProducts()}</div>
            ) : (
              this.renderIfNoProducts()
            )}
          </div>

          {/* widget */}
          {this.state.cardSum != 0 && renderWidget()}
        </section>
      </div>
    );
  }
}

const mapState = ({
  store: { city },
  card: {
    cardReducer: { cardProducts },
    sumCounter: { sum },
  },
}) => {
  // console.log(cardProducts, '  cardProducts in mapState');
  return { cardProducts, sum, city };
};

const mapDispatch = (dispatch) => ({
  dispatchAddressModalStatus: (status) =>
    dispatch({ type: 'OPEN_ADDRESS_MODAL' }),
});

export default connect(mapState, mapDispatch)(cart);
