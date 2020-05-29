import s from './cart.module.scss';
import Link from 'next/link';
export default class cart extends React.Component {
  render() {
    return (
      <div className={s['cart-container']}>
        <div className={s['cart-container-back']}>
          <p className={s['cart-container-back-button']}></p>
          <p className={s['cart-container-back-text']}>КОРЗИНА</p>
        </div>
        <section className={s['cart-content']}>
          <div className={s['cart-products-box']}>
            <div className={s['cart-products-box-label']}>
              <span>Товары</span>
            </div>
          </div>
          <div className={s['cart-order-widget']}>
            {/* промокод */}
            <div className={s['cart-order-widget-promocode']}>
              <input
                className={s['order-inner-container_input']}
                type="text"
                name="promocode"
                id="promocode"
                placeholder="Промокод"
              />
              <span className={s['inner-container__promocode_enter']}>
                <span className={s['inner-container__promocode_arrow']}></span>
              </span>
            </div>
            {/* информация */}
            <div className={s['cart-content-info']}>
              {/* Товары */}
              <div className={s['cart-content-info-products_price']}>
                <p>Товары</p>
                <div className={s['cart-content-info-products_price-sum']}>
                  639 ₽
                </div>
              </div>
              {/* Итого */}
              {/* забыл как два стиля импортировать, пздц */}
              <div className={s['cart-content-info-products_price_bold']}>
                <p className={s['products_price_bold']}>Итого</p>

                <div className={s['products_price_bold']}>639 ₽</div>
              </div>
              {/* Кнопка оформить заказ */}
              <Link href="/cart/order">
                <a>
                  <button className={s['order-inner-container__submit-button']}>
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
