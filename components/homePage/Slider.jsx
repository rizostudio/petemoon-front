import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 } from "uuid";

//media
import LeftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import export_Icon from "../../assets/homePage/exportIcon.svg";
import Slider_Pic from "../../assets/homePage/slider2.svg";

const Slider = () => {
  const data = [
    {
      image: Slider_Pic,
      title: "محصولات متنوع غذایی، بهداشتی و پوشاک",
      text: "خرید آسان با تخفیف ویژه و ارسال سریع در تهران",
      CTA: "سگ",
      link: "/product-category/all?pet_types=dog",
    },
    {
      image: "",
      title: "محصولات متنوع غذایی، بهداشتی و پوشاک",
      text: "خرید آسان با تخفیف ویژه و ارسال سریع در تهران",
      CTA: "گربه",
      link: "/product-category/all?pet_types=cat",
    },
    {
      image: Slider_Pic,
      title: "محصولات متنوع غذایی، بهداشتی و پوشاک",
      text: "خرید آسان با تخفیف ویژه و ارسال سریع در تهران",
      CTA: "پرندگان",
      link: "/product-category/all?pet_types=bird",
    },
  ];

  // for pagination
  const Cards = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [CardsPerPage] = useState(1);
  const totalCards = Cards.length;
  const paginateBack = () => {
    if (currentPage !== Math.ceil(Cards.length / CardsPerPage))
      setCurrentPage(currentPage + 1);
  };
  const paginateFront = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const paginate = function (pageNumber) {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / CardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-col items-stretch relative h-[150px] lg:h-auto p-0 mx-10 lg:m-0 lg:px-[120px] lg:pt-[40px] lg:pb-[70px] lg:bg-[#EA63521A] overflow-hidden rounded-[15px] lg:rounded-none">
      <div className="w-full h-full relative">
        {data &&
          data
            .slice(
              (currentPage - 1) * CardsPerPage,
              (currentPage - 1) * CardsPerPage + CardsPerPage
            )
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-full lg:h-[470px] bg-red-600 overflow-hidden lg:rounded-[25px]"
              >
                <Image
                  src={item.image}
                  alt="Slider.Pic"
                  className="w-full h-full object-cover"
                />

                <div className="flex flex-col w-[130px] lg:w-[290px] absolute right-6 top-2 lg:right-[80px] lg:top-[30%]">
                  <h2 className="text-base lg:text-3xl text-white font-bold leading-6 lg:leading-10">
                    <bdi>{item.title}</bdi>
                  </h2>
                  <p className="text-xs lg:text-base text-white font-extralight leading-4 lg:leading-7 mt-1 mb-2 lg:mt-2 lg:mb-[60px]">
                    <bdi>{item.text}</bdi>
                  </p>
                  <Link
                    href={item.link}
                    className="flex justify-between items-center cursor-pointer w-[100px] lg:w-[200px] px-[10px] py-[3px] lg:px-[16px] lg:py-[10px] bg-[#ea635280] border-[1px] border-primary rounded-[10px] lg:rounded-[15px]"
                  >
                    <bdi className="text-base lg:text-xl text-white font-bold">
                      {item.CTA}
                    </bdi>
                    <Image
                      src={export_Icon}
                      alt="Export Icon"
                      className="w-[10px] lg:w-[30px]"
                    />
                  </Link>
                </div>
              </div>
            ))}
      </div>
      <div className="self-center mt-8 absolute left-6 lg:relative">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div
            onClick={() => {
              paginateFront();
            }}
            className={
              currentPage === 1
                ? "hidden lg:block cursor-pointer p-3 bg-[#EA635266] rounded-[7px] rotate-180 ml-2"
                : "hidden lg:block cursor-pointer p-3 bg-primary rounded-[7px] rotate-180 ml-2"
            }
          >
            <Image src={LeftArrow_Icon} alt="leftArrowIcon" />
          </div>
          {pageNumbers.map((number) => (
            <div
              key={v4()}
              onClick={() => {
                paginate(number);
              }}
              className={
                currentPage === number
                  ? "cursor-pointer w-2 h-6 lg:w-7 lg:h-2 rounded-[5px] bg-white lg:bg-primary my-[2px] lg:mx-2 transition-all"
                  : "cursor-pointer w-2 h-2 rounded-full bg-black lg:bg-[#EA635266] opacity-50 lg:opacity-100 my-[2px] lg:mx-2 transition-all"
              }
            ></div>
          ))}
          <div
            onClick={() => {
              paginateBack();
            }}
            className={
              currentPage == Math.ceil(totalCards / CardsPerPage)
                ? "hidden lg:block cursor-pointer p-3 bg-[#EA635266] rounded-[7px] mr-2"
                : "hidden lg:block cursor-pointer p-3 bg-primary rounded-[7px] mr-2"
            }
          >
            <Image src={LeftArrow_Icon} alt="leftArrowIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
