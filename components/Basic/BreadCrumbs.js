import { useRouter } from 'next/router';
import './breadcrumbs.module.scss';
// import IconBreadcrumbs from '../../img/icons/ic-work.svg';

export default function () {
  const router = useRouter();
  const crumbPath = router.pathname.slice(1);
  const normalizeBreadcrumb = (name) => {
    switch (name) {
      case 'actions':
        return 'Акции';
      case 'vacancy':
        return 'Вакансии';
      case 'cart':
        return 'Корзина';
      case 'order':
        return 'Ваш заказ';
      case 'about':
        return 'О компании';
      case 'bonus':
        return 'Бонусы';
      case 'delivery':
        return 'Доставка';
      case 'profile':
        return 'Профиль';
      case 'history':
        return 'История заказов';
      case 'info':
        return 'Личные данные';
      case 'address':
        return 'Адреса доставки';
      case 'success':
        return 'Заказ оформлен';
      case 'privacy-policy':
        return 'Политика конфиденциальности';
      case 'offer':
        return 'Публичная оферта';
      default:
        return name;
    }
  };

  return (
    <ul className="breadcrumbs-box">
      <li className="breadcrumbs-item_box">
        <a href="/">
          <img
            src="/img/icons/ic-work.svg"
            alt='Суши мастер, Тюмень — заказ и доставка суши и роллов"'
            className="breadcrumbs-main_img"
          />
        </a>
      </li>
      <li className="breadcrumbs-item_box breadcrumbs_delimeter"></li>
      <li className="breadcrumbs-item_box">
        <a href={router.pathname}>{normalizeBreadcrumb(crumbPath)}</a>
      </li>
    </ul>
  );
}
