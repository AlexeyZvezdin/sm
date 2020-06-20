import { connect } from "react-redux";
import fetcher from "../../utils/fetcher";
import InputMask from "react-input-mask";
import Cookies from "js-cookie";
import s from "./css/city_choice.module.scss";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    phone: "",
    code: null,
  };

  async componentDidMount() {
    // console.log(this.props.city, ' this.props.city');
    // const { result } = await fetcher(
    //   `https://client-api.sushi-master.ru/api/v1/restaurants?cityId=${this.props.city.cityId}`
    // );
    // this.setState({
    //   ...this.state,
    //   restaurants: result.items,
    //   currentPickUpAddress: '',
    //   currentDeliveryAddress: '',
    // });
  }

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
    const phone = this.state.phone.replace(/\D/g, "");
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        countryId: "5e02173559201a0544e20b2d",
        phone: phone,
      }),
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/auth/init`,
      options
    );
    console.log(res, " RESPONSE ");
    if (res.result && res.result.timer) {
      this.setState({
        ...this.state,
        timer: res.result.timer,
        showNextScreen: true,
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
    const code = this.state.code.replace(/\D/g, "");
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        countryId: "5e02173559201a0544e20b2d",
        phone: this.state.phone,
        code: code,
      }),
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/auth/verify`,
      options
    );
    console.log(res, " res submitted code");
    if (res.result) {
      // Далее вставлю токены
      await Cookies.set("accessToken", res.result.accessToken.token);
      await Cookies.set("refreshToken", res.result.refreshToken.token);
      this.props.dispatchModalStatus();
    } else {
      alert('произошел взлом жопы')
    }
    // Если они приходят и все ок рендерю успех, и наоборот
  };

  render() {
    // console.log(this.state, ' state in render');
    const renderInitialBody = () => (
      <>
        <div className="input_group">
          <label htmlFor="phone_input">Номер телефона</label>
          <InputMask
            id="phone_input"
            name="phone"
            alwaysShowMask
            onChange={(e) => this.handlePhone(e)}
            mask={"+7 \\999 999 99 99"}
            type="text"
            maskChar={null}
            required
          />
          <div className="phone_highlight"></div>
        </div>
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
        </div>
        {modalFooterSubmitCode()}
      </>
    );

    const modalHeader = () => (
      <div className={s["m_m-header"]}>
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
        <div className="m_m-footer m_m-short">
          <button onClick={() => this.submitCode()}>войти</button>
        </div>
        <button className="m_m-submit_code_btn">Отправить смс еще раз</button>
      </div>
    );

    return (
      <>
        <div className={s["modal-backdrop"]}></div>
        <div
          className={s["city_modal"]}
          role="dialog"
          onClick={(e) => this.handleModalBG(e)}
        ></div>
        <div className={s["city_modal-center_container"]}>
          {/* main modal */}
          <div className="m_m-box login_modal-box">
            {modalHeader()}

            {!this.state.showNextScreen && renderInitialBody()}
            {this.state.showNextScreen && renderConfirmationScreen()}
          </div>
        </div>
        <style jsx>{`
          .modal-backdrop {
            display: ${this.props.openModal ? "block" : "none"};
          }
          .city_modal {
            display: ${this.props.openModal ? "block" : "none"};
          }
          .city_modal-center_container {
            display: ${this.props.openModal ? "block" : "none"};
          }
        `}</style>
      </>
    );
  }
}
const mapStateToProps = ({ store: { city }, loginModal: { openModal } }) => {
  // console.log(openModal, ' loginModal');
  return { city, openModal };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: "CLOSE_LOGIN" }),
});
export default connect(mapStateToProps, dispatchToProps)(LoginModal);
