import { connect } from 'react-redux';
import * as UrlBuilder from '../../utils/UrlBuilder';
import './fixed_footer_content.module.scss';

const links = [
  {
    name: 'Акции',
    link: UrlBuilder.promotions(),
  },
  {
    name: 'Бонусы',
    link: UrlBuilder.bonuses(),
  },
  {
    name: 'Доставка',
    link: UrlBuilder.delivery(),
  },
  {
    name: 'О компании',
    link: UrlBuilder.about(),
  },
  {
    name: 'Вакансии',
    link: UrlBuilder.vacancy(),
  },
  {
    name: 'Франшиза',
    link: 'https://fr.sushi-master.ru/?utm_source=glavniy_sait',
  },
];

class FixedFooterContent extends React.Component {
  render() {
    const menu = links.map((el, index) => (
      <a key={index} href={el.link}>
        {el.name}
      </a>
    ));
    return (
      <div
        className={`fxd_content ${this.props.open ? 'fxd_content-opened' : ''}`}
      >
        <div className="fxd_content-search">
          <input
            type="text"
            name="search"
            id="search_footer"
            placeholder="Поиск"
          />
          <button className="search-close"></button>
        </div>
        <div className="fxd_content-delivery_phone">
          <p>Служба доставки</p>
          <a href={`tel:${this.props.city.supportPhone.replace(/\D/g, '')}`}>
            {this.props.city.supportPhone}
          </a>
        </div>
        <div className="fxd_content-menu">{menu}</div>
        <div className="fxd_content-quiz">
          <p>Заказал в Суши Мастер?</p>
          <a
            className="fxd_content-quiz-link"
            href="https://opros.sushi-master.ru/?utm_source=site&utm_medium=link"
          >
            Пройди опрос.
            <br /> Помоги нам стать лучше!
          </a>
          <p>Мы будем очень признательны</p>
        </div>
        <div className="fxd_content-socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sushimastershop/"
            class="fxd_content-social social_fb"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vk.com/sushi_takeaway"
            class="fxd_content-social social_vk"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sushimaster_shop"
            class="fxd_content-social social_ig"
          ></a>
        </div>
        <div className="fxd_content-mobile_apps">
          <a href="https://apps.apple.com/ru/app/%D1%81%D1%83%D1%88%D0%B8-%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80/id1119016991">
            <img src="/img/appstore.png" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ub.sushimaster">
            <img src="/img/google-play.png" alt="" />
          </a>
        </div>
        <div className="fxd_content-legalEntity">
          {this.props.city.legalEntity}
        </div>
      </div>
    );
  }
}

const mapState = ({ store: { city } }) => ({ city });

export default connect(mapState)(FixedFooterContent);
