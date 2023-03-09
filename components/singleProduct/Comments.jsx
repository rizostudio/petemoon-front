import React, { useState } from "react";
import Image from "next/image";
import { v4 } from "uuid";

//components
import Modal from "../partials/modal/Modal";

// media
import StarGold_Icon from "../../assets/common/startGold.svg";

export default function Comments({
  setMainPageOpen,
  setCommentPageOpen,
  commentPageOpen,
  data,
  title,
  description,
  formSubmit,
  change,
}) {
  return (
    <div className="px-10 py-5 lg:px-0 lg:py-10 flex flex-col items-stretch border-solid border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        نظرات
      </h5>
      {data.comments.map((item) => (
        <div key={v4()} className="mb-4 lg:mb-8">
          <div className="flex justify-between">
            <div className="flex justify-between items-center">
              <Image src={item.profilePic} alt="ProfilePic" />
              <h6 className="text-base lg:text-xl text-black font-black opacity-95 mr-2 ml-4 lg:mx-5">
                <bdi>{item.title}</bdi>
              </h6>
              <div className="flex flex-row items-center mr-1">
                <Image src={StarGold_Icon} alt="GoldenStarIcon" />
                <p className="text-lg text-gray-400 font-medium leading-5 mr-1 lg:mr-2">{`(${item.stars})`}</p>
              </div>
            </div>
            <div>
              <p className="text-base text-gray-400 font-medium leading-5">
                <bdi>{item.date}</bdi>
              </p>
              <p className="text-base text-gray-400 font-medium leading-5 mr-2 lg:mr-5">
                <bdi>{item.author}</bdi>
              </p>
            </div>
          </div>
          <p className="text-base lg:text-lg text-black font-medium leading-8 mt-2 lg:mt-5 lg:mr-8">
            <bdi>{item.text}</bdi>
          </p>
        </div>
      ))}
    </div>
  );
}
