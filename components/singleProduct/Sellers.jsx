import React from "react";
import Image from "next/image";
import { v4 } from "uuid";

export default function Sellers({ data }) {
  return (
    <div className="text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        فروشندگان دیگر
      </h5>
      <div className="grid lg:grid-cols-2 gap-6">
        {data.seller &&
          data.seller.map((item) => (
            <div
              key={v4()}
              className="w-full flex flex-row items-center justify-between my-4"
            >
              <div className="flex flex-row">
                <Image src={item.logo} alt="StoreLogo" />
                <h6 className="text-xl lg:text-2xl text-black font-bold leading-7 opacity-90 mr-1 lg:mr-5">
                  {item.name}
                </h6>
              </div>
              <div className="flex flex-row">
                <p className="text-2xl lg:text-xl text-primary font-medium leading-7">
                  <bdi>{`${item.price} تومان`}</bdi>
                </p>
                <button className="text-base text-center text-white font-bold bg-primary w-full py-3 px-5 rounded-[12px] lg:rounded-[15px] mr-2 lg:mr-5">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
