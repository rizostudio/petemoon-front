import React from "react";
import clsx from "clsx";
//moment
import moment from "jalali-moment";
export default function MedicalInfo({ tabHandlear, item }) {
  return (
    <div
      className={clsx("flex-col lg:flex-row justify-between items-stretch", {
        hidden: tabHandlear !== "medical",
        flex: tabHandlear === "medical",
      })}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2">
          <p className="text-base text-black">وزن</p>
          <p className="text-sm text-gray-400 mr-3 font-medium">
            <bdi>{item.weight}</bdi>
          </p>
        </div>
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4">
          <p className="text-sm lg:text-base text-black">بیماری زمینه ای</p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>{item.underlying_disease}</bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:mr-10">
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2">
          <p className="text-sm lg:text-base text-black">تاریخ آخرین واکسن</p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>
              {moment(item.last_vaccine_date)
                .locale("fa")
                .format("YYYY MMM DD")}
            </bdi>
          </p>
        </div>
        <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4">
          <p className="text-sm lg:text-base text-black">
            تاریخ آخرین واکسن ضد انگل
          </p>
          <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
            <bdi>
              {moment(item.last_anti_parasitic_vaccine_date)
                .locale("fa")
                .format("YYYY MMM DD")}
            </bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
