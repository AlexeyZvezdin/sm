import bannersStyles from './banners.module.scss';
import Swiper from 'react-id-swiper';

export let renderBanners = (banners) => {
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
    <div className="banner" key={banners[0].id}>
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
  );
};
