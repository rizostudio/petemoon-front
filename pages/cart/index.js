import React, { useState } from "react";
import Image from "next/image";
//layout
import MainLayout from "@/layout/main";
//components
import HeadingForMobile from "@/components/cart/HeadingForMobile";
import BasketItems from "@/components/cart/BasketItems";
import OfferProducts from "@/components/cart/OfferProducts";
import TotalBasketForMobile from "@/components/cart/TotalBasketForMobile";
import Cart from "@/components/cart";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";

export default function index() {
  return (
    <MainLayout>
      <Cart />
      <BottomNavigation />
    </MainLayout>
  );
}
