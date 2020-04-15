import App from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';

class SushiMaster extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // <Provider store={}>
      <Layout>
        <Component {...pageProps}>
          <div className="appdiv"></div>
        </Component>
      </Layout>
      // </Provider>
    );
  }
}

export default SushiMaster;

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
