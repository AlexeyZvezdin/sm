import Link from 'next/link';
import Router from 'next/router';
import styles from './index.module.scss';
// import loader from '../public/img/loader.gif';
import Header from './Basic/Header';
import StickyHeader from '../components/Basic/StickyHeader';
import { connect } from 'react-redux';

function Layout(props) {
  // Не работает, бэд сетСтейт
  // props.dispatchCategoriesWithMain(stickyTabsWithMain);
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      stickyTabsWithMain: props.stickyTabsWithMain,
      currentPageIndex: index,
    });
  });

  console.log(props.stickyTabs.stickyTabs, ' stickyTabs');
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

const mapStateToProps = ({ store }) => ({
  categories: store.categories,
  catalogStructure: store.catalogStructure,
  stickyTabs: store.stickyTabs,
});

export default connect(mapStateToProps)(Layout);
