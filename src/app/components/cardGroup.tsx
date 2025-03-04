import { useState } from "react";
import { Swiper as SwiperType } from 'swiper';
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card, { CardItemProps } from "./card";

// Define the type for the Card data

interface CardGroupProps {
  data: CardItemProps[];
}

const CardGroup = ({ data }: CardGroupProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const handleSlideClick = (index: number) => {
    if (!swiper)    return;
    if (index !== swiper.realIndex)
      swiper.slideToLoop(index)
  };
  return (
    <div className="flex flex-col gap-4 w-[18rem] md:w-[40rem] lg:w-full">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectCoverflow,
          EffectFade,
        ]}
        slidesPerView={3}
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
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: -20,
              depth: 30,
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
              stretch: -10,
              depth: 30,
              modifier: 3,
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
