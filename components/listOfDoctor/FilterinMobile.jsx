import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
// media
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import Filter_Icon from "../../assets/common/filterIcon.svg";
//services
import * as queryString from "@/services/queryString";
export default function FilterinMobile({
  setFilterPageOpen,
  setMainPageOpen,
  brand,
  petCategory,
  FilterPageOpen,
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

  return (
    <div
      className={clsx("lg:hidden h-full w-full", {
        block: FilterPageOpen == true,
        hidden: FilterPageOpen == false,
      })}
    >
      <div className="h-[40px] w-full flex lg:hidden justify-between items-center p-10">
        <div className="flex items-center">
          <Image src={Filter_Icon} alt="FilterIcon" />
          <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
            فیلترها
          </p>
        </div>
        <div
          onClick={() => {
            setFilterPageOpen(false);
            setMainPageOpen(true);
          }}
          className="px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
        >
          <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-stretch mt-5">
          <div className="px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10">
            <p className="text-base text-black font-medium leading-7 mt-2">
              نوع پت
            </p>
            <div>
              {petCategory.map((item, index) => (
                <div key={v4()} className="flex items-center">
                  <input
                    id={`kind${index}`}
                    type="checkbox"
                    checked={router?.query?.pet_type_experience?.includes(
                      item.slug
                    )}
                    onChange={(e) => {
                      filterProducts(e, "pet_type_experience", item.slug);
                    }}
                    className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                  />
                  <label htmlFor={`kind${index}`} className="mr-2">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between items-center px-10 py-5">
            <p
              onClick={() => router.push("/product-category/all")}
              className="w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer"
            >
              حذف فیلترها
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
