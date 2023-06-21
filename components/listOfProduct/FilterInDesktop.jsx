import React, { useState, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
// media
import Filter_Icon from "../../assets/common/filterIcon.svg";
import DownArrow_Icon from "../../assets/common/downArrow.svg";
//services
import * as queryString from "@/services/queryString";
export default function FilterInDesktop({
  setFilterBoxOpen,
  setFilterPageOpen,
  setMainPageOpen,
  brand,
  petCategory,
  FilterBoxOpen,
  maxPrice,
  minPrice,
}) {
  const router = useRouter();
  const filterProducts = (event, title, slug) => {
    const query = event.target.checked
      ? queryString.addListQueryArg(router.query, title, slug)
      : queryString.removeListQueryArg(router.query, title, slug);
    router.push({
      pathname: router.pathname,
      query,
    });
  };
  const filterPriceProduct = (event, title, slug) => {
    const query = event.target.value
      ? queryString.addQueryArg(router.query, title, slug)
      : queryString.removeListQueryArg(router.query, title, slug);
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div
      className={clsx(
        "lg:w-[300px] ml-5 lg:ml-4 lg:bg-white rounded-t-[25px] relative",
        {
          "rounded-b-[25px]": FilterBoxOpen == false,
        }
      )}
    >
      <div className="flex justify-between items-center lg:px-6 py-2">
        <div
          onClick={() => {
            setFilterPageOpen(true);
            setMainPageOpen(false);
          }}
          className="flex items-center cursor-pointer lg:cursor-auto "
        >
          <Image src={Filter_Icon} alt="FilterIcon" />
          <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
            فیلترها
          </p>
        </div>
        <Image
          src={DownArrow_Icon}
          alt="DownArrowIcon"
          onClick={() => setFilterBoxOpen(!FilterBoxOpen)}
          className={clsx(`hidden lg:block cursor-pointer`, {
            "rotate-0": FilterBoxOpen == false,
            "rotate-180": FilterBoxOpen == true,
          })}
        />
      </div>
      <div
        className={clsx(
          "hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]",
          {
            "lg:block": FilterBoxOpen == true,
          }
        )}
      >
        <div className="flex flex-col items-stretch">
          <p className="text-base text-black font-medium leading-7 ">برند</p>
          <div>
            {brand.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`brand${index}`}
                  checked={router.query?.brand?.includes(item.slug)}
                  onChange={(e) => {
                    filterProducts(e, "brand", item.slug);
                  }}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`brand${index}`} className="mr-2 ">
                  <bdi>{item.name}</bdi>
                </label>
              </div>
            ))}
          </div>
          <label className="text-base text-black font-medium leading-7 mt-6">
            بازه قیمتی
          </label>
          <div className="w-full flex justify-between text-xs px-2">
            <span>{0}</span>
            <span></span>
            <span></span>
            <span></span>
            <span>{maxPrice}</span>
          </div>
          <input
            onChange={(e) => {
              console.log(e.target.value);
              filterPriceProduct(e, "max_price", e.target.value);
            }}
            className=""
            type="range"
            min={0}
            max={maxPrice}
            value={router.query?.max_price ? router.query?.max_price : 0}
            // step="1"
          />
          <p className="text-base text-black font-medium leading-7 mt-6">
            نوع پت
          </p>
          <div>
            {petCategory.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`kind${index}`}
                  checked={router?.query?.pet_category?.includes(item.slug)}
                  onChange={(e) => {
                    filterProducts(e, "pet_category", item.slug);
                  }}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`kind${index}`} className="mr-2">
                  {item.pet_category}
                </label>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end items-center my-3">
            {/* <button className="w-2/4 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]">
              اعمال
            </button> */}
            <p
              onClick={() => router.push("/product-category/all")}
              className="w-2/4 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer"
            >
              حذف فیلترها
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
