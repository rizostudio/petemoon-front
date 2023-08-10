import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//components
import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";
import { getsimillar } from "@/services/basket/getsimillar";
export default function OfferProducts() {
  const [simillar, setSimillar] = useState([]);
  // const [idOfBasketItems,setIdOfBasketItems]=useState([])
  const { state, dispatch } = BasketContext();
  useEffect(() => {
    const idOfBasketItems = [];
    state.basket.map((item) => {
      console.log(item.id);
      idOfBasketItems.push(item.id);
    });
    const getData = async () => {
      const response = await getsimillar({
        product_pricing_ids: idOfBasketItems,
      });
      setSimillar(response.data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col items-stretch px-0 py-5 lg:py-10 border-y-[2px] lg:border-none border-secondary">
      <div className="flex justify-between items-center align-middle px-10 lg:px-0">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات مشابه
        </h5>
        <Link
          href="/product-category/all"
          className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link>
      </div>
      {simillar && (
        <div className="mr-10 lg:m-0 px-0  py-2 lg:py-6">
          <CarouselProduct data={simillar} />
        </div>
      )}
    </div>
  );
}
