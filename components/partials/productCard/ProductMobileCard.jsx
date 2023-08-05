// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
//media
import StarGold_Icon from "../../../assets/common/startGold.svg";
import BookmarkRed_Icon from "../../../assets/common/BookmarkRedIcon.svg";
import ShoppingCartRed_Icon from "../../../assets/common/shopping-cartRedIcon.svg";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
export default function ProductMobileCard({ item, index }) {
  const { state, dispatch } = BasketContext();
  const handleAddToCart = () => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          name: item.name,
          id: item.best_pricing.id,
          category: item.category.pet_category,
          stars: item.rating,
          seller: item.best_pricing.petshop?.name,
          price: item.best_pricing.price,
          discount: item.best_pricing.price_after_sale,
          image: item.picture_url,
        },
      });
      toast.success("محصول به سبد خرید اضافه شد", {
        toastId: item.best_pricing.id,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const check = state?.basket?.find(
        (basketItem) => basketItem.id === item.best_pricing.id
      );
      if (!check) {
        dispatch({
          type: "ADD_TOBASKET",
          payload: {
            name: item.name,
            id: item.best_pricing.id,
            category: item.category.pet_category,
            stars: item.rating,
            seller: item.best_pricing.petshop?.name,
            price: item.best_pricing.price,
            discount: item.best_pricing.price_after_sale,
            image: item.picture_url,
          },
        });
        toast.success("محصول به سبد خرید اضافه شد", {
          toastId: item.best_pricing.id,
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.info("این محصول از قبل در سبد خرید موجود است", {
          toastId: item.best_pricing.id,
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  const handleAddToBookmark = async () => {
    const response = await createBookmark(item.id);
    if (response.success) {
      toast.success("محصول به علاقه مندی ها اضافه شد", {
        toastId: item.id,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("این محصول از قبل در علاقه مندی ها موجود است", {
        toastId: item.id,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="m-2">
      <div className="flex flex-col items-stretch w-[200px] p-4 lg:p-5  bg-white rounded-[10px]">
        <div className="relative block h-[100px] bg-white  rounded-[10px]">
          <Link href={`/products/${item.slug}`}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={
                item.picture_url
                  ? `https://api.petemoon.com${item.picture_url}`
                  : "/assets/product/ProductPic4.svg"
              }
              width={100}
              height={100}
              alt="ProductPic"
              className="object-cover"
            />
          </Link>

          {/* <div className="absolute z-index-2 top-[-7px] left-[-7px] p-2 bg-white border-[1px] border-solid border-primary rounded-full">
            <Image
              src={BookmarkRed_Icon}
              alt="BookmarkIcon"
              className="w-3 h-3"
            />
          </div> */}
        </div>

        <div className="mt-2">
          <Link href={`/products/${item.slug}`}>
            <p className="text-sm text-gray-400 font-medium leading-5">
              <bdi>{item.category.pet_category}</bdi>
            </p>
            <div className="flex justify-between items-center content-start">
              <h2 className="text-base producatrTitle producatrTitle text-black font-medium leading-8">
                {item.name}
              </h2>
              {item.best_pricing && (
                <p className="text-sm text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px]">
                  {parseInt(
                    (item.best_pricing.price_after_sale /
                      item.best_pricing.price) *
                      100
                  )}
                  %
                </p>
              )}
            </div>
          </Link>

          <div>
            <div className="flex flex-row items-center mr-1">
              <Image src={StarGold_Icon} alt="GoldenStarIcon" />
              <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${
                item.rating ? item.rating : 5
              })`}</p>
            </div>
          </div>
          {item.best_pricing?.inventory ? (
            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col">
                <p className="text-base text-primary font-medium leading-8 mb-0">
                  <bdi>{item.best_pricing.price} تومان</bdi>
                </p>
                {item.best_pricing.price_after_sale && (
                  <p className="text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0">
                    {item.best_pricing.price_after_sale}
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
