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

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}
// { data, allCities, error }
function Index(state) {
  const { query } = useRouter();
  const [supportPhone, setSupportPhone] = React.useState();
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

  // подрубить редакс чтобы туда отсюда вкидывать дату, или в куки
  return (
    <>
      {/* <h1>Healoo {supportPhone}</h1> */}
      {/* {JSON.stringify(state)} */}
      {/* {cityName ? (
          <p>{cityName}</p>
        ) : (
          'Failed to load data, please refresh the page'
        )} */}
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {state.initialReducer.products.items.map((el) => {
          return (
            <div className="product">
              <img
                data-src={`https://client-api.sushi-master.ru/pics/${el.mainPictureId}?width=400`}
                alt=""
                style={{ width: '300px', objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default connect((state) => state)(Index);
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
