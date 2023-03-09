import React from "react";
import Image from "next/image";
import Link from "next/link";
// media
import ArrowLeftWhite_Icon from "../../assets/common/leftArrowWhite.svg";
export default function HeadingForMobile({ data }) {
  return (
    <div className="w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5">
      <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
        سبد خرید
      </p>
      <Link
        href="/products"
        className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
      >
        <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className="w-full" />
      </Link>
    </div>
  );
}
