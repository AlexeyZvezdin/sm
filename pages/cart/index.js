import s from './cart.module.scss';
import Link from 'next/link';
export default class cart extends React.Component {
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
          </div>
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
