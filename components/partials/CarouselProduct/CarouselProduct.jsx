import React from "react";
import { v4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

//component
import ProductMobileCard from "../productCard/ProductMobileCard";
import ProductDesktopCard from "../productCard/ProductDesktopCard";
const CarouselProduct = ({ data }) => {
  return (
    <div>
      {/* mobile */}
      <div className="lg:hidden block ">
        <div className="flex flex-row-reverse justify-center items-center ">
          <Swiper
            dir="rtl"
            slidesPerView={2}
            spaceBetween={180}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // loopFillGroupWithBlank={true}
            slidesPerGroup={1}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 190,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
              },
            }}
          >
            {data &&
              data.map((item, index) => (
                <SwiperSlide key={v4()}>
                  <ProductMobileCard item={item} index={index} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden lg:flex flex-col items-stretch">
        <div className="flex justify-center items-center flex-wrap xl:flex-nowrap">
          <Swiper
            dir="rtl"
            slidesPerView={4}
            spaceBetween={30}
            // loopFillGroupWithBlank={true}
            slidesPerGroup={4}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
              },

              1364: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
              },
            }}
          >
            {data &&
              data.map((item, index) => {
                return (
                  <SwiperSlide key={v4()}>
                    <ProductDesktopCard item={item} index={index} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselProduct;
