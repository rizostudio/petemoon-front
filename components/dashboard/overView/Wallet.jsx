import React from "react";

export default function Wallet({ wallet }) {
  return (
    <div className="h-[250px] lg:h-full w-full lg:w-3/4 flex flex-col justify-between items-stretch p-5 rounded-[15px] lg:rounded-[25px] text-white bg-gradient-to-r from-[#FA5456] to-[#FFA000] shadow-shadowB">
      <p className="self-start text-base font-black leading-12">
        کیف پول<sup className="text-xs font-normal leading-6">پتمون</sup>
      </p>
      <p className="self-center text-3xl font-black leading-16">
        <bdi>{wallet} تومان</bdi>
      </p>
      <p className="self-end text-[12px] font-medium leading-5">
        <bdi>*موجودی کیف پول قابل بازگردانی به حساب نیست</bdi>
      </p>
    </div>
  );
}
