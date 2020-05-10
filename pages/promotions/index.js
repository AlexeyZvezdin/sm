import { connect } from 'react-redux';
import Link from 'next/link';
import { trimString } from '../../utils/strings';
import s from './prom.modules.scss';
class promotions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={s['prom_container']}>
        {this.props.banners.items.map((item) => (
          <div className={s['prom_box']} key={item.id}>
            <Link href="/promotions/[id]" as={`/promotions/${item.id}`}>
              <div>
                <img
                  src={`https://client-api.sushi-master.ru/pics/${item.pictureId}`}
                  alt=""
                  className={s['prom_img']}
                />
                <p className={s['prom_title']}>{item.title}</p>
                <span
                  className={s['prom_description']}
                  dangerouslySetInnerHTML={{
                    __html: trimString(item.description, 95),
                  }}
                ></span>
              </div>
            </Link>
          </div>
        ))}
        {/* {JSON.stringify(this.props.banners)} */}
      </section>
    );
  }
}

const mapStateToProps = ({ store: { banners } }) => ({ banners });
export default connect(mapStateToProps)(promotions);
