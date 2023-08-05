import React, { useState } from "react";
import Image from "next/image";
import { v4 } from "uuid";
import Link from "next/link";

import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";
export default function SimilarProducts({ data }) {
  return (
    <div className="flex flex-col items-stretch px-0 py-5 lg:py-10 border-solid border-b-[2px] border-secondary">
      <div className="flex justify-between items-center align-middle px-10 lg:px-0">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات مشابه
        </h5>
      </div>
      <CarouselProduct data={data.related_products} />
    </div>
  );
}
