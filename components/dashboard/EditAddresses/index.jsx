import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//media
import ArrowLeftWhite_Icon from "../../../assets/common/leftArrowWhite.svg";
import EditAddressForm from "./EditAddressForm";

export default function Index({ id }) {
  return (
    <div className="flex flex-col lg:bg-white lg:rounded-[25px] lg:px-12 lg:py-6">
      <div className="w-full flex lg:hidden flex-row justify-between items-center mb-10">
        <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
          جزئیات آدرس
        </p>
        <Link
          href="/dashboard/addresses"
          className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
        >
          <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className="w-full" />
        </Link>
      </div>
      <EditAddressForm id={id} />
    </div>
  );
}
