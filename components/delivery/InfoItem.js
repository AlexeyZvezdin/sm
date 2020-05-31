export default class InfoItem extends React.Component {
  //   static propTypes = {
  //     src: PropTypes.any,
  //     title: PropTypes.string,
  //     text: PropTypes.string,
  //     deliveryType: PropTypes.bool,
  //   };

  render() {
    return (
      <div className={'info-item'}>
        <div>
          <div>
            <img src={this.props.src} alt="" />
          </div>
          <div>
            <div className={'info-item-description'}>
              <div className="title">{this.props.title}</div>
              <div className="text">{this.props.text}</div>
              {this.props.deliveryType && (
                <>
                  <span className="title">Служба доставки: </span>
                  {/* <div
                    style={{ display: 'inline-flex', flexDirection: 'column' }}
                  > */}
                  <a
                    href={`tel:5501`}
                    className="text"
                    style={{ textDecoration: 'none' }}
                  >
                    *5501 <span>(с мобильного бесплатно)</span>
                  </a>
                  {/* this is undefined */}
                  {/* {this.props.city.supportPhone &&
                    this.props.city.phoneFooter && (
                      <span className="text">{''} или </span>
                    )} */}

                  <a
                    href={`tel:8 800 707 555 0`}
                    className="text"
                    style={{ textDecoration: 'none' }}
                  >
                    8 800 707 555 0
                  </a>
                  {/* </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
