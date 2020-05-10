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
            <span className={s['header-city_choice-city_name']}>Город</span>
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
      </header>
    );
  }
}

const mapStateToProps = ({ modal }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return { modalBg };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'OPEN_MODAL' }),
});
export default connect(mapStateToProps, dispatchToProps)(Header);
