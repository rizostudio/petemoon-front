import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//media
import ArrowLeftWhite_Icon from "../../../assets/common/leftArrowWhite.svg";
import edit_Icon from "../../../assets/common/EditIcon2.svg";
//components
import SummeryOfOrder from "./SummeryOfOrder";
import DiscountCode from "./DiscountCode";
import CountinueBoxForMobile from "./CountinueBoxForMobile";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
export default function OrderSummery() {
  const { state, dispatch } = BasketContext();
  const router = useRouter();
  const data = [1, 2, 3, 4, 5];
  const discountData = [
    { code: "1234567", value: 70000 },
    { code: "4567", value: 80000 },
    { code: "123", value: 20000 },
  ];
  const totalBasket = state.basket.reduce((total, item) => {
    return total + parseInt(item.count) * parseInt(item.price);
  }, 0);
  return (
    <div className="flex flex-col justify-between w-full h-screen lg:h-full bg-[#F8F8F8] lg:py-[50px]">
      <div className="">
        {/*Heading for mobile */}
        <div className="w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5">
          <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            خلاصه سفارش
          </p>
          <Link
            href="/payment/set-address"
            className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
          >
            <Image
              src={ArrowLeftWhite_Icon}
              alt="ArrowIcon"
              className="w-full"
            />
          </Link>
        </div>
        {/* Order Summary */}
        <SummeryOfOrder />
        {/* Discount & confirm box */}
        <DiscountCode totalBasket={totalBasket} />
      </div>
      {/* Continue Box for Mobile*/}
      <CountinueBoxForMobile totalBasket={totalBasket} />
    </div>
  );
}
