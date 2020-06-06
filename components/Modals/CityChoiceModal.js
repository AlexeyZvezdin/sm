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

    // let newCity = this.props.city;
    // // let cityInsteadOfDomain = newCity;
    // let cityId = '5d3834ad59201a66b905d9e7';
    // console.log(newCity, ' newCity domainname');
    // if (newCity == true) {
    //   cityId = newCity.city.id;
    // }
    // console.time('fetchstart');
    // const defaultCityData = await fetcher(
    //   `https://client-api.sushi-master.ru/api/v1/city/${cityId}`
    //   // `https://client-api.sushi-master.ru/api/v1/city/current?domain=${cityInsteadOfDomain}`
    // );
    // const cityID = defaultCityData.result.cityId;
    // console.log(cityID, ' CITYID');
    // let [
    //   thisCityCategoriesData,
    //   getAllBannersData,
    //   catalogStructure,
    // ] = await Promise.all([
    //   fetcher(
    //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/?cityId=${cityID}`
    //   ),
    //   fetcher(
    //     `https://client-api.sushi-master.ru/api/v1/catalog/banners?${cityID}`
    //   ),
    //   fetcher(
    //     `https://client-api.sushi-master.ru/api/v1/catalog/structure?${cityID}`
    //   ),
    // ]);
    // 5d3834ac59201a66b905d832 - id abakan
    // 5d3834ad59201a66b905d9e7 - id tyumen
    // debugger;

    // let stickyTabs = [];

    // console.log(catalogStructure, ' catalogStructure');
    // If catalog structure is not exists than you can get errors on _error page or others
    // catalogStructure.result.update.categories.map((item) =>
    //   thisCityCategoriesData.result.update.items.filter((categoryItem) =>
    //     categoryItem.id === item.id ? stickyTabs.push(categoryItem) : ''
    //   )
    // );

    // let stickyTabsWithMain = [
    //   ...stickyTabs,
    //   thisCityCategoriesData.result.update.items.filter(
    //     (item) => item.path === 'main'
    //   )[0],
    // ];

    // let pathname = ctx.query.path;
    // let ProductForPathFiltered = stickyTabsWithMain.filter((item) => {
    //   if (!pathname) {
    //     return item.path === 'main';
    //   }
    //   return item.path === pathname;
    // });
    // console.log(ProductForPathFiltered, ' ProductForPathFiltered');

    // let productsForPath;
    // if (ProductForPathFiltered[0]) {
    //   productsForPath = await fetcher(
    //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/${ProductForPathFiltered[0].id}/products`,
    //     { cityId: cityID }
    //   );
    // } else {
    //   productsForPath = await fetcher(
    //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/5d144d2059201a2c326effbc/products`,
    //     { cityId: cityID }
    //   );
    // }
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
