import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import fetcher from '../utils/fetcher';
import SubNavPage from '../components/SubNavPage/SubNavPage';
import s from './subroutes.module.scss';
function subroute(props) {
  console.log(props, ' subroute');
  // console.log(props, ' props route');
  return (
    <div className={s['']}>
      <p>{JSON.stringify(props.thisRouteProducts)}</p>
      {/* <SubNavPage fetchID={fetchID} cityID={cityID} /> */}
    </div>
  );
}

export default withRouter(connect()(React.memo(subroute)));
