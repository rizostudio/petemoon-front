import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
//media
import DescriptionForPayment from "@/components/payment/setAddress/DescriptionForPayment";
import DeliveryMethod from "@/components/payment/setAddress/DeliveryMethod";
import CreateNewAddressBox from "@/components/payment/setAddress/CreateNewAddressBox";
import AddressItem from "@/components/payment/setAddress/AddressItem";

export default function SetAddress() {
  const router = useRouter();
  // fake data
  const [AddressesArr, setAddressesArr] = useState([
    {
      key: 0,
      title: "آدرس اول",
      province: "تهران",
      city: "شهرستان آبعلی",
      zipCode: 123456789,
      receiver: "جنتی دوست",
      mapLocation: "/assets/dashboard/mapPic.svg",
      location:
        "تهران، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲",
    },
    {
      key: 1,
      title: "آدرس خانه",
      province: "سیستان و بلوچستان",
      city: "زاهدان",
      zipCode: 123456789,
      receiver: "محمد علی باقری کنی همدانی",
      mapLocation: "",
      location:
        "هزاهدان، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲",
    },
    {
      key: 2,
      title: "آدرس محل کار",
      province: "فارس",
      city: "شیراز",
      zipCode: 123456789,
      receiver: "حسین الهی نژاد جنت امامی",
      mapLocation: "/assets/dashboard/mapPic.svg",
      location:
        "هشیراز، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲",
    },
  ]);
  //deliever method
  //   const delieverMethod = [
  //     { title: "پیک موتوری", name: "motorPost" },
  //     { title: "پیک فروشگاه", name: "storePost" },
  //     { title: "پست پیشتاز", name: "pishtazPost" },
  //     { title: "اسنپ", name: "snappPost" },
  //   ];

  return (
    <div className="flex flex-col justify-between items-stretch bg-[#f8f8f8]">
      <div>
        {/*Heading for mobile */}
        <div className="w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5">
          <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            پرداخت
          </p>
          <Link
            href="/card"
            className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
          >
            <Image
              src={"/assets/common/leftArrowWhite.svg"}
              alt="ArrowIcon"
              className="w-full"
              width={100}
              height={100}
            />
          </Link>
        </div>
        {/* main container */}
        <div className="flex flex-col px-10 py-5">
          {AddressesArr &&
            AddressesArr.map((item, index) => (
              <AddressItem key={item.key} item={item} index={index} />
            ))}
          {/* add new location */}
          <CreateNewAddressBox />
          {/* deliever method */}
          {/* <DeliveryMethod /> */}
          {/* other description & confirm box */}
          <DescriptionForPayment />
        </div>
      </div>
      {/* Continue Box */}
      <div className="flex lg:hidden flex-col justify-between items-stretch w-full">
        <div className="flex justify-between w-full px-10 py-5">
          <p className="text-base text-gray-400 font-medium leading-5">
            <bdi>هزینه ارسال:</bdi>
          </p>
          <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'>
            <bdi>{(15000).toLocaleString()}</bdi>
          </p>
        </div>
        <div className="flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary">
          <button
            onClick={() => router.push("/card/confirm")}
            className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]"
          >
            پرداخت
          </button>
          <div className="flex flex-col">
            <p className="text-base text-gray-400 font-normal leading-8">
              مجموع سبد خرید
            </p>
            <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
              <bdi>{(125000).toLocaleString()}</bdi>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
