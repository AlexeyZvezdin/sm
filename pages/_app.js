import {
  BASE_URL,
  DEVICE_TYPE_WEB,
  HEADER_AUTH_TOKEN,
  HEADER_DEVICE_TOKEN,
  HEADER_DEVICE_TYPE,
} from '../config/api';
import { getDeviceToken } from '../config/device-token';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import makeStore from '../redux/store';
import withRedux from 'next-redux-wrapper';
// убирая дебаг на фолс можно контролировать высеры в консоль
export default withRedux(makeStore, { debug: false })(
  class SushiMaster extends App {
    static async getInitialProps({ Component, ctx }) {
      const options = {
        headers: {
          [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
          [HEADER_DEVICE_TOKEN]: getDeviceToken(),
        },
      };
      //   const cityByIpOrDomain = await fetch(
      //     'https://client-api.sushi-master.ru/api/v1/city/current?domain=abakan'
      //   );
      const allCitiesReq = await fetch(
        'https://client-api.sushi-master.ru/api/v1/city'
      );
      const allCities = await allCitiesReq.json();
      // тут пока по двоеточию поделил чтобы чекнуть что работает, с доменами будет так же
      let domain = ctx.req.headers.host.split(':', 1) || '';
      // console.log(domain, ' DOMAIN');

      let cityInsteadOfDomain = 'abakan';

      const defaultCity = await fetch(
        `https://client-api.sushi-master.ru/api/v1/city/current?domain=${cityInsteadOfDomain}`
      );
      console.time('fetchstart');
      const defaultCityData = await defaultCity.json();
      console.log(
        defaultCityData.result.cityId,
        ' defaultCityData.result.cityId'
      );
      // const thisCityCategories = await fetch(
      //   `https://client-api.sushi-master.ru/api/v1/catalog/categories?cityId=${defaultCityData.result.cityId}`
      // );
      // 5d3834ad59201a66b905d9e7 - id abakan
      const thisCityCategories = await fetch(
        `https://client-api.sushi-master.ru/api/v1/catalog/categories/all?cityId=${defaultCityData.result.cityId}`,
        options
      );
      const thisCityCategoriesData = await thisCityCategories.json();
      // debugger;
      const category_id = thisCityCategoriesData.result.items[0].id;
      // console.log(category_id, ' category_id');
      const thisCategoryProducts = await fetch(
        `https://client-api.sushi-master.ru/api/v1/catalog/categories/${category_id}/products`,
        options
      );
      const thisCategoryProductsData = await thisCategoryProducts.json();

      const getAllBanners = await fetch(
        `https://client-api.sushi-master.ru/api/v1/catalog/banners?${defaultCityData.result.cityId}`,
        options
      );

      const getAllBannersData = await getAllBanners.json();
      console.log(getAllBannersData, ' getAllBannersData');

      ctx.store.dispatch({
        type: 'INITIAL_BANNERS',
        payload: getAllBannersData.result.update,
      });
      ctx.store.dispatch({
        type: 'POPULATE_INITIAL_STATE',
        payload: defaultCityData,
      });
      ctx.store.dispatch({
        type: 'INITIAL_CATEGORIES',
        payload: thisCityCategoriesData,
      });
      ctx.store.dispatch({
        type: 'INITIAL_PRODUCTS',
        payload: thisCategoryProductsData,
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
