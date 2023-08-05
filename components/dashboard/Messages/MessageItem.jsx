import React from "react";
import Image from "next/image";
//media
import Trash_Icon from "../../../assets/common/trash.svg";
export default function MessageItem({ item }) {
  return (
    <div className="w-full h-auto flex flex-col justify-between items-stretch my-2 lg:my-4 px-4 lg:px-10 py-2 lg:py-8 bg-white rounded-[15px] lg:rounded-3xl border-[1px] solid lg:border-none border-secondary lg:shadow-shadowB">
      <div className="flex flex-row justify-end lg:justify-between items-center">
        <p className="hidden lg:block lg:text-base text-black font-medium lg:font-black leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
          <bdi>{item.from}</bdi>
        </p>
        <p className="text-xs lg:text-base text-gray-400 font-medium leading-4">
          <bdi>{item.date}</bdi>
        </p>
      </div>
      <div className="text-right mt-1 mb-6 lg:mt-5">
        <h3 className="text-base lg:text-lg text-black font-medium leading-7 mb-1">
          <bdi>{item.subject}</bdi>
        </h3>
        <p className="text-sm lg:text-base text-gray-400 font-medium leading-6">
          <bdi>{item.text}</bdi>
        </p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        {item.CTA ? (
          <p className='text-xs lg:text-xl text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'>
            <bdi>{item.CTA}</bdi>
          </p>
        ) : (
          <p></p>
        )}
        <div
          className="flex flex-row cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px]"
          onClick={() => TrashHandler(index)}
        >
          <Image src={Trash_Icon} alt="TrashICon" />
          <p className="lg:hidden text-xs text-gray-400 font-medium align-bottom mr-1">
            حذف از لیست
          </p>
        </div>
      </div>
    </div>
  );
}
