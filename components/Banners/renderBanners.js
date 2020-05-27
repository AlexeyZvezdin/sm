import bannersStyles from './banners.module.scss';
import Swiper from 'react-id-swiper';
import p_s from '../Products/products.module.scss';
export let renderBanners = (banners, index, products) => {
  const swiperParams = {
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };
  return (
    <div
      key={banners[0].id}
      style={{
        display: 'flex',
        flexDirection: index % 2 ? 'row-reverse' : 'row',
      }}
    >
      <div className={bannersStyles['banner']}>
        <div className={bannersStyles['banners__swiper-container']}>
          <Swiper
            shouldSwiperUpdate={true}
            rebuildOnUpdate={true}
            {...swiperParams}
          >
            {banners.map((el) => (
              <img
                key={el.id}
                style={{
                  padding: '1px',
                }}
                src={`https://client-api.sushi-master.ru/pics/${el.pictureId}`}
              />
            ))}
          </Swiper>
        </div>
      </div>
      <div className={p_s['products']}>
        <div className={p_s['product']} key={products[0].id}>
          <a href="#">
            <img
              src={`https://client-api.sushi-master.ru/pics/${products[0].mainPictureId}?width=400`}
              alt=""
            />
          </a>
          <a href="#">
            <h3 className={p_s['product-name']}>{products[0].name}</h3>
          </a>
          <p className={p_s['product-description']}>
            <span>{products[0].description.slice(0, 60) + '...'}</span>
            <span className="product-weight">
              {products[0].nutritionalElement.weight + ' гр.'}
            </span>
          </p>
        </div>
        <div className={p_s['product']} key={products[1].id}>
          <a href="#">
            <img
              src={`https://client-api.sushi-master.ru/pics/${products[1].mainPictureId}?width=400`}
              alt=""
            />
          </a>
          <a href="#">
            <h3 className={p_s['product-name']}>{products[1].name}</h3>
          </a>
          <p className={p_s['product-description']}>
            <span>{products[1].description.slice(0, 160) + '...'}</span>
            <span className="product-weight">
              {products[1].nutritionalElement.weight + ' гр.'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
// {JSON.stringify(products[1])}
