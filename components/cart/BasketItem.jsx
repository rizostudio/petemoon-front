import React from "react";
import Image from "next/image";
import { v4 } from "uuid";
// media
import StarGold_Icon from "../../assets/common/startGold.svg";
import ProductPic from "../../assets/product/ProductPic1.svg";
import TrashIcon from "../../assets/common/TrashIconRed.svg";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";

export default function BasketItem({ item, index }) {
  const { dispatch } = BasketContext();
  const handleIncrimentCount = (e) => {
    dispatch({
      type: "INCRIMENT_ITEM_COUNT",
      payload: {
        id: item.id,
      },
    });
  };
  const handleDecrimentCount = (e) => {
    dispatch({
      type: "DECRIMENT_ITEM_COUNT",
      payload: {
        id: item.id,
      },
    });
  };
  const handleDeleteItem = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_BASKET_ITEM",
      payload: {
        id: item.id,
      },
    });
  };
  return (
    <div className="flex flex-row items-stretch w-full h-full p-4 lg:p-5 bg-white lg:bg-transparent rounded-[15px] lg:rounded-none shadow-shadowB lg:shadow-none border-b-[2px] border-[rgba(0, 0, 0, 0.05)] border-none lg:border-solid">
      <div className="flex flex-col justify-between items-center">
        {/* Picture of Product */}
        <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] p-0 overflow-hidden bg-gray-400 border-[1px]  rounded-[5px] lg:rounded-[10px]">
          <Image
            width={100}
            height={100}
            src={
              item.image
                ? `https://api.petemoon.com${item.image}`
                : "/assets/product/ProductPic4.jpg"
            }
            alt="ProductPic"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Counter Box */}
        <div className="self-end lg:self-stretch hidden mt-2 lg:flex justify-between items-end text-primary align-bottom font-normal leading-7 px-2 border-[1px] border-solid border-secondary rounded-[5px]">
          <p className="text-xl cursor-pointer" onClick={handleIncrimentCount}>
            +
          </p>
          <p className="text-base mx-4">{item.count}</p>
          {parseInt(item.count) === 1 ? (
            <Image
              src={TrashIcon}
              alt="TrashIcon"
              onClick={handleDeleteItem}
              className="w-[12px] h-[12px] self-center cursor-pointer"
            />
          ) : (
            <p
              className="text-xl cursor-pointer"
              onClick={handleDecrimentCount}
            >
              -
            </p>
          )}
        </div>
      </div>
      <div className="w-full lg:mt-4 mr-3 lg:mr-10">
        <p className="hidden lg:block text-sm text-gray-400 font-normal leading-5">
          <bdi>{item.category}</bdi>
        </p>
        <div className="hidden lg:flex items-center content-start my-2">
          <h2 className="text-2xl text-black font-bold leading-8">
            {item.name}
          </h2>
          {item.discount && (
            <p className="text-base text-white font-medium py-[1px] px-2 mr-2 bg-primary border-solid border-[0.5px] border-primary rounded-[10px]">
              {item.discount && (item.price / item.discount) * 100}%
            </p>
          )}
        </div>
        <div className="flex lg:hidden justify-between items-center">
          <h2 className="text-base text-black font-medium leading-8">
            {item.name}
          </h2>
          <div className="flex flex-row items-center mr-1">
            <Image src={StarGold_Icon} alt="GoldenStarIcon" className="w-2" />
            <p className="text-[8px] text-gray-400 font-medium leading-7 mr-[2px]">{`(${item?.stars})`}</p>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col justify-between">
          <div className="hidden lg:flex flex-row items-center">
            <div className="flex flex-row items-center">
              {starsBoxHandler(item.stars)}
            </div>
            <p className="text-base text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${item?.stars})`}</p>
          </div>
          <div className="w-full flex lg:flex-col justify-between items-stretch">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="lg:hidden text-xs text-gray-400 font-medium lg:leading-5">
                  <bdi>{item.category}</bdi>
                </p>
                <p className="text-sm text-primary font-normal leading-5 opacity-90 mt-1">
                  {item.seller?.name}
                </p>
              </div>
              <p className='lg:hidden text-sm text-white text-center font-medium leading-5 bg-primary px-1 py-[1px] mt-3 rounded-[10px] after:content-["تخفیف"] after:text-[10px] after:mr-[2px] before:content-["%"] before:text-[10px]'>
                <bdi>{item.discount}</bdi>
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
              <div className="flex flex-col">
                {item.discount && (
                  <p className="text-sm text-gray-400 line-through font-light opacity-95 mt-0">
                    {item.price.toLocaleString()}
                  </p>
                )}
                <p className='text-base lg:text-lg text-black lg:text-primary font-medium mt-0 after:content-["تومان"] after:text-xs after:font-normal after:leading-6 after:mr-1'>
                  <bdi>
                    {item.price.toLocaleString()}
                    {/* {(
                        item.price *
                        (1 - item.discount / 100)
                      ).toLocaleString()} */}
                  </bdi>
                </p>
              </div>
              {/* Counter Box */}
              <div className="self-end lg:self-stretch flex lg:hidden justify-between items-end text-primary align-bottom font-normal leading-7 px-2 border-[1px] border-solid border-secondary rounded-[5px]">
                <p
                  className="text-xl cursor-pointer"
                  onClick={handleIncrimentCount}
                >
                  +
                </p>
                <p className="text-base mx-4">{item.count}</p>
                {parseInt(item?.count) === 1 ? (
                  <Image
                    onClick={handleDeleteItem}
                    src={TrashIcon}
                    alt="TrashIcon"
                    className="w-[12px] h-[12px] self-center cursor-pointer"
                  />
                ) : (
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleDecrimentCount}
                  >
                    -
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
