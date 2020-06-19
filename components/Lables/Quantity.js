import { Component } from 'react'
import "./quantity.module.scss"

export class Quantity extends Component {
  render () {
    return (
      <div className={'quantity-container'}>
        <span className={'quantity-container__text'}>{this.props.quantity} ШТ</span>
      </div>
    )
  }
}