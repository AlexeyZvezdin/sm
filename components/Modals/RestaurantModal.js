import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import RestaurantList from './RestaurantList';
import s from './css/city_choice.module.scss';

class RestaurantModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentPickUpAddress: '',
  };

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
  };

  dataRecipient = (data) => {
    this.setState({
      ...this.state,
      currentPickUpAddress: data,
    });
  };

  submitPickUp = (e) => {
    localStorage.setItem(
      'currentPickUpAddress',
      JSON.stringify(this.state.currentPickUpAddress)
    );
    const payload = this.state.currentPickUpAddress;
    this.props.addressModal({
      type: 'PICKUP_ADDRESS_DATA',
      payload: payload,
    });
    this.props.dispatchModalStatus();
  };

  renderRestBody = () => {
    return (
      <form
        id="address_form"
        className="m_m-pickup-form"
        onSubmit={(e) => this.submitPickUp(e)}
      >
        <div className="m_m-pickup">
          {this.props.modalBg ? (
            <RestaurantList
              city={this.props.city}
              dispatchModalStatus={this.props.dispatchModalStatus}
              dataRecipient={this.dataRecipient}
            />
          ) : (
            ''
          )}
        </div>
      </form>
    );
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Пункты самовывоза</h1>
      </div>
    );
    const modalFooter = () => (
      <div className={s['m_m-footer']}>
        <button
          className="m_m-footer-continue_button"
          onClick={() => this.submitPickUp()}
        >
          продолжить
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
        <div className="city_modal-center_container city_modal-width">
          <div className="restaurant_modal">
            {modalHeader()}
            <div className="restaurant_modal-body">
              {this.props.modalBg ? this.renderRestBody() : ''}
            </div>
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
const mapStateToProps = ({ restModal, store: { city } }) => {
  const modalBg = restModal.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_MODAL' }),
  addressModal: (data) => dispatch(data),
});

export default connect(mapStateToProps, dispatchToProps)(RestaurantModal);
