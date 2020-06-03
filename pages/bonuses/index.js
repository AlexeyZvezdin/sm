import Head from 'next/head';
export default class index extends React.Component {
  render() {
    return (
      <div>
        {/* ${/*this.props.city.cityNamePrepositional*/}
        <Head
          title={`Программа лояльности | Суши Мастер`}
          description={`Программа лояльности ресторанов доставки японской кухни Суши Мастер в CITYNAME Каждому новому клиенту 100 бонусных баллов в ПОДАРОК!`}
        />
        <div
          className="delivery-scene__main-container"
          style={{ display: 'block', maxWidth: '1024px', margin: '0 auto' }}
        >
          <div
            className={'container'}
            style={{ margin: '28px auto', fontFamily: 'Gotham Pro' }}
          >
            <h2 style={{ margin: '25px 0' }}>
              <b>Получите КЭШБЭК с каждого заказа!</b>
            </h2>
            <h3 style={{ marginBottom: '20px' }}>
              {' '}
              Экономьте и расплачивайтесь бонусами с нашей бонусной программой.
            </h3>
            <p>
              {' '}
              Мы очень любим, когда вы заказываете у нас. Поэтому возвращаем
              минимум 5% с каждого заказа. А если вы привыкли радовать себя
              японской кухней хотя бы раз в месяц – 15 % с каждого заказа.
            </p>
            <p>
              {' '}
              Так, однажды, вы сможете расплатиться накопленными бонусами за
              половину своих покупок!
            </p>
            <p>
              <b>Клево? Клево!</b>
            </p>{' '}
            <p>
              Как это работает? С первой же покупки автоматически создается
              бонусный счет и на нем сразу появятся 15% за первую покупку.
            </p>{' '}
            <p>
              Если за текущий месяц вам еще раз захотелось роллов – вам опять
              вернутся 15% стоимости заказа.
            </p>
            <p>
              {' '}
              Если вы уехали на Северный Полюс, Марс или Свазиленд (там у нас
              пока нет ресторанов) и на месяц выпали из цивилизации – начинать
              придется с 5%.
            </p>
            <p>
              <b>
                {' '}
                Все просто: 5% если реже, чем раз в месяц и 15% - если чаще!
              </b>{' '}
            </p>{' '}
            <p>
              <b>
                Главное, не забывать о нас месяца на три. Через 90 дней бонусы
                обнуляются!
              </b>
            </p>{' '}
            <p>
              {' '}
              Но вы же не позволите им, правда? У нас есть акции каждый день. А
              на них наша новая бонусная программа тоже действует. На все меню
              действует!
            </p>{' '}
            <p>И вы можете оплачивать своими бонусами до 50% своего заказа!</p>
            <p>
              <b>На что НЕ действует бонусная система?</b>
            </p>{' '}
            <p>
              {' '}
              На одноразовые тематические акции (день роллов, черная пятница и
              так далее) и на стоимость доставки.
            </p>
            <p>
              <b> С чем не суммируются бонусные баллы?</b>
            </p>
            <p>С подарками, призами, сертификатами, скидками и промокодами.</p>
            <p>
              <b> Будет ли кэшбэк на заказ, который вы оплатили бонусами? </b>
            </p>
            <p>
              ДА! При оплате покупки бонусными баллами 50% заказа, начисление
              баллов происходит на остаток.
            </p>
            <p>
              {' '}
              Мы постарались максимально упростить систему начисления бонусов за
              покупки, чтобы стало еще выгоднее и понятнее. Надеемся, вам
              понравится!
            </p>
          </div>
        </div>
        <style jsx>
          {`
            h2 {
              margin: 25px 0px;
              font-size: 2rem;
            }
            h3 {
              font-size: 1.75rem;
            }
            p {
              margin-bottom: 1rem;
            }
          `}
        </style>
      </div>
    );
  }
}
