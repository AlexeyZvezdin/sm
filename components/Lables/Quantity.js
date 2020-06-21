
import "./quantity.module.scss"

export const Quantity = ({quantity}) => (
      <div className={'quantity-container'}>
        <span className={'quantity-container__text'}>{quantity} ШТ</span>
      </div>
)