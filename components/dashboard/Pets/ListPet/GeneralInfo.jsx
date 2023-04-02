import React from "react";
import clsx from "clsx";
export default function GeneralInfo({ tabHandlear, item }) {
  return (
    <div
      className={clsx("flex-col lg:flex-row justify-between items-stretch", {
        hidden: tabHandlear !== "general",
        flex: tabHandlear === "general",
      })}
    >
      <div className="lg:hidden flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2">
        <p className="lg:hidden text-base text-black">نام</p>
        <p className="lg:hidden text-sm text-gray-400 mr-3 font-medium">
          <bdi>{item.name}</bdi>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2">
          <p className="text-base text-black">نوع</p>
          <p className="text-sm text-gray-400 mr-3 font-medium">
            <bdi>{item.pet_type}</bdi>
          </p>
        </div>
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4">
          <p className="text-sm lg:text-base text-black">جنسیت</p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>{item.sex}</bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mr-10">
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2">
          <p className="text-sm lg:text-base text-black">نژاد</p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>{item.pet_category}</bdi>
          </p>
        </div>
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4">
          <p className="text-sm lg:text-base text-black">تاریخ تولد</p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>{item.birth_date}</bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
