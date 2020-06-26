import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';

// TODO: при переключении города обнулять адреса
// TODO: Перед нажатием на оформить и переход сюда вызывать модалку выобра адреса. Если перейдут так, что высветить алерт и редирект на оформление
function DPicker(props) {
  const method =
    props.method === 'courier'
      ? 'currentDeliveryAddress'
      : 'currentPickUpAddress';
  const [value, onChange] = React.useState(new Date());
  const [result, setRes] = React.useState();
  const [currentExistingAddress, setExistingAddress] = React.useState();
  // console.log(value, ' VALUE');
  React.useEffect(() => {
    const deliveryMethodInfo = JSON.parse(localStorage.getItem(method));
    // console.log(deliveryMethodInfo, ' deliveryMethodInfo');
    // setExistingAddress(deliveryMethodInfo);
  });

  const renderTimeLines = (method) => {
    // if (!currentExistingAddress) {
    //   return <input disabled placeholder="Время" type="text" />;
    // } else if (method === 'currentDeliveryAddress') {
    //   console.log(currentExistingAddress, ' currentExistingAddress');
    // } else if (method === 'currentPickUpAddress') {
    //   console.log(currentPickUpAddress, ' currentPickUpAddress');
    //   return 'currentPickUpAddress';
    // } else {
    //   console.log('This is an error from renderTimeLines');
    // }
  };

  return (
    <div className="date_picker">
      <div className="date_picker-date">
        <p className="date_picker-label">Дата</p>
        <DatePicker onChange={onChange} value={value} />
      </div>
      <div className="date_picker-time">{renderTimeLines()}</div>
    </div>
  );
}

const mapState = ({ store: { city } }) => city;
const mapDispatch = (dispatch) => ({
  dispatchAddressModalStatus: (status) =>
    dispatch({ type: 'OPEN_ADDRESS_MODAL' }),
});
export default connect(mapState, mapDispatch)(DPicker);
// https://client-api.sushi-master.ru/api/v1/delivery/time/lines
// ?longitude=65.5727441&latitude=57.1575045
// &cityId=5d3834ad59201a66b905d9e7
// &date=2020-06-22&_cacheCleaner=1592775418112
