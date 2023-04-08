import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";

// media
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import Sort_Icon from "../../assets/common/sortIcon.svg";

export default function SortInMobile({
  setSortValue,
  setSortPageOpen,
  setMainPageOpen,
  SortPageOpen,
  sortArr,
  sortValue,
}) {
  return (
    <div
      className={clsx("lg:hidden w-full h-full", {
        block: SortPageOpen == true,
        hidden: SortPageOpen == false,
      })}
    >
      <div className="h-[40px] w-full p-10 flex lg:hidden justify-between items-center">
        <div className="flex items-center">
          <Image src={Sort_Icon} alt="SortIcon" />
          <p className="text-xl text-black font-medium leading-8 mx-2">
            مرتب سازی
          </p>
        </div>
        <div
          onClick={() => {
            setSortPageOpen(false);
            setMainPageOpen(true);
          }}
          className="h-full px-4 py-5 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer flex justify-center items-center"
        >
          <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
        </div>
      </div>
      <div className="flex flex-col">
        {sortArr.map((item) => (
          <p
            key={v4()}
            onClick={() => {
              setSortValue(item.title);
              setSortPageOpen(false);
              setMainPageOpen(true);
            }}
            className={clsx(
              "text-base font-medium leading-6 opacity-90 cursor-pointer px-10 py-4 border-b-[1px] border-solid border-secondary",
              {
                "text-primary": item.title == sortValue,
                "text-black opacity-80": item.title !== sortValue,
              }
            )}
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}
