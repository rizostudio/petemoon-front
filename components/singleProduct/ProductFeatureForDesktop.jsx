import React from "react";

export default function ProductFeatureForDesktop({ data }) {
  return (
    <div className="px-10 py-5 lg:px-0 lg:py-10 hidden lg:block border-none lg:border-solid border-b-[2px] border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        ویژگی ها
      </h5>
      <div className="grid grid-cols-2">
        {data.specs.map((item) => (
          <div className="flex flex-row items-center align-middle my-1 ">
            <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
              <bdi>{item.name}</bdi>
            </p>
            <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
              <bdi>{item.value}</bdi>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
