import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
const status = {
  SENDING: "در حال ارسال",
  CANCELED: "لغو شده",
  DELIVERED: "  تکمیل شده",
  PAY_PENDING: "  در انتظار پرداخت",
  PROCESSING: "در حال آماده سازی",
};
export default function OrderItem({ item }) {
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    item.products.map((item) => {
      setOrderPrice((prev) => prev + item.price);
    });
  }, []);
  return (
    <div className="flex flex-col w-full my-1 lg:my-4 px-4 py-2 lg:px-10 lg:py-7 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-none lg:shadow-shadowB">
      <div className="flex flex-row justify-between lg:justify-between items-center">
        <p
          className={`text-sm lg:text-lg text-black font-black lg:font-bold leading-7 lg:leading-8 before:align-middle before:inline-block before:w-2 before:h-2 lg:before:h-4 before:ml-1 lg:before:ml-2 before:rounded-full lg:before:rounded-[2px] ${
            item.status === "SENDING"
              ? "before:bg-cyan-600"
              : item.status === "CANCELED"
              ? "before:bg-rose-700"
              : item.status === "DELIVERED"
              ? "before:bg-green-600"
              : item.status === "PAY_PENDING"
              ? "before:bg-yellow-400"
              : item.status === "PROCESSING"
              ? "before:bg-neutral-600"
              : "before:bg-neutral-600"
          }`}
        >
          <bdi>{status[item.status]}</bdi>
        </p>
        <p className="text-sm lg:text-lg text-gray-400 font-medium leading-4">
          <bdi>{item.date}</bdi>
        </p>
      </div>
      <div className="flex flex-row items-center mt-4 mb-2 lg:my-10">
        <div className="flex flex-col">
          <p className="text-base text-black font-semibold leading-8 opacity-90">
            <bdi>
              کد سفارش
              <span className="text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4">
                {item.order_id}
              </span>
            </bdi>
          </p>
          <p className="text-base text-black font-semibold leading-8 opacity-90">
            <bdi>
              مبلغ
              <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4 after:content-["تومان"] after:mr-1 after:text-sm'>
                {orderPrice.toLocaleString()}
              </span>
            </bdi>
          </p>
        </div>
        <div className="flex flex-col mr-6 lg:mr-20">
          <p className="text-base text-black font-semibold leading-8 opacity-90">
            <bdi>
              تحویل گیرنده
              <span className="text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4">
                {item.address
                  ? item.address?.receiver
                  : "آدرس انتخابی حذف شده است "}
              </span>
            </bdi>
          </p>
          <p className="text-base text-black font-semibold leading-8 opacity-90">
            <bdi>
              تخفیف
              <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4 after:content-["تومان"] after:mr-1 after:text-sm'>
                {0}
              </span>
            </bdi>
          </p>
        </div>
      </div>
      <p className="text-base text-right text-black font-semibold leading-8 opacity-90 mb-2 lg:mb-5">
        <bdi>
          آدرس پستی :
          <span className="text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4">
            {item.address
              ? item.address?.postal_address
              : "آدرس انتخابی حذف شده است "}
          </span>
        </bdi>
      </p>
      {/* show the picture of orders */}
      <div className="flex flex-row justify-end items-center flex-wrap self-start">
        {item.products.map((item) => (
          <div
            key={item.id}
            className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] m-1 lg:m-2 bg-gray-600 rounded-[10px] lg:rounded-[10px]"
          >
            <Image
              alt="product image"
              style={{ width: "100%", height: "100%" }}
              width={100}
              height={100}
              src={
                item.picture
                  ? `https://api.petemoon.com${item.picture}`
                  : "/assets/product/ProductPic4.jpg"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
