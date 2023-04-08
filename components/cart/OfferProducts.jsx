import React from "react";
import Link from "next/link";
//components
import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";
export default function OfferProducts({ data }) {
  return (
    <div className="flex flex-col items-stretch px-0 py-5 lg:py-10 border-y-[2px] lg:border-none border-secondary">
      <div className="flex justify-between items-center align-middle px-10 lg:px-0">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات مشابه
        </h5>
        <Link
          href="/products"
          className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link>
      </div>
      <div className="mr-10 lg:m-0 px-0 lg:px-[120px] py-2 lg:py-6">
        <CarouselProduct data={data} />
      </div>
    </div>
  );
}
