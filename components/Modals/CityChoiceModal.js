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

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
    console.log(this.props.city, ' THIS PROPS SCI');
  };

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
        <button onClick={this.handleCityChange()}>продолжить</button>
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
const mapStateToProps = ({ modal, city }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return { modalBg, city };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_MODAL' }),
  selectCity: (city) => dispatch(selectCity(city)),
  initialCityData: (defaultCityData) => ({
    type: 'INITIAL_CITY_STATE',
    payload: defaultCityData,
  }),
  catalogStructure: (catalogStructure) => ({
    type: 'CATALOG_STRUCTURE',
    payload: catalogStructure,
  }),
  initialCategories: (initialCategories) =>
    dispatch({
      type: 'INITIAL_CATEGORIES',
      payload: thisCityCategoriesData,
    }),
  initialBanners: (initialBanners) =>
    dispatch({
      type: 'INITIAL_BANNERS',
      payload: getAllBannersData.result.update,
    }),
  initialProducts: (initialProducts) =>
    dispatch({
      type: 'INITIAL_PRODUCTS',
      // payload: [allProducts],
      payload: [productsForPath],
    }),
  categoriesWithMain: (stickyTabsWithMain, stickyTabs) =>
    dispatch(dispatchCategoriesWithMain(stickyTabsWithMain, stickyTabs)),
});
export default connect(mapStateToProps, dispatchToProps)(CityChoiceModal);
