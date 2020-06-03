import Link from 'next/link';
import Router from 'next/router';
import styles from './index.module.scss';
// import loader from '../public/img/loader.gif';
import Header from './Basic/Header';
import StickyHeader from '../components/Basic/StickyHeader';
import Footer from './Basic/Footer';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Error from '../pages/_error';
import FixedFooter from './Basic/FixedFooter';

import City from './Modals/City'
import AddressCheck from './Basic/AddressCheck'
function Layout(props) {
  // console.log(props, ' PROPS');
  // Не работает, бэд сетСтейт
  // props.dispatchCategoriesWithMain(stickyTabsWithMain);
  // const thisRouteProducts = props.products[0].find((item) => {
  //   // Если главная страница, то надо по-особому искать её имя
  //   if (props.path === undefined) {
  //     return item.itemName === 'main';
  //   }
  //   return item.itemName === props.path;
  // });

  const thisRouteProducts = props.products[0].result;

  const thisRouteTab = props.stickyTabs.stickyTabs.find(
    (item) => item.path === props.path
  );
  // Если главная страница, то не искать, иначе страница упадет
  const thisRouteBanner =
    props.path === undefined
      ? false
      : props.banners.items.find((item) =>
          thisRouteTab.banners[0]
            ? thisRouteTab.banners[0].id === item.id
            : false
        );
  // console.log(thisRouteBanner, ' thisRouteBanner');
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      tab: thisRouteTab,
      currentPageIndex: index,
      thisRouteProducts,
      thisRouteBanner,
      // city: props.city,
    });
  });
  return (
    <>
      <City ><AddressCheck/></City>
      <Header />
      <StickyHeader stickyTabs={props.stickyTabs.stickyTabs} />
      <main>
        {/* возможно в будущем уберу отсюда */}
        <div className={styles['container__full']}>
          {/* {this.state.loaded === 'no' ? (
              <div
                style={{
                  margin: '50px',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <img src="/img/loader.gif" alt="loader" />
              </div>
            ) : ( */}
          <>{children}</>
          {/* )} */}
        </div>
      </main>
      <Footer />
      <FixedFooter />
      <style jsx global>{`
        body {
          overflow: ${props.openModalBg === true ? 'hidden' : 'none'};
        }
      `}</style>
    </>
  );
}

const mapState = (
  {
    store: {
      city,
      products,
      banners,
      categories,
      catalogStructure,
      stickyTabs,
      pathname,
    },
    modal: { openModalBg },
  },
  {
    router: {
      query: { path },
    },
  }
) => {
  return {
    catalogStructure,
    categories,
    city,
    products,
    path,
    banners,
    stickyTabs,
    openModalBg,
  };
};

export default withRouter(connect(mapState)(Layout));
