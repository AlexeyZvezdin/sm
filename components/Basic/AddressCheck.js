import { Component } from 'react';
import './addressCheck.scss';

export default class AddressCheck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'address-check'}>
        <div className={'address-check__window'}>
          <h1 className={'address-check__title'}>Проверим адрес?</h1>
          <p className={'address-check__text'}>
            Мы хотим убедиться, что Ваш адрес входит в зону доставки.
          </p>
          <div className={'address-check__button-container'}>
            <button className={'address-check__button-container__button address-check__button-container__button_mb'}>
              Доставка
            </button>
            <button className={'address-check__button-container__button address-check__button-container__button_mb address-check__button-container__button_inverse'}>
              Заберу Сам
            </button>
          </div>
          <span className={'address-check__footer-text'}>
            После проверки вы вернетесь к выбору блюд&nbsp;
            <img src="/img/ic-smile-emoji.svg" alt=":)"  className={'address-check__icon'}/>
          </span>
        </div>
      </div>
    );
  }
}
