import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// import fetch from 'unfetch';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default function Index({ data, error }) {
  const { query } = useRouter();
  // не попадает в браузер, можно пользоваться
  // console.log(process.env.BASE_API, ' process.env.BASE_API');
  /**
   *   Когда надо чтобы отрабатывало на фронте юзается useSWR
   *   В данном случае нам это не надо, сео.
   *
   */
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const allData = data?.result;
  const cityName = allData?.name;
  const cityId = allData?.id;
  const supportPhone = allData?.supportPhone;
  React.useEffect(() => {
    supportPhone
      ? Cookies.set('supportPhone', supportPhone, { expires: 3 })
      : (supportPhone = false);
    if (cityId == true) isLoading = false;
  });

  // подрубить редакс чтобы туда отсюда вкидывать дату, или в куки
  return (
    <>
      <h1>Healoo {supportPhone}</h1>
      <>
        {JSON.stringify(allData)}
        {cityName ? (
          <p>{cityName}</p>
        ) : (
          'Failed to load data, please refresh the page'
        )}
      </>
    </>
  );
}

Index.getInitialProps = async function () {
  // const defaultCityRequest = process.env.API + '/api/v1/city/default';
  const defaultCity = await fetch(
    'https://client-api.sushi-master.ru/api/v1/city/default'
  );
  let data = await defaultCity.json();
  let cityId = data.result.cityId;
  console.log(cityId, ' cityId');
  const config = {
    params: {
      cityId: cityId,
    },
  };

  const allCategories = await fetch(
    `https://client-api.sushi-master.ru/api/v1/catalog/categories/all`
  );
  let allCategoriesData = await allCategories.json();
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
  return {
    data,
  };
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
