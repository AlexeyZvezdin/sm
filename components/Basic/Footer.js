import Link from 'next/link';
import BreadCrumbs from './BreadCrumbs';
import './footer.module.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <BreadCrumbs />
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
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJtSURBVHgBxVexUttAEF15UrjDqXCHUkEHHe6iLunCH4SOknSU5lPyCfmE0MUd7kSndE4Vp3OnvCe/Aw1I1u2NGd7MQzf4bndvd+92L7NI1HU9xucEzMFDcAKO9fMGXIN/wAossyzbxMjNhiZAMRXNwGMpeZCSdVAi46ZirrlL8CfmrJMMkNACPAV/gYvYXcnoM619kCFRax8FgNfgJxmSBMn5IlmT2EVTLTi3PQGyZpI5HZoYdn5mewZl7vQEXe3dOebm4JFjfvDEY1hHrd8LsEKyLOyVANlM5lK6ngyQW3h07syHHHxvPlDHaQhF8EAB3g+d2R5Eh4DQcaSXm1CPFA+e16X5kdv2RvSCoTihbnqA12uZuHsa7j4x8sI/6qYBOfjb0nABXloamIw5DWBhWZkTcN+tKQQYfzM/qkY3Ft94r1sqrF/i1imD987NO4zHXYWCl4yGTLJcX8b80roTb441X/H9YduErvT/5gsdVXsydYYk7DVSPAD/akzFu5J10lp7oLlBTo+WtBDMO0Jw7ZTRhICDq8Eq1S2gnQdzc0J15CrDHx6lle5prxCGhp3RB3OChQmfQyZhZU9djxffLR05WDIJeSFM6rTOh9l+b060il850hFk35bSATHLK/OD1zeL3yYcQ7p/luCFypzQ7hnypvQ3BqgQ0ZWF+ZDigcJaxa99EdGiY2Xnq0Cyj6yv8XnTprQ1MbTle/NEdFveWhA8cVHHPii65fC6/bxr50NPs4+27ZiYoMvYrklr6cFzrb3re5rFPk5pCPMiPEzZwKyePU5D2abBrIS84BbJj9MOQ8LznFk8tT09z/8DgE+9QR4LG/MAAAAASUVORK5CYII="
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
