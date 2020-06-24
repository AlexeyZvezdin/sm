import { Component } from 'react';
import './personalPage.module.scss';
import { PersonalHeader } from '../Basic/PersonalHeader';
import { Input } from '../Basic/Input'

export default class PersonalPage extends Component {
  render() {
    return (
      <>
        <PersonalHeader>ЛИЧНЫЕ ДАННЫЕ</PersonalHeader>
        <div className={'personal-page'}>
          <div className={'personal-page__avatar-container'}>
            <div className={'personal-page__avatar'}>
              <img className={'personal-page__avatar-placeholder'} src={'img/ic-profile-placeholder.svg'}/>
            </div>
              <input id={'personal-page__change-photo'} type={'file'} className={'personal-page__change-photo_hidden'}/>
            <label htmlFor={'personal-page__change-photo'} className={'personal-page__change-photo'}>Изменить фото</label>
          </div>
            <div  className={'personal-page__form'}>
              <Input>Имя</Input>
              <Input Value={'+7 (999) 999 99 99'} ReadOnly={true}>Телефон</Input>
              <p className={'personal-page__text'}>Добавьте email и будьте в курсе наших новинок и акций. Получайте индивидуальные промокод, скидки и подарки</p>
              <Input>Добавь email</Input>
              <p className={'personal-page__text'}>Укажите свой день рождения, чтобы получать специальные предложения и подарки.</p>
            </div>
        </div>
      </>
    );
  }
}
