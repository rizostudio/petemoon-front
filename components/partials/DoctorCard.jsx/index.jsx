import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
// media

import StarGold_Icon from "@/assets/common/startGold.svg";
import BookmarkRed_Icon from "@/assets/common/BookmarkRedIcon.svg";
import { starsBoxHandler } from "@/services/product/starsOfProduct";
export default function index({ item }) {
  return (
    <div key={v4()} className="lg:m-5 w-full lg:w-[285px] my-1">
      <div className="flex flex-row lg:flex-col items-stretch w-full p-4 lg:p-5 bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB border-[1px] border-secondary border-solid lg:border-none">
        <div className="relative block w-[100px] lg:w-full h-full lg:h-[200px] p-0 bg-gray-400 border-[1px] border-solid border-primary overflow-hidden rounded-[15px] lg:rounded-[20px]">
          <div className="hidden lg:block absolute z-10 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full">
            <Image
              src={BookmarkRed_Icon}
              alt="Bookmark Icon"
              className="w-3 h-3 lg:w-5 lg:h-5"
            />
          </div>
          <div className="w-full h-full">
            <Image
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
              src={
                item.photo
                  ? `https://api.petemoon.com${item.photo}`
                  : "/assets/vet/DoctorPic.svg"
              }
              alt="Doctor Pic"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:mt-4 mr-3 lg:mr-0">
          <div className="flex justify-between items-center content-start">
            <h2 className="text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
              {item.first_name + " " + item.last_name}
            </h2>
            <p className="hidden lg:block text-sm text-info font-normal leading-5">
              <bdi>{`${item.comments_count} دیدگاه`}</bdi>
            </p>
          </div>
          <div className="w-full flex lg:flex-col-reverse justify-between items-center lg:items-stretch">
            <h4 className="text-xs lg:text-base text-primary font-medium leading-4 opacity-95">
              <bdi>{item.shortSpecialty}</bdi>
            </h4>
            <div className="lg:w-full flex lg:flex-row-reverse lg:justify-between items-center">
              <p className="text-xs lg:text-sm text-gray-400 font-medium leading-4 opacity-95 ml-2 lg:m-0">
                <bdi>{`${5} مشاوره`}</bdi>
              </p>
              <div className="flex items-center">
                <div className="hidden lg:flex items-center">
                  {starsBoxHandler(item.rate ? item.rate : 5)}
                </div>
                {/* <Image
                  src={StarGold_Icon}
                  alt="GoldenStarIcon"
                  className="w-2 h-2 lg:hidden"
                /> */}
                <p className="text-[11px] lg:text-xs text-gray-400 font-medium leading-2.5 lg:leading-6 align-bottom  mr-[2.5px] lg:mr-1 align-middle">{`(${
                  item.rate ? item.rate : 5
                })`}</p>
              </div>
            </div>
          </div>
          <p className="lg:hidden text-xs text-info font-normal leading-4 opacity-90 mt-1">
            <bdi>{`${item.comments_count} دیدگاه`}</bdi>
          </p>
          <Link
            href={`/vet/${item.id}`}
            className="self-end flex lg:flex-col items-center p-2 lg:py-1.5 lg:px-5 mt-3 lg:bg-primary lg:rounded-[10px]"
          >
            {/* <Image src={call_Icon} alt="Call Icon" className="lg:hidden" /> */}
            <p className="text-xs lg:text-base lg:text-center text-primary lg:text-white font-medium leading-7 mr-1 lg:mr-0">
              شروع مشاوره
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
