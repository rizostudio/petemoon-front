import React from "react";
import Image from "next/image";
import { v4 } from "uuid";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//toats
import { toast } from "react-toastify";
export default function Sellers({ data }) {
  const { state, dispatch } = BasketContext();
  const handleAddToBasket = (id, price) => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          name: data.name,
          id: id,
          category: data.category.pet_category,
          stars: data.ratind,
          pet_type: data.category.pet_type,
          seller: data.best_pricing.petshop.name,
          price: price,
          discount: data.price_after_sale,
          image: data.picture_url,
        },
      });
      toast.success("محصول به سبد خرید اضافه شد", {
        toastId: id,
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
      const check = state?.basket?.find((basketItem) => basketItem.id === id);
      if (!check) {
        dispatch({
          type: "ADD_TOBASKET",
          payload: {
            name: data.name,
            id: id,
            category: data.category.pet_category,
            stars: data.ratind,
            pet_type: data.category.pet_type,
            seller: data.best_pricing.petshop.name,
            price: price,
            discount: data.price_after_sale,
            image: data.picture_url,
          },
        });
        toast.success("محصول به سبد خرید اضافه شد", {
          toastId: id,
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
          toastId: id,
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
    <div className="text-right px-3 lg:px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        فروشندگان دیگر
      </h5>
      <div className="grid lg:grid-cols-2 gap-6">
        {data.productpricing &&
          data.productpricing.map((item) => (
            <div
              key={v4()}
              className="w-full flex flex-row items-center justify-between my-4"
            >
              <div className="flex flex-row">
                <Image
                  width={30}
                  height={30}
                  src={"/assets/product/shop.svg"}
                  alt="StoreLogo"
                />
                <h6 className="text-md lg:text-2xl text-black font-bold leading-7 opacity-90 mr-1 lg:mr-5">
                  {item.petshop.name}
                </h6>
              </div>
              <div className="flex flex-row">
                <p className="text-sm lg:text-xl  w-[60%] text-primary font-medium mt-2">
                  <bdi>{`${item.price.toLocaleString()} تومان`}</bdi>
                </p>
                <button
                  onClick={() => handleAddToBasket(item.id, item.price)}
                  className="text-base text-center text-white w-[40%] lg:w-full px-3 font-bold bg-primary w-full h-[50px] rounded-[12px] lg:rounded-[15px] mr-2 lg:mr-5"
                >
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
