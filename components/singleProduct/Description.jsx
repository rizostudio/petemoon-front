import React from "react";

export default function Description({ data }) {
  return (
    <div className="text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        توضیح جامع
      </h5>
      <p>
        <bdi>{data.details}</bdi>
      </p>
    </div>
  );
}
