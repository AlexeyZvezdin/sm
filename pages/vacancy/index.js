import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import VacancyItem from '../../components/Vacancy/VacancyItem';

// Icons
import LOGO from '../../public/img/icons/ic-work.svg';
import MONEY from '../../public/img/icons/ic-money.svg';
import EDUCATION from '../../public/img/icons/ic-education.svg';
import HOME from '../../public/img/icons/ic-home.svg';
import GROWTH from '../../public/img/icons/ic-growth.svg';

/// Chunking
const chunk = (array, chunkSize) => {
  var temporal = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    temporal.push(array.slice(i, i + chunkSize));
  }

  return temporal;
};

class Vacancy extends React.Component {
  state = {
    vacancies: [],
  };

  async componentDidMount() {
    const req = await fetch(
      `https://client-api.sushi-master.ru/api/v1/vacancy?cityId=${this.props.city.cityId}`
    );
    const res = await req.json();

    this.setState({ vacancies: res.result.items });
  }

  render() {
    return (
      <>
        <div className="page-container">
          <h1 className="page-headline">
            ВАКАНСИИ CУШИ МАСТЕР В ГОРОДЕ {this.props.city.name.toUpperCase()}
          </h1>
          <div className="page-content">
            <div className="side_1">
              <p className="description" style={{ marginBottom: 50 }}>
                Компания Суши-мастер — была основана в 2013, когда открылся
                первый ресторан японской кухни формата «возьми с собой» в
                Тюмени. С 2014 года мы начали активное развитие и сейчас мы
                представлены более чем в 60 городах России и ближнего зарубежья.
                Мы хотим, чтобы каждый имел возможность наслаждаться вкусом
                лучших блюд японской кухни, поэтому планируем освоение новых
                территорий и открытие ресторанов в центральной России, на юге и
                в других странах мира.
              </p>

              <h1 className="page-headline" style={{ padding: 0 }}>
                Плюсы работы в Суши-Мастер
              </h1>

              <div className="pros">
                <p>
                  <img src={LOGO} />
                  Работа в известной федеральной компании
                </p>
                <p>
                  <img src={MONEY} />
                  Возможность влиять на свой уровень дохода
                </p>
                <p>
                  <img src={EDUCATION} />
                  Обучение у профессиональных наставников
                </p>
                <p>
                  <img src={GROWTH} />
                  Возможность карьерного роста
                </p>
                <p>
                  <img src={HOME} />
                  Выбор удобного района для работы
                </p>
              </div>
            </div>

            <div className="side_2">
              {chunk(this.state.vacancies, 2).map((chunk, index) => (
                <div className="item-row" key={index}>
                  {chunk.map((vacancy, index) => (
                    <VacancyItem
                      experience={vacancy.experience}
                      wages={vacancy.wages}
                      title={vacancy.title}
                      key={index}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .page-headline {
            width: 100%;
            padding: 24px;
            font-family: Pusia;
          }

          .page-content {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-template-rows: 1fr;
            padding: 24px;
            grid-gap: 20px;
          }

          .description {
            line-height: 25px;
          }

          .pros {
            margin-top: 50px;
          }

          .pros p {
            display: flex;
            align-items: center;

            margin-bottom: 26px;

            font-family: Gotham Pro;
            font-size: 18px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.78;
            letter-spacing: normal;
            color: #000000;
          }

          .pros p img {
            margin-right: 20px;
          }

          .side_2 {
            text-align: center;
            padding: 10px;
            background-color: rgb(250, 249, 249);
          }

          .item-row {
            width: 100%;

            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-template-rows: 1fr;
            grid-gap: 30px;
          }

          @media (max-width: 375px) {
            .page-content {
              padding: 8px;
            }
          }
        `}</style>
      </>
    );
  }
}

// Redux shit here
const mapStateToProps = (state) => {
  return {
    city: state.store.city,
  };
};

// Export page here
export default withRouter(connect(mapStateToProps)(Vacancy));
