import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';

import s from './css/city_choice.module.scss';

class CityChoiceModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cities: null,
  };

  async fetchCities() {
    if (this.state.cities == null) {
      let cities = await fetcher(
        'https://client-api.sushi-master.ru/api/v1/city'
      );
      console.log(cities, 'CITIES');
      this.setState({
        cities,
      });
    } else {
      return;
    }
  }

  handleModalBG = (e) => {
    e.stopPropagation();
    this.props.dispatchModalStatus();
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Выберите город</h1>
      </div>
    );
    const modalFooter = () => (
      <div className={s['m_m-footer']}>
        <button>продолжить</button>
      </div>
    );

    this.props.modalBg ? this.fetchCities() : '';
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
            <div className={s['m_m-body']}>
              {this.props.modalBg && this.state.cities
                ? this.state.cities.result.items.map((item) => (
                    <button>{item.name}</button>
                  ))
                : ''}
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
const mapStateToProps = ({ modal }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return { modalBg };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_MODAL' }),
});
export default connect(mapStateToProps, dispatchToProps)(CityChoiceModal);
