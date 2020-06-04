import Link from 'next/link';
import s from './sticky.module.scss';

export default function StickyHeaderView(props) {
  return (
    <div className={s[`sticky-header`]}>
      {props.tabs.map((item) => (
        <div key={item.id} className={s['sticky-header__categories__item']}>
          {/* Warning: You're using a string directly inside <Link>.
           This usage has been deprecated. Please add an <a> tag as child of <Link> */}
          <Link href="/menu/[path]" as={`/menu/${item.path}`}>
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
