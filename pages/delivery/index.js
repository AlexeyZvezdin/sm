//Components
// import Header from '../../components/Basic/Header';
import Head from 'next/head';
import SubHeader from '../../components/delivery/SubHeader';
import DeliveryZoneItem from '../../components/delivery/DeliveryZoneItem';
import InfoItem from '../../components/delivery/InfoItem';
import AddressItem from '../../components/delivery/AddressItem.js';

import './delivery.module.scss';
//API
// import Head from '../../components/Head';
// import PropTypes from 'prop-types'
import { msToTime } from '../../utils/msToTime';

// let map;
// let timer;

import fetcher from '../../utils/fetcher';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.map;
  }
  state = {
    location: {
      latitude: null,
      longitude: null,
    },
    orderPaymentTypes: [],
    types: [],
    deliveryWorkInterval: null,
    restaurantWorkInterval: null,
    area: {
      features: [],
    },
    deliveryTitle: '',
    selectZoneColor: null,
    restaurants: [],
    deliveryTimeRangeTitle: null,
    pickUpTimeRangeTitle: null,

    thisIsKogalim: false,
  };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.city.cityId !== this.props.city.cityId) {
  //     this.updateInfo();
  //   }
  // }

  componentDidMount() {
    this.updateInfo();
    // this.props.showHeader(false);
  }

  updateInfo = async () => {
    //Пока Тюмень
    //let cityId = '5d3834ad59201a66b905d9e7';// тюмень
    let cityId = '5d3834ad59201a66b905d9e7';
    if (cityId) {
      const result = await fetcher(
        `https://client-api.sushi-master.ru/api/v1/delivery/zones/full-info?cityId=${cityId}`
      );
      console.log(result, ' RESULT');
      if (typeof result !== 'undefined') {
        this.setState({ ...result.result });
        const restaurants = await fetcher(
          `https://client-api.sushi-master.ru/api/v1/restaurants?cityId=${cityId}`
        );
        console.log(restaurants, ' restaurants');
        await this.setState({
          restaurants: restaurants.result.items,
        });
        await this.initMap();
      }
    }
    // if ('5d3834ad59201a66b905daad' === cityId) {
    //   // это когалым. для него особые условия отображения
    //   this.setState({
    //     thisIsKogalim: true,
    //   });
    // } else {
    //   this.setState({
    //     thisIsKogalim: false,
    //   });
    // }
  };

  initMap = () => {
    console.log('is trying? ');

    let map = new window.ymaps.Map(
      'map',
      {
        center: [this.state.location.longitude, this.state.location.latitude],
        zoom: 10,
        controls: [],
      },
      {
        suppressMapOpenBlock: true,
      }
    );
    this.addZonesOnMap(map);
    this.addMarkersOnMap(map);
    // window.clearTimeout(timer);
    // timer = window.setTimeout(() => this.initMap(), 1000);
    // }
  };

  handleZoneClick = (e) => {
    let target = e.get('target');
    if (!target) return;
    let color = target.options._options.fillColor;
    this.setState({ selectZoneColor: color }, () => this.scrollToZone(color));
  };

  scrollToZone = (color) => {
    let scrollValue = document.getElementById(`${color.replace('#', '')}`)
      .offsetTop;
    document.getElementById('zone_info').scrollTo(0, scrollValue - 30);
    // this.refs.zoneInfoRef.scrollTo(0, scrollValue - 30);
  };

  addZonesOnMap = (map) => {
    console.log(this.state.area, ' this.state.area');
    if (this.state.area) {
      let features = this.state.area.features;
      if (!features) return null;
      features.forEach((zone) => {
        let myPolygon = new window.ymaps.Polygon(
          zone.geometry.coordinates,
          {},
          {
            fillColor: zone.properties.fill,
            fillOpacity: zone.properties.fill_opacity,
            strokeColor: zone.properties.stroke,
            strokeOpacity: zone.properties.stroke_opacity,
            strokeWidth: zone.properties.stroke_width,
          }
        );
        myPolygon.events.add('click', this.handleZoneClick);
        map.geoObjects.add(myPolygon);
      });
    }
  };

  addMarkersOnMap = (map) => {
    const restaurants = this.state.restaurants;
    restaurants.forEach((restaurant) => {
      const myGeoObject = new window.ymaps.GeoObject(
        {
          geometry: {
            type: 'Point',
            coordinates: [
              restaurant.location.longitude,
              restaurant.location.latitude,
            ],
          },
          properties: {
            balloonContent: restaurant.address,
          },
        },
        {
          preset: 'islands#redDotIconWithCaption',
        }
      );
      map.geoObjects.add(myGeoObject);
    });
  };

  goBack = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <Head>
          {/* <script
            src="https://api-maps.yandex.ru/2.1/?apikey=78245263-55a3-404a-b40b-4470b2b76b9c&lang=ru_RU&coordorder=longlat"
            type="text/javascript"
          ></script> */}
        </Head>
        <div className={'delivery-scene'}>
          {/* <Header showStickyHeader={true} onlyInfo={true}>
          <SubHeader goBack={this.goBack} city={this.props.city.cityName} />
        </Header> */}
          <div className="delivery-scene__main-container">
            <div className={'zone-info'} id={'zone_info'}>
              {this.state.area.features.map((area, idx) => {
                return (
                  <DeliveryZoneItem
                    idx={idx}
                    {...area.deliveryInfo}
                    selectZoneColor={this.state.selectZoneColor}
                  />
                );
              })}
            </div>
            <div id="map" className={'map'} />
            <div className={'delivery-info'}>
              <div className={'delivery-info time-range'}>
                <span>{this.state.deliveryTimeRangeTitle}</span>
                <br />
              </div>
              <div className={'delivery-info sale-info'}>
                <div

                >
                  <span>{this.state.deliveryTitle}</span>
                </div>
                <div style={{
                  width: '57%',
                  fontSize: '10px',
                  fontFamily: 'Gotham Pro',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}>
                  <span style={{
                    width: '5px',
                    overflow: 'display'
                  }}>
                    Время доставки может быть увеличено в зависимости от
                    загруженности ресторанов, дорожной обстановки, погодных
                    условий и других факторов.
                    <br />
                    <br />
                    *В первую зону.
                  </span>
                </div>
                {/*<Link to="/about-link" className={"about-link"}>*/}
                {/*<span>ПОДРОБНЕЕ</span>*/}
                {/*<img src={about} alt=""/>*/}
                {/*</Link>*/}
              </div>
            </div>
            <div className={'delivery-payments-block'}>  {/* I am styling this block right now!*/}
              <div className={'adaptive-padding type-block'}>
                <div>Способы оплаты</div>
                <InfoItem
                  src="/img/money.svg"
                  title={'Наличными'}
                  text={
                    this.state.thisIsKogalim === false
                      ? 'Оплата наличными курьеру или в ресторане\n' +
                        'при получении заказа.'
                      : 'Оплата наличными курьеру'
                  }
                />
                <InfoItem
                  src="/img/card.svg"
                  title="Банковской картой онлайн"
                  text="При оформлении заказа на сайте (сервис доступен для карт: Visa, MasterCard)"
                />
                <InfoItem
                  src="/img/wallet.svg"
                  title={'Банковской картой при получении'}
                  text={
                    this.state.thisIsKogalim === false
                      ? 'Оплата заказа банковской картой при получении курьеру или в ресторане. Принимаются банковские карты MasterCard, Visa, МИР.'
                      : 'Оплата заказа банковской картой при получении курьеру. Принимаются банковские карты MasterCard, Visa, МИР.'
                  }
                />
              </div>
            <div className={'adaptive-padding type-block'}>
              <div>Типы заказов</div>
              <InfoItem
                src="/img/delivery.svg"
                title={'Доставка'}
                text={`Заказывайте любым удобным способом, получайте заказ на указанный вами адрес.`}
                deliveryType
                // contentTitle="Служба доставки: "
                // content={`${this.props.city.supportPhone} ${this.props.city.phoneFooter}`}
              />
              {this.state.thisIsKogalim === false ? (
                <InfoItem
                  src="img/store.svg"
                  title={'Забрать из ресторана'}
                  text={
                    'Получайте заказ в выбранном ресторане в удобное для вас время (заказ может быть оформлен не менее чем за 30 минут до получения).'
                  }
                />
              ) : (
                false
              )}
              <InfoItem
                src="/img/time.svg"
                title={'Доставка к определенному времени'}
                text={
                  'Выбирайте к “определенному времени”, получайте заказ минута в минуту. Заказ можно оформить не менее чем за 60 мин. до времени доставки'
                }
              />
            </div>
            </div>
          </div>
          {/* delivery scene main container*/}
          <div className={'restaurants-block'}>
            <div className={'adaptive-padding'}>
              <div className={'restaurants-block-title'}>
                {this.state.thisIsKogalim === false
                  ? this.state.pickUpTimeRangeTitle
                  : ''}
              </div>
              {this.state.restaurants.length > 0 && (
                <div fluid>
                  {this.state.restaurants.map((restaurant, idx) => (
                    <AddressItem
                      key={idx}
                      // city={this.props.city.cityName}
                      street={restaurant.address}
                      phone={null}
                      workHours={`${msToTime(
                        restaurant.workInterval.begin
                      )} - ${msToTime(restaurant.workInterval.end)}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={'how-make-order-block'}>
            <div className={'adaptive-padding'}>
              <div className={'how-make-order-block-title'}>Как заказать</div>

              <div className={'how-make-order-block-text'}>
                Заказывайте доставку суши и роллов удобным Вам способом: по
                телефону или через сайт. Чтобы сделать заказ через сайт,
                добавьте понравившийся товар в корзину, затем перейдите в
                соответствующую вкладку и нажмите «Оформить». В появившемся окне
                введите Ваши данные и выберите способ оплаты (банковская
                карта/наличные) и способ получения заказа. Вы можете забрать
                заказ сами либо выбрать доставку курьером к определенному
                времени. Поставив галочку напротив «Как можно быстрее», Вы
                получите свой заказ так быстро, как это возможно. После
                оформления заказа вам поступит звонок с подтверждением. Если у
                вас нет возможности совершить заказ через интернет, звоните на
                нашу горячую линию или воспользуйтесь функцией «Обратный звонок»
                - и наш оператор сам с вами свяжется.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
