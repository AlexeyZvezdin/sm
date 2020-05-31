import s from './cart.module.scss';
import Link from 'next/link';
// import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { parseCookies } from '../../utils/parseCookies';
class cart extends React.Component {
  static async getInitialProps(ctx) {
    // const cookies = parseCookies(req);
    let shit = 'ujdyj';
    console.log(ctx, ' cardProducts STORE');
    return { shit };
  }
  state = {
    products: [],
  };

  async componentDidMount() {
    if (this.props.cardProducts) {
      console.log(
        this.props.cardProducts,
        ' this.props.cardProducts from didmount'
      );
      let cardProducts = await JSON.parse(localStorage.getItem('cardProducts'));
      this.setState({
        products: cardProducts,
      });
      console.log(this.state, ' THIS STATE');
      console.log(cardProducts, ' cardProducts');
    } else {
      this.setState({
        products: this.props.cardProducts,
      });
    }
    // Cookie.set(JSON.stringify(this.props.cardProducts), 'cardProducts');
    console.log(this.props, ' THIS PROPS SHIT');
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
      console.log(Object.values(this.state.products), ' this.state.products');
      let values = Object.values(this.state.products);
      return values.map((item, index) => (
        <div className="card_product" key={index}>
          {/* picture */}
          <div className="card_product-img">
            <img
              src={`https://client-api.sushi-master.ru/pics/${item.product.mainPictureId}?width=400`}
              alt=""
            />
          </div>
          {/* info block */}
          <div className="card_product-text">
            <p className="card_product-name">Set</p>
            <p className="card_product-info">32 styki</p>
          </div>
          {/* counter */}
          {/* price */}
          <p className="card_product-price">₽</p>
          <button className="card_product-trash"></button>
        </div>
      ));
    }
  }

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
                  639 ₽
                </div>
              </div>
              {/* Итого */}
              {/* забыл как два стиля импортировать, пздц */}
              <div className="cart-content-info-products_price_bold">
                <p className="products_price_bold">Итого</p>

                <div className="products_price_bold">639 ₽</div>
              </div>
              {/* Кнопка оформить заказ */}
              <Link href="/cart/order">
                <a>
                  <button className="order-inner-container__submit-button">
                    Оформить заказ
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapState = ({
  card: {
    cardReducer: { cardProducts },
  },
}) => {
  console.log(cardProducts, '  cardProducts in mapState');
  return { cardProducts };
};

export default connect(mapState)(cart);
