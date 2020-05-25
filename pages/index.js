import Layout from '../components/Layout';
import Link from 'next/link';
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
  console.log(props, ' PROPS');
  const { query } = useRouter();
  const [bannerCounter, setBannerCounter] = React.useState(0);
  // const products =
  //   filteredEntityByViewIntervals(Object.values(props.products.items)) || [];
  const filteredBanners = filteredEntityByViewIntervals(props.banners.items);
  //   <div key={el.id} dangerouslySetInnerHTML={{ __html: el.description }} />
  const banners = splittedBanners(filteredBanners);
  // splittedProductsForMainPage
  // const mainProducts = props.products.items.slice(0, 8);
  const renderProducts = () => (
    <div className={styles['products']}>
      {/* {props.products.items.map((el) => {
        return (
          <div className={styles['product']} key={el.id}>
            <img
              data-src={`https://client-api.sushi-master.ru/pics/${el.mainPictureId}?width=400`}
              alt=""
            />
            <h3 className={styles['product-name']}>{el.name}</h3>
            <p className={styles['product-description']}>{el.description}</p>
          </div>
        );
      })} */}
    </div>
  );

  const resolveBanners = (products) =>
    banners.map((el, index) =>
      renderBanners(el, index, products.slice(index, index + 2))
    );

  {
    /* {JSON.stringify(state)} */
  }

  return (
    <>
      {/* {resolveBanners(mainProducts)} */}
      {/* {renderProducts()} */}
    </>
  );
}
export default connect(({ store }) => ({
  banners: store.banners,
}))(Index);

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

// Index.getInitialProps = async function () {
//   // const defaultCityRequest = process.env.API + '/api/v1/city/default';
//   const defaultCity = await fetch(
//     'https://client-api.sushi-master.ru/api/v1/city/default'
//   );
//   let data = await defaultCity.json();
//   // город айди
//   let cityId = data.result.cityId;
//   const config = {
//     params: {
//       cityId: cityId,
//     },
//   };
// console.log(data.result, ' data.result');
// const allCitiesReq = await fetch(
//   'https://client-api.sushi-master.ru/api/v1/city'
// );

// const allCities = await allCitiesReq.json();

// const allCategories = await fetch(
//   `https://client-api.sushi-master.ru/api/v1/catalog/categories/all?cityId=${cityId}`
// );
// let categories = await allCategories.json();
// console.log(categories, ' categories');
// const phoneReq = await fetch(
//   `https://client-api.sushi-master.ru/api/v1/catalog/categories/all`
// );
// let  = await allCategories.json();
// console.log(allCategoriesData.result.items, ' allCategoriesData');
// const products = await fetch(
//   `https://client-api.sushi-master.ru/api/v1/catalog/products/`
// );

// let products = await products.json();
// console.log(products, ' products');
//   return {
//     data,
//     // allCities,
//     // categories,
//   };
// };

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
