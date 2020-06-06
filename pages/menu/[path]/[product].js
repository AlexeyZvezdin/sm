import Product from '../../../components/Products/Product';
import './single_product.module.scss';
import { useRouter } from 'next/router';

export default function (props) {
  // console.log(props, ' PROPS INDI PRODUCT');
  if (!props) return '';
  const routerProductPath = useRouter().query.product;
  const mainPagePath = useRouter().query.path;
  console.log(useRouter(), ' ');
  const findProduct = () => {
    // if (mainPagePath == undefined) {
    //   props.thisRouteProducts.items.filter(
    //     (item) => routerProductPath === item.url
    //   );
    // } else {
    props.thisRouteProducts.items.filter(
      (item) => routerProductPath === item.url
    );
  };
  // };
  const product = props.thisRouteProducts.items.filter(
    (item) => routerProductPath === item.url
  );
  if (!product[0]) return '';
  // console.log(product, ' THIS PRODUCT');
  return (
    <div className="single_product">
      <div className="single_product-left">
        <div className="single_product-img">
          <img
            src={`https://client-api.sushi-master.ru/pics/${product[0].mainPictureId}`}
            alt=""
          />
        </div>
      </div>
      <div className="single_product-right">
        <div className="single_product-name">
          <h1>{product[0].name}</h1>
        </div>
        {/* price and quantity */}
        <div className="single_product-price_box">
          <span className="single_product-previous_price">
            {product[0].priceVariants[0].previousPrice == 0
              ? ''
              : product[0].priceVariants[0].previousPrice}
          </span>
          <span>{product[0].priceVariants[0].price}</span>
          <span> ₽ — </span>
          <span>{product[0].priceVariants[0].pieces} шт.</span>
        </div>
        {/* buttons */}
        <div className="single_product__buttons__cart_button">
          <button onClick={() => console.log('clicked')}>
            <span>Хочу</span>
            <span>
              <img src="/img/icons/icon-cart.svg" alt="" />
            </span>
          </button>
          <div className="single_product__buttons__favourite-icon">
            <button></button>
          </div>
        </div>
        {/* description */}
        <div className="single_product-description">
          <p>{product[0].description}</p>
        </div>
        {/* состав */}
        <div className="single_product-compounds">
          {/* <span className="single_product-compound"> */}
          <div className="value-item">
            <span>{product[0].nutritionalElement.weight}</span>
            <span>Вес, г.</span>
          </div>
          <div className="value-item">
            <span>{product[0].nutritionalElement.protein}</span>
            <span>Белки, г.</span>
          </div>
          <div className="value-item">
            <span>{product[0].nutritionalElement.fat}</span>
            <span>Жиры, г.</span>
          </div>
          <div className="value-item">
            <span>{product[0].nutritionalElement.carbohydrate}</span>
            <span>Углеводы, г.</span>
          </div>
          <div className="value-item">
            <span>{product[0].nutritionalElement.kilocalorie}</span>
            <span>Ккал</span>
          </div>
          {/* </span> */}
        </div>
      </div>
    </div>
  );
}
