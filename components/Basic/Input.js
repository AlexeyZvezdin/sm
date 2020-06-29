import './input.scss';
import { useRef, useState } from 'react';

export const Input = (props) => {
  const init = props.Value ? props.Value : '';

  const [state, setInput] = useState(init);
  const inputRef = useRef(null);

  console.log(init, 'lol');
  console.log(state, 'kek');

  return (
    <div className={'input-container'}>
      <lable htmlFor={'input-name'} className="input-container__input-label">
        {props.children}
      </lable>
      <span
        className={
          'input-container__save-button' +
          ' ' +
          (props.ReadOnly ? 'input-container__save-button_hidden' : null)
        }
      >
        Сохранить
      </span>
      <input
        id={'input-name'}
        className="input-container__input"
        type="text"
        value={state}
        onChange={(e) => setInput(e.target.value)}
        readOnly={props.ReadOnly}
        ref={inputRef}
      />
    </div>
  );
};