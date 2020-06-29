import '../BonusPage/bonusPage.module.scss';
import { useState } from 'react';
import * as classnames from 'classnames'

export const BonusMenu = (props) => {
  const [state, setState] = useState({ show: false });
  const showMenu = () => {
    console.log(state);
    setState({ show: !state.show });
    console.log(state);
  };
  return (
    <div className={'bonus-page__container__menu-section'}>
      <h4 className={'bonus-page__container__menu-section__title'}>
        {props.children}
      </h4>
      <span
        onClick={showMenu}
        className={
          classnames('bonus-page__container__menu-section__btn ', {'expand': state.show})
        }
      />
    </div>
  );
};
