import { Component } from 'react'
import './addressCheck.scss'

export default class AddressCheck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'address-check__container'}>
        <div onClick={() => {}} className={'address-check__window'}>
          <h1>Проверим адрес?</h1>
          <p>Мы хотим убедиться, что Ваш адрес входит в зону доставки.</p>
          <span>
            После проверки вы вернетесь к выбору блюд
            <img src="/public/img/ic-smile-emoji.svg" alt=":)" />
          </span>
        </div>
      </div>
    );
  }
}
