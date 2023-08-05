import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

//components
// import Pagination from "@/components/partials/Pagination";

//media
import sellerHeaderBox from "../../assets/homePage/sellerBox.svg";
import seller_Logo from "../../assets/homePage/sellerImage.svg";
import StarGold_Icon from "../../assets/common/startGold.svg";
import StarEmpty_Icon from "../../assets/common/starEmpty.svg";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
const BestSellers = ({ data }) => {
  //fake data

  const [petShops, setPetShops] = useState([]);
  useEffect(() => {
    setPetShops(data.data);
  }, []);
  return (
    <div className="flex flex-col items-stretch lg:bg-[#DEDFE1] py-6 lg:pt-8 lg:pb-[60px]">
      <div className="flex justify-between items-center align-middle px-10 lg:px-[120px]">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          فروشندگان برتر
        </h5>
        {/* <Link
          href="/vet"
          className='hidden lg:block text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link> */}
      </div>
      {/* mobile */}
      <div className="flex lg:hidden flex-row-reverse items-center justify-center mr-10 my-3 lg:m-0 lg:my-10 lg:px-[120px] overflow-hidden ">
        <Swiper
          dir="rtl"
          slidesPerView={2}
          spaceBetween={180}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerGroup={1}
          className="mySwiper"
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 300,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 250,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 100,
              slidesPerGroup: 4,
            },
          }}
        >
          {petShops &&
            petShops.map((item, index) => (
              <>
                <SwiperSlide>
                  <div
                    key={index}
                    className="flex flex-col items-stretch ml-2 lg:m-4 w-[300px] lg:w-[375px] bg-[#F25642] rounded-3xl lg:shadow-shadowC"
                  >
                    <div className="w-full rounded-t-3xl overflow-hidden">
                      <Image
                        src={sellerHeaderBox}
                        alt="headerBox"
                        className="w-25"
                      />
                    </div>
                    <div className="flex rounded-b-3xl overflow-hidden">
                      <div className="flex flex-col p-5">
                        <h6 className="text-lg text-white font-black leading-6">
                          <bdi>{item.name}</bdi>
                        </h6>
                        <p className="text-base text-secondary font-medium leading-6 mt-1">
                          <bdi>فروشنده برتر پتمون</bdi>
                        </p>
                        <div className="flex flex-row items-center">
                          <Image
                            src={StarGold_Icon}
                            alt="Golden Star Icon"
                            className="lg:hidden w-3"
                          />
                          <div className="hidden lg:flex flex-row items-center">
                            {starsBoxHandler(item.average_rating)}
                          </div>
                          <p className="text-sm text-white font-medium leading-4 mr-1 align-middle">{`(${item.average_rating})`}</p>
                        </div>
                        <button className='text-sm text-center text-primary font-medium w-[120px] lg:w-[140px] px-2 py-2 mt-10 bg-white rounded-[40px] after:content-[">"] after:text-xl after:align-middle after:mr-3'>
                          <bdi>مشاهده فروشگاه</bdi>
                        </button>
                      </div>
                      <div className="flex flex-col justify-center items-stretch bg-white my-5 p-3 rounded-r-3xl">
                        <Image src={seller_Logo} alt="Store Logo" />
                        <h5 className="text-base text-center text-black font-bold leading-5">
                          <bdi>{item.name}</bdi>
                        </h5>
                        <p className="text-xs text-center text-gray-400 font-medium leading-4">
                          <bdi>فروشنده برتر</bdi>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div
                    key={index}
                    className="flex flex-col items-stretch ml-2 lg:m-4 w-[300px] lg:w-[375px] bg-[#F25642] rounded-3xl lg:shadow-shadowC"
                  >
                    <div className="w-full rounded-t-3xl overflow-hidden">
                      <Image
                        src={sellerHeaderBox}
                        alt="headerBox"
                        className="w-25"
                      />
                    </div>
                    <div className="flex rounded-b-3xl overflow-hidden">
                      <div className="flex flex-col p-5">
                        <h6 className="text-lg text-white font-black leading-6">
                          <bdi>{item.name}</bdi>
                        </h6>
                        <p className="text-base text-secondary font-medium leading-6 mt-1">
                          <bdi>فروشنده برتر پتمون</bdi>
                        </p>
                        <div className="flex flex-row items-center">
                          <Image
                            src={StarGold_Icon}
                            alt="Golden Star Icon"
                            className="lg:hidden w-3"
                          />
                          <div className="hidden lg:flex flex-row items-center">
                            {starsBoxHandler(item.average_rating)}
                          </div>
                          <p className="text-sm text-white font-medium leading-4 mr-1 align-middle">{`(${item.average_rating})`}</p>
                        </div>
                        <button className='text-sm text-center text-primary font-medium w-[120px] lg:w-[140px] px-2 py-2 mt-10 bg-white rounded-[40px] after:content-[">"] after:text-xl after:align-middle after:mr-3'>
                          <bdi>مشاهده فروشگاه</bdi>
                        </button>
                      </div>
                      <div className="flex flex-col justify-center items-stretch bg-white my-5 p-3 rounded-r-3xl">
                        <Image src={seller_Logo} alt="Store Logo" />
                        <h5 className="text-base text-center text-black font-bold leading-5">
                          <bdi>{item.name}</bdi>
                        </h5>
                        <p className="text-xs text-center text-gray-400 font-medium leading-4">
                          <bdi>فروشنده برتر</bdi>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
        </Swiper>
      </div>
      {/* desktop  */}
      <div className="hidden lg:flex flex-col items-stretch">
        <div className="hidden lg:flex flex-row-reverse items-center justify-center flex-wrap xl:flex-no-wrap mr-10 my-3 lg:m-0 lg:my-10 lg:px-[120px]">
          <Swiper
            dir="rtl"
            slidesPerView={2}
            spaceBetween={180}
            loop={false}
            loopFillGroupWithBlank={true}
            slidesPerGroup={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              340: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 160,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 160,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
              },
              1324: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
              },
            }}
          >
            {petShops &&
              petShops.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div
                      key={index}
                      className="flex flex-col items-stretch ml-2 lg:m-4 w-[500px] lg:w-[375px] bg-[#F25642] rounded-3xl lg:shadow-shadowC"
                    >
                      <div className="w-full rounded-t-3xl overflow-hidden">
                        <Image
                          src={sellerHeaderBox}
                          alt="headerBox"
                          className="w-25"
                        />
                      </div>
                      <div className="flex rounded-b-3xl overflow-hidden">
                        <div className="flex flex-col p-5">
                          <h6 className="text-lg text-white font-black leading-6">
                            <bdi>{item.name}</bdi>
                          </h6>
                          <p className="text-base text-secondary font-medium leading-6 mt-1">
                            <bdi>فروشنده برتر پتمون</bdi>
                          </p>
                          <div className="flex flex-row items-center">
                            <Image
                              src={StarGold_Icon}
                              alt="Golden Star Icon"
                              className="lg:hidden w-3"
                            />
                            <div className="hidden lg:flex flex-row items-center">
                              {starsBoxHandler(item.average_rating)}
                            </div>
                            <p className="text-sm text-white font-medium leading-4 mr-1 align-middle">{`(${item.average_rating})`}</p>
                          </div>
                          <button className='text-sm text-center text-primary font-medium w-[120px] lg:w-[140px] px-2 py-2 mt-10 bg-white rounded-[40px] after:content-[">"] after:text-xl after:align-middle after:mr-3'>
                            <bdi>مشاهده فروشگاه</bdi>
                          </button>
                        </div>
                        <div className="flex flex-col justify-center items-stretch bg-white my-5 p-3 rounded-r-3xl">
                          <Image src={seller_Logo} alt="Store Logo" />
                          <h5 className="text-base text-center text-black font-bold leading-5">
                            <bdi>{item.name}</bdi>
                          </h5>
                          <p className="text-xs text-center text-gray-400 font-medium leading-4">
                            <bdi>فروشنده برتر</bdi>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      key={index}
                      className="flex flex-col items-stretch ml-2 lg:m-4 w-[500px] lg:w-[375px] bg-[#F25642] rounded-3xl lg:shadow-shadowC"
                    >
                      <div className="w-full rounded-t-3xl overflow-hidden">
                        <Image
                          src={sellerHeaderBox}
                          alt="headerBox"
                          className="w-25"
                        />
                      </div>
                      <div className="flex rounded-b-3xl overflow-hidden">
                        <div className="flex flex-col p-5">
                          <h6 className="text-lg text-white font-black leading-6">
                            <bdi>{item.name}</bdi>
                          </h6>
                          <p className="text-base text-secondary font-medium leading-6 mt-1">
                            <bdi>فروشنده برتر پتمون</bdi>
                          </p>
                          <div className="flex flex-row items-center">
                            <Image
                              src={StarGold_Icon}
                              alt="Golden Star Icon"
                              className="lg:hidden w-3"
                            />
                            <div className="hidden lg:flex flex-row items-center">
                              {starsBoxHandler(item.average_rating)}
                            </div>
                            <p className="text-sm text-white font-medium leading-4 mr-1 align-middle">{`(${item.average_rating})`}</p>
                          </div>
                          <button className='text-sm text-center text-primary font-medium w-[120px] lg:w-[140px] px-2 py-2 mt-10 bg-white rounded-[40px] after:content-[">"] after:text-xl after:align-middle after:mr-3'>
                            <bdi>مشاهده فروشگاه</bdi>
                          </button>
                        </div>
                        <div className="flex flex-col justify-center items-stretch bg-white my-5 p-3 rounded-r-3xl">
                          <Image src={seller_Logo} alt="Store Logo" />
                          <h5 className="text-base text-center text-black font-bold leading-5">
                            <bdi>{item.name}</bdi>
                          </h5>
                          <p className="text-xs text-center text-gray-400 font-medium leading-4">
                            <bdi>فروشنده برتر</bdi>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </div>
        {/* <Pagination
          CardsPerPage={CardsPerPage}
          totalCards={Cards.length}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          paginate={paginate}
          currentPage={currentPage}
        /> */}
      </div>
    </div>
  );
};

export default BestSellers;
