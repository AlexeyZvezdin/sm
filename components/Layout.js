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
    if (props.path === undefined) {
      return item.itemName === 'main';
    }
    return item.itemName === props.path;
  });

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      stickyTabsWithMain: props.stickyTabs.stickyTabsWithMain,
      currentPageIndex: index,
      thisRouteProducts,
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
