export default class RestaurantList extends React.Component {
  state = {
    rests: undefined,
  };

  async componentDidMount() {
    const { result } = await fetch(
      `https://client-api.sushi-master.ru/api/v1/restaurants?cityId=${this.props.city.cityId}`
    ).then((res) => res.json());

    this.setState({
      rests: result,
    });
  }

  handlePickupItem = (item) => {
    this.setState({
      ...this.state,
      currentPickUpAddress: item,
    });
    this.props.dataRecipient(item);
  };

  render() {
    console.log(this.state.rests);
    return (
      <>
        {this.state.rests
          ? this.state.rests.items.map((item, index) => {
              let timeStart =
                Math.round((item.workInterval.begin / 1000 / 60 / 60) * 100) /
                100;
              let timeEnd =
                Math.round((item.workInterval.end / 1000 / 60 / 60) * 100) /
                100;

              let timeEndFinal =
                timeEnd > 24 ? timeEnd - 24 : Math.ceil(timeEnd);
              return (
                <div key={index}>
                  <input
                    id={index}
                    type="radio"
                    name="pickup_address"
                    onClick={() => this.handlePickupItem(item)}
                  />
                  <label
                    key={index}
                    className="m_m-pickup-item"
                    htmlFor={index}
                  >
                    <span>{item.address}</span>
                    <br />
                    <span className="time_range">
                      {timeStart}:00 - {timeEndFinal}:00
                    </span>
                  </label>
                </div>
              );
            })
          : ''}
      </>
    );
  }
}
