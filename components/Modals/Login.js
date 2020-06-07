import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import s from './css/city_choice.module.scss';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    // showDelivery: false,
    // showPickup: false,
    // restaurants: {},
    // addresses: {},
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
    console.log(this.state.currentPickUpAddress, ' currentPickUpAddress');
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
          <button onClick={() => console.log('clicked')}>получить код</button>
        </div>
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
          <div className={s['m_m-box']}>
            helo login
            {modalFooter()}
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
const mapStateToProps = ({ store: { city }, loginModal: { openModal } }) => {
  console.log(openModal, ' loginModal');
  return { city, openModal };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_LOGIN' }),
});
export default connect(mapStateToProps, dispatchToProps)(LoginModal);
