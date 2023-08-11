import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CreateNewAddressBox() {
  return (
    <>
      <p className="text-xl lg:hidden text-primary">هنوز ادرسی اضافه نکردی</p>
      <Link href={"/dashboard/addresses/create"}>
        <div className="w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB">
          <Image
            width={20}
            height={20}
            src="/assets/dashboard/location-add-white.svg"
            alt="LocationAddIcon"
            className="mr-2 lg:mr-0 lg:hidden"
          />

          <div className="w-fit cursor-pointer">
            <Image
              width={100}
              height={100}
              src="/assets/dashboard/location-add.svg"
              alt="LocationAddIcon"
              className="hidden lg:block"
            />
          </div>

          <Link href={"/dashboard/addresses/create"}>
            <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
              افزودن آدرس جدید
            </p>
          </Link>
        </div>
      </Link>
    </>
  );
}
