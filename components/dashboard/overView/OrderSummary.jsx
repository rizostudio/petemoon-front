import React from "react";
import Image from "next/image";
//media
import BagDelivered_Icon from "../../../assets/dashboard/bag-tick.svg";
import BagCurrent_Icon from "../../../assets/dashboard/bag-happy.svg";
import BagCrossed_Icon from "../../../assets/dashboard/bag-cross.svg";

export default function OrderSummary({ orders }) {
  return (
    <div className="block w-full bg-white rounded-[25px] shadow-shadowA">
      <div className="flex justify-between items-center px-10 py-8">
        <p className='text-base text-black font-bold leading-8  before:w-2 before:h-4 before:bg-primary before:text-primary before:content-[">"] before:ml-2 before:rounded-[2px]'>
          سفارش های من
        </p>
        <p className=' text-xs text-primary font-medium leading-6 after:content-[">"] after:mr-4 after:text-base'>
          مشاهده همه
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-20 py-12">
        <div className="px-1 py-0 flex items-center">
          <Image
            src={BagCurrent_Icon}
            alt="CurrentBag-pic"
            width={100}
            height={100}
          />
          <div className="p-1 text-right flex flex-col">
            <p className="text-sm text-black font-black leading-8 mb-1">
              سفارش های جاری
            </p>
            <span className="text-xs text-black font-medium leading-6">
              <bdi>{orders.ongoing} سفارش</bdi>
            </span>
          </div>
        </div>
        <div className="px-1 py-0 flex items-center border-r-[2px] border-secondary lg:solid border-none">
          <Image
            src={BagDelivered_Icon}
            alt="DeliveredBag-pic"
            width={100}
            height={100}
          />
          <div className="p-1 text-right flex flex-col">
            <p className="text-sm text-black font-black leading-8 mb-1">
              تحویل شده
            </p>
            <span className="text-xs text-black font-medium leading-6">
              <bdi>{orders.delivered} سفارش</bdi>
            </span>
          </div>
        </div>
        <div className="px-1 py-0 flex items-center border-r-[2px] border-secondary lg:solid border-none">
          <Image
            src={BagCrossed_Icon}
            alt="CrossedBag-pic"
            width={100}
            height={100}
          />
          <div className="p-1 text-right flex flex-col">
            <p className="text-sm text-black font-black leading-8 mb-1">
              مرجوع شده
            </p>
            <span className="text-xs text-black font-medium leading-6">
              <bdi>{orders.canceled} سفارش</bdi>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
