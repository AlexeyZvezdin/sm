class AddressItem extends React.Component {
  //   static propTypes = {
  //     city: PropTypes.string,
  //     street: PropTypes.string,
  //     phone: PropTypes.string,
  //     workHours: PropTypes.string,
  //   };

  render() {
    return (
      <div className={'vcard'}>
        <div className={'address-item'}>
          <div className="title">
            <div className="fn org">Суши-Мастер</div>
            {/* <span className={'country-name'}>Россия, </span> */}
            {/* <span className={"locality"}>{this.props.city}, </span> */}
            <span className={'street-address'}>{this.props.street}</span>
          </div>
          <div className="text workhours">
            {this.props.workHours.replace('25', '01')}
          </div>
        </div>
      </div>
    );
  }
}

export default AddressItem;
