import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import s from './css/city_choice.module.scss';
import { addressModal } from '../../redux/actions/addressModal';

class AddressModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showDelivery: false,
    showPickup: false,
    restaurants: {},
    addresses: {},
  };

  async componentDidMount() {
    console.log(this.props.city, ' this.props.city');
    const { result } = await fetcher(
      `https://client-api.sushi-master.ru/api/v1/restaurants?cityId=${this.props.city.cityId}`
    );
    this.setState({
      ...this.state,
      restaurants: result.items,
      currentPickUpAddress: '',
      currentDeliveryAddress: '',
    });
  }

  handlePickupItem = (item) => {
    this.setState({
      ...this.state,
      currentPickUpAddress: item,
    });
    console.log(this.state.currentPickUpAddress, ' currentPickUpAddress');
  };

  submitPickUp = (e) => {
    e.preventDefault();
    // let div_array = Array.prototype.slice.call(e.currentTarget.pickup_address);
    // const checkedValue = div_array.filter((item) => item.checked === true);
    // console.log(checkedValue.index, ' SUMITTTED checkedValue');
  };

  handlePickup = () => {
    console.log('handlePickup');
    this.setState({
      ...this.state,
      showDelivery: false,
      showPickup: !this.state.showPickup,
    });
  };

  handleDelivery = () => {
    console.log('handleDelivery');
    this.setState({
      ...this.state,
      showDelivery: !this.state.showDelivery,
      showPickup: false,
    });
  };

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
  };

  handleInputChange = async (e) => {
    console.log(this.props, ' CITY ID');

    let options = {
      countryId: '5e02173559201a0544e20b2d',
      cityId: this.props.city.cityId,
      query: e.target.value,
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`,
      options
    );
    this.setState({
      ...this.state,
      addresses: res,
    });
    console.log(this.state.addresses, ' RESULT this.state.addresses');
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Проверим адрес?</h1>
        <p>Мы хотим убедиться, что Ваш адрес входит в зону доставки.</p>
      </div>
    );
    const modalFooter = () => (
      <div className="m_m-footer_box">
        <div className="m_m-footer m_m-short">
          <button onClick={this.handleDelivery}>доставка</button>
        </div>
        <div className="m_m-footer m_m-short m_m-trans_button">
          <button onClick={this.handlePickup}>заберу сам</button>
        </div>
        <div className="m_m-prompt">
          <span>После проверки вы вернетесь к выбору блюд </span>
          <img src="/img/icons/ic-smile-emoji.svg" alt=":)" />
        </div>
      </div>
    );

    const pickupFooter = () => (
      <>
        <div className="m_m-footer_box" style={{ flexDirection: 'row' }}>
          <div className="m_m-footer m_m-short m_m-trans_button">
            <button onClick={this.handleDelivery}>доставка</button>
          </div>
          <div className="m_m-footer m_m-short">
            <button type="submit" form="address_form">
              выбрать
            </button>
          </div>
        </div>
        <div className="m_m-prompt">
          <span>После проверки вы вернетесь к выбору блюд </span>
          <img src="/img/icons/ic-smile-emoji.svg" alt=":)" />
        </div>
      </>
    );
    const deliveryFooter = () => (
      <>
        <div className="m_m-footer_box" style={{ flexDirection: 'row' }}>
          <div className="m_m-footer m_m-short m_m-trans_button">
            <button onClick={this.handlePickup}>Самовывоз</button>
          </div>
          <div className="m_m-footer m_m-short">
            <button type="submit" form="address_form">
              выбрать
            </button>
          </div>
        </div>
        <div className="m_m-prompt">
          <span>После проверки вы вернетесь к выбору блюд </span>
          <img src="/img/icons/ic-smile-emoji.svg" alt=":)" />
        </div>
      </>
    );

    const renderDelivery = () => {
      return (
        <div className="m_m-delivery">
          <input
            onChange={(e) => this.handleInputChange(e)}
            className="address_input"
            type="text"
            placeholder="Введите адрес"
          />
        </div>
      );
    };

    const renderPickup = () => {
      return (
        <form
          id="address_form"
          className="m_m-pickup-form"
          onSubmit={(e) => this.submitPickUp(e)}
        >
          <div className="m_m-pickup">
            {this.state.restaurants.map((item, index) => {
              let timeStart =
                Math.round((item.workInterval.begin / 1000 / 60 / 60) * 100) /
                100;
              let timeEnd =
                Math.round((item.workInterval.end / 1000 / 60 / 60) * 100) /
                100;

              let timeEndFinal =
                timeEnd > 24 ? timeEnd - 24 : Math.ceil(timeEnd);
              return (
                <>
                  <input
                    id={index}
                    type="radio"
                    name="pickup_address"
                    onClick={() => this.handlePickupItem(item)}
                  />
                  <label
                    key={index}
                    className="m_m-pickup-item"
                    htmlFor={index}
                  >
                    <span>{item.address}</span>
                    <br />
                    <span className="time_range">
                      {timeStart}:00 - {timeEndFinal}:00
                    </span>
                  </label>
                </>
              );
            })}
          </div>
        </form>
      );
    };

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
          <div className={s['m_m-box']}>
            {!this.state.showDelivery &&
              !this.state.showPickup &&
              modalHeader()}
            {/* body modal */}
            {this.state.showDelivery && (
              <div className={s['m_m-header']}>
                <h1>Укажите адрес доставки</h1>
              </div>
            )}
            {this.state.showPickup && (
              <div className={s['m_m-header']}>
                <h1>Выберите адрес самовывоза</h1>
              </div>
            )}
            {/* renders */}
            {this.state.showDelivery && renderDelivery()}
            {this.state.showPickup && renderPickup()}
            {/* footers */}
            {!this.state.showPickup &&
              !this.state.showDelivery &&
              modalFooter()}

            {this.state.showPickup && pickupFooter()}
            {this.state.showDelivery && deliveryFooter()}
          </div>
        </div>
        <style jsx>{`
          .modal-backdrop {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
          .city_modal {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
          .city_modal-center_container {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
        `}</style>
      </>
    );
  }
}
const mapStateToProps = ({ addressModal, store: { city } }) => {
  const modalBg = addressModal.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_ADDRESS_MODAL' }),
  addressModal: (data) => dispatch(addressModal(data)),
  dispatchAddress: (address) => dispatch({ type: 'SET_ADDRESS' }),
});
export default connect(mapStateToProps, dispatchToProps)(AddressModal);
