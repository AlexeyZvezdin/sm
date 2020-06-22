import { Component } from 'react';
import './personalPage.module.scss';
import { PersonalHeader } from '../Basic/PersonalHeader';

export default class PersonalPage extends Component {
  render() {
    return (
      <>
        <PersonalHeader>ЛИЧНЫЕ ДАННЫЕ</PersonalHeader>
        <div className={'personal-page'}>
          <div className={'personal-page__avatar-container'}>
            <div className={'personal-page__avatar'}>
              <img src={'img/ic-profile-placeholder.svg'}/>
            </div>
              <input id={'personal-page__change-photo'} type={'file'} className={'personal-page__change-photo_hiden'}/>
            <label htmlFor={'personal-page__change-photo'} className={'personal-page__change-photo'}>Изменить фото</label>
          </div>

        </div>
      </>
    );
  }
}
