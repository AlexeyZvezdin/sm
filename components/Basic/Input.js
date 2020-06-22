import './input.scss';
import { useState } from 'react'

export const Input = (props) => {
  const [value ,setInput] = useState('')
  return (
    <div className={'input-container'}>
      <lable htmlFor={'input-name'} className="input-container__input-label">
        {props.children}
      </lable>
      <span className={'input-container__save-button'}>Сохранить</span>
      <input
        id={'input-name'}
        className="input-container__input"
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
