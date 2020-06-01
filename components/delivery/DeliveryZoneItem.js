class DeliveryZoneItem extends React.Component {
  renderPrice = (priceItem, idx) => {
    let title = '';
    if (priceItem.rangeTo) {
      if (!priceItem.rangeFrom) title = <>до {priceItem.rangeTo} Руб</>;
      else
        title = (
          <>
            от {priceItem.rangeFrom} Руб до {priceItem.rangeTo}
            Руб
          </>
        );
    } else if (priceItem.rangeFrom)
      title = (
        <>
          от {priceItem.rangeFrom}
          Руб
        </>
      );
    return (
      <div className={'prices'} key={idx} style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>{title}</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {priceItem.price === 0 ? (
            'Бесплатно'
          ) : (
            <>
              {priceItem.price}
              руб
            </>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        id={this.props.color.replace('#', '')}
        xs={12}
        className={`zone-info-item ${
          this.props.selectZoneColor === this.props.color ? 'active' : ''
        }`}
        key={this.props.idx}
      >
        <div>
          <div>
            <ul className={'zone-title-list'}>
              <li style={{ backgroundColor: this.props.color }}>
                {this.props.title}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={'zone-price-title'}>Стоимость доставки</div>
        </div>
        <div>
          {this.props.deliveryPrices &&
            this.props.deliveryPrices.map((price, idx) =>
              this.renderPrice(price, idx)
            )}
        </div>
      </div>
    );
  }
}

export default DeliveryZoneItem;
