import bannersStyles from './banners.module.scss';
import Swiper from 'react-id-swiper';

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
      <div className={bannersStyles['banners__products']}>
        <div
          style={{
            width: '350px',
            height: '300px',
            border: '1px solid black',
          }}
        >
          {JSON.stringify(products[0])}
        </div>
        <div
          style={{
            width: '350px',
            height: '300px',
            border: '1px solid black',
          }}
        >
          {JSON.stringify(products[1])}
        </div>
      </div>
    </div>
  );
};
