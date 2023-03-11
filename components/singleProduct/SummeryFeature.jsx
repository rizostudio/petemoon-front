import React from "react";
import Image from "next/image";

// media
import Properties_Icon from "../../assets/product/PropertiesIcon.svg";

export default function SummeryFeature({ data }) {
  return (
    <div className="pb-3 my-2 order-2 lg:order-1 border-none lg:border-solid border-b-[2px] border-secondary">
      <div className="flex flex-row items-center mb-1">
        <Image src={Properties_Icon} alt="PropertiesIcon" />
        <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
          <bdi>ویژگی ها</bdi>
        </p>
      </div>
      <div className="flex flex-row items-center align-middle my-1 mr-5">
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>مخصوص:</bdi>
        </p>
        <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
          <bdi>{data.property}</bdi>
        </p>
      </div>
      <div className="flex flex-row items-center align-middle my-1 mr-5">
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>نوع:</bdi>
        </p>
        <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
          <bdi>{data.property}</bdi>
        </p>
      </div>
      <div className="lg:hidden flex flex-row items-center align-middle my-1 mr-5">
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>کشور سازنده:</bdi>
        </p>
        <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
          <bdi>{data.property}</bdi>
        </p>
      </div>
      <div className="lg:hidden flex flex-row items-center align-middle my-1 mr-5">
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>ابعاد:</bdi>
        </p>
        <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
          <bdi>{data.property} cm</bdi>
        </p>
      </div>
      <div className="lg:hidden flex flex-row items-center align-middle my-1 mr-5">
        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
          <bdi>وزن:</bdi>
        </p>
        <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
          <bdi>{data.property} گرم</bdi>
        </p>
      </div>
    </div>
  );
}
