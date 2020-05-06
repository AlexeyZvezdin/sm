import { connect } from 'react-redux';

import s from './css/city_choice.module.scss';

class CityChoiceModal extends React.Component {
  render() {
    return (
      <>
        <div className={s['modal-backdrop']}></div>
        <div className={s['city_modal']} role="dialog">
          <div className={s['city_modal-center_container']}>
            <div className={s[('city_modal-center_container', 'm_m-box')]}>
              Center of the Modal
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CityChoiceModal;
