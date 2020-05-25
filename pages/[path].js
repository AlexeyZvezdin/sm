import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import fetcher from '../utils/fetcher';
import SubNavPage from '../components/SubNavPage/SubNavPage';
import s from './subroutes.module.scss';
function subroute(props) {
  //   5d144d2059201a2c326effbc
  // query: { path: 'rolly'; }
  //   let city = await store.getState().store.city;
  //   let stickyTabsWithMain = await store.getState().store.stickyTabsWithMain;
  //   console.log(stickyTabsWithMain, ' stickyTabsWithMain');
  //   let cityID = city.cityId;
  //   let queryPath = query.path;
  //   let fetchID = await stickyTabsWithMain.find((item) => item.path === queryPath)
  //     .id;
  //   ${fetchID}
  //   let products = fetcher(
  //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/5d144d2059201a2c326effbc/products`
  //       { cityId: cityID }
  //   );
  //   console.log(products, ' products');
  //   console.log(queryPath, ' stickyTabsWithMain queryPath');
  //   console.log(fetchID, ' stickyTabsWithMain fetchID');
  console.log(props.products, ' products');
  return (
    <div className={s['']}>
      <p>{JSON.stringify(props.products)}</p>
      {/* <SubNavPage fetchID={fetchID} cityID={cityID} /> */}
    </div>
  );
}

const mapStateToProps = (
  { store: { city, products } },
  {
    router: {
      query: { path },
    },
    stickyTabsWithMain,
  }
) => {
  return { city: city, products: products };
};

export default withRouter(connect(mapStateToProps)(subroute));
