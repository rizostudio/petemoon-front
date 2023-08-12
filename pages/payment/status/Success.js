import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

//component
import AlertBox from "@/components/payment/PaymentStatus/AlertBox";
import MainLayout from "@/layout/main";

//media
// import ArrowLeftWhite_Icon from "../../assets/common/leftArrowWhite.svg";
// import PetCheck_Icon from "../../assets/card/petCheck.svg";
// import PetError_Icon from "../../assets/card/petError.svg";

export default function Success() {
  const router = useRouter();
  const paymentStatus = true;
  return (
    <div className="w-full h-screen lg:h-full overflow-y-scroll lg:overflow-y-visible flex flex-col justify-between items-stretch lg:px-20 lg:py-12 bg-[#f8f8f8]">
      <div className="flex flex-col justify-start">
        <div className="w-full flex lg:hidden flex-row justify-between items-center p-10">
          <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            {paymentStatus ? "تایید پرداخت" : "خطا در پرداخت"}
          </p>
          <Link
            href="/card"
            className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
          >
            <Image
              width={100}
              height={100}
              src={"/assets/common/leftArrowWhite.svg"}
              alt="ArrowIcon"
              className="w-full"
            />
          </Link>
        </div>

        <div className="flex flex-col w-full">
          <div className="self-center mt-[50px] lg:mt-[100px] lg:mb-[40px] px-10 lg:p-0">
            <Image
              width={100}
              height={100}
              src={
                paymentStatus
                  ? "/assets/card/petCheck.svg"
                  : "/assets/card/petError.svg"
              }
              alt="PaymentStatus"
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
          <div className="flex flex-row justify-center items-center w-full h-full mt-0">
            <div className="w-full lg:w-3/5 h-full p-10 lg:p-0">
              {paymentStatus ? (
                <AlertBox
                  alertKind="verify"
                  title="پرداخت با موفقیت همراه شد"
                  text="با سپاس از خرید از شما از فروشگاه پتمون."
                />
              ) : (
                <AlertBox
                  alertKind="error"
                  title="پرداخت با خطا همراه شد"
                  text="لطفا خطا مورد نظر را بررسی کنید."
                />
              )}
            </div>
            <div className="hidden lg:block w-2/5 h-full p-0 mr-4">
              <button
                onClick={() => router.replace("/")}
                className={clsx(
                  "text-lg text-white text-center font-bold leading-8 w-full p-7 rounded-[4px]",
                  {
                    "bg-primary": paymentStatus,
                    "bg-gray-400": paymentStatus == false,
                  }
                )}
              >
                صفحه اصلی
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full px-10 py-5 border-t-[2px] border-secondary border-solid">
        <button
          onClick={() => router.replace("/")}
          className={clsx(
            "text-base text-white text-center font-medium leading-8 w-full p-3 rounded-[12px]",
            {
              "bg-primary": paymentStatus,
              "bg-gray-400": paymentStatus == false,
            }
          )}
        >
          صفحه اصلی
        </button>
      </div>
    </div>
  );
}
