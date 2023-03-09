import React from "react";
import Image from "next/image";
import clsx from "clsx";
// media
import Availability_Icon from "../../assets/product/availability.svg";

export default function SummeryAvailebility({ data }) {
  return (
    <div
      className={clsx("order-1 w-full mb-3 lg:mb-0", {
        "lg:mt-9": !data.amount,
        "lg:mt-2": data.amount,
      })}
    >
      {data.amount ? (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="text-right">
            <div className="flex flex-row items-center">
              <Image src={Availability_Icon} alt="AvailabilityIcon" />
              <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
                <bdi>موجود در</bdi>
              </p>
            </div>
            <p className="text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 mt-2">
              <bdi>{`انبار فروشنده`}</bdi>
            </p>
          </div>
          <div className="hidden lg:block bg-[#ea63521a] p-5 rounded-[15px] mr-10">
            <div className="flex flex-row justify-between items-center">
              <p className="text-lg text-gray-400 font-medium leading-8">
                قیمت فروشنده:
              </p>
              <p className="text-lg text-primary font-medium leading-10 mr-20">
                <bdi>{`${data.price} تومان`}</bdi>
              </p>
            </div>
            <button className="text-base text-white font-bold leading-7 bg-primary py-3 px-5 w-full rounded-[15px]">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <button className="text-base text-center text-white font-medium w-1/3 px-3 py-3 bg-gray-400 rounded-[15px]">
            ناموجود
          </button>
          <button className="text-base text-center text-white font-medium w-2/3 px-5 py-3 mr-4 bg-primary rounded-[15px]">
            موجود شد خبرم کن
          </button>
        </div>
      )}
    </div>
  );
}
