import DatePicker from 'react-date-picker';

import fetcher from '../../utils/fetcher';

// TODO: при переключении города обнулять адреса
// TODO: Перед нажатием на оформить и переход сюда вызывать модалку выобра адреса. Если перейдут так, что высветить алерт и редирект на оформление
class DPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    date: new Date(),
    method: '',
  };

  componentDidMount() {
    const method =
      this.props.method === 'courier'
        ? 'currentDeliveryAddress'
        : 'currentPickUpAddress';
    this.setState({
      ...this.state,
      method: method,
    });
    this.props.fixTime ? this.props.fixTime(this.state.date) : '';
    const deliveryMethodInfo = JSON.parse(localStorage.getItem(method));
  }

  handleChange = (date) => {
    this.setState({ ...this.state, date: date });
    this.props.fixTime ? this.props.fixTime(date) : '';
  };
  render() {
    return (
      <div className="date_picker">
        <div className="date_picker-date">
          <p className="date_picker-label">Дата</p>
          <DatePicker onChange={this.handleChange} value={this.state.date} />
        </div>
      </div>
    );
  }
}

export default DPicker;
// https://client-api.sushi-master.ru/api/v1/delivery/time/lines
// ?longitude=65.5727441&latitude=57.1575045
// &cityId=5d3834ad59201a66b905d9e7
// &date=2020-06-22&_cacheCleaner=1592775418112
