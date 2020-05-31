import React from 'react'
import Link from 'next/link';


import Button from '../Basic/Button';

//Icons
import ARROW from '../../public/img/icons/ic-round-arrow-forward.svg'

export default props => {

  return (
    <div className = 'item' >
      <h3 className = 'item-title' >{props.title}</h3>
      <div className = 'item-text' >{props.experience}</div>
      <div className = 'item-text' >{props.wages}</div>

      <Link href={`/vacancy/${props.url}`}>
        <div className='item-about' >
          Подробнее
          <img className = 'item-ico' src={ARROW} alt="" />
        </div>
      </Link>

     <Button

      text={'Заполнить анкету'}
      primary
      style={{
        position: 'absolute',
        bottom: '24px',
        width: '200px',
      }}
     ></Button>

     <style jsx>{`

     .item-ico {
      width: 16px;
      height: 16px;
     }

      .item {
        border-radius: 10px;
        border: solid 1px rgba(29, 29, 29, 0.1);
        background-color: #ffffff;
        padding: 24px;
        min-height: 495px;
        margin-bottom: 10px;
        position: relative;
      }

      .item-about {
        cursor: pointer;
        color: #e30613;
        font-family: Gotham Pro;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #e30613;
        text-align:left;
      }

      .item-title {
        font-family: Pusia;
        font-size: 24px;
        font-weight: 800;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: #1d1d1d;
        margin-bottom: 16px;
        text-align:left;
      }

      .item-text {
        font-family: Gotham Pro;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.78;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 16px;
        text-align:left;
      }
     `}</style>

    </div>
  )
}
