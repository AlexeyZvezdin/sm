import { connect } from 'react-redux';

import fetcher from '../../../utils/fetcher';

class index extends React.Component {
  componentDidMount() {
    const AddressId = JSON.parse(localStorage.getItem('currentPickUpAddress'))
      .id;

    const deliveryAddress = localStorage.getItem('currentDeliveryAddress');

    const productsFromStorage = JSON.parse(
      localStorage.getItem('cardProducts')
    );
    // Можно сделать иначе ну да ладно, итерирую значения продуктов в корзине подставляя нужное
    // для ордер запроса и если колво равно нулю то фильтрую из массива
    const prodsToOrder = Object.values(productsFromStorage)
      .map((item) => {
        if (!item.quantity) {
          return;
        }
        return {
          count: item.quantity,
          priceVariantId: item.product.priceVariants[0].id,
          productId: item.product.id,
          type: 'DEFAULT',
        };
      })
      .filter((item) => item !== undefined);
    console.log(prodsToOrder, ' prodsToOrder');
    // Поставить исключение когда продуктов нет
    const options = {
      addressId: AddressId ? AddressId : '',
      cityId: this.props.city.cityId,
      deliveryType: deliveryAddress ? 'DELIVERY' : 'PICKUP',
      products: prodsToOrder,
      promocode: '',
    };
  }

  render() {
    return <h1>I am order</h1>;
  }
}

const mapState = ({ store: { city } }) => ({
  city,
});

export default connect(mapState)(index);
