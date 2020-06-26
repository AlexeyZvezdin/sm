import './personalMenu.scss';
import LinkCustom from '../Basic/Link'


export default function PersonalMenu() {
  return (
    <div className={'personal-menu'}>
      <LinkCustom path={'/bonus'}>Бонусы</LinkCustom>
      <LinkCustom path={'/history'}>История заказов</LinkCustom>
      <LinkCustom path={'/favourite'}>Избранные товары</LinkCustom>
      <LinkCustom path={'/info'}>Личные данные</LinkCustom>
      <LinkCustom path={'/address'}>Адреса доставок</LinkCustom>
    </div>
  );
}
