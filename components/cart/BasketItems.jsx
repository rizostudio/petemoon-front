import React, { useContext } from "react";
import { v4 } from "uuid";
import { useRouter } from "next/router";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import BasketItem from "./BasketItem";
//context
import AuthContext from "@/store/AuthCtx/AuthContext";
//services
import { postBasketToServer } from "@/services/basket/postBasketToServer";
export default function BasketItems({ data }) {
  const router = useRouter();
  const { state, dispatch } = BasketContext();
  const authCtx = useContext(AuthContext);
  const handleSaveBasket = async () => {
    const payload = {};
    state.basket.map((item) => {
      if (!payload[item.id]) payload[item.id] = parseInt(item.count);
    });
    const response = await postBasketToServer(payload);
    if (response.success) {
      console.log(response);
      router.push("/payment/set-address");
    }
  };
  const totalBasket = state.basket.reduce((total, item) => {
    return total + parseInt(item.count) * parseInt(item.price);
  }, 0);
  return (
    <div className="flex flex-col justify-center items-center px-10 lg:px-0 lg:relative mb-5 lg:mb-0">
      {state.basket &&
        state.basket.map((item, index) => (
          <BasketItem key={item.id} item={item} index={index} />
        ))}
      {/* Continue Box */}
      <div className="hidden lg:flex flex-col justify-between items-center w-1/3 p-5 bg-[#ea63521a] rounded-[15px] absolute bottom-10 left-0">
        <div className="flex justify-between w-full">
          <p className="text-xl text-gray-400 font-normal leading-8">
            مجموع سبد خرید:
          </p>
          <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>
              {/* {state.basket
                .map((item) => {
                  const total = 0;
                  total += parseInt(item.count) * item.price;
                })
                .toLocaleString()} */}
              {totalBasket}
            </bdi>
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
