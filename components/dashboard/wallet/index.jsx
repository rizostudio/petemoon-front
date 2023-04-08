import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
//media
import WalletAdd_Icon from "../../../assets/dashboard/wallet-add.svg";
//component
import IncreaseWallet from "./IncreaseWallet";
//serVices
import { getOverView } from "@/services/dashboard/overView/getOverView";
export default function Wallet() {
  const dataFetchedRef = useRef(false);
  const [showeModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await getOverView();
      setData(response.data);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  return (
    <>
      <div className="h-screen lg:h-2/4 flex flex-col lg:flex-row lg:justify-between items-stretch">
        {/* show user's money */}
        <div className="flex flex-col lg:w-2/3">
          <div className="h-[200px] lg:h-full w-full flex flex-col justify-between items-center p-5 rounded-[15px] lg:rounded-[25px] text-white bg-gradient-to-r from-[#FA5456] to-[#FFA000]">
            <p className="self-start text-base font-black leading-12">
              کیف پول<sup className="text-xs font-normal leading-6">پتمون</sup>
            </p>
            <p className="self-center text-3xl font-black leading-16">
              <bdi>{data.wallet} تومان</bdi>
            </p>
            <p className="self-end text-[12px] font-medium leading-5">
              <bdi>*موجودی کیف پول قابل بازگردانی به حساب نیست</bdi>
            </p>
          </div>
        </div>
        {/* button that opens the modal */}
        <label
          onClick={() => setShowModal(true)}
          htmlFor="add-wallet-modal"
          className="w-full lg:w-1/3 flex flex-row lg:flex-col-reverse justify-between lg:justify-center items-center px-10 lg:px-20 py-5 lg:py-8 lg:mr-5 bg-white border-[2px] solid border-primary rounded-[12px] lg:rounded-[25px] cursor-pointer mt-10 lg:mt-0"
        >
          <p className="text-2xl lg:text-base text-primary font-bold leading-8 lg:mt-10">
            افزایش موجودی
          </p>
          <Image src={WalletAdd_Icon} alt="WalletAddPic" className="lg:w-40" />
        </label>
      </div>
      {/* Modal*/}
      <IncreaseWallet showeModal={showeModal} setShowModal={setShowModal} />
    </>
  );
}
