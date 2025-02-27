import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//media
import ArrowLeftWhite_Icon from "../../../assets/common/leftArrowWhite.svg";
import edit_Icon from "../../../assets/common/EditIcon2.svg";
import { getShipping } from "@/services/basket/getShipping";
//components
import SummeryOfOrder from "./SummeryOfOrder";
import DiscountCode from "./DiscountCode";
import CountinueBoxForMobile from "./CountinueBoxForMobile";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
export default function OrderSummery() {
  const [shipping, setShipping] = useState({});
  const [discount, setDiscount] = useState("");
  const [countOfDiscount, setCountOfDiscount] = useState(0);
  useEffect(() => {
    const shipping = async () => {
      const response = await getShipping();
      // console.log(response);
      setShipping(response.data[0]);
    };
    shipping();
  }, []);
  const { state, dispatch } = BasketContext();

  const totalBasket = state.basket.reduce((total, item) => {
    const totalwithdiscount =
      total + parseInt(item.count) * parseInt(item.price);
    const discount =
      (total + parseInt(item.count) * parseInt(item.price)) *
      (parseInt(countOfDiscount) / 100);
    return totalwithdiscount - discount;
  }, 0);

  return (
    <>
      <BottomNavigation />
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
          <DiscountCode
            setCountOfDiscount={setCountOfDiscount}
            shipping={shipping}
            totalBasket={totalBasket}
            setDiscount={setDiscount}
            discount={discount}
          />
        </div>
        {/* Continue Box for Mobile*/}
        <CountinueBoxForMobile shipping={shipping} totalBasket={totalBasket} />
      </div>
    </>
  );
}
