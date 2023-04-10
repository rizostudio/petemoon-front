import React, { useContext } from "react";
import Image from "next/image";
import { v4 } from "uuid";
import { useRouter } from "next/router";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import BasketItem from "./BasketItem";
//context
import AuthContext from "@/store/AuthCtx/AuthContext";
//services
import { postBasketToServer } from "@/services/basket/postBasketToServer";
//media
import LocationAdd_Icon from "../../assets/dashboard/location-add.svg";
import LocationAdd_White_Icon from "../../assets/dashboard/location-add-white.svg";
import Link from "next/link";
export default function BasketItems() {
  const router = useRouter();
  const { state, dispatch } = BasketContext();
  const authCtx = useContext(AuthContext);
  const handleSaveBasket = () => {
    if (authCtx.isLoggedIn) {
      router.push("/payment/set-address");
    } else {
      router.push("/auth/login");
    }
  };
  const totalBasket = state.basket.reduce((total, item) => {
    return total + parseInt(item.count) * parseInt(item.price);
  }, 0);
  return (
    <div className="flex flex-col justify-center items-center px-10 lg:px-0 lg:relative mb-5 lg:mb-0">
      <div className="lg:m-5 w-full my-2 lg:my-1">
        {state.basket.length ? (
          state.basket.map((item, index) => (
            <BasketItem key={item.id} item={item} index={index} />
          ))
        ) : (
          <div className="w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB">
            <Image
              src={LocationAdd_White_Icon}
              alt="LocationAddIcon"
              className="mr-2 lg:mr-0 lg:hidden"
            />
            <div className="w-fit cursor-pointer">
              <Link href={"/product-category/all"}>
                <Image
                  src={LocationAdd_Icon}
                  alt="LocationAddIcon"
                  className="hidden lg:block"
                />
              </Link>
            </div>
            <Link href={"/product-category/all"}>
              <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
                افزودن محصول به سبد خرید
              </p>
            </Link>
          </div>
        )}
      </div>
      {/* Continue Box */}
      {state.basket.length && (
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
                {totalBasket.toLocaleString()}
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
      )}
    </div>
  );
}
