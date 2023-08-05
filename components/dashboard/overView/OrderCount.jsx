import React from "react";
import Image from "next/image";
//media
import BagTick_Icon from "../../../assets/dashboard/bag-tick2.svg";
import Uprise_Icon from "../../../assets/common/uprise.svg";

export default function OrderCount({ count }) {
  return (
    <div className="w-full lg:w-1/4 h-full flex flex-col justify-between items-stretch bg-white p-5  lg:mr-5 mt-3 lg:mt-0 rounded-[25px] shadow-shadowB">
      <Image src={BagTick_Icon} alt="BagTickIcon" />
      <div className="text-right flex flex-col">
        <p className="text-lg text-black font-bold mb-3">تعداد سفارشات شما</p>
        <p className="text-lg text-black font-bold">
          <bdi>{count} عدد</bdi>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-base text-black font-medium opacity-50">
          <bdi>در یک ماه گذشته</bdi>
        </p>
        {/* <div className="flex flex-row items-center">
          <p className="text-base text-verify font-medium leading-6">25 %</p>
          <div className="p-2 rounded-full bg-green-100 mr-1">
            <Image src={Uprise_Icon} alt="UpriseIcon" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
