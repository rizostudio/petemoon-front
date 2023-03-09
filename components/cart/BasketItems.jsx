import React, { useContext } from "react";
import { v4 } from "uuid";
import { useRouter } from "next/router";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import BasketItem from "./BasketItem";
//context
import AuthContext from "@/store/AuthCtx/AuthContext";
export default function BasketItems({ data }) {
  const router = useRouter();
  const { state, dispatch } = BasketContext();
  const authCtx = useContext(AuthContext);
  const handleSaveBasket = () => {
    if (!authCtx.isLoggedIn) {
      router.push("/auth/login");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center px-10 lg:px-0 lg:relative mb-5 lg:mb-0">
      {state.basket &&
        state.basket.map((item, index) => (
          <BasketItem key={v4()} item={item} index={index} />
        ))}
      {/* Continue Box */}
      <div className="hidden lg:flex flex-col justify-between items-center w-1/3 p-5 bg-[#ea63521a] rounded-[15px] absolute bottom-10 left-0">
        <div className="flex justify-between w-full">
          <p className="text-xl text-gray-400 font-normal leading-8">
            مجموع سبد خرید:
          </p>
          <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{(125000).toLocaleString()}</bdi>
          </p>
        </div>
        <button
          onClick={handleSaveBasket}
          className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1"
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
