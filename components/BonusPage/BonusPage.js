import { PersonalHeader } from '../Basic/PersonalHeader';
import './bonusPage.module.scss'
import { Input } from '../Basic/Input'
import PersonalMenu from '../PersonalMenu/PersonalMenu'

export const BonusPage = () => {
  return (
    <>
      <PersonalHeader>БОНУСЫ</PersonalHeader>
      <div className={'bonus-page__container'}>
        <div className={'bonus-page__container__section'}>
          <div className={'bonus-page__container__avatar-container'}>
            <img
              className={'bonus-page__container__avatar-placeholder'}
              src={'img/ic-profile-placeholder.svg'}
            />
          </div>
          <div className={'bonus-page__container__information'}>
            <Input Value={'+7 (999) 999 99 99'} ReadOnly={true}>Телефон</Input>
            <h4 className={'bonus-page__container__amount'}>0</h4> {/*заменить хардкод на проп*/}
            <p className={'bonus-page__container__label'}>Бонусы</p>
        </div>
          <PersonalMenu/>
        </div>
      </div>
    </>
  );
};
