// import React, { useState } from "react";
import Image from "next/image";
import React from "react";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
// media
import BookmarkRed_Icon from "../../../assets/common/BookmarkRedIcon.svg";
import ShoppingCartRed_Icon from "../../../assets/common/shopping-cartRedIcon.svg";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";

export default function ProductDesktopCard({ item, index }) {
  const { state, dispatch } = BasketContext();
  const handleAddToCart = () => {
    // dispatch({
    //   type: "ADD_TOBASKET",
    //   payload: {
    //     item: { ...item },
    //   },
    // });
  };
  return (
    <div className="m-3">
      <div className="flex flex-col items-stretch w-[275px] h-[450px] p-5  bg-white rounded-[25px] shadow-shadowB">
        <div className="relative block h-[200px] bg-gray-400 border-[1px] border-solid border-primary rounded-[20px]">
          <Image
            style={{ width: "100%", height: "100%" }}
            src={
              item.picture
                ? `https://api.petemoon.com${item.picture}`
                : "/assets/product/ProductPic4.svg"
            }
            width={100}
            height={100}
            alt="ProductPic"
            className="object-cover"
          />
          <div className="absolute z-index-2 top-[-7px] left-[-7px] p-3 bg-white border-[1px] border-solid border-primary rounded-full">
            <Image
              src={BookmarkRed_Icon}
              alt="BookmarkIcon"
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-400 font-medium leading-5">
            <bdi>{item.category}</bdi>
          </p>
          <div className="flex  justify-between items-center content-start">
            <h2 className="text-xl  producatrTitle text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
              {item.name}
            </h2>
            {/* {item.discount && (
              <p className="text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[15px]">
                {item.discount}%
              </p>
            )} */}
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              {starsBoxHandler(item.rating ? item.rating : 5)}
            </div>
            <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${
              item.rating ? item.rating : 5
            })`}</p>
          </div>
          <p className="block text-sm text-primary font-normal leading-5 opacity-90 mt-2">
            {item.best_seller?.name}
          </p>
          {item.inventory ? (
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col">
                <p className="text-lg text-primary font-medium leading-8 mb-0">
                  <bdi>{item.min_price} تومان</bdi>
                </p>
                {item.max_price && (
                  <p className="text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0">
                    {item.max_price}
                  </p>
                )}
              </div>
              <div
                onClick={handleAddToCart}
                // href={`/products/${index}`}
                className="flex items-center p-2 bg-[#EA635233] rounded-[10px]"
              >
                <p className="block text-base text-primary font-medium leading-7 ml-2">
                  خرید
                </p>
                <Image src={ShoppingCartRed_Icon} alt="ShoppingCartRedIcon" />
              </div>
            </div>
          ) : (
            <div className="text-base text-gray-400 text-center font-medium p-2 mt-3 w-full bg-secondary rounded-[10px]">
              ناموجود
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
