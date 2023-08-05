import React from "react";
import Link from "next/link";
import Image from "next/image";

//media
import dogsImage from "../../assets/homePage/dogImage2.svg";
import rabbitImage from "../../assets/homePage/rabbitImage.svg";
import catsImage from "../../assets/homePage/catImage.svg";
import birdsImage from "../../assets/homePage/birdImage.svg";

const Category = () => {
  return (
    <div className="flex flex-col items-stretch py-4 lg:py-[40px]">
      <div className="hidden lg:flex justify-between items-center align-middle px-10 lg:px-[120px]">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          دسته بندی محصولات
        </h5>
        {/* <Link
          href="/vet"
          className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link> */}
      </div>
      <div className="flex items-center lg:grid grid-cols-4 gap-5 mr-10 lg:px-[120px] py-7 lg:py-10 overflow-x-scroll lg:overflow-hidden scrollbar scrolling-touch scroll-smooth scroll-mx-10 touch-pan-x lg:touch-none scrolling-touch">
        <Link href={"/product-category/all?pet_types=dog"}>
          <div className="flex h-[150px] w-[250px] lg:w-full lg:h-[320px] bg-[#F99C90] rounded-[25px] relative">
            <Image
              src={dogsImage}
              alt="Dog Picture"
              className="absolute w-[220px] lg:w-[500px] bottom-0 left-0"
            />
            <div className="self-end lg:self-start flex flex-col px-8 py-5">
              <p className="text-sm lg:text-xl text-white font-normal leading-6">
                دسته بندی ویژه
              </p>
              <h4 className="text-base lg:text-2xl text-white font-black leading-7">
                سگ
              </h4>
            </div>
          </div>
        </Link>
        <div className="flex h-[150px] w-[250px] lg:w-full lg:h-[320px] bg-[#EC995D] rounded-[25px] relative">
          <Image
            src={rabbitImage}
            alt="Rabbit Picture"
            className="absolute w-[150px] lg:w-[300px] bottom-0 left-0"
          />
          <div className="self-end lg:self-start flex flex-col px-8 py-5">
            <p className="text-sm lg:text-xl text-white font-normal leading-6">
              دسته بندی ویژه
            </p>
            <h4 className="text-base lg:text-2xl text-white font-black leading-7">
              جوندگان
            </h4>
          </div>
        </div>
        <Link href={"/product-category/all?pet_types=bird"}>
          <div className="flex h-[150px] w-[250px] lg:w-full lg:h-[320px] bg-[#FF7766] rounded-[25px] relative">
            <Image
              src={birdsImage}
              alt="Birds Picture"
              className="absolute w-[150px] lg:w-[300px] bottom-0 left-0"
            />
            <div className="self-end lg:self-start flex flex-col px-8 py-5">
              <p className="text-sm lg:text-xl text-white font-normal leading-6">
                دسته بندی ویژه
              </p>
              <h4 className="text-base lg:text-2xl text-white font-black leading-7">
                پرندگان
              </h4>
            </div>
          </div>
        </Link>
        <Link href={"/product-category/all?pet_types=cat"}>
          <div className="flex h-[150px] w-[250px] lg:w-full lg:h-[320px] bg-[#FFE454] rounded-[25px] relative">
            <Image
              src={catsImage}
              alt="Cat Picture"
              className="absolute w-[170px] lg:w-[350px] bottom-0 left-0"
            />
            <div className="self-end lg:self-start flex flex-col px-8 py-5">
              <p className="text-sm lg:text-xl text-white font-normal leading-6">
                دسته بندی ویژه
              </p>
              <h4 className="text-base lg:text-2xl text-white font-black leading-7">
                گربه
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
