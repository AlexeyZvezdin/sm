import Link from 'next/link';
import SushiMasterLogo from '../../public/img/icons/ic-logo.svg';
import './about.module.scss';
import Swiper from 'react-id-swiper';
import Panda from '../../public/img/panda.png';
import gr1 from '../../public/img/about/equal-quality/gr-1.png';
import gr1n from '../../public/img/about/equal-quality/gr-1n.png';
import gr270 from '../../public/img/about/equal-quality/gr-270.png';
import gr270n from '../../public/img/about/equal-quality/gr-270n.png';
import gr303n from '../../public/img/about/equal-quality/303.png';
import gr5 from '../../public/img/about/equal-quality/gr-5.png';
import gr5n from '../../public/img/about/equal-quality/gr-5n.png';
import gr51 from '../../public/img/about/equal-quality/gr-51.png';
import gr51n from '../../public/img/about/equal-quality/gr-51n.png';
import gr140 from '../../public/img/about/equal-quality/gr-140.png';
import gr140n from '../../public/img/about/equal-quality/gr-140n.png';
import gr23 from '../../public/img/about/equal-quality/gr-23.png';
import gr23n from '../../public/img/about/equal-quality/gr-23n.png';
import DiagramByPic from '../../public/img/about/diagrams-bypic.png';
import ic_food from '../../public/img/about/client/ic_food.png';
import ic_car from '../../public/img/about/client/ic_car.png';
import ic_phone from '../../public/img/about/client/ic_phone.png';
import ic_gift from '../../public/img/about/client/ic_gift.png';
import ic_team from '../../public/img/about/client/ic_team.png';
import booklet from '../../public/img/about/client/img_booklet.png';
import partner1 from '../../public/img/about/partner/01.png';
import partner2 from '../../public/img/about/partner/02.png';
import partner3 from '../../public/img/about/partner/03.png';
import partner4 from '../../public/img/about/partner/04.png';
import partner5 from '../../public/img/about/partner/05.png';
import ic_pay from '../../public/img/icons/ic_pay.png';
import ic_calendar from '../../public/img/icons/ic_calendar.png';
import ic_percent from '../../public/img/icons/ic_percent.png';
import flm from '../../public/img/icons/flm.png';
import logoSmall from '../../public/img/icons/icon-logo-small.svg';

// import Head from '../../components/Head';
// import { connect } from 'react-redux';
const about = () => {
  const params = {
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return (
    <>
      {/* <Head
        title={`О компании | Сеть ресторанов доставки еды Суши Мастер, ${props.cityName} `}
        description={`Суши Мастер ${props.cityName}: сеть ресторанов доставки готовой японской еды (суши, роллы, сеты): О компании`}
      /> */}
      <div className="about__4k_container">
        <nav>
          <ul className="about__navigation" id="navigation">
            <li>
              <a href="#about">О компании</a>
            </li>
            <li>
              <a href="#client">Для клиента</a>
            </li>
            <li>
              <a href="#partners">Для партнёра</a>
            </li>
            <li>
              <a href="#investors">Для инвестора</a>
            </li>
            {/* <li>
            <a href="#">Контакты</a>
          </li> */}
          </ul>
        </nav>
        {/* <section className="about__intro-image">
        <img src={SushiMasterLogo} />
        </section> */}
        <div className="about_h1">
          <h1>
            <img src={logoSmall} alt="" />
            Суши Мастер - объединяем вкусом!
          </h1>
        </div>
        <iframe
          src="https://www.youtube.com/embed/KlATtJ-0LTI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          id="youtube_about_video"
        ></iframe>

        <main className="">
          <section className="about__desc about__container" id="about">
            <h2>О компании</h2>
            <p>
              <b>Суши Мастер</b> - это международная сеть японской и
              паназиатской кухонь в форматах FAST CASUAL и магазинов TAKE AWAY
            </p>
            <p>
              Компания была основана в 2013, когда открылся первый ресторан
              японской кухни формата "возьми с собой" в Тюмени. С 2014 года мы
              начали активное развитие, и сейчас мы представлены более чем в 130
              городах России и ближнего зарубежья
            </p>
            <div className="about__panda">
              <img data-src={Panda} src="/img/loader.gif" alt="Панда" />
            </div>
            <div className="about__statistic-items">
              <div className="about__statistic-item">
                <span className="about__statistic-value">311 +</span>
                <span className="about__statistic-value">ресторанов</span>
              </div>
              <div className="about__statistic-item">
                <span className="about__statistic-value">11</span>
                <span className="about__statistic-value">стран</span>
              </div>
              <div className="about__statistic-item">
                <span className="about__statistic-value">136</span>
                <span className="about__statistic-value">городов</span>
              </div>
              <div className="about__statistic-item">
                <span className="about__statistic-value">5+</span>
                <span className="about__statistic-value">лет</span>
              </div>
            </div>
          </section>
          <section className="about__equal_quality about__container">
            <h3>Вкусно везде!</h3>
            <p>
              Кто угодно может сделать вкусные суши. А шеф-повар ресторана
              сделает и вовсе шедевр. Он молодец. Но представьте, что вам нужно
              сделать вкусные суши в сотнях ресторанов, за сотни километров друг
              от друга. Это наш случай, у нас их вон уже сколько:
            </p>
            <img
              data-src={DiagramByPic}
              src="/img/loader.gif"
              alt="Диаграмы картинкой"
              id="diagrambypic"
            />
            <div className="about_equal_diagrams">
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs ">
                  <img data-src={gr1} alt="diagram" />
                  <img
                    src={gr1n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-1"
                  />
                </div>
                <p>2014</p>
              </div>
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs ">
                  <img data-src={gr5} alt="diagram" />
                  <img
                    src={gr5n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-5"
                  />
                </div>
                <p>2015</p>
              </div>
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs">
                  <img data-src={gr23} alt="diagram" />
                  <img
                    src={gr23n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-23"
                  />
                </div>
                <p>2016</p>
              </div>
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs">
                  <img data-src={gr51} alt="diagram" />
                  <img
                    src={gr51n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-51"
                  />
                </div>
                <p>2017</p>
              </div>
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs">
                  <img data-src={gr140} alt="diagram" />
                  <img
                    src={gr140n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-140"
                  />
                </div>
                <p>2018</p>
              </div>
              {/* diagram */}
              <div className="about_equal_diagram">
                <div className="about_equal_diagram-imgs">
                  <img data-src={gr270} alt="diagram" />
                  <img
                    src={gr303n}
                    alt="diagram"
                    className="about_equal_diagram-imgs-num diagram-imgs-num-270"
                  />
                </div>
                <p>2019</p>
              </div>
            </div>
          </section>
          <section
            data-src="'/img/about/bg-whowe.png'"
            className="about__who-we-are bg-lazy"
            id="who-we-are"
          >
            <div className="about__container">
              <h2>Кто мы сегодня</h2>
              <p>
                Мы хотим, чтобы каждый имел возможность наслаждаться вкусом
                лучших блюд японской кухни, поэтому планируем освоение новых
                территорий и открытие ресторанов в центральной России, на юге и
                в других странах мира
              </p>
            </div>
          </section>
          <section className="about__for-client about__container" id="client">
            <h2>Для клиента</h2>
            <div className="about__service-features">
              {/* sf */}
              <div className="about__service-feature sf-1">
                <img src={ic_food} alt="Свежие продукты" />
                <h4>Всегда свежие продукты</h4>
                <p>
                  Роллы для вас готовятся из свежих продуктов исключительного
                  качества
                </p>
              </div>
              {/* sf */}
              <div className="about__service-feature sf-2">
                <img src={ic_phone} alt="Удобный заказ" />
                <h4>Удобный заказ</h4>
                <p>
                  Вы можете угоститься в одном из наших ресторанов или оформить
                  заказ любым удобным способом: на сайте, в телефоне, в
                  приложении, через колл-центр (позвонить или заказать звонок)
                </p>
              </div>
              {/* sf */}
              <div className="about__service-feature sf-3">
                <img src={ic_car} alt="Доставка по всему миру" />
                <h4>Доставка по всему миру</h4>
                <p>
                  Вы можете заказать любимые суши почти во всех городах России и
                  10 странах мира
                </p>
              </div>
              {/* sf */}
              <div className="about__service-feature sf-4">
                <img src={ic_team} alt="Профессиональная команда" />
                <h4>Профессиональная команда</h4>
                <p>
                  Для вас готовят только настоящие профессионалы, влюбленные в
                  свою работу
                </p>
              </div>
            </div>
            {/* SWIPER GALL */}
            <div className="about_swiper">
              <Swiper {...params}>
                {/* sf */}
                <div className="about__service-feature sf-1">
                  <img src={ic_food} alt="Свежие продукты" />
                  <h4>Всегда свежие продукты</h4>
                  <p>
                    Роллы для вас готовятся из свежих продуктов исключительного
                    качества
                  </p>
                </div>
                {/* sf */}
                <div className="about__service-feature sf-2">
                  <img src={ic_phone} alt="Удобный заказ" />
                  <h4>Удобный заказ</h4>
                  <p>
                    Вы можете угоститься в одном из наших ресторанов или
                    оформить заказ любым удобным способом: на сайте, в телефоне,
                    в приложении, через колл-центр (позвонить или заказать
                    звонок)
                  </p>
                </div>
                {/* sf */}
                <div className="about__service-feature sf-3">
                  <img src={ic_car} alt="Доставка по всему миру" />
                  <h4>Доставка по всему миру</h4>
                  <p>
                    Вы можете заказать любимые суши почти во всех городах России
                    и 10 странах мира
                  </p>
                </div>
                {/* sf */}
                <div className="about__service-feature sf-4">
                  <img src={ic_team} alt="Профессиональная команда" />
                  <h4>Профессиональная команда</h4>
                  <p>
                    Для вас готовят только настоящие профессионалы, влюбленные в
                    свою работу
                  </p>
                </div>
                {/* sf */}
                <div className="about__service-feature sf-5">
                  <img src={ic_gift} alt="акции и спецпредложения" />
                  <p>
                    А также вы регулярно можете использовать акции и
                    спецпредложения сети. Или зарегистрироваться и принять
                    участие в <b>бонусной программе</b>. И даже стать тайным
                    покупателем!
                  </p>
                </div>
              </Swiper>
            </div>
            <div className="about__service-features-bottom">
              <img data-src={booklet} src="/img/loader.gif" alt="Буклет" />
              <div className="about__service-feature sf-5">
                <img src={ic_gift} alt="акции и спецпредложения" />
                <p>
                  А также вы регулярно можете использовать акции и
                  спецпредложения сети. Или зарегистрироваться и принять участие
                  в <b>бонусной программе</b>. И даже стать тайным покупателем!
                </p>
              </div>
            </div>
          </section>
          <section
            className="about__for-partner bg-lazy"
            id="partners"
            data-src="'/img/about/part.png'"
          >
            <div className="about__partner-features about__container">
              <h2>Для партнера</h2>
              <p className="about__for-partner-desc">
                Вы давно мечтали открыть собственный бизнес? Или Вы опытный
                игрок, который хочет увеличить свой потенциал? Тогда предложение
                "Суши Мастер" - это то, что вы ищете!
              </p>
              <div className="about__partner-features_box">
                {/* col */}
                <div className="about__partner-feature-col">
                  {/* feature */}
                  <div className="about__partner-feature">
                    <img src={partner1} alt="01" />
                    <div className="about__partner-feature-desc">
                      <h4>Готовый бизнес</h4>
                      <p>
                        Вы получите компанию, которая начнет приносить прибыль с
                        первого дня
                      </p>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="about__partner-feature">
                    <img src={partner2} alt="02" />
                    <div className="about__partner-feature-desc">
                      <h4>Растущий рынок</h4>
                      <p>
                        Спрос на японскую кухню динамично развивается и будет
                        продолжать расти
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about__partner-feature-col">
                  {/* feature */}
                  <div className="about__partner-feature">
                    <img src={partner3} alt="03" />
                    <div className="about__partner-feature-desc">
                      <h4>Автоматизация и учет</h4>
                      <p>
                        Все операционные процессы автоматизированы. Вы получите
                        готовую систему управления и полный доступ к отчетности.
                      </p>
                    </div>
                  </div>

                  {/* feature */}
                  <div className="about__partner-feature">
                    <img src={partner4} alt="04" />
                    <div className="about__partner-feature-desc">
                      <h4>Небольшие инвестиции</h4>
                      <p>
                        Вы получите индивидуальный рассчет, исходя из
                        собенностей страны и города. Мы максимально
                        оптимизировали цены
                      </p>
                    </div>
                  </div>
                </div>

                {/* feature */}
                <div className="about__partner-feature pf-5">
                  <img src={partner5} alt="05" />
                  <div className="about__partner-feature-desc">
                    <h4>Поддержка</h4>
                    <p>
                      Вы не останетесь один на один с бизнесом. Мы подготовили
                      для вас базу знаний, разработали маркетинговую стратегию и
                      выделили персонального менеджера.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about__partner-button">
                <a href="https://fr.sushi-master.ru/?utm_source=glavniy_sait">
                  Купить франшизу
                </a>
              </div>
            </div>
          </section>
          <section className="about__investors about__container" id="investors">
            <h2>Для инвестора</h2>
            <div className="about__investors-box">
              <div className="about__investors-box-column investors-box-column-1">
                <p>
                  <b>Опцион «Суши Мастер»</b> – предложение, которое совмещает в
                  себе преимущества банковского депозита и венчурных инвестиций!
                </p>
                <p>
                  <b>Эффективный бизнес</b>, который
                  <br /> зарабатывает реальную прибыль прямо здесь и сейчас.
                </p>
                <p>
                  Продуманная и четкая стратегия роста – как минимум в 10 раз
                  больше в ближайшие 5-7 лет!
                </p>

                <div className="about__partner-button ai-button">
                  <a href="https://invest.sushi-master.ru/?utm_source=glavniy_sait">
                    СТАТЬ ИНВЕСТОРОМ
                  </a>
                </div>
              </div>
              <div className="about__investors-box-column ">
                {/* widget */}
                <div className="investors-widget">
                  <img src={ic_pay} alt="Сумма" />
                  <div className="investors-widget_desc">
                    <span>Сумма инвестирования</span>
                    <span>от 50 000 $</span>
                  </div>
                </div>
                {/* widget */}
                <div className="investors-widget">
                  <img src={ic_calendar} alt="Срок возврата инвестиций" />
                  <div className="investors-widget_desc">
                    <span>Срок возврата инвестиций</span>
                    <span>7 лет</span>
                  </div>
                </div>
                {/* widget */}
                <div className="investors-widget">
                  <img src={ic_percent} alt="Доходность" />
                  <div className="investors-widget_desc">
                    <span>Доходность</span>
                    <span>от 9,5 $ в час</span>
                  </div>
                </div>
              </div>
              <div className="about__investors-box-column investors-box-column-3">
                <img src={flm} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return state.location;
// };

// eslint-disable-next-line import/no-default-export
// export default connect(mapStateToProps, null)(About);
export default about;
