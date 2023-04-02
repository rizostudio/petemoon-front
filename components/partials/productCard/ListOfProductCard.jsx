import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
import { createBookmark } from "@/services/product/addTobookmark";
//toast
import { toast } from "react-toastify";
export default function ProductCart({ item, index }) {
  const { state, dispatch } = BasketContext();
  const handleAddToCart = () => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          item: { ...item },
        },
      });
      toast.success("محصول به سبد خرید اضافه شد", {
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
      const check = state?.basket?.find(
        (basketItem) => basketItem.id === item.id
      );
      if (!check) {
        dispatch({
          type: "ADD_TOBASKET",
          payload: {
            item: { ...item },
          },
        });
        toast.success("محصول به سبد خرید اضافه شد", {
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
        toast.info("این محصول از قبل در سبد خرید موجود است", {
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
    <div key={v4()} className="lg:m-5 w-full lg:w-[285px] my-1">
      <div className="flex flex-row lg:flex-col items-stretch w-full lg:w-[285px] lg:h-[420px] p-4 lg:p-5  bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB border-[1px] border-secondary border-solid lg:border-none">
        <div className="relative block w-[100px] lg:w-full h-full lg:h-[200px] p-0 bg-gray-400 border-[1px] border-solid border-primary rounded-[15px] lg:rounded-[20px]">
          <div className="hidden lg:block absolute z-10 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full">
            <Image
              onClick={handleAddToBookmark}
              width={100}
              height={100}
              src={"/assets/common/BookmarkRedIcon.svg"}
              alt="BookmarkIcon"
              className="w-3 h-3 lg:w-5 lg:h-5"
            />
          </div>
          <Link href={`/products/${item.slug}`}>
            <div className="w-full h-full overflow-hidden m-0 p-0">
              <img
                // width={244}
                // height={223}
                src={
                  item.picture
                    ? `petemoon.com${item.picture}`
                    : "/assets/product/ProductPic4.svg"
                }
                alt="ProductPic"
                className="object-cover"
              />
            </div>
          </Link>
        </div>
        <Link href={`/products/${item.slug}`}>
          {" "}
          <div className="w-full lg:mt-4 mr-3 lg:mr-0">
            <p className="hidden lg:block text-base text-gray-400 font-medium leading-5">
              <bdi>{item.category?.name}</bdi>
            </p>
            <div className="hidden lg:flex justify-between items-center content-start">
              <h2 className="text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
                {item.name}
              </h2>
              {item.discount && (
                <p className="text-sm lg:text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px] lg:rounded-[15px]">
                  {item.discount}%
                </p>
              )}
            </div>
            <div className="flex lg:hidden justify-between items-center">
              <h2 className="text-base text-black font-medium leading-8">
                {item.title}
              </h2>
              <div className="flex flex-row items-center mr-1">
                <Image
                  width={100}
                  height={100}
                  src={"/assets/common/startGold.svg"}
                  alt="GoldenStarIcon"
                  className="w-2"
                />
                <p className="text-[8px] text-gray-400 font-medium leading-7 mr-[2px]">{`(${
                  item.rating ? item.rating : 5
                })`}</p>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col justify-between">
              <div className="hidden lg:flex flex-row items-center">
                <div className="flex flex-row items-center">
                  {starsBoxHandler(item.rating ? item.rating : 5)}
                </div>
                <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${
                  item.rating ? item.rating : 5
                })`}</p>
              </div>
              <div className="w-full flex lg:flex-col justify-between items-stretch">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="lg:hidden text-xs text-gray-400 font-medium lg:leading-5">
                      <bdi>{item.group}</bdi>
                    </p>
                    <p className="text-sm text-primary font-normal leading-5 opacity-90 mt-1">
                      {item.best_seller?.name}
                    </p>
                  </div>
                  <p className='lg:hidden text-sm text-white text-center font-medium leading-5 bg-primary px-1 py-[1px] mt-3 rounded-[10px] after:content-["تخفیف"] after:text-[10px] after:mr-[2px] before:content-["%"] before:text-[10px]'>
                    <bdi>{item.discount}</bdi>
                  </p>
                </div>
                <div className="self-end lg:self-stretch">
                  {item.inventory ? (
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
                      <div className="flex flex-col lg:flex-col-reverse">
                        {item.discount && (
                          <p className="text-sm text-gray-400 line-through font-light opacity-95 mt-0">
                            {item.max_price}
                          </p>
                        )}
                        <p className="text-base lg:text-lg text-black lg:text-primary font-medium mt-0">
                          <bdi>
                            {item.min_price * (1 - item.max_price / 100)} تومان
                          </bdi>
                        </p>
                      </div>
                      <div
                        // href={`/products/${index}`}
                        className="flex lg:flex-row-reverse items-center p-2 lg:bg-[#EA635233] rounded-[10px]"
                      >
                        <Image
                          width={20}
                          height={20}
                          src={"/assets/common/shopping-cartRedIcon.svg"}
                          alt="ShoppingCartRedIcon"
                        />
                        <p
                          onClick={handleAddToCart}
                          className="text-base text-primary font-medium leading-7 mr-1 lg:mr-0 lg:ml-2"
                        >
                          خرید
                        </p>
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
          </div>
        </Link>
      </div>
    </div>
  );
}
