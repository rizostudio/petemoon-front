import React from "react";
import Image from "next/image";
// media
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";

export default function DefaultSeller({ data }) {
  return (
    <div className="flex flex-row justify-between order-1 my-3">
      <div className="text-right">
        <div className="flex flex-row items-center">
          <Image src={StoreAlt_Logo} alt="StoreAltLogo" />
          <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
            <bdi>فروشنده</bdi>
          </p>
        </div>
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 mr-5 mt-1 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>{data.best_pricing?.petshop.name}</bdi>
        </p>
      </div>
      <p className="text-sm lg:text-base text-info font-normal leading-6">
        <bdi>{`${data.productpricing?.length } فروشنده دیگر`}</bdi>
      </p>
    </div>
  );
}
