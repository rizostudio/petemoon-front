import React from "react";
import { useRouter } from "next/router";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
export default function DescriptionForPayment({ handleAddress }) {
  const { state, dispatch } = BasketContext();
  const router = useRouter();
  const totalBasket = state.basket.reduce((total, item) => {
    return total + parseInt(item.count) * parseInt(item.price);
  }, 0);
  return (
    <div className="flex justify-between my-5 lg:my-8">
      <textarea
        placeholder="توضیحات"
        className="text-lg text-gray-400 font-bold leading-8 w-full lg:w-2/3 px-5 py-3 lg:px-10 lg:py-5 border-[1px] border-gray-400 rounded-[15px] lg:rounded-[25px]"
      />
      <div className="hidden lg:flex flex-col justify-between items-center w-1/3 p-5 mr-5 bg-[#ea63521a] rounded-[15px]">
        {/* <div className="flex justify-between w-full">
          <p className="text-sm text-gray-400 font-medium leading-5">
            <bdi>هزینه ارسال:</bdi>
          </p>
          <p className='text-sm text-gray-400 font-medium leading-5 after:content-["تومان"] after:text-xs after:mr-1'>
            <bdi>{(15000).toLocaleString()}</bdi>
          </p>
        </div> */}
        <div className="flex justify-between w-full">
          <p className="text-xl text-gray-400 font-normal leading-8">
            مجموع سبد:
          </p>
          <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{totalBasket}</bdi>
          </p>
        </div>
        <button
          onClick={handleAddress}
          className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}
