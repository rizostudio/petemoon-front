// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//media
import StarGold_Icon from "../../../assets/common/startGold.svg";
import BookmarkRed_Icon from "../../../assets/common/BookmarkRedIcon.svg";
import ShoppingCartRed_Icon from "../../../assets/common/shopping-cartRedIcon.svg";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
export default function ProductMobileCard({ item, index }) {
  const { state, dispatch } = BasketContext();
  const handleAddToCart = (item) => {
    // dispatch({
    //   type: "ADD_TOBASKET",
    //   payload: {
    //     title: item.title,
    //   },
    // });
  };
  return (
    <div className="m-2">
      <div className="flex flex-col items-stretch w-[200px] p-4 lg:p-5  bg-white rounded-[15px]">
        <div className="relative block h-[100px] bg-gray-400 border-[1px] border-solid border-primary rounded-[15px]">
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
          <div className="absolute z-index-2 top-[-7px] left-[-7px] p-2 bg-white border-[1px] border-solid border-primary rounded-full">
            <Image
              src={BookmarkRed_Icon}
              alt="BookmarkIcon"
              className="w-3 h-3"
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-400 font-medium leading-5">
            <bdi>{item.category}</bdi>
          </p>
          <div className="flex justify-between items-center content-start">
            <h2 className="text-base producatrTitle producatrTitle text-black font-medium leading-8">
              {item.name}
            </h2>
            {/* {item.discount && (
              <p className="text-sm text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px]">
                {item.discount}%
              </p>
            )} */}
          </div>
          <div>
            <div className="flex flex-row items-center mr-1">
              <Image src={StarGold_Icon} alt="GoldenStarIcon" />
              <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${
                item.rating ? item.rating : 5
              })`}</p>
            </div>
          </div>
          {item.inventory ? (
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col">
                <p className="text-base text-primary font-medium leading-8 mb-0">
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
                <Image src={ShoppingCartRed_Icon} alt="ShoppingCartRedIcon" />
              </div>
            </div>
          ) : (
            <div className="text-base text-gray-400 text-center font-medium p-2 mt-4 w-full bg-secondary rounded-[10px] mb-2">
              ناموجود
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
