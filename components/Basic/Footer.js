import Link from 'next/link';
import s from './footer.module.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-col">
          <p className="footer__bold">@ {new Date().getFullYear()}</p>
          <Link href="#">
            <a className="side-menu__link">Публичная оферта</a>
          </Link>
          <Link href="#">
            <a className="side-menu__link">Политика конфиденциальности</a>
          </Link>
          <Link href="#">
            <a className="side-menu__link">Полные реквизиты</a>
          </Link>
        </div>
        <div className="footer-col">
          <div className="footer__inn footer__bold">ИП Мереуцэ В.В.</div>
        </div>
        <div className="footer-col">
          <div className="footer__bold">Служба доставки</div>
          <div className="footer__phone">
            <a href="tel:+‎7(3452)57-90-50">+‎7 (3452) 57-90-50</a>
          </div>
        </div>
        <div
          className="footer-col"
          style={{
            flexGrow: '1',
            width: '320px',
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <div className="footer__quiz">
            <p className="footer__quiz-text">Заказал в Суши Мастер?</p>
            <a
              className="footer__quiz-link"
              target="_blank"
              href="http://opros.sushi-master.ru/?utm_source=site&amp;utm_medium=link"
            >
              Пройди опрос. Помоги нам стать лучше!
            </a>
            <p className="footer__quiz-text-bot">Мы будем очень признательны</p>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer__apps">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/ru/app/%D1%81%D1%83%D1%88%D0%B8-%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80/id1119016991"
            >
              <div className="footer__apps__badge app-store"></div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ub.sushimaster"
            >
              <div className="footer__apps__badge google-play"></div>
            </a>
            <div
              className="footer__socials-block"
              style={{ display: 'flex', marginTop: '12px' }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sushimastershop/"
              >
                <div className="footer__socials__icon fb"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com/sushi_takeaway"
              >
                <div className="footer__socials__icon vk"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/sushimaster_shop"
              >
                <div className="footer__socials__icon ig"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zen.yandex.ru/sushi_master"
              >
                <img
                  className="yandex-dzen"
                  alt=""
                  style={{ height: '28px', width: '28px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-col ">
          <div style={{ maxWidth: '210px', whiteSpace: 'nowrap' }}>
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            from{' '}
            <a style={{ display: 'inline' }} href="http://unitbean.ru">
              UnitBean
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
