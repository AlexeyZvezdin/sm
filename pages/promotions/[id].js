import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import s from './prom.modules.scss';
function promotion(props) {
  //   console.log(props, ' BAnners');

  return (
    <div className={s['prom_box-single']}>
      <img
        src={`https://client-api.sushi-master.ru/pics/${props.pictureId}`}
        alt=""
        className={s['prom_img-single']}
      />
      <h1>{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: props.description,
        }}
      ></div>
    </div>
  );
}

const mapStateToProps = (
  {
    store: {
      banners: { items },
    },
  },
  {
    router: {
      query: { id },
    },
  }
) => {
  return items.find((item) => item.id === id);
};

export default withRouter(connect(mapStateToProps)(promotion));
