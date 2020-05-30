import classes from './button.module.scss';

//TODO: Заменить на этот компонент все имеющиеся кнопки
function Button(props) {
  if (props.link) {
    if (props.external || /(http(s?)):\/\//gi.test(props.link)) {
      return (
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={ classes['button-link'] }
        >
          <div
            color={props.color}
            className={`${classes["wide-button"]} ${
              props.primary ? ` primary-button` : ''
            } wide-button_${props.color}`}
            onClick={props.onClick}
          >
            {props.children || props.text}
          </div>
        </a>
      )
    } else {
      return (
        <Link to={props.link} className={ classes['button-link'] }>
          <div
            color={props.color}
            className={`${classes['wide-button']} ${
              props.primary ? ' primary-button' : ''
            } wide-button_${props.color}`}
            onClick={props.onClick}
          >
            {props.children || props.text}
          </div>
        </Link>
      )
    }
  } else
    return (
      <div
        style={props.style}
        className={`wide-button ${
          props.primary ? ' primary-button' : ''
        } wide-button_${props.color} ${props.className}`}
        color={props.color}
        onClick={props.onClick}
        name={props.name}
      >
        {props.children || props.text}
      </div>
    )
}


//eslint-disable-next-line
export default Button
