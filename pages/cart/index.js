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

export default function index() {
  // const [data, setData] = useState([
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 4,
  //     store: "فروشگاه پتیار",
  //     amount: 0,
  //     discount: 20,
  //     price: 125000,
  //     count: 2,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 5,
  //     store: "فروشگاه پتیار",
  //     amount: 2,
  //     discount: 20,
  //     price: 125000,
  //     count: 1,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 3,
  //     store: "فروشگاه پتیار",
  //     amount: 0,
  //     discount: 20,
  //     price: 125000,
  //     count: 3,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 2,
  //     store: "فروشگاه پتیار",
  //     amount: 2,
  //     discount: 20,
  //     price: 125000,
  //     count: 1,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 4,
  //     store: "فروشگاه پتیار",
  //     amount: 0,
  //     discount: 20,
  //     price: 125000,
  //     count: 2,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 5,
  //     store: "فروشگاه پتیار",
  //     amount: 2,
  //     discount: 20,
  //     price: 125000,
  //     count: 1,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 3,
  //     store: "فروشگاه پتیار",
  //     amount: 0,
  //     discount: 20,
  //     price: 125000,
  //     count: 3,
  //   },
  //   {
  //     title: "غذای خشک سگ",
  //     group: "دسته خوراکی",
  //     stars: 2,
  //     store: "فروشگاه پتیار",
  //     amount: 2,
  //     discount: 20,
  //     price: 125000,
  //     count: 1,
  //   },
  // ]);
  return (
    <MainLayout>
      <Cart />
    </MainLayout>
  );
}
