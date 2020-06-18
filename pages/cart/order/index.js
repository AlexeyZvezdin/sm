import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import fetcher from '../../../utils/fetcher';
import { getDeviceToken } from '../../../config/device-token';
import DPicker from '../../../components/DatePicker/DatePicker';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../../../config/api';

import './order.module.scss';

class index extends React.Component {
  state = {
    deliverySwitcher: true,
    pickupSwitcher: false,
    addresses: [],
  };

  // fetcher method is unpredictable right here, it saves options to itself
  async componentDidMount() {
    const AddressId = JSON.parse(localStorage.getItem('currentPickUpAddress'));

    const deliveryAddress = localStorage.getItem('currentDeliveryAddress');

    const productsFromStorage = JSON.parse(
      localStorage.getItem('cardProducts')
    );
    // Можно сделать иначе ну да ладно, итерирую значения продуктов в корзине подставляя нужное
    // для ордер запроса и если колво равно нулю то фильтрую из массива
    const prodsToOrder = Object.values(productsFromStorage)
      .map((item) => {
        if (!item.quantity) {
          return;
        }
        return {
          count: item.quantity,
          priceVariantId: item.product.priceVariants[0].id,
          productId: item.product.id,
          type: 'DEFAULT',
        };
      })
      .filter((item) => item !== undefined);
    console.log(prodsToOrder, ' prodsToOrder');
    // Поставить исключение когда продуктов нет
    let options = {
      method: 'PUT',
      headers: {
        [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
        [HEADER_DEVICE_TOKEN]: getDeviceToken(),
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        addressId: AddressId ? AddressId.id : '',
        cityId: this.props.city.cityId,
        deliveryType: deliveryAddress ? 'DELIVERY' : 'RESTAURANT',
        products: prodsToOrder,
        promocode: '',
      }),
    };

    let res = await fetch(
      `https://client-api.sushi-master.ru/api/v1/order`,
      options
    );
    // Просто на время сделаю это
    this.setState({
      ...this.state,
      responseOrder: res.result,
    });
  }

  handlePickupSwitch = () => {
    this.setState({
      ...this.state,
      deliverySwitcher: false,
      pickupSwitcher: true,
    });
  };
  handleDeliverySwitch = () => {
    this.setState({
      ...this.state,
      deliverySwitcher: true,
      pickupSwitcher: false,
    });
  };

  handlePhone = (e) => {
    this.setState({
      ...this.state,
      phone: e.target.value,
    });
  };

  handleInputChange = async (e) => {
    // console.log(this.props, ' CITY ID');
    let val = e.target.value;

    let options = {
      countryId: '5e02173559201a0544e20b2d',
      cityId: this.props.city.cityId,
      query: e.target.value,
    };

    this.setState({
      ...this.state,
      inputValue: val,
    });
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`
    );

    this.setState({
      ...this.state,
      addresses: res.result.items,
    });
  };

  chooseStreet = async (item) => {
    console.log(item, ' formateer itemitemitem');
    if (item.formattedAddress === this.state.addressInValue) {
      console.log(' DADADA');
      this.setState({
        ...this.state,
        addresses: [],
      });
    } else {
      this.setState({
        ...this.state,
        addressInValue: item.formattedAddress,
        inputValue: item.formattedAddress,
      });
      let options = {
        countryId: '5e02173559201a0544e20b2d',
        cityId: this.props.city.cityId,
        query: JSON.stringify(item.formattedAddress),
        placeId: item.placeId,
      };
      const res = await fetcher(
        `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`,
        options
      );
      this.setState({
        ...this.state,
        currentDeliveryAddress: item,
        addresses: res.result.items,
      });
    }
  };

  render() {
    const renderDelivery = () => {
      return (
        <div className="order-forms-delivery input_group">
          <label htmlFor="order-forms-address_input">Улица и дом</label>
          <input
            onChange={(e) => this.handleInputChange(e)}
            className="order-forms-address_input"
            name="order-forms-address_input"
            type="text"
            placeholder="Введите адрес"
            value={this.state.inputValue}
          />
          <div className="address_highlight"></div>
          <div className="order-forms-delivery-prompts">
            {this.state.addresses.map((item) => {
              return (
                <p
                  className="order-forms-delivery-prompt"
                  onClick={() => this.chooseStreet(item)}
                >
                  {item.formattedAddress}
                </p>
              );
            })}
          </div>
        </div>
      );
    };

    const CourierSwitches = () => {
      return (
        <div className="order-forms-courier_form">
          <div className="courier_form-switchers">
            <div
              onClick={this.handleDeliverySwitch}
              className={`courier_form-switch delivery_switch ${
                this.state.deliverySwitcher ? 'switch_active' : ''
              } `}
            >
              <p>Доставка курьером</p>
              <span>Заказ приедет по выбранному адресу</span>
            </div>
            <div
              onClick={this.handlePickupSwitch}
              className={`courier_form-switch pickup_switch ${
                this.state.pickupSwitcher ? 'switch_active' : ''
              } `}
            >
              <p>Самовывоз</p>
              <span>Можно забрать из ресторанов</span>
            </div>
          </div>
        </div>
      );
    };

    const CourierForm = () => {
      return (
        <form id="courier_form">
          <h2>Данные получателя</h2>
          <div className="courier_form">
            <div className="courier_form-name_n_phone">
              <div className="input_group">
                <label htmlFor="courier_form-name"></label>
                <input
                  type="text"
                  placeholder="Имя*"
                  id="courier_form-name"
                  name="name"
                />
                <div className="name_highlight"></div>
              </div>
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
              </div>
            </div>
            <div className="courier_form-address">
              <h2>Адрес</h2>
              <div className="courier_form-address-section">
                {renderDelivery()}
              </div>
              {/* подробности адреса */}
              <div className="courier_form-house_info">
                <div className="house_info">
                  <label htmlFor="kv">Квартира</label>
                  <input type="number" name="kv" id="kv" required />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="df">Домофон</label>
                  <input type="number" name="df" id="df" required />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="pz">Подъезд</label>
                  <input type="number" name="pz" id="pz" required />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="fl">Этаж</label>
                  <input type="number" name="fl" id="fl" required />
                  <div className="house_info_highlight"></div>
                </div>
              </div>
              {/* Название адреса */}
              <div className="house_info-address_name">
                <label htmlFor="address-name">Название адреса</label>
                <input
                  type="text"
                  name="address-name"
                  id="address-name"
                  required
                />
                <div className="house_info_highlight"></div>
              </div>
              {/* Условия доставки */}
              <div className="courier_form-delivery_opts">
                <h2>Условия доставки</h2>
              </div>
              <div className="courier_form-date_section">
                <div className="courier_form-date_picker">
                  <DPicker method="courier" />
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    };

    const PickupForm = () => {
      return (
        <form id="pickup_form">
          <h2>Самовывоз</h2>
        </form>
      );
    };

    return (
      <div className="order-box">
        <div className="order-back_button">
          <p className="order-back_button-arrow"></p>
          <p className="order-back_button-text">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        </div>
        <div className="order">
          <div className="order-forms">
            <h2>Способ получения</h2>
            <div className="order-forms-switcher">
              {CourierSwitches()}
              {this.state.pickupSwitcher && PickupForm()}
              {this.state.deliverySwitcher && CourierForm()}
            </div>
          </div>
          {/* Оплаты квадрат */}
          <div className="order-widget">
            <h3>Способы оплаты</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ store: { city } }) => ({
  city,
});

export default connect(mapState)(index);
