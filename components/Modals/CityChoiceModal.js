import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';

import s from './css/city_choice.module.scss';
import { selectCity } from '../../redux/actions/selectCity';

import { dispatchCategoriesWithMain } from '../../redux/actions/dispatchStickyTabsWithMain';

class CityChoiceModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cities: null,
    filteredCities: [],
  };

  async fetchCities() {
    if (this.state.cities == null) {
      let cities = await fetcher(
        'https://client-api.sushi-master.ru/api/v1/city'
      );
      let filterCities = cities.result.items;
      this.setState({
        cities,
        filterCities,
      });
    } else {
      return;
    }
  }

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
    // console.log(this.props.city, ' THIS PROPS SCI');
  };

  // handleCityChange
  handleSubmit = async () => {
    // ТУТ возможно придется убирать и продукты
    await localStorage.removeItem('currentPickUpAddress');
    await localStorage.removeItem('currentDeliveryAddress');
    this.props.selectCity(this.state.choosenCity);
  };

  handleCityChange = (item, index) => {
    this.setState({
      ...this.state,
      choosenCity: item,
      choosenCityIndex: index,
    });
  };

  filterCities = (e) => {
    let filteredCities = this.state.cities.result.items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      ...this.state,
      filterCities: filteredCities,
    });
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Выберите город</h1>
        <div className="m_m-header-search_field">
          <input
            type="text"
            name="city_name"
            id="city_name"
            onChange={(e) => this.filterCities(e)}
            placeholder="Поиск по названию"
          />
          <div className="city_name-highlight"></div>
        </div>
      </div>
    );
    const modalFooter = () => (
      <div className={s['m_m-footer']}>
        <button
          className="m_m-footer-continue_button"
          onClick={() => this.handleSubmit()}
        >
          продолжить
        </button>
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
        <div className="city_modal-center_container city_modal-width">
          {/* main modal */}
          <div className={s['m_m-box']}>
            {modalHeader()}
            <div className="m_m-body_box">
              <div className={s['m_m-body']}>
                {this.props.modalBg && this.state.filterCities
                  ? this.state.filterCities.map((item, index) => (
                      <button
                        className="city_modal-city_button"
                        key={index}
                        onClick={() => this.handleCityChange(item, index)}
                      >
                        {item.name}
                        {this.state.choosenCityIndex === index ? (
                          <img
                            src="/img/icons/icon-done.svg"
                            alt=""
                            style={{ marginLeft: '20px' }}
                          />
                        ) : (
                          ''
                        )}
                      </button>
                    ))
                  : ''}
              </div>
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
const mapStateToProps = ({ cityModal, city }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = cityModal.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_MODAL' }),
  selectCity: (city) => dispatch(selectCity(city)),
});
export default connect(mapStateToProps, dispatchToProps)(CityChoiceModal);
