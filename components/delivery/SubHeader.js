//Components
// import BackButton from '../Products/BackButton';

class SubHeader extends React.Component {
  render() {
    const currentDate = new Date();
    return (
      <div
        className={'header-info sub-header'}
        style={{ position: 'relative', verticalAlign: 'middle' }}
      >
        {/* <BackButton onClick={this.props.goBack} /> */}
        <div className="sub-header-delivery">
          <h1 className={'city-name'}>
            {this.props.city} - ЗОНЫ И СТОИМОСТЬ ДОСТАВКИ
            {currentDate.getFullYear() <= 2020 &&
              (currentDate.getMonth() === 11 || currentDate.getMonth() === 0) &&
              (currentDate.getDate() === 31 || currentDate.getDate() === 1) && (
                <p style={{ color: 'red', fontSize: '18px' }}>
                  31 декабря и 1 января возможно увеличение стоимости доставки.
                  <br />
                  Бесплатная доставка не действует.
                  <br />
                  Подробности уточняйте у операторов колл-центра.
                </p>
              )}
          </h1>
        </div>
      </div>
    );
  }
}

export default SubHeader;
