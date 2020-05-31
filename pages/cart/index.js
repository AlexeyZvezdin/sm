import s from './cart.module.scss';
import Link from 'next/link';
export default class cart extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const cardProducts = await JSON.parse(localStorage.getItem('cardProducts'));
    this.setState({
      products: cardProducts,
    });
  }

  renderCardProducts() {
    if (this.state.products[0]) {
      return <h1>Wait</h1>;
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
            <div className="card_products">{this.renderCardProducts()}</div>
            {/* <div className="card_products">
              {this.state.products[0]
                ? this.state.products.map((item, index) => (
                    <div className="card_product" key={index}>
                      <div className="card_product-img">
                        <img
                          src={`https://client-api.sushi-master.ru/pics/${item.mainPictureId}`}
                          alt=""
                        />
                      </div>
                    </div>
                  ))
                : ''}
            </div> */}
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
