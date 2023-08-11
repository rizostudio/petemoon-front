import React from "react";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//toast
import { toast } from "react-toastify";
export default function AddToCartForMobile({ data }) {
  const { state, dispatch } = BasketContext();
  const handleAddToBasket = () => {
    if (state?.basket?.length === 0) {
      dispatch({
        type: "ADD_TOBASKET",
        payload: {
          name: data.name,
          id: data.productpricing[0].id,
          category: data.category.pet_category,
          stars: data.ratind,
          pet_type: data.category.pet_type,
          seller: data.best_pricing.petshop.name,
          price: data.price,
          discount: data.price_after_sale,
          image: data.picture_url,
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
            category: data.category.pet_category,
            stars: data.ratind,
            pet_type: data.category.pet_type,
            seller: data.best_pricing.petshop.name,
            price: data.price,
            discount: data.price_after_sale,
            image: data.picture_url,
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
    <div className="lg:hidden px-3 py-5 border-solid border-t-[2px] border-secondary">
      {data.best_pricing?.inventory ? (
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToBasket}
            className="text-base text-center text-white h-[50px] font-medium w-1/2  bg-primary rounded-[12px]"
          >
            افزودن به سبد
          </button>
          <div className="text-left">
            {data.best_pricing?.price && (
              <div>
                <p className="text-base text-gray-400 line-through font-light leading-8 opacity-95">
                  {data.best_pricing?.price}
                </p>
                <p className="text-sm text-primary p-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px]">
                  {data.discount}%
                </p>
              </div>
            )}
            <p className="text-lg text-primary font-extrabold leading-8">
              <bdi>{data.best_pricing?.price * (1 - 0 / 100)} تومان</bdi>
            </p>
          </div>
        </div>
      ) : (
        <button className="text-base text-center text-white font-medium w-full px-3 py-6 bg-primary rounded-[12px]">
          موجود شد خبرم کن
        </button>
      )}
    </div>
  );
}
