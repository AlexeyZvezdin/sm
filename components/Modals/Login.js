import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import browserFetch from '../../utils/browserFetch';
import InputMask from 'react-input-mask';
import s from './css/city_choice.module.scss';
import Cookies from 'js-cookie';

import {
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../../config/api';

import { getDeviceToken } from '../../config/device-token';

const LoginRequest = async (
  bodyGet,
  method,
  deviceToken,
  reqAddress,
  bodyPost
) => {
  const options = {
    headers: {
      [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
      [HEADER_DEVICE_TOKEN]: deviceToken,
      [HEADER_AUTH_TOKEN]: Cookies.get('at'),
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: bodyPost || null,
    method: method,
  };

  return fetch(
    `https://client-api.sushi-master.ru/api/${reqAddress}?${bodyGet}`,
    options
  )
    .then((r) => r.json())
    .catch((err) => console.log(err, ' ERROR in FETCH Login'));

  // const res = fetch(
  //   `https://client-api.sushi-master.ru/api/v1/cart/promocode`,
  //   options
  // ).then((res) =>
  //   this.setState({
  //     ...this.state,
  //     promocodeResponse: res,
  //   })
  // );
};

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    phone: '',
    code: null,
  };

  async componentDidMount() {}

  handlePickupItem = (item) => {
    this.setState({
      ...this.state,
      currentPickUpAddress: item,
    });
    // console.log(this.state.currentPickUpAddress, ' currentPickUpAddress');
  };

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
  };

  handleInputChange = async (e) => {
    // console.log(this.props, ' CITY ID');
    // let options = {
    //   countryId: '5e02173559201a0544e20b2d',
    //   cityId: this.props.city.cityId,
    //   query: e.target.value,
    // };
    // const res = await fetcher(
    //   `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`,
    //   options
    // );
    // this.setState({
    //   ...this.state,
    //   addresses: res,
    // });
  };

  handlePhone = (e) => {
    this.setState({
      ...this.state,
      phone: e.target.value,
    });
  };

  submitPhone = async () => {
    this.setState({
      ...this.state,
      timer: null,
      errorMessage: null,
    });
    const phone = this.state.phone.replace(/\D/g, '');
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        countryId: '5e02173559201a0544e20b2d',
        phone: phone,
      }),
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/auth/init`,
      options
    );
    if (res?.result?.timer) {
      this.setState({
        ...this.state,
        timer: res.result.timer,
        showNextScreen: true,
      });
    }
    if (res?.errors?.[0]?.message) {
      this.setState({
        ...this.state,
        errorMessage: res.errors[0].message,
      });
    }
  };

  handleCode = (e) => {
    this.setState({
      ...this.state,
      code: e.target.value,
    });
  };

  submitCode = async () => {
    const code = this.state.code.replace(/\D/g, '');
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        countryId: '5e02173559201a0544e20b2d',
        phone: this.state.phone,
        code: code,
      }),
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/auth/verify`,
      options
    );
    // console.log(res, ' res submitted code');
    // Далее вставлю токены
    // Если они приходят и все ок рендерю успех, и наоборот
    if (res?.result?.accessToken) {
      Cookies.set('at', res.result.accessToken.token, {
        expires: 7,
        path: '.sushi-master.ru',
      });
      Cookies.set('rt', res.result.refreshToken.token, {
        expires: 7,
        path: '.sushi-master.ru',
      });
    } else if (res?.errors) {
      console.log(res.errors, ' ERROR');
      this.setState({
        ...this.state,
        errorMessage: res.errors[0].message,
        verifyStatus: 'WRONG',
      });
    } else {
      this.setState({
        ...this.state,
        verifyStatus: 'WRONG',
      });
    }
    // тут закрытие елемента не мешает ли коду ниже
    this.props.dispatchModalStatus();
    // data requests to redux and LS

    const deviceToken = getDeviceToken();

    const addressBody = [
      'limit=1000',
      'offset=0',
      'query=',
      `cityId=${this.props.city.cityId}`,
    ];
    console.log(
      ''.concat(addressBody).replace(/,/gi, '&'),
      " ''.concat(addressBody).replace(/,/gi, '&')"
    );
    // const promises = LoginRequest;
    const loginData = await LoginRequest(
      ''.concat(addressBody).replace(/,/gi, '&'),
      'GET',
      deviceToken,
      'v1/user/address'
    );
    const userInfo = await LoginRequest('', 'GET', deviceToken, 'v1/user/info');
    const inviteFriend = await LoginRequest(
      '',
      'GET',
      deviceToken,
      'v1/user/invite-friend'
    );
    const favouritesProducts = await LoginRequest(
      '',
      'POST',
      deviceToken,
      'v1/products/favourites/all',
      JSON.stringify({ cityId: `${this.props.city.cityId}` })
    );
    // вот запрос
    // лучше оставить несколько запросов чем один общий делать или разделить функционал и засунуть в опции раздельно данные, да так лучше чтобы при ошиюке просто не лезли они в общий пулл данных
    this.props.dispatchPersonalAddresses(loginData);
    this.props.dispatchUserInfo(userInfo);
    this.props.dispatchPromos(inviteFriend);
    this.props.dispatchFavouritesProducts(favouritesProducts);
    // console.log(userInfo, ' userInfo userInfo userInfo');
    // console.log(inviteFriend, ' inviteFriend inviteFriend inviteFriend');
    // console.log(
    //   favouritesProducts,
    //   ' favouritesProducts favouritesProducts favouritesProducts'
    // );
  };

  sendCodeAgain = async () => {
    this.submitPhone();
  };

  render() {
    // console.log(this.state, ' state in render');
    console.log(this.props.profileInfo, ' PROFILE INFO PROPS');
    const renderInitialBody = () => (
      <>
        <div className="input_group">
          <label htmlFor="phone_input">Номер телефона</label>
          <InputMask
            id="phone_input"
            name="phone"
            alwaysShowMask
            onChange={(e) => this.handlePhone(e)}
            mask={'+7 \\999 999 99 99'}
            type="text"
            maskChar={null}
            required
          />
          <div className="phone_highlight"></div>
          <div
            className={`${this.state.errorMessage ? 'red_hightlight' : ''}`}
          ></div>
        </div>
        {this.state.errorMessage && (
          <h3 style={{ textAlign: 'center', margin: '0 auto' }}>
            {this.state.errorMessage}
          </h3>
        )}
        <div className="login_modal-widgets">
          <div className="login_modal-widget">
            <img src="/img/icons/icon-bonus.svg" alt="" />
            <p>Получайте бонусы за покупки</p>
          </div>
          <div className="login_modal-widget">
            <img src="/img/icons/icon-history.svg" alt="" />
            <p>Просматривайте историю заказов</p>
          </div>
          <div className="login_modal-widget">
            <img src="/img/icons/icon-place.svg" alt="" />
            <p>Храните любимые адреса</p>
          </div>
        </div>
        {modalFooter()}
      </>
    );
    const renderConfirmationScreen = () => (
      <>
        <div className="input_group">
          <input
            id="code_input"
            name="code"
            onChange={(e) => this.handleCode(e)}
            type="number"
            placeholder="Код из смс"
            autoComplete="off"
            max="10"
            required
          />
          <div className="phone_highlight"></div>
          <div
            className={`${
              this.state.verifyStatus === 'WRONG' ? 'red_hightlight' : ''
            }`}
          ></div>
        </div>
        {modalFooterSubmitCode()}
      </>
    );

    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Вход на сайт</h1>
      </div>
    );
    const modalFooter = () => (
      <div className="m_m-footer_box">
        <div className="m_m-footer m_m-short">
          <button onClick={() => this.submitPhone()}>получить код</button>
        </div>
      </div>
    );
    const modalFooterSubmitCode = () => (
      <div className="m_m-footer_box">
        {this.state.verifyStatus === 'WRONG' &&
          (<h3>{this.state.errorMessage}</h3> || <h3>Неверный код</h3>)}
        <div className="m_m-footer m_m-short">
          {this.state.timer ? (
            <p style={{ textAlign: 'center', paddingBottom: '6px' }}>
              {this.state.timer / 100 / 60} секунд на ввод
            </p>
          ) : (
            ''
          )}
          <button onClick={() => this.submitCode()}>войти</button>
        </div>
        <button className="m_m-submit_code_btn" onClick={this.sendCodeAgain}>
          Отправить смс еще раз
        </button>
      </div>
    );

    return (
      <>
        <div className={s['modal-backdrop']}></div>
        <div
          className={s['city_modal']}
          role="dialog"
          onClick={(e) => this.handleModalBG(e)}
        ></div>
        <div className={s['city_modal-center_container']}>
          {/* main modal */}
          <div className="m_m-box login_modal-box">
            {modalHeader()}

            {!this.state.showNextScreen && renderInitialBody()}
            {this.state.showNextScreen && renderConfirmationScreen()}
          </div>
        </div>
        <style jsx>{`
          .modal-backdrop {
            display: ${this.props.openModal ? 'block' : 'none'};
          }
          .city_modal {
            display: ${this.props.openModal ? 'block' : 'none'};
          }
          .city_modal-center_container {
            display: ${this.props.openModal ? 'block' : 'none'};
          }
        `}</style>
      </>
    );
  }
}
const mapStateToProps = ({
  store: { city },
  loginModal: { openModal },
  lk: { profileInfo },
}) => {
  console.log(profileInfo, ' profileInfo');
  return { city, openModal, profileInfo };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_LOGIN' }),
  dispatchPersonalAddresses: (data) => {
    console.log(data, ' PERSONAL_ADDRESSES dispatchToProps');
    dispatch({ type: 'PERSONAL_ADDRESSES', payload: data });
  },
  dispatchUserInfo: (data) => {
    console.log(data, ' dispatchUserInfo dispatchToProps');
    dispatch({ type: 'USER_INFO', payload: data });
  },
  dispatchPromos: (data) => {
    console.log(data, ' PROMOS dispatchToProps');
    dispatch({ type: 'PROMOS', payload: data });
  },
  dispatchFavouritesProducts: (data) => {
    console.log(data, ' FAVOURITE_PRODUCTS dispatchToProps');
    dispatch({ type: 'FAVOURITE_PRODUCTS', payload: data });
  },
});
export default connect(mapStateToProps, dispatchToProps)(LoginModal);
