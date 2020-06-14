import './fixedFooter.module.scss';
import s from './header.module.scss';

import { connect } from 'react-redux';

class FixedFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuOpen: false,
    cardCounter: 0,
    cardSum: 0,
  };

  async componentDidMount() {
    const LScounter = await localStorage.getItem('cardCounter');
    let sumCounter = await localStorage.getItem('sumCounter');

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

  toggleMenu = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    const renderCart = () => {
      return (
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
      );
    };

    return (
      <>
        {/*<SideMenu toggleMenu={this.toggleMenu} open={this.state.menuOpen} />*/}
        <div className="fixed_footer_container">
          <div className="fixed_footer">
            <div
              className={`fixed_footer__button fixed_footer__${
                this.state.menuOpen ? 'icon-close-menu' : 'icon-open-menu'
              }`}
              onClick={this.toggleMenu}
            />
            <div className="fixed_footer-login">
              <a href="/profile">
                <img src="/img/icons/icon-profile.svg" alt="Профиль" />
              </a>
            </div>
            <div className="fixed_footer-cart">
              <a href="/cart">{renderCart()}</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = ({
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
const mapDispatch = (dispatch) => ({
  toggleLogin: () => dispatch({ type: 'OPEN_LOGIN' }),
});

export default connect(mapState, mapDispatch)(FixedFooter);
