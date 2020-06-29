import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import fetcher from '../../../utils/fetcher';
import { getDeviceToken } from '../../../config/device-token';
import DPicker from '../../../components/DatePicker/DatePicker';
import SubHeader from '../../../components/Basic/SubHeader';
import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../../../config/api';

import './order.module.scss';

class index extends React.Component {
  // Так же в стейте эти объекты
  // responseOrder: '',
  // sumCounter: '',
  // deliveryAddress: '',
  state = {
    deliverySwitcher: true,
    pickupSwitcher: false,
    addresses: [],
  };
  //  Object.values(productsFromStorage) Вот это надо переадресовывать если нет продуктов
  // fetcher method is unpredictable right here, it saves options to itself
  async componentDidMount() {
    const sumCounter = localStorage.getItem('sumCounter');
    this.setState({
      ...this.state,
      sumCounter: sumCounter,
    });
    // Пока более подробная инфа о ресторане не нужна поэтому не сую ее в стейт
    const AddressId = JSON.parse(localStorage.getItem('currentPickUpAddress'));
    const deliveryAddress = JSON.parse(
      localStorage.getItem('currentDeliveryAddress')
    );
    if (deliveryAddress) {
      this.setState({
        ...this.state,
        deliveryAddress: deliveryAddress,
      });
    }
    if (AddressId) {
      // TODO: Потом сделать через свич-кейс переключение дефолтных форм
      this.setState({
        ...this.state,
        pickupAddress: AddressId,
        deliverySwitcher: false,
        pickupSwitcher: true,
      });
    }
    if (!(AddressId || deliveryAddress)) {
      await this.props.dispatchAddressModalStatus();
    }

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
    // console.log(prodsToOrder, ' prodsToOrder');
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

    const res = await fetch(
      `https://client-api.sushi-master.ru/api/v1/order`,
      options
    ).then((data) => data.json());
    // Просто на время сделаю это
    this.setState({
      ...this.state,
      responseOrder: res.result,
    });

    // время

    // Запрос дат
    var today = new Date();
    let linesOpt = {};
    let lines;
    if (this.state.deliverySwitcher && deliveryAddress != undefined) {
      let lat = deliveryAddress.location.latitude;
      let lon = deliveryAddress.location.longitude;
      lines = await fetch(
        `https://client-api.sushi-master.ru/api/v1/delivery/time/lines?cityId=${
          this.props.city.cityId
        }&date=${today
          .toISOString()
          .substring(0, 10)}&longitude=${lon}&latitude=${lat}`
        // linesOpt
      ).then((data) => data.json());
      this.setState({
        ...this.state,
        deliveryInterval: lines,
      });
      console.log(lines, ' LINES courier');
    } else if (this.state.pickupSwitcher && AddressId != undefined) {
      lines = await fetch(
        `https://client-api.sushi-master.ru/api/v1/delivery/time/lines?cityId=${
          this.props.city.cityId
        }&date=${today.toISOString().substring(0, 10)}&restaurantId=${
          AddressId.id
        }`
        // linesOpt
      ).then((data) => data.json());
      this.setState({
        ...this.state,
        pickupInterval: lines,
      });
      console.log(lines, ' LINES restaurant');
    }
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

  pickupAddressClick = async () => {
    this.props.dispatchRestModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, ' EVENT');
  };

  waysOfPaySwitchClick = (e) => {
    this.setState({ ...this.state, currentPaymentType: e.target.dataset.item });
  };

  /*
 
 '########::'########:'##::: ##:'########::'########:'########::
  ##.... ##: ##.....:: ###:: ##: ##.... ##: ##.....:: ##.... ##:
  ##:::: ##: ##::::::: ####: ##: ##:::: ##: ##::::::: ##:::: ##:
  ########:: ######::: ## ## ##: ##:::: ##: ######::: ########::
  ##.. ##::: ##...:::: ##. ####: ##:::: ##: ##...:::: ##.. ##:::
  ##::. ##:: ##::::::: ##:. ###: ##:::: ##: ##::::::: ##::. ##::
  ##:::. ##: ########: ##::. ##: ########:: ########: ##:::. ##:
 ..:::::..::........::..::::..::........:::........::..:::::..::
 
*/

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
            value={
              this.state.inputValue
                ? this.state.inputValue
                : this.state.deliveryAddress
                ? this.state.deliveryAddress.formattedAddress
                : ''
            }
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

    const DateIntervals = () => {
      if (
        this.state.deliveryInterval != undefined &&
        this.state.deliverySwitcher
      )
        return (
          <select name="delivery_time_select">
            <option value="Время" disabled>
              Время
            </option>
            {this.state.deliveryInterval.result.map((item) => {
              return (
                <option key={item.hour} value={item.hour}>
                  {item.hour}:{item.minute.value}
                </option>
              );
            })}
          </select>
        );
      else if (
        this.state.pickupInterval &&
        this.state.pickupSwitcher != undefined
      ) {
        return (
          <select name="pickup_time_select">
            <option value="Время" disabled>
              Время
            </option>
            {this.state.pickupInterval.result.map((item) => {
              return (
                <option key={item.hour} value={item.hour}>
                  {item.hour}:{item.minute.value}
                </option>
              );
            })}
          </select>
        );
      } else {
        return (
          <select>
            <option>Время</option>
          </select>
        );
      }
    };

    const NameAndPhone = () => (
      <>
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
      </>
    );

    const CourierForm = () => {
      return (
        <form id="courier_form">
          <div className="courier_form">
            <h2>Данные получателя</h2>
            <div className="courier_form-name_n_phone">{NameAndPhone()}</div>
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
                <div className="coutier_form-date_lines">
                  <div className="coutier_form-date_lines-box">
                    <label htmlFor="" className="date_picker-label">
                      Время
                    </label>
                    <DateIntervals />
                  </div>
                </div>
              </div>
              {/* Дополнительно */}
              {InputComment()}
            </div>
          </div>
        </form>
      );
    };

    const InputComment = () => (
      <>
        <div className="courier_form-comment">
          <h2>Дополнительно</h2>
        </div>
        <div className="courier_form-comment_textarea">
          <label htmlFor="comment_textarea" className="date_picker-label">
            Комментарий
          </label>
          <textarea
            name="comment_textarea"
            id="comment_textarea"
            rows="3"
            cols="50"
          ></textarea>
          <div className="textarea_highlight"></div>
        </div>
      </>
    );

    const PickupForm = () => {
      return (
        <form id="pickup_form">
          <h2>Пункты самовывоза в г. {this.props.city.name}</h2>
          <div className="pickup_form-address_choice">
            <div className="input_group">
              <label htmlFor="">Выберите адрес ресторана</label>
              <p
                className="pickup_form-address_input"
                onClick={() => this.pickupAddressClick()}
              >
                <span>
                  {/* теперь норм */}
                  {this.props.address && this.props.address.address
                    ? this.props.address.address
                    : this.state.pickupAddress
                    ? this.state.pickupAddress.address
                    : ''}
                </span>
                <span>
                  <div className="edit-restaurant">
                    Редактировать <div className="restaurant-picker"></div>
                  </div>
                </span>
              </p>
            </div>
          </div>
          <h2>Данные получателя</h2>
          <div className="courier_form-name_n_phone">{NameAndPhone()}</div>
          {/* Условия самовывоза */}
          <div className="courier_form-delivery_opts">
            <h2>Условия самовывоза</h2>
          </div>
          <div className="courier_form-date_section">
            <div className="courier_form-date_picker">
              <DPicker method="courier" />
            </div>
            <div className="coutier_form-date_lines">
              <div className="coutier_form-date_lines-box">
                <label htmlFor="" className="date_picker-label">
                  Время
                </label>
                <DateIntervals pickup={true} />
              </div>
            </div>
          </div>
          {InputComment()}
        </form>
      );
    };

    const orderSwitchers = () => {
      let paymentSwitch = (options) => {
        return options.map((item) => {
          switch (item) {
            case 'CASH':
              return (
                <div
                  data-item={item}
                  className={`order-switcher ${
                    this.state.currentPaymentType === item
                      ? 'current_payment-active'
                      : ''
                  } `}
                >
                  <p data-item={item}> Наличными</p>
                </div>
              );
            case 'CARD_COURIER':
              return (
                <div
                  data-item={item}
                  className={`order-switcher ${
                    this.state.currentPaymentType === item
                      ? 'current_payment-active'
                      : ''
                  } `}
                >
                  <p data-item={item}>Картой курьеру</p>
                </div>
              );
            case 'CARD_ONLINE':
              return (
                <div
                  data-item={item}
                  className={`order-switcher ${
                    this.state.currentPaymentType === item
                      ? 'current_payment-active'
                      : ''
                  } `}
                >
                  <p data-item={item}>Онлайн</p>
                </div>
              );
            case 'CASHBOX':
              return (
                <div
                  data-item={item}
                  className={`order-switcher ${
                    this.state.currentPaymentType === item
                      ? 'current_payment-active'
                      : ''
                  } `}
                >
                  <p data-item={item}>Оплата в ресторане</p>
                </div>
              );
            default:
              return item;
          }
        });
      };

      return (
        <>
          {this.state.deliverySwitcher ? (
            <div className="order-switchers-box">
              {this.state.responseOrder
                ? paymentSwitch(
                    this.state.responseOrder.paymentInfo.paymentTypesWeb
                      .deliveryPaymentTypes
                  )
                : ''}
            </div>
          ) : this.state.pickupSwitcher ? (
            <div className="order-switchers-box">
              {this.state.responseOrder
                ? paymentSwitch(
                    this.state.responseOrder.paymentInfo.paymentTypesWeb
                      .restaurantPaymentTypes
                  )
                : ''}
            </div>
          ) : (
            ''
          )}
        </>
      );
    };

    return (
      <div className="order-box">
        <div
          className="order-back_button"
          // onClick={() => this.props.history.push('/order')}
        >
          <SubHeader>
            <p className="order-back_button-text">ОФОРМЛЕНИЕ ЗАКАЗА</p>
          </SubHeader>
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
            {/* Переключатели */}
            <div
              className="order-switchers"
              onClick={(e) => this.waysOfPaySwitchClick(e)}
            >
              {orderSwitchers()}
            </div>
            {/* Инфа  */}
            <div className="order-payment_info">
              <div className="order-payment_info-products">
                <span>Товары</span>
                <span>{this.state.sumCounter} ₽</span>
              </div>
              <div className="order-payment_info-total_result">
                <span>Итого</span>
                <span>{this.state.sumCounter} ₽</span>
              </div>
            </div>
            {/* политика конф */}
            <div className="order-conf_checkbox">
              <input id="rules" type="checkbox" />
              <label htmlFor="rules">
                <p>
                  Я согласен с{' '}
                  <a href="/public-offert">пользовательским соглашением</a> и{' '}
                  <a href="/privacy-policy">политикой конфиденциальности</a> и
                  даю согласение на обработку моих персональных данных
                </p>
              </label>
            </div>
            {/* Кнопка */}
            <div className="order-button_submit">
              {this.state.pickupSwitcher && (
                <button
                  type="submit"
                  form="pickup_form"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  заказать
                </button>
              )}
              {this.state.deliverySwitcher && (
                <button
                  type="submit"
                  form="courier_form"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  заказать
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ store: { city }, address }) => ({
  city,
  address,
});

const mapDispatch = (dispatch) => ({
  dispatchAddressModalStatus: (status) =>
    dispatch({ type: 'OPEN_ADDRESS_MODAL' }),
  dispatchRestModal: () => {
    dispatch({ type: 'OPEN_REST_MODAL' });
  },
});

export default connect(mapState, mapDispatch)(index);
