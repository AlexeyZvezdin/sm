import Layout from '../components/Layout';
import Link from 'next/link';
import { withRouter } from 'next/router';
/**  However, isomorphic-unfetch requires an absolute URL or it will fail.
 *  I’m assuming it has something to do with the different environments (client & server)
 *  on which your code can be executed.
 *  Relative URLs are just not explicit & reliable enough in this case
 */
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';
// import fetch from 'unfetch';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styles from './index.module.scss';
import { filteredEntityByViewIntervals } from '../utils/filteredEntityByViewIntervals';
import { splittedBanners } from '../components/Banners/splittedBanners';
import { renderBanners } from '../components/Banners/renderBanners';

// { data, allCities, error }
/**
 * @param {number} currentPageIndex — seems to me useless num, but let's see to the future
 * @param {arrayOf[Object]} stickyTabsWithMain — page categories info
 * @param {count: number, items: arrayOf[Object]} right now all banners without any filtration
 * @param {function dispatch(action) {}} Redux dispatch
 * @param {products} {count: number, items: arrayOf[Object]}
 *
 *
 *
 */
function Index(props) {
  console.log(props, ' PROPS main');
  const { query } = useRouter();
  const [bannerCounter, setBannerCounter] = React.useState(0);
  // const products =
  //   filteredEntityByViewIntervals(Object.values(props.products.items)) || [];
  const filteredBanners = filteredEntityByViewIntervals(props.banners.items);
  //   <div key={el.id} dangerouslySetInnerHTML={{ __html: el.description }} />
  const banners = splittedBanners(filteredBanners);
  // splittedProductsForMainPage
  // Здесь какого-то хуя первым идет васаби
  const products = filteredEntityByViewIntervals(
    props.thisRouteProducts.items
  ).slice(1);

  console.log(products, ' PRODUCTS INDEX');
  const resolveBanners = (products, counter = 0) =>
    banners.map((el, index) =>
      renderBanners(el, index, products.slice(counter, (counter += 2)))
    );

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      thisRouteProducts,
      currentPageIndex: index,
    });
  });

  return (
    <>
      {resolveBanners(products)}
      {/* {renderProducts()} */}
      <p>{JSON.stringify(props.thisRouteProducts)}</p>
      {children}
    </>
  );
}

const mapState = (
  { store: { city, banners } },
  {
    router: {
      query: { path },
    },
  }
) => {
  return { city, path, banners };
};

export default withRouter(connect(mapState)(Index));
// export default connect(({ store }) => ({
//   banners: store.banners,
// }))(Index);

Index.getInitialProps = async ({ store, query }) => {
  // console.log(ctx, ' CTX!!!!!!!');
  // Имеется в наличии еще AppTree
  // asPath: "/rolly"
  // isServer: false;
  // pathname: '/[path]';
  // query: { path: 'rolly'; }
  // let city = await store.getState().store.city;
  // let stickyTabsWithMain = await store.getState().store.stickyTabsWithMain;
  // console.log(stickyTabsWithMain, ' stickyTabsWithMain');
  //   let cityID = city.cityId;
  //   let queryPath = query.path;
  //   let fetchID = await stickyTabsWithMain.find((item) => item.path === queryPath)
  //     .id;
  //   let products = await fetcher(
  //     `https://client-api.sushi-master.ru/api/v1/catalog/categories/${fetchID}/products`,
  //     { cityId: cityID }
  //   );
  //   console.log(products, ' products');
  //   console.log(queryPath, ' stickyTabsWithMain queryPath');
  //   console.log(fetchID, ' stickyTabsWithMain fetchID');

  return { city };
};

/**
 * TODO: Ниже расположен тестовый код, в будущем удалить
 */

// const PostLink = (props) => (
//   <li>
//     <Link href={`/p/[id]}`} as={`/p/${props.id}`}>
//       <a {...props}>{props.title}</a>
//     </Link>
//   </li>
// );

// const Index = (props) => {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <p>Hello Next.js</p>
//       <ul>
//         {/* <PostLink title="Hello Next.js" id="hello-nextjs" />
//         <PostLink title="Learn Next.js is awesome" id="learn-nextjs" />
//         <PostLink title="Deploy apps with Zeit" id="deploy-nextjs" /> */}
//         {props.shows.map((show) => (
//           <li key={show.id}>
//             <Link href="/p/[id]" as={`/p/${show.id}`}>
//               <a>{show.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// };

// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(data, `Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map((entry) => entry.show),
//   };
// };

// const { data, error } = useSWR(
//   () => `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
//   fetcher
// );

// const { data, error } = useSWR(
//   () => 'https://client-api.sushi-master.ru/api/v1/city/default',
//   fetcher
// );
// console.log(data, ' I AM RES ON FRONT');

// TODO: after 26 of April

// не попадает в браузер, можно пользоваться
// console.log(process.env.BASE_API, ' process.env.BASE_API');
/**
 *   Когда надо чтобы отрабатывало на фронте юзается useSWR
 *   В данном случае нам это не надо, сео.
 *
 */
// The following line has optional chaining, added in Next.js v9.1.5,
// is the same as `data && data.author`

// console.log(allCities, ' allCities');
//  let allData = data?.result;
//  let cityName = allData?.name;
//  let cityId = allData?.id;
//  React.useEffect(() => {
//    // да хуй сделаешь ето через куки надо через редакс онли
//    // да и куки надо с бекенда ставить уже
//    allData?.supportPhone
//      ? Cookies.set('supportPhone', allData.supportPhone, {
//          expires: 3,
//        }) && setSupportPhone(allData.supportPhone)
//      : setSupportPhone();
//    if (cityId == true) isLoading = false;
//  });
