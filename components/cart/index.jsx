import React, { useState } from "react";
//components
import HeadingForMobile from "@/components/cart/HeadingForMobile";
import BasketItems from "@/components/cart/BasketItems";
import OfferProducts from "@/components/cart/OfferProducts";
import TotalBasketForMobile from "@/components/cart/TotalBasketForMobile";
export default function Cart() {
  return (
    <div className=" w-full h-full lg:px-20 lg:py-12 bg-[#f8f8f8]">
      <HeadingForMobile />
      <BasketItems />
      <OfferProducts />
      <TotalBasketForMobile />
    </div>
  );
}
