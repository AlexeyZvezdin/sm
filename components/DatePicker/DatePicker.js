import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';

// TODO: при переключении города обнулять адреса

function DPicker(props) {
  const method =
    props.method === 'courier'
      ? 'currentDeliveryAddress'
      : 'currentPickUpAddress';
  const [value, onChange] = React.useState(new Date());
  const [result, setRes] = React.useState();
  console.log(value, ' VALUE');
  React.useEffect(() => {
    const deliveryMethodInfo = JSON.parse(localStorage.getItem(method));
    console.log(deliveryMethodInfo, ' deliveryMethodInfo');
    const res = fetcher(
      `https://client-api.sushi-master.ru/api/v1/delivery/time/lines`
    );
  });
  return (
    <div className="date_picker">
      <p className="date_picker-label">Дата</p>
      <DatePicker onChange={onChange} value={value} />
      <h1>ты че охуел</h1>
    </div>
  );
}

const mapState = ({ store: { city } }) => city;
export default connect(mapState)(DPicker);
