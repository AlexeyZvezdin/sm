import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';

import s from './css/city_choice.module.scss';
import { selectCity } from '../../redux/actions/selectCity';

import { dispatchCategoriesWithMain } from '../../redux/actions/dispatchStickyTabsWithMain';

import ModalTemplate from './ModalTemplate';

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
      this.setState({
        cities,
      });
    } else {
      return;
    }
  }

  // handleCityChange
  handleCityChange = () => {
    console.log(this.props.city, ' THIS PROPS SCI');
  };

  render() {
    const modalHeader = () => (
      <div className={s['m_m-header']}>
        <h1>Выберите город</h1>
      </div>
    );
    const modalFooter = () => (
      <div className={s['m_m-footer']}>
        <button onClick={this.handleCityChange()}>продолжить asd</button>
      </div>
    );

    this.props.modalBg ? this.fetchCities() : '';
    return (
      <ModalTemplate>
        {/* main modal */}
        <div className={s['m_m-box']}>
          {modalHeader()}
          <div className={s['m_m-body']}>
            {this.props.modalBg && this.state.cities
              ? this.state.cities.result.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => this.props.selectCity(item)}
                  >
                    {item.name}
                  </button>
                ))
              : ''}
          </div>
          {modalFooter()}
        </div>
      </ModalTemplate>
    );
  }
}
const mapStateToProps = ({ modalReducer, city }) => {
  let modalBg = modalReducer.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  selectCity: (city) => dispatch(selectCity(city)),
});
export default connect(mapStateToProps, dispatchToProps)(CityChoiceModal);
