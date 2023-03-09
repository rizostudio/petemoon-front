import React, { use, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
// media
import StarGold_Icon from "../../assets/common/startGold.svg";
import ShopBagRedMobile_Icon from "../../assets/common/shopping-cartRedIcon2.svg";
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";

export default function HeadingForMobile({ data }) {
  return (
    <div className="flex lg:hidden flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10">
      <div className="flex flex-col justify-end">
        <div className="flex flex-row items-center">
          <h2
            className={clsx(
              "text-base text-black font-black leading-7 opacity-90 before:inline-block before:w-2 before:h-5 before:ml-1 before:align-middle before:rounded-[2px]",
              {
                "before:bg-primary": data.amount,
                "before:bg-gray-400": !data.amount,
              }
            )}
          >
            {data.name}
          </h2>
          <div className="flex flex-row items-center mr-1">
            <Image src={StarGold_Icon} alt="GoldenStarIcon" />
            <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${data.stars})`}</p>
          </div>
        </div>
        {!data.amount && (
          <p className="text-base text-gray-400 font-medium leading-6 underline mr-4">
            ناموجود
          </p>
        )}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="p-2 border-[1px] border-primary solid rounded-[15px]">
          <Image src={ShopBagRedMobile_Icon} alt="RedShopBagIcon" />
        </div>
        <div className="p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]">
          <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
        </div>
      </div>
    </div>
  );
}
