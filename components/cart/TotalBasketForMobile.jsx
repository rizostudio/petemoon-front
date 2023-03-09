import React from "react";

export default function TotalBasketForMobile() {
  return (
    <div className="flex lg:hidden justify-between items-center w-full px-10 py-5">
      <button
        onClick={() => router.push("/card/payment")}
        className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]"
      >
        ادامه
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
  );
}
