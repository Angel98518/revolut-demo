import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card, { CardItemProps } from "./card";
import { useState } from "react";

// Define the type for the Card data

interface CardGroupProps {
  data: CardItemProps[];
}

const CardGroup = ({ data }: CardGroupProps) => {
  const [swiper, setSwiper] = useState(null);
  const handleSlideClick = (index: number) => {
    if (!swiper)    return;
    if (index !== swiper.realIndex)
      swiper.slideToLoop(index)
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectCoverflow,
          EffectFade,
        ]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        edgeSwipeDetection={true}
        effect="coverflow"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
        }}
        onSwiper={(swiperObject) => (setSwiper(swiperObject))}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: -30,
              // depth: 30,
              modifier: 0,
              slideShadows: false,
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: -8,
              depth: 30,
              modifier: 2.5,
              slideShadows: false,
            },
          },
        }}
        className="w-full rounded-lg "
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-300"
            onClick={() => handleSlideClick(index)}
          >
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              time={item.time}
              type={item.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
        <div className="custom-swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CardGroup;
