import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AddressItem({ item, index }) {
  return (
    <div className="flex flex-col justify-between items-stretch my-2 lg:my-3 px-5 lg:px-12 py-4 lg:py-8 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-none">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <input
            id={`address${index}`}
            type="checkbox"
            className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
          />
          <label
            htmlFor={`address${index}`}
            className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 mr-4"
          >
            <bdi>{item.title}</bdi>
          </label>
        </div>
        <div className="flex flex-row items-center">
          <Link
            href={"/card/address-edit"}
            className="hidden lg:block p-2 border-[1px] solid border-[#4DA4F4] rounded-[12px]"
          >
            <Image
              src={"/assets/common/EditIcon2.svg"}
              alt="EditIcon"
              width={15}
              height={15}
            />
          </Link>
          <label htmlFor="More-modal">
            <Image
              src={"/assets/common/more.svg"}
              alt="MoreIcon"
              className="lg:hidden"
              width={20}
              height={20}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-row justify-between items-stretch mt-2 lg:mt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:my-2">
              <p className="hidden lg:block text-base text-black">استان</p>
              <p className="hidden lg:block text-sm text-gray-400 mr-3 font-medium">
                <bdi>{item.province}</bdi>
              </p>
              <p className="lg:hidden text-sm text-black">
                <bdi>استان/شهر</bdi>
              </p>
              <p className="lg:hidden text-xs text-gray-400 mr-2 font-medium">
                <bdi>{item.province + "/" + item.city}</bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2">
              <p className="text-sm lg:text-base text-black">کد پستی</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{item.zipCode}</bdi>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mr-10">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 lg:my-2">
              <p className="hidden lg:block text-sm lg:text-base text-black">
                شهر
              </p>
              <p className="hidden lg:block text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{item.city}</bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2">
              <p className="text-sm lg:text-base text-black">تحویل گیرنده</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{item.receiver}</bdi>
              </p>
            </div>
          </div>
        </div>
        <div>
          {item.mapLocation ? <div></div> : <div></div>}
          <div className="w-[100px] h-[100px] relative border-[1px] solid border-secondary rounded-[10px]">
            <Image
              src={
                item.mapLocation
                  ? item.mapLocation
                  : "/assets/dashboard/mapPicPreserve.svg"
              }
              alt="MapPic"
              className="w-full h-full"
              width={100}
              height={100}
            />
            {!item.mapLocation && (
              <p className="text-sm text-error text-center font-medium leading-4 absolute top-[40%] left-[15%]">
                ثبت روی نقشه
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-right font-semibold lg:font-bold opacity-90 leading-8 my-2">
        <p className="text-sm lg:text-base text-black">آدرس پستی</p>
        <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
          <bdi>{item.location}</bdi>
        </p>
      </div>
      {/* Modals */}
      <div>
        {/* for more-modal  */}
        <input type="checkbox" id="More-modal" className="modal-toggle" />
        <label htmlFor="More-modal" className="modal cursor-pointer">
          <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 mx-auto p-0 bg-white rounded-none">
            <div className="w-full flex flex-col justify-between items-end">
              <label
                htmlFor="More-modal"
                className="w-full flex flex-row items-center px-9 py-3 border-b-[1px] border-gray-400 solid"
              >
                <Link href="/card/address-edit" className="flex flex-row">
                  <p className="text-base text-primary font-medium leading-8 mr-2">
                    آدرس جدید
                  </p>
                </Link>
              </label>
              <label
                htmlFor="More-modal"
                className="w-full flex flex-row items-center px-9 py-3"
              >
                <Link href="/card/address-edit" className="flex flex-row">
                  <Image
                    src={"/assets/common/EditIcon2.svg"}
                    alt="EditIcon"
                    width={15}
                    height={15}
                  />
                  <p className="text-base text-black font-medium leading-8 mr-2">
                    ویرایش آدرس
                  </p>
                </Link>
              </label>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}
