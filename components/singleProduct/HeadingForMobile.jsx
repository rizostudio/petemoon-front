import React, { use, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
// media
import StarGold_Icon from "../../assets/common/startGold.svg";
import ShopBagRedMobile_Icon from "../../assets/common/shopping-cartRedIcon2.svg";
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";

export default function HeadingForMobile({ data }) {
  const router = useRouter();
  return (
    <div className="flex lg:hidden flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10">
      <div className="flex flex-col w-[80%] justify-end">
        <div className="flex flex-row items-center">
          <h2
            className={clsx(
              "text-base text-black font-black w-[80%]  leading-7 opacity-90 before:inline-block before:w-2 before:h-5 before:ml-1 before:align-middle before:rounded-[2px]",
              {
                "before:bg-primary": data.best_pricing?.inventory,
                "before:bg-gray-400": !data.best_pricing?.inventory,
              }
            )}
          >
            {data.name}
          </h2>
          <div className="flex flex-row items-center mr-1">
            <Image src={StarGold_Icon} alt="GoldenStarIcon" />
            <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${
              data.rating ? data.rating : 5
            })`}</p>
          </div>
        </div>
        {!data.best_pricing?.inventory && (
          <p className="text-base text-gray-400 font-medium leading-6 underline mr-4">
            ناموجود
          </p>
        )}
      </div>
      <div className="flex flex-row w-[20] justify-between items-center">
        <Link
          href={"/cart"}
          className="p-[15px] border-[1px] border-primary solid rounded-[15px]"
        >
          <Image
            width={15}
            height={15}
            src={ShopBagRedMobile_Icon}
            alt="RedShopBagIcon"
          />
        </Link>
        <div
          onClick={() => router.back()}
          className="p-[15px]  mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
        >
          <Image
            width={10}
            height={10}
            src={leftArrow_Icon}
            alt="LeftArrowIcon"
          />
        </div>
      </div>
    </div>
  );
}
