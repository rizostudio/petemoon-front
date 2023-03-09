import React from "react";
import Image from "next/image";
//media
import LocationAdd_Icon from "../../../assets/dashboard/location-add.svg";
import LocationAdd_White_Icon from "../../../assets/dashboard/location-add-white.svg";
import Link from "next/link";

export default function AddNewAddress() {
  return (
    <div className="w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB">
      <Image
        src={LocationAdd_White_Icon}
        alt="LocationAddIcon"
        className="mr-2 lg:mr-0 lg:hidden"
      />
      <div className="w-fit cursor-pointer">
        <Link href={"/dashboard/addresses/create"}>
          <Image
            src={LocationAdd_Icon}
            alt="LocationAddIcon"
            className="hidden lg:block"
          />
        </Link>
      </div>
      <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
        ثبت آدرس جدید
      </p>
    </div>
  );
}
