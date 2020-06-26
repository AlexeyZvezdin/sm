import './link.module.scss'
import Link from 'next/link'


export default function LinkCustom(props) {
  return (
    <Link href={props.path} >
      <a className={'link'}>{props.children}</a>
    </Link>
  )
}