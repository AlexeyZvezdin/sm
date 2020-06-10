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
    cardCounter: 0,
    cardSum: 0,
    address: '',
  };

  async componentDidMount() {
    const LScounter = await localStorage.getItem('cardCounter');
    let sumCounter = await localStorage.getItem('sumCounter');
    let currentDeliveryAddress = await JSON.parse(
      localStorage.getItem('currentDeliveryAddress')
    );
    let currentPickUpAddress = await JSON.parse(
      localStorage.getItem('currentPickUpAddress')
    );

    if (!this.props.address.address) {
      let deliveryAddress = JSON.parse(
        localStorage.getItem('currentDeliveryAddress')
      );
      let pickUpAddress = JSON.parse(
        localStorage.getItem('currentPickUpAddress')
      );
      this.setState({
        ...this.state,
        address: deliveryAddress
          ? deliveryAddress.formattedAddress
          : pickUpAddress
          ? pickUpAddress.address
          : '',
      });
    }
    // if (currentDeliveryAddress) {
    //   this.setState({
    //     ...this.state,
    //     address: currentDeliveryAddress.formattedAddress,
    //   });
    // } else if (currentPickUpAddress) {
    //   this.setState({
    //     ...this.state,
    //     address: currentPickUpAddress.formattedAddress,
    //   });
    // }
    // console.log(LScounter, ' LScounter');
    // console.log(sumCounter, ' sumCounter');
    // console.log(this.props.sum, ' this.props.sum');
    if (this.props.sum === 0 && sumCounter) {
      console.log('yeah its workig nwhen is tri');
      this.setState({ ...this.state, cardSum: sumCounter });
    }
    if (!LScounter) {
      return;
    } else if (LScounter > 0) {
      this.setState({ ...this.state, cardCounter: LScounter });
    } else {
      console.log(LScounter, ' LScounter is below zero?');
      throw Error;
    }
  }

  handleCityModal = () => {
    // fetch cities
    // show city modal
    this.props.dispatchCityModalStatus();
  };

  handleAddressModal = () => {
    this.props.dispatchAddressModalStatus();
  };

  returnTotalProducts() {
    // switch
  }

  handleLogin = () => {
    this.props.toggleLogin();
  };

  render() {
    // console.log(this.props, ' HEADER PRPS');
    console.log(this.state.address, ' ADRESSS');

    const menu = links.map((el, index) => (
      <li key={index}>
        <a href={el.link}>{el.name}</a>
      </li>
    ));
    let re = /\D/gi; // Убирает всесимволы для номера
    return (
      <header className="main_header">
        <a href="/" className={s['header-logo']}>
          <img
            src="/img/icons/icon-logo.svg"
            alt="Суши мастер — заказ и доставка японской еды на дом"
            className={s['header-info__logo']}
          />
          Суши мастер — заказ и доставка еды на дом в ГородНейм
          {/* props.cityName + 'e' */}
        </a>
        <div className="header-city_and_phone">
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
          {this.props.address.address || this.state.address ? (
            <button
              className={s['header-address']}
              onClick={this.handleAddressModal}
            >
              {this.props.address.address || this.state.address}
            </button>
          ) : (
            <a
              href={`tel:+${this.props.city.supportPhone.replace(re, '')}`}
              className="header_phone_n_address"
            >
              <span>
                {this.props.city.supportPhone}{' '}
                <img src="/img/icons/ic-phone.svg" alt="" />
              </span>
              <span className="header_phone_n_address-prompt">
                с мобильного бесплатно
              </span>
            </a>
          )}
        </div>
        <nav className={s['menu']}>
          <ul>{menu}</ul>
        </nav>
        <div className={s['header-right_section']}>
          <div className={s['header-cart_n_login']}>
            <a href="/cart" className={s['header-cart_n_login']}>
              <div className={s['header-cart_n_login-price']}>
                {this.props.sum
                  ? Number(this.state.cardSum) + Number(this.props.sum)
                  : this.state.cardSum}
                <span> ₽</span>
              </div>
              <div className={s['header-cart_n_login-card_icon']}>
                <div className={s['header-cart_n_login__icon']}>
                  <div
                    className={
                      this.props.cardCounter.counter || this.state.cardCounter
                        ? s['header-cart_n_login__icon__count'] + ' ' + s['red']
                        : s['header-cart_n_login__icon__count']
                    }
                  >
                    {this.props.cardCounter.counter
                      ? Number(this.props.cardCounter.counter) +
                        Number(this.state.cardCounter)
                      : Number(this.state.cardCounter) +
                        Number(this.props.cardCounter.counter)}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={s['profile-badge-block']}>
            <button
              className={s['profile-badge-block__login']}
              onClick={this.handleLogin}
            >
              Войти
            </button>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({
  cityModal,
  addressModal,
  address,
  loginModal,
  store: { city },
  card: {
    cardCounter,
    sumCounter: { sum },
  },
}) => {
  const cityModalBg = cityModal.openModalBg;
  const addressModalBg = addressModal.openModalBg;
  return {
    addressModalBg,
    cityModalBg,
    loginModal,
    city,
    cardCounter,
    sum,
    address,
  };
};
const dispatchToProps = (dispatch) => ({
  dispatchCityModalStatus: (status) => dispatch({ type: 'OPEN_MODAL' }),
  dispatchAddressModalStatus: (status) =>
    dispatch({ type: 'OPEN_ADDRESS_MODAL' }),
  toggleLogin: () => dispatch({ type: 'OPEN_LOGIN' }),
});
export default connect(mapStateToProps, dispatchToProps)(Header);
