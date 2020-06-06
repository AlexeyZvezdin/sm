import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import s from './css/city_choice.module.scss';
import './css/address_modal.module.scss';
import { addressModal } from '../../redux/actions/addressModal';

class AddressModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cities: null,
  };

  handleCityChange = () => {
    console.log('lcokc');
  };

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
  };

  handleInputChange = async (e) => {
    console.log(this.props, ' CITY ID');

    console.log('yes');
    let options = {
      countryId: '5e02173559201a0544e20b2d',
      cityId: this.props.city.cityId,
      query: e.target.value,
    };
    const res = await fetcher(
      `https://client-api.sushi-master.ru/api/v2/address/search?countryId=${options.countryId}&cityId=${options.cityId}&query=${options.query}`,
      options
    );
    console.log(res, ' RESULT');
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Проверим адрес?</h1>
      </div>
    );
    const modalFooter = () => (
      <div className={s['m_m-footer']}>
        <button onClick={this.handleCityChange}>продолжить</button>
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
            {modalHeader()}
            <input
              onChange={(e) => this.handleInputChange(e)}
              className="address_input"
              type="text"
              placeholder="Введите адрес"
            />
            {modalFooter()}
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
  console.log(modalBg, ' MODAL BG');
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_ADDRESS_MODAL' }),
  addressModal: (data) => dispatch(addressModal(data)),
});
export default connect(mapStateToProps, dispatchToProps)(AddressModal);
