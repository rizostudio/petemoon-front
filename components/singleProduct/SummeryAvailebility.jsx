import React from "react";
import Image from "next/image";
import clsx from "clsx";
// media
import Availability_Icon from "../../assets/product/availability.svg";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//toast
import { toast } from "react-toastify";
export default function SummeryAvailebility({ data }) {
  const { state, dispatch } = BasketContext();
  const handleAddToBasket = () => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          name: data.name,
          id: data.productpricing[0].id,
          category: data.category,
          stars: data.ratind,
          pet_type: data.pet_type.pet_type,
          seller: data.best_pricing.petshop.name,
          price: data.price,
          discount: data.price_after_sale,
          image: data.picture,
        },
      });
      toast.success("محصول به سبد خرید اضافه شد", {
        toastId: data.productpricing[0].id,
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
        (basketItem) => basketItem.id === data.productpricing[0].id
      );
      if (!check) {
        dispatch({
          type: "ADD_TOBASKET",
          payload: {
            name: data.name,
            id: data.productpricing[0].id,
            category: data.category,
            stars: data.ratind,
            pet_type: data.pet_type.pet_type,
            seller: data.best_pricing.petshop.name,
            price: data.price,
            discount: data.price_after_sale,
            image: data.picture,
          },
        });
        toast.success("محصول به سبد خرید اضافه شد", {
          toastId: data.productpricing[0].id,
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
          toastId: data.productpricing[0].id,
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
  return (
    <div
      className={clsx("order-1 w-full mb-3 lg:mb-0", {
        "lg:mt-9": !data.best_pricing?.inventory,
        "lg:mt-2": data.best_pricing?.inventory,
      })}
    >
      {data.best_pricing?.inventory ? (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="text-right">
            <div className="flex flex-row items-center">
              <Image src={Availability_Icon} alt="AvailabilityIcon" />
              <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
                <bdi>موجود در</bdi>
              </p>
            </div>
            <p className="text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 mt-2">
              <bdi>{`انبار فروشنده`}</bdi>
            </p>
          </div>
          <div className="hidden lg:block bg-[#ea63521a] p-5 rounded-[15px] mr-10">
            <div className="flex flex-row justify-between items-center">
              <p className="text-lg text-gray-400 font-medium leading-8">
                قیمت فروشنده:
              </p>
              <p className="text-lg text-primary font-medium leading-10 mr-20">
                <bdi>{`${data.price} تومان`}</bdi>
              </p>
            </div>
            <button
              onClick={handleAddToBasket}
              className="text-base text-white font-bold leading-7 bg-primary py-3 px-5 w-full rounded-[15px]"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <button className="text-base text-center text-white font-medium w-1/3 px-3 py-3 bg-gray-400 rounded-[15px]">
            ناموجود
          </button>
          <button className="text-base text-center text-white font-medium w-2/3 px-5 py-3 mr-4 bg-primary rounded-[15px]">
            موجود شد خبرم کن
          </button>
        </div>
      )}
    </div>
  );
}
