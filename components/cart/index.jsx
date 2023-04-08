import React, { useState } from "react";
//components
import HeadingForMobile from "@/components/cart/HeadingForMobile";
import BasketItems from "@/components/cart/BasketItems";
import OfferProducts from "@/components/cart/OfferProducts";
import TotalBasketForMobile from "@/components/cart/TotalBasketForMobile";
export default function Cart() {
  const [data, setData] = useState([
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 4,
      store: "فروشگاه پتیار",
      amount: 0,
      discount: 20,
      price: 125000,
      count: 2,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 5,
      store: "فروشگاه پتیار",
      amount: 2,
      discount: 20,
      price: 125000,
      count: 1,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 3,
      store: "فروشگاه پتیار",
      amount: 0,
      discount: 20,
      price: 125000,
      count: 3,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 2,
      store: "فروشگاه پتیار",
      amount: 2,
      discount: 20,
      price: 125000,
      count: 1,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 4,
      store: "فروشگاه پتیار",
      amount: 0,
      discount: 20,
      price: 125000,
      count: 2,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 5,
      store: "فروشگاه پتیار",
      amount: 2,
      discount: 20,
      price: 125000,
      count: 1,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 3,
      store: "فروشگاه پتیار",
      amount: 0,
      discount: 20,
      price: 125000,
      count: 3,
    },
    {
      title: "غذای خشک سگ",
      group: "دسته خوراکی",
      stars: 2,
      store: "فروشگاه پتیار",
      amount: 2,
      discount: 20,
      price: 125000,
      count: 1,
    },
  ]);
  return (
    <div className=" w-full h-full lg:px-20 lg:py-12 bg-[#f8f8f8]">
      <HeadingForMobile data={data} />
      <BasketItems data={data} />
      <OfferProducts data={data} />
      <TotalBasketForMobile data={data} />
    </div>
  );
}
