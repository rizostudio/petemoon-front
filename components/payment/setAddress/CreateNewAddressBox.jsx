import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CreateNewAddressBox() {
  return (
    <Link href={"/dashboard/addresses/create"}>
      <div className="w-full hidden cursor-pointer lg:flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 border-[1px] border-primary rounded-[12px] lg:rounded-[25px]">
        <Image
          src={"/assets/dashboard/location-add-white.svg"}
          alt="LocationAddIcon"
          className="mr-2 lg:mr-0 lg:hidden"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/dashboard/location-add.svg"}
          alt="LocationAddIcon"
          className="hidden lg:block"
          width={100}
          height={100}
        />
        <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
          ثبت آدرس جدید
        </p>
      </div>
    </Link>
  );
}
