import './personalHeader.module.scss'

export const PersonalHeader = props => (
  <div className={'personal-page-header'}>
    <div className={'personal-page-header__back-button'}/>
    <h1 className={'personal-page-header__title'}>{props.children}</h1>
  </div>
)

