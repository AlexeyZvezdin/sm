import Link from 'next/link';
import * as UrlBuilder from '../../utils/UrlBuilder';
import { connect } from 'react-redux';
import s from './header.module.scss';
const links = [
  {
    name: 'Акции',
    link: UrlBuilder.promotions(),
  },
  {
    name: 'Бонусы',
    link: UrlBuilder.bonuses(),
  },
  {
    name: 'Доставка',
    link: UrlBuilder.delivery(),
  },
  {
    name: 'О компании',
    link: UrlBuilder.about(),
  },
  {
    name: 'Вакансии',
    link: UrlBuilder.vacancy(),
  },
  {
    name: 'Франшиза',
    link: 'https://fr.sushi-master.ru/?utm_source=glavniy_sait',
  },
];

class Header extends React.Component {
  state = {
    sticky: false,
    headerOffset: 0,
    showCitySelector: false,
  };

  handleCityModal = () => {
    // fetch cities
    // show city modal
    this.props.dispatchModalStatus();
  };

  render() {
    // console.log(this.props, ' HEADER PRPS');
    const menu = links.map((el, index) => (
      <li key={index}>
        <a href={el.link}>{el.name}</a>
      </li>
    ));
    let re = /\D/gi; // Убирает всесимволы для номера
    return (
      <header className={s['main_header']}>
        <Link href="/">
          <a className={s['header-logo']}>
            <img
              src="/img/icons/icon-logo.svg"
              alt="Суши мастер — заказ и доставка японской еды на дом"
              className={s['header-info__logo']}
            />
            Суши мастер — заказ и доставка еды на дом в ГородНейм
            {/* props.cityName + 'e' */}
          </a>
        </Link>
        <div className={s['header-city_and_phone']}>
          <button
            className={s['header-city_choice']}
            onClick={this.handleCityModal}
          >
            <img src="/img/icons/icon-location.svg" alt="" />
            <span className={s['header-city_choice-city_name']}>
              {this.props.city.name}
            </span>
          </button>
          {/* phone below */}
          {/* {supportPhone ? (
            <a href={`tel:+${supportPhone.replace(re, '')}`}>
              {supportPhone} <img src="/img/icons/ic-phone.svg" alt="" />
            </a>
          ) : (
            <a>No phone</a>
          )} */}
          <a>No phone</a>
        </div>
        <nav className={s['menu']}>
          <ul>{menu}</ul>
        </nav>
        <div className={s['header-cart_n_login']}>
          <Link href="/cart">
            <a className={s['header-cart_n_login']}>
              <div className={s['header-cart_n_login-price']}>
                Price <span>₽</span>
              </div>
              <div className={s['header-cart_n_login-card_icon']}>
                <div className={s['header-cart_n_login__icon']}>
                  <div className={s['header-cart_n_login__icon__count']}>0</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={s['profile-badge-block']}>
          <div className={s['profile-badge-block__login']}>Войти</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ modal, store: { city } }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'OPEN_MODAL' }),
});
export default connect(mapStateToProps, dispatchToProps)(Header);
