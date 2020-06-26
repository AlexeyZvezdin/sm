// export default class DateIntervals extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {};

//   async componentDidMount() {
//     //  props.deliverySwitcher,
//     //   props.pickupSwitcher,
//     //   props.cityId,
//     //    props.deliveryAddress,
//     //    props.AddressId
//     //   deliverySwitcher: true,
//     // pickupSwitcher: false,
//     var today = new Date();
//     let linesOpt = {};
//     let lines;
//     console.log(this.props, ' THIS PROPS LINES');
//     if (
//       this.props.deliverySwitcher &&
//       this.props.deliveryAddress != undefined
//     ) {
//       let lat = this.props.deliveryAddress.location.latitude;
//       let lon = this.props.deliveryAddress.location.longitude;
//       lines = await fetch(
//         `https://client-api.sushi-master.ru/api/v1/delivery/time/lines?cityId=${
//           this.props.city.cityId
//         }&date=${today
//           .toISOString()
//           .substring(0, 10)}&longitude=${lon}&latitude=${lat}`
//       ).then((data) => data.json());
//       console.log(lines, ' LINES');
//     } else if (this.state.pickupSwitcher) {
//       // ЭТО ДРУГОЕ
//     }
//   }

//   render() {
//     return (
//       <div className="coutier_form-date_lines-box">
//         <p class="date_picker-label">Время</p>
//       </div>
//     );
//   }
// }
