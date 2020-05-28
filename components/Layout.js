import Link from 'next/link';
import Router from 'next/router';
import styles from './index.module.scss';
// import loader from '../public/img/loader.gif';
import Header from './Basic/Header';
import StickyHeader from '../components/Basic/StickyHeader';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

function Layout(props) {
  // Не работает, бэд сетСтейт
  // props.dispatchCategoriesWithMain(stickyTabsWithMain);
  const thisRouteProducts = props.products[0].find((item) => {
    // Если главная страница, то надо по-особому искать её имя
    if (props.path === undefined) {
      return item.itemName === 'main';
    }
    return item.itemName === props.path;
  });

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
  console.log(thisRouteBanner, ' thisRouteBanner');
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      tab: thisRouteTab,
      currentPageIndex: index,
      thisRouteProducts,
      thisRouteBanner,
    });
  });

  console.log(props.stickyTabs.stickyTabsWithMain, ' stickyTabs');
  return (
    <>
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
      <footer className="container">
        <div>&copy; {new Date().getFullYear()}</div>
        <div>
          <h3>FOOTER</h3>
        </div>
      </footer>
      <style jsx global>{`
        body {
          // overflow: hidden; сделать надо для модалки потом будет
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
    },
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
  };
};

export default withRouter(connect(mapState)(Layout));
