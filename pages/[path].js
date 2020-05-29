import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import fetcher from '../utils/fetcher';
import Product from '../components/Products/Product';
import { filteredEntityByViewIntervals } from '../utils/filteredEntityByViewIntervals';
import sortWithSortIndex from '../utils/sortWithSortIndex';
import s from './subroutes.module.scss';
import Error from '../pages/_error';

/**
 * TODO: Сделать жсдокс нормальыне на файлы
 * @param {} props
 */

function subroute(props) {
  console.log(props, ' subroute');

  const products = filteredEntityByViewIntervals(props.thisRouteProducts.items);
  const bannerPath = props.tab.banners[0]
    ? `https://client-api.sushi-master.ru/pics/${props.thisRouteBanner.pictureId}?width=400`
    : '';
  // console.log(props.thisRouteProducts.items, ' props.thisRouteProducts.items');
  // console.log(products, ' products');
  return (
    <>
      <div className="subcategory-selector">
        <h1 className="subcategory-selector__selected">{props.tab.name}</h1>
      </div>
      <div className={s['route-container']}>
        <div className={s['route-banner']}>
          <img className={s['route-banner-pic']} src={bannerPath} alt="" />
        </div>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <style jsx>{`
        .subcategory-selector {
          background-color: #fff;
          height: 80px;
          padding: 20px;
          box-shadow: inset 0 -1px 0 0 rgba(29, 29, 29, 0.07);
        }
        .subcategory-selector__selected {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          font-family: Pusia;
          font-weight: 800;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.45;
          letter-spacing: 1px;
          color: #1d1d1d;
          text-transform: uppercase;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       'rolly', // See the "paths" section below
//     ],
//     fallback: false, // See the "fallback" section below
//   };
// }

// export async function getStaticProps() {
//   return {};
// }

// subroute.getInitialProps = async (ctx) => {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const resqueMe = await fetcher(
//     `http://fakerestapi.azurewebsites.net/api/Books/1`
//   );
//   console.log(resqueMe, ' RESPOSEN \n\n\n\n\n\n\n\n\n\n\n\n');
//   // Pass post data to the page via props
//   return { props: resqueMe };
// };

// export async function getStaticPaths() {
//   const paths = ['rolly'];
//   return {
//     paths: [
//       // String variant:
//       '/rolly',
//       // Object variant:
//       // { params: { slug: 'rolly' } },
//     ],
//     // Внимательно тут, может на эбауте и других не включенных в список ебануть 404
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const resqueMe = await fetcher(
//     `http://fakerestapi.azurewebsites.net/api/Books/1`
//   );
//   console.log(resqueMe, ' RESPOSEN \n\n\n\n\n\n\n\n\n\n\n\n');
//   // Pass post data to the page via props
//   return { props: resqueMe };
// }

// subroute.getInitialProps = async (ctx) => {
//   console.log(" DO YOU EVEN WORK ?!?!?!?!? \n\n\n\n\n\n\n")
//   console.log(ctx.route, ' CTX');
//   const routeRRR = ctx.route;
//   return { routeRRR: 'data' };
// };

export default withRouter(
  connect(({ store }) => ({
    catalogStructure: store.catalogStructure.update.categories,
  }))(React.memo(subroute))
);

// Я сам лучше сделаю
// const [filters, setFilters] = React.useState('');
// const showProducts = () => {
//   const productIds = sortWithSortIndex(
//     props.thisRouteProducts.items.filter((product) => product.sortIndex !== 0)
//   );
//   const products = props.thisRouteProducts.items
//     .map((product) => product.id)
//     .filter((id) => productIds.indexOf(id) > -1)
//     .sort((currId, nextId) => {
//       const currIndex = props.thisRouteProducts.items.find(
//         (product) => product.id === currId
//       ).sortIndex;
//       const nextIndex = props.thisRouteProducts.items.find(
//         (product) => product.id === nextId
//       ).sortIndex;
//       return currIndex - nextIndex;
//     })
//     .reduce((product, id) => {
//       product[id] = props.thisRouteProducts.items.find(
//         (product) => product.id === id
//       );
//       return product;
//     }, {});

//   const filteredProductIds = Object.keys(products).filter(
//     (id) => productIds.indexOf(id) > -1
//   );

//   const renderSortableProducts = () => {
//     const filters = filters ? filters : this.props.filters;
//     if (this.state.sortBy === 'default') {
//       if (filters.length)
//         return Object.values(products)
//           .filter((product) => {
//             return product.filterIds.some((id) => filters.indexOf(id) > -1);
//           })
//           .map((product) => product.id);
//       else return filteredProductIds;
//     } else {
//       const sortableProducts = orderBy(
//         products,
//         'priceVariants[0].price',
//         this.state.sortBy
//       );
//       // desc - по убывающей
//       // asc - по возрастающей
//       // default - сортируем по умолчанию
//       if (filters.length)
//         return sortableProducts
//           .filter((product) => product.filterIds.includes(...filters))
//           .map((product) => product.id);
//       else return sortableProducts.map((product) => product.id);
//     }
//   };
//   // console.log(renderSortableProducts(), ' PRODUCTS');
// };
