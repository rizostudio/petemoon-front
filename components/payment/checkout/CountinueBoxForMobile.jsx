import React, { useState } from "react";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import { changeBasketToOrder } from "@/services/basket/changeBasketToOrder";
import { Basket } from "@/localSttorage/basket";
export default function CountinueBoxForMobile({ totalBasket, shipping }) {
  const { state, dispatch } = BasketContext();
  const handleOrderSubmite = async () => {
    const response = await changeBasketToOrder(state.address.id);
    if (response.success) {
      dispatch({
        type: "EMPTY_BASKET",
      });
      Basket.remove();
      window.location.href = response.data.data.url;
    }
  };
  return (
    <div className="flex lg:hidden flex-col justify-between items-stretch w-full">
      <div className="flex justify-between w-full px-10 py-5">
        <p className="text-base text-gray-400 font-medium leading-5">
          <bdi>هزینه ارسال:</bdi>
        </p>
        <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'>
          <bdi>{parseInt(shipping.price).toLocaleString()}</bdi>
        </p>
      </div>
      <div className="flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary">
        <button
          onClick={handleOrderSubmite}
          className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]"
        >
          پرداخت
        </button>
        <div className="flex flex-col">
          <p className="text-base text-gray-400 font-normal leading-8">
            مجموع سبد خرید
          </p>
          <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{parseInt(totalBasket) + parseInt(shipping.price)}</bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
