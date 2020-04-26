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
import Swiper from 'react-id-swiper';
import bannersStyles from './banners.module.scss';
import { filteredEntityByViewIntervals } from '../utils/filteredEntityByViewIntervals';

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}
// { data, allCities, error }
function Index(props) {
  const { query } = useRouter();
  const [supportPhone, setSupportPhone] = React.useState();
  console.time('PandB');
  const products =
    filteredEntityByViewIntervals(Object.values(props.products.items)) || [];
  const filteredBanners = filteredEntityByViewIntervals(props.banners.items);
  // console.log(filteredBanners.length, ' filteredBanners.length');

  console.timeEnd('PandB');
  // console.log(
  //   props.products.items[0],
  //   ' props.products.items'
  // );
  const swiperParams = {
    // lazy: true,
    // pagination: {
    //   dynamicBullets: true,
    //   clickable: true,
    //   el: '.swiper-pagination',
    // },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // containerClass: 'swiper-container banner-swiper-wrapper',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  const estimateBannersRender = () => {
    const banners = state.banners.items;
  };

  //   <div key={el.id} dangerouslySetInnerHTML={{ __html: el.description }} />
  // сначала надо засплиттить баннеры по несколько штук
  const splittedBanners = (filteredBanners) => {
    let bannersLength = filteredBanners.length;
    let newfilteredBanners = filteredBanners;
    const isEven = !(bannersLength % 2);
    let splittedBanners = [];
    if (isEven) {
      while (newfilteredBanners.length > 0) {
        let slicedArr = newfilteredBanners.splice(0, 4);
        splittedBanners.push(slicedArr);
      }
    } else {
      while (newfilteredBanners.length > 0) {
        let slicedArr = newfilteredBanners.splice(0, 3);
        splittedBanners.push(slicedArr);
      }
    }

    console.log(splittedBanners, ' splittedBanners');
    return splittedBanners;
  };

  splittedBanners(filteredBanners);
  const renderBanners = () => (
    <div className="banner">
      {filteredBanners.length > 1 ? (
        <div className={bannersStyles['banners__swiper-container']}>
          <Swiper
            shouldSwiperUpdate={true}
            rebuildOnUpdate={true}
            {...swiperParams}
          >
            {filteredBanners.map((el) => (
              <img
                style={{
                  padding: '1px',
                }}
                data-src={`https://client-api.sushi-master.ru/pics/${el.pictureId}`}
              />
            ))}
          </Swiper>
        </div>
      ) : (
        'no banners'
      )}
    </div>
  );

  const renderProducts = () => (
    <div className={styles['products']}>
      {props.products.items.map((el) => {
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
      })}
    </div>
  );

  const renderMix = () => {
    <div className={bannersStyles['products__grid']}></div>;
  };

  {
    /* {JSON.stringify(state)} */
  }
  return (
    <>
      {renderBanners()}
      {renderProducts()}
    </>
  );
}
export default connect(({ initialReducer }) => ({
  products: initialReducer.products,
  banners: initialReducer.banners,
  categories: initialReducer.categories,
}))(Index);

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
