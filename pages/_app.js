import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import makeStore from '../redux/store';
import withRedux from 'next-redux-wrapper';

export default withRedux(makeStore, { debug: true })(
  class SushiMaster extends App {
    static async getInitialProps({ Component, ctx }) {
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

      const defaultCityData = await defaultCity.json();
      ctx.store.dispatch({
        type: 'POPULATE_INITIAL_STATE',
        payload: defaultCityData,
      });
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
