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
    maxDate: new Date(new Date().setDate(new Date().getDate() + 20)),
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
    // if (!(AddressId || deliveryAddress)) {
    //   await this.props.dispatchAddressModalStatus();
    // }

    const productsFromStorage = JSON.parse(
      localStorage.getItem('cardProducts')
    );
    // Можно сделать иначе ну да ладно, итерирую значения продуктов в корзине подставляя нужное
    // для ордер запроса и если колво равно нулю то фильтрую из массива
    if (productsFromStorage == null || productsFromStorage == undefined) {
      window.location.href = '/cart';
      return;
    }
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
    const deviceToken = getDeviceToken();
    localStorage.setItem('deviceToken', deviceToken);
    this.setState({
      deviceToken: deviceToken,
    });
    let options = {
      method: 'PUT',
      headers: {
        [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
        [HEADER_DEVICE_TOKEN]: deviceToken,
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
    console.time('whatthefuck');

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
    console.timeEnd('whatthefuck');
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
  handleName = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleInputChange = async (e) => {
    // console.log(this.props, ' CITY ID');
    let val = e.target.value;
    console.log(' WOOORK res');

    let options = {
      countryId: '5e02173559201a0544e20b2d',
      cityId: this.props.city.cityId,
      query: e.target.value,
    };

    this.setState({
      ...this.state,
      inputValue: val,
    });
    let res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`
    );
    console.log(res, ' res');
    this.setState({
      ...this.state,
      addresses: res.result.items,
    });
  };

  chooseStreet = async (item) => {
    // console.log(item, ' formateer itemitemitem');
    if (item.formattedAddress === this.state.addressInValue) {
      // console.log(' item.formattedAddress === this.state.addressInValue');
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

  fixTime = (time) => {
    // console.log(time, ' initial TIME from datePicker');
    let day;
    if (
      this.state.deliverySwitcher === true &&
      this.state.pickupSwitcher === false
    ) {
      console.log(this.state.deliveryInterval, ' deliveryInterval');
      day = time.setHours(0);
    } else if (
      this.state.deliverySwitcher === false &&
      this.state.pickupSwitcher === true
    ) {
      // console.log(this.state, ' pickupInterval');
      day = time.setHours(0);
    }

    const dayWithoutHoursAndMinutes = new Date(
      new Date(new Date(day).setHours(0)).setMinutes(0)
    );
    this.setState({
      ...this.state,
      dayWithoutHoursAndMinutes: dayWithoutHoursAndMinutes,
    });
    // console.log(dayWithoutHoursAndMinutes, ' DAY dayWithoutHoursAndMinutes');
  };

  // Выбор времени при селекте
  // Нужно чтобы
  selectTimeChange = (e, hour, minute) => {
    // При первом рендере этот метод отрабатывает в другом месте
    // и туда ставятся часы и минуты первого доступного времени
    const dayWithoutHoursAndMinutes = this.state.dayWithoutHoursAndMinutes;
    let firstAvailableHour;

    if (hour) {
      // Проверить надо утрмо на другихз датах будет, 11 : 45 например
      // !!! не вставлять сюда сетСтейт, вызовет бесконечный ререндер так как часы есть всегда
      firstAvailableHour = new Date(
        new Date(dayWithoutHoursAndMinutes.setHours(hour)).setMinutes(minute)
      );
    } else {
      let splittingDate = e.target.value.split(':');
      firstAvailableHour = new Date(
        new Date(
          dayWithoutHoursAndMinutes.setHours(splittingDate[0])
        ).setMinutes(splittingDate[1])
      );

      this.setState({
        ...this.state,
        selectedPickupTime: firstAvailableHour,
        selectValue: e.target.value,
      });
    }
  };
  // прямиком из см
  generateMinDate = () => {
    let date = new Date();
    if (this.state.deliverySwitcher === true) {
      date = new Date(this.state.data.delivery.deliveryWorkInterval.begin);
    } else if (this.state.pickupSwitcher === true) {
      date = new Date(this.state.data.delivery.restaurantWorkInterval.begin);
    }
    console.log(date, 'date 111111111111111111111111111111111111111111111111');
    date = this.setCurrentDate(date);
    console.log(
      date,
      'date 22222222222222222222222222222222222222222222222222'
    );
    return date;
  };

  //Округление до 5ти
  round = (a) => {
    let b = a % 5;
    b && (a = a - b + 5);
    return a;
  };

  setCurrentDate = (date) => {
    let currentDate = new Date();
    currentDate.setHours(date.getHours());
    currentDate.setMinutes(date.getMinutes());
    return currentDate;
  };

  //Логика определения доступного временного интервала
  calculateProcessingTime = (pewdate, changeDate) => {
    let date = pewdate;
    console.log(
      date,
      ' date in calculateProcessingTimecalculateProcessingTime'
    );
    let now = new Date();
    let endDate = this.state.maxDate;
    let startDate = this.state.minDate;
    let dateWithProcessing = null;

    if (changeDate) {
      let newDate = date;
      if (this.state.deliverySwitcher === true) {
        newDate.setHours(
          new Date(
            this.state.data.delivery.deliveryWorkInterval.begin
          ).getHours()
        );
        newDate.setMinutes(
          new Date(
            this.state.data.delivery.deliveryWorkInterval.begin
          ).getMinutes()
        );
        startDate = new Date(
          this.state.data.delivery.restaurantWorkInterval.begin
        );
      } else if (this.state.selectedDeliveryType === 'RESTAURANT') {
        newDate.setHours(
          new Date(
            this.state.data.delivery.restaurantWorkInterval.begin
          ).getHours()
        );
        newDate.setMinutes(
          new Date(
            this.state.data.delivery.restaurantWorkInterval.begin
          ).getMinutes()
        );
        startDate = new Date(
          this.state.data.delivery.restaurantWorkInterval.begin
        );
      }
      startDate = this.setCurrentDate(startDate);
      //Если день === текущему, то изменяем нижнюю границу времени
      // this.setState({ selectedTime: newDate, minDate: startDate })
    }

    if (this.state.deliverySwitcher === true) {
      dateWithProcessing =
        now.getTime() + this.state.data.delivery.deliveryProcessingTime;
    } else if (this.state.pickupSwitcher === true) {
      dateWithProcessing =
        now.getTime() + this.state.data.delivery.restaurantProcessingTime;
    }

    //а) если WorkInterval.begin <= currentTime + processingTime <= WorkInterval.end - то сделать доступным для выбора для текущего время начиная с currentTime + processingTime (с округлением до 5 минут в большую сторону)
    if (
      date.getTime() <= dateWithProcessing &&
      dateWithProcessing <= endDate.getTime()
    ) {
      let newDate = new Date(
        now.getTime() + this.state.data.delivery.deliveryProcessingTime
      );
      newDate.setMinutes(this.round(newDate.getMinutes()));
      date.setHours(newDate.getHours());
      date.setMinutes(newDate.getMinutes());
      // this.setState({ selectedTime: newDate })
      return date;
    }
    // б) если WorkInterval.begin > currentTime + processingTime < WorkInterval.end -то сделать доступным для выбора для текущего время начиная с WorkInterval.begin
    console.log(date.getTime(), 'date.getTime()');
    // Не работает не известно почему
    // let tempDate = date.getTime();
    if (
      date.getTime() > dateWithProcessing &&
      dateWithProcessing < endDate.getTime()
    ) {
      // this.setState({ selectedTime: date })
    }
    //в) если WorkInterval.begin < currentTime + processingTime > WorkInterval.end - то сделать доступным для выбора для следующего время начиная с WorkInterval.begin (текущий день недоступен для выбора)
    if (
      date.getTime() < dateWithProcessing &&
      dateWithProcessing > endDate.getTime()
    ) {
      date.setDate(date.getDate() + 1);
      // this.setState({ selectedTime: date })
    }

    return date;
  };

  generateTimeRange = async () => {
    let minDate = await this.generateMinDate();
    console.log(minDate, ' MINDATEEEE!!!!');
    minDate = this.calculateProcessingTime(minDate);
    this.setState({
      ...this.state,
      minDate: minDate,
    });
  };

  payment = async (response) => {
    let request = {
      id: response.result.id,
      type:
        this.state.data.paymentInfo.fullPrice === this.state.enterBonusCount
          ? 'BONUS'
          : this.state.selectedPaymentType,
      // bonus: this.state.enterBonusCount,
      //  changeFrom: this.state.surrender ? Number(this.state.surrender) : '',
      changeFrom: '',
      type: 'CARD_ONLINE',
    };
    if (this.state.bonusIsValid && this.state.enterBonusCount > 0) {
      request = { ...request, bonus: this.state.enterBonusCount };
    }
    let options = {
      method: 'POST',
      headers: {
        [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
        [HEADER_DEVICE_TOKEN]: this.state.deviceToken,
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(request),
    };
    const res = await fetch(
      `https://client-api.sushi-master.ru/api/v1/order/payment/init`,
      options
    ).then((data) => data.json());
    console.log(res, ' res PAYMENT');
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.form.id, ' EVENT form');
    const request = this.genReq(e.target.form.id);
    let options = {
      method: 'PATCH',
      headers: {
        [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
        [HEADER_DEVICE_TOKEN]: this.state.deviceToken,
        'Content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(request),
    };

    const response = await fetch(
      `https://client-api.sushi-master.ru/api/v1/order`,
      options
    ).then((data) => data.json());

    this.setState(
      {
        ...this.state,
        data: {
          ...response.result,
          user: {
            name: response.result.user.name,
            phone: response.result.user.phoneNumber
              ? response.result.user.phoneNumber.replace(/[^0-9.]/g, '')
              : null,
          },
        },
      },
      () => this.generateTimeRange()
    );

    const submitOrderResponse = await fetch(
      `https://client-api.sushi-master.ru/api/v2/order/submit`,
      options
    ).then((data) => data.json());

    this.payment(submitOrderResponse);
    localStorage.removeItem('deviceToken');
    console.log(submitOrderResponse, ' submitOrderResponse');
    console.log(request, ' REQUEST');
    // console.log(response, ' RESPONSE');
    console.log(this.state, ' EVENT this.state');
  };

  waysOfPaySwitchClick = (e) => {
    this.setState({ ...this.state, currentPaymentType: e.target.dataset.item });
  };

  LocalISODateFormat = (date) => {
    function toISOLocal(d) {
      var z = (n) => ('0' + n).slice(-2);
      var zz = (n) => ('00' + n).slice(-3);
      var off = d.getTimezoneOffset();
      var sign = off < 0 ? '+' : '-';
      off = Math.abs(off);
      // если что то от getHours отнять оффсет и все
      return (
        d.getFullYear() +
        '-' +
        z(d.getMonth() + 1) +
        '-' +
        z(d.getDate()) +
        'T' +
        z(d.getHours()) +
        ':' +
        z(d.getMinutes()) +
        ':' +
        z(d.getSeconds()) +
        '.' +
        zz(d.getMilliseconds()) +
        sign +
        z((off / 60) | 0) +
        ':' +
        z(off % 60)
      );
    }
    let isoTime = toISOLocal(date).slice(0, 19);
    return isoTime;
  };

  handleComment = (e) => {
    this.setState({
      ...this.state,
      comment: e.target.value,
    });
  };

  handleAddressChange = (e) => {
    console.log(e.target.value, '  e.target.value');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  genReq = (typeOfDelivery) => {
    // 0: "RESTAURANT"
    // 1: "DELIVERY"
    // TODO: deliveryType добавить проверку на исключение, чтобы по еще одной форме проверялось
    let deliveryType =
      typeOfDelivery == 'pickup_form' ? 'RESTAURANT' : 'DELIVERY';

    let isoTime;
    if (this.state.selectedPickupTime != undefined) {
      isoTime = this.LocalISODateFormat(this.state.selectedPickupTime);
    } else if (this.state.dayWithoutHoursAndMinutes) {
      isoTime = this.LocalISODateFormat(this.state.dayWithoutHoursAndMinutes);
    } else {
      console.log('Some unpredictaqble error in genReq method');
    }
    // console.log(isoTime, ' isoTime');
    // console.log(
    //   this.state.selectedPickupTime,
    //   ' this.state.selectedPickupTime'
    // );
    return {
      id: this.state.responseOrder.id,
      comment: this.state.comment,
      bonuses: 0,
      user: {
        name: this.state.name,
        phone: this.state.phone,
      },
      delivery: {
        deliveryType: deliveryType,
        [deliveryType === 'DELIVERY' ? 'addressId' : 'restaurantId']:
          deliveryType === 'DELIVERY'
            ? this.state.currentDeliveryAddress.placeId || null
            : this.state.pickupAddress.id || null,
        restaurantId: this.state.pickupAddress.id,
        time: this.state.selectedPickupTime
          ? this.state.selectedPickupTime.valueOf()
          : this.state.dayWithoutHoursAndMinutes.valueOf(),
        isoTime: isoTime,
      },
      // потом сделаем soon
      isSoon: this.state.soon,
      fullFormattedAddress:
        deliveryType === 'DELIVERY'
          ? this.state.currentDeliveryAddress.formattedAddress
          : this.state.pickupAddress.address,
      // deliveryAddress: this.state.deliverySwitcher && this.state.currentDeliveryAddress ? ,
      // По образу и подобию спа СМ
      deliveryAddress: this.state.currentDeliveryAddress
        ? {
            title: undefined,
            [deliveryType === 'DELIVERY' ? 'addressId' : 'restaurantId']:
              deliveryType === 'DELIVERY'
                ? this.state.currentDeliveryAddress.id || null
                : this.state.pickupAddress.id || null,
            apartment: this.state.kv,
            intercom: this.state.df,
            entrance: this.state.pz,
            floor: this.state.fl,
          }
        : null,
    };
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
    console.log(this.state, ' THIS STATE');
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
      ) {
        this.selectTimeChange(
          null,
          this.state.deliveryInterval.result[0].hour,
          this.state.deliveryInterval.result[0].minute.value
        );
        return (
          <select
            name="delivery_time_select"
            value={
              this.state.selectValue
                ? this.state.selectValue
                : this.state.pickupInterval.result[0].hour
            }
            onChange={this.selectTimeChange}
          >
            <option value="Время" disabled>
              Время
            </option>
            {this.state.deliveryInterval.result.map((item, index) => {
              return (
                <option key={index} hour={item.hour}>
                  {item.hour}:{item.minute.value}
                </option>
              );
            })}
          </select>
        );
      } else if (
        this.state.pickupInterval &&
        this.state.pickupSwitcher != undefined
      ) {
        // Здесь наверное надо разделить функционал и сделать отдельную функцию для обработки
        this.selectTimeChange(
          null,
          this.state.pickupInterval.result[0].hour,
          this.state.pickupInterval.result[0].minute.value
        );
        return (
          <select
            name="pickup_time_select"
            value={this.state.selectValue}
            onChange={this.selectTimeChange}
          >
            <option value="Время" disabled>
              Время
            </option>
            {this.state.pickupInterval.result.map((item, index) => {
              return (
                <option key={index} hour={item.hour}>
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
            onChange={(e) => this.handleName(e)}
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
                  <input
                    onChange={this.handleAddressChange}
                    type="number"
                    name="kv"
                    id="kv"
                    required
                  />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="df">Домофон</label>
                  <input
                    onChange={this.handleAddressChange}
                    type="number"
                    name="df"
                    id="df"
                    required
                  />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="pz">Подъезд</label>
                  <input
                    onChange={this.handleAddressChange}
                    type="number"
                    name="pz"
                    id="pz"
                    required
                  />
                  <div className="house_info_highlight"></div>
                </div>
                <div className="house_info">
                  <label htmlFor="fl">Этаж</label>
                  <input
                    onChange={this.handleAddressChange}
                    type="number"
                    name="fl"
                    id="fl"
                    required
                  />
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
                  <DPicker method="courier" fixTime={this.fixTime} />
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
            onChange={this.handleComment}
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
              <DPicker method="courier" fixTime={this.fixTime} />
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
