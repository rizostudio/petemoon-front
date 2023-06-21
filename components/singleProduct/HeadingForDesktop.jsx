import React from "react";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
export default function HeadingForDesktop({ data }) {
  return (
    <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start py-4  lg:px-4 border-b-[2px] border-none lg:border-solid border-secondary">
      <div className="flex flex-col">
        <p className="text-base lg:text-lg text-gray-400 font-normal leading-6">
          <bdi>{data.category.name}</bdi>
        </p>
        <div className="w-full hidden lg:flex flex-row items-center justify-between mt-2">
          <h2 className="text-3xl text-black font-bold leading-10 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2  before:rounded-[2px]">
            {data.name}
          </h2>
          {data.price > 0 && data.price_after_sale > 0 && (
            <p className='text-base text-white font-medium leading-8 px-2 py-1 mr-3 rounded-[10px] bg-primary before:content-["%"] before:text-[14px]'>
              <bdi>{data.price / data.price_after_sale}</bdi>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start lg:mt-10">
        <div className="hidden lg:flex flex-row items-center">
          <div className="flex flex-row items-center">
            {starsBoxHandler(data.rating ? data.rating : 5)}
          </div>
          <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${
            data.rating ? data.rating : 5
          })`}</p>
        </div>
        <p className="text-base lg:text-lg text-info font-normal leading-6 lg:mt-2">
          <bdi>{`${data.comments.length} دیدگاه`}</bdi>
        </p>
      </div>
    </div>
  );
}
