import Link from 'next/link';
import * as UrlBuilder from '../utils/UrlBuilder';
import './index.scss';
import Cookies from 'js-cookie';
// const linkStyle = {
//   marginRight: 15,
// };

const links = [
  {
    name: 'Акции',
    link: UrlBuilder.campaign(),
  },
  {
    name: 'Бонусы',
    link: UrlBuilder.bonuses(),
  },
  {
    name: 'Доставка',
    link: UrlBuilder.delivery(),
  },
  // {
  //   name: 'О компании',
  //   link: UrlBuilder.about(),
  // },
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

  render() {
    const supportPhone = Cookies.get('supportPhone');
    console.log(supportPhone, ' SupportPhone from header');
    const menu = links.map((el, index) => (
      <li key={index}>
        <a href={el.link}>{el.name}</a>
      </li>
    ));
    let re = /\D/gi; // Убирает всесимволы для номера
    return (
      <header>
        <Link href="/">
          <a className="header-logo">
            <img
              src="/img/icons/icon-logo.svg"
              alt="Суши мастер — заказ и доставка японской еды на дом"
              className="header-info__logo"
            />
            Суши мастер — заказ и доставка еды на дом в ГородНейм
            {/* props.cityName + 'e' */}
          </a>
        </Link>
        <div className="header-city_and_phone">
          {supportPhone ? (
            <a href={`tel:+${supportPhone.replace(re, '')}`}>
              {supportPhone} <img src="/img/icons/ic-phone.svg" alt="" />
            </a>
          ) : (
            <p>No phone</p>
          )}
        </div>
        <nav className="menu">
          <ul>{menu}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
