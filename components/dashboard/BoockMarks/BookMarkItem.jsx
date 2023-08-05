import React from "react";
import Image from "next/image";
//toast
import { toast } from "react-toastify";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//media
import Trash_Icon from "../../../assets/common/trash.svg";
import ShopCart_Icon from "../../../assets/dashboard/shopping-cart.svg";
//services
import { deleteBookMark } from "@/services/dashboard/bookmarks/delete";
export default function BookMarkItem({ item, setDeletHandler }) {
  const { state, dispatch } = BasketContext();
  const handleAddToCart = () => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          name: item.product.name,
          id: item.product?.best_pricing?.id,
          category: item.product?.category,
          stars: item.product?.rating,
          pet_type: item.product?.pet_type?.pet_type?.pet_type,
          seller: item.product?.best_pricing?.petshop?.name,
          price: item.product?.best_pricing?.price,
          discount: item.product?.best_pricing?.price_after_sale,
          image: item.product?.picture,
        },
      });
      toast.success("محصول به سبد خرید اضافه شد", {
        toastId: item.product?.best_pricing?.id,
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
        (basketItem) => basketItem.id === item.product?.best_pricing?.id
      );
      if (!check) {
        dispatch({
          type: "ADD_TOBASKET",
          payload: {
            name: item.product.name,
            id: item.product?.best_pricing?.id,
            category: item.product?.category,
            stars: item.product?.rating,
            pet_type: item.product?.pet_type?.pet_type?.pet_type,
            seller: item.product?.best_pricing?.petshop?.name,
            price: item.product?.best_pricing?.price,
            discount: item.product?.best_pricing?.price_after_sale,
            image: item.product?.picture,
          },
        });
        toast.success("محصول به سبد خرید اضافه شد", {
          toastId: item.product?.best_pricing?.id,
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
          toastId: item.product?.best_pricing?.id,
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
  const handleDeleteItem = async () => {
    const response = await deleteBookMark(item.id);
    if (response.success) {
      setDeletHandler((prev) => !prev);
      toast.success("محصول از علاقه مندی ها حذف شد", {
        toastId: item.product?.best_pricing?.id,
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
      toast.info(" مشکلی در فرایند حذف رخ داد", {
        toastId: item.product?.best_pricing?.id,
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
    <div className="flex flex-col lg:grid-cols-3 my-2 lg:mx-2 lg:my-3 p-5 lg:p-7 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-gray-400 lg:shadow-shadowB">
      <div className="h-[180px] w-full bg-gray-400 overflow-hidden rounded-[10px] lg:rounded-[20px] border-[1px] solid ">
        <Image
          style={{ width: "100%", height: "100%" }}
          width={100}
          height={100}
          src={`https://api.petemoon.com${item.product.picture_url}`}
        />
      </div>
      <div className="w-full flex flex-col justify-between items-stretch">
        <div className="w-full flex flex-row justify-between items-center mt-2">
          <div className="w-full flex flex-row items-center lg:justify-between">
            <h2 className='text-base lg:text-base text-black font-semibold lg:font-black leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:text-primary before:content-[""] before:ml-2 before:align-middle before:rounded-[2px]'>
              {item.product.name}
            </h2>
            {/* {item.product.price && (
              <p className='text-sm text-white font-medium leading-5 py-[2px] px-[5px] lg:py-[2px] lg:px-2 mr-2 h-full rounded-[5px] lg:rounded-[10px]  bg-primary before:content-["%"] before:text-[10px]'>
                <bdi className="hidden lg:inline-block text-[8px] font-normal opacity-[0.8] mr-1">
                  تخفیف
                </bdi>
                {isNaN(
                  (parseInt(item.product.price) /
                    parseInt(item?.product.price_after_sale)) *
                    100
                )
                  ? 0
                  : (parseInt(item.product.price) /
                      parseInt(item?.product.price_after_sale)) *
                    100}
              </p>
            )} */}
          </div>
          <div className="lg:hidden text-right">
            <p className='text-base text-black font-medium leading-6 flex flex-row items-center after:content-["تومان"] after:mr-1 after:text-xs'>
              {item.product.price}
            </p>
            {item.product.price && (
              <p className="line-through text-sm text-gray-400 font-light">
                {item.product.price.toLocaleString()}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center lg:items-end mt-3">
          <div className="hidden lg:block text-right">
            <p className='text-base text-black font-medium flex flex-row items-center after:content-["تومان"] after:mr-1 after:text-xs'>
              {item?.product.price}
            </p>
            {item.product.price_after_sale && (
              <p className="line-through text-sm text-gray-400 font-light">
                {item?.product.price_after_sale}
              </p>
            )}
          </div>
          <div className="w-full flex flex-row justify-between lg:justify-end items-center">
            <div
              onClick={handleDeleteItem}
              className="flex flex-row cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px]"
            >
              <Image src={Trash_Icon} alt="TrashICon" />
              <p className="lg:hidden text-xs text-gray-400 font-medium align-bottom mr-1">
                حذف از لیست
              </p>
            </div>
            <div
              onClick={handleAddToCart}
              className="flex flex-row cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px] lg:mr-2"
            >
              <Image src={ShopCart_Icon} alt="ShopCartIcon" />
              <p className="lg:hidden text-xs text-[#4DA4F4] font-medium align-bottom mr-1">
                مشاهده و خرید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
