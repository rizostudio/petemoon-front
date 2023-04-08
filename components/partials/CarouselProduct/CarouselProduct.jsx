import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

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
            loop={false}
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
                <SwiperSlide key={parseInt(index) + 16}>
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
            loop={false}
            // loopFillGroupWithBlank={true}
            slidesPerGroup={4}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
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
                console.log(item);
                return (
                  <SwiperSlide key={item.id}>
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
