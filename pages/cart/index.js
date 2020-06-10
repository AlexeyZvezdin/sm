import './cart.module.scss';
import Link from 'next/link';
// import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { parseCookies } from '../../utils/parseCookies';
import CardProduct from '../../components/Products/CardProduct';
import fetcher from '../../utils/fetcher';

class cart extends React.Component {
  // static async getInitialProps(ctx) {
  // const cookies = parseCookies(req);
  // }
  state = {
    products: [],
    cardSum: 0,
  };

  async componentDidMount() {
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
    let products = Object.values(this.state.products);
    let productsForReq = products.map((item) => {
      return {
        count: item.quantity,
        priceVariantId: item.product.priceVariants[0].id,
        productId: item.product.id,
        type: 'DEFAULT',
      };
    });
    const options = {
      body: JSON.stringify({
        cityId: this.props.city.cityId,
        products: productsForReq,
        promocode: '',
      }),
      method: 'POST',
    };

    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v1/cart`,
      options
    );
    console.log(res, ' RESULXT CARD');
  }

  renderIfNoProducts() {
    return (
      <div className="card_noproducts">
        <div className="card_noproducts-centered">
          <div className="card__placeholder__section">
            Добавьте что-нибудь из меню
          </div>
          <Link href="/">
            <a className="card_noproducts-link">
              <button className="card_noproducts-button">В каталог</button>
            </a>
          </Link>
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

  handleOrder = () => {
    // const res = fetcher(`https://client-api.sushi-master.ru/api/v1/cart`);
  };

  render() {
    // if (typeof localStorage != 'undefined') {
    //   let cardProducts = JSON.parse(localStorage.getItem('cardProducts'));
    //   console.log('эты работаешь ваще');

    //   if (cardProducts != this.state.products) {
    //     console.log('эты работаешь ваще тру RENDER ');
    //     this.setState({
    //       products: cardProducts,
    //     });
    //   }
    // }

    return (
      <div className="cart-container">
        <div className="cart-container-back">
          <p className="cart-container-back-button"></p>
          <p className="cart-container-back-text">КОРЗИНА</p>
        </div>
        <section className="cart-content">
          <div className="cart-products-box">
            <div className="cart-products-box-label">
              <span>Товары</span>
            </div>
            {/* products */}
            {this.state.products ? (
              <div className="card_products">{this.renderCardProducts()}</div>
            ) : (
              this.renderIfNoProducts()
            )}
          </div>

          {/* widget */}
          <div className="cart-order-widget">
            {/* промокод */}
            <div className="cart-order-widget-promocode">
              <input
                className="order-inner-container_input"
                type="text"
                name="promocode"
                id="promocode"
                placeholder="Промокод"
              />
              <span className="inner-container__promocode_enter">
                <span className="inner-container__promocode_arrow"></span>
              </span>
            </div>
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
              <button
                onClick={this.handleOrder}
                className="order-inner-container__submit-button"
              >
                Оформить заказ
              </button>
            </div>
          </div>
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

export default connect(mapState)(cart);
