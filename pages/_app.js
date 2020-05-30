import fetcher from '../utils/fetcher';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import makeStore from '../redux/store';
import withRedux from 'next-redux-wrapper';
import CityChoiceModal from '../components/Modals/CityChoiceModal';
import { dispatchCategoriesWithMain } from '../redux/actions/dispatchStickyTabsWithMain';
import './index.module.scss';
// import { wrapper } from '../redux/store';
// убирая дебаг на фолс можно контролировать высеры в консоль
export default withRedux(makeStore, { debug: false })(
  class SushiMaster extends App {
    static async getInitialProps({ Component, ctx }) {
      //   const cityByIpOrDomain = await fetch(
      //     'https://client-api.sushi-master.ru/api/v1/city/current?domain=abakan'
      //   );

      // тут пока по двоеточию поделил чтобы чекнуть что работает, с доменами будет так же
      let domain = ctx.req ? ctx.req.headers.host.split(':', 1) : '';
      // console.log(domain, ' DOMAIN');

      let cityInsteadOfDomain = 'abakan';

      const defaultCityData = await fetcher(
        `https://client-api.sushi-master.ru/api/v1/city/current?domain=${cityInsteadOfDomain}`
      );
      console.time('fetchstart');

      // 5d3834ad59201a66b905d9e7 - id abakan
      const thisCityCategoriesData = await fetcher(
        `https://client-api.sushi-master.ru/api/v1/catalog/categories/?cityId=${defaultCityData.result.cityId}`
      );
      // debugger;
      // const category_id = thisCityCategoriesData.result.update.items[0].id;
      // const thisCategoryProductsData = await fetcher(
      //   `https://client-api.sushi-master.ru/api/v1/catalog/categories/${category_id}/products`
      // );
      const getAllBannersData = await fetcher(
        `https://client-api.sushi-master.ru/api/v1/catalog/banners?${defaultCityData.result.cityId}`
      );
      const catalogStructure = await fetcher(
        `https://client-api.sushi-master.ru/api/v1/catalog/structure?${defaultCityData.result.cityId}`
      );

      let stickyTabs = [];
      // console.log(catalogStructure, ' catalogStructure');
      catalogStructure.result.update.categories.map((item) =>
        thisCityCategoriesData.result.update.items.filter((categoryItem) =>
          categoryItem.id === item.id ? stickyTabs.push(categoryItem) : ''
        )
      );

      let stickyTabsWithMain = [
        ...stickyTabs,
        thisCityCategoriesData.result.update.items.filter(
          (item) => item.path === 'main'
        )[0],
      ];

      const cityID = defaultCityData.result.cityId;

      let pathname = ctx.query.path;
      let ProductForPathFiltered = stickyTabsWithMain.filter((item) => {
        if (!pathname) {
          return item.path === 'main';
        }
        return item.path === pathname;
      });
      // console.log(ProductForPathFiltered, ' ProductForPathFiltered');

      let productsForPath;
      if (ProductForPathFiltered[0]) {
        productsForPath = await fetcher(
          `https://client-api.sushi-master.ru/api/v1/catalog/categories/${ProductForPathFiltered[0].id}/products`,
          { cityId: cityID }
        );
      } else {
        productsForPath = [];
      }
      // Предыдущее рещение было не лучшим
      // const promises = stickyTabsWithMain.map(async (item) => {
      //   const promResult = await fetcher(
      //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/${item.id}/products`,
      //     { cityId: cityID }
      //   );
      //   const itemName = item.path;
      //   return { ...promResult.result, itemName };
      // });
      // const allProducts = await Promise.all(promises);
      ctx.store.dispatch(
        dispatchCategoriesWithMain(stickyTabsWithMain, stickyTabs)
      );
      ctx.store.dispatch({
        type: 'INITIAL_CITY_STATE',
        payload: defaultCityData,
      });
      ctx.store.dispatch({
        type: 'CATALOG_STRUCTURE',
        payload: catalogStructure,
      });
      ctx.store.dispatch({
        type: 'INITIAL_CATEGORIES',
        payload: thisCityCategoriesData,
      });
      ctx.store.dispatch({
        type: 'INITIAL_BANNERS',
        payload: getAllBannersData.result.update,
      });
      ctx.store.dispatch({
        type: 'INITIAL_PRODUCTS',
        // payload: [allProducts],
        payload: [productsForPath],
      });

      console.timeEnd('fetchstart');

      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}),
        },
      };
    }
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <CityChoiceModal />
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </Provider>
      );
    }
  }
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// static async getInitialProps(appContext) {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
