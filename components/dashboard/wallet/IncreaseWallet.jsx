import React, { useState } from "react";
import Image from "next/image";
//media
import CloseButton_Icon from "../../../assets/common/close-button.svg";
import Modal from "@/components/partials/modal/Modal";
export default function IncreaseWallet({ showeModal, setShowModal }) {
  const [increaseAmount, setIncreaseAmount] = useState(0);
  return (
    <Modal show={showeModal}>
      <input type="checkbox" id="add-wallet-modal" className="modal-toggle" />
      <label htmlFor="add-wallet-modal" className="modal cursor-pointer">
        <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-base lg:text-base text-black font-medium lg:font-black leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              افزایش موجودی
            </p>
            <label
              onClick={() => setShowModal(false)}
              // htmlFor="add-wallet-modal"
            >
              <Image src={CloseButton_Icon} alt="CloseIcon" />
            </label>
          </div>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col"
          >
            <div className="flex flex-col items-stretch justify-center p-4 lg:p-10">
              <p className="text-base lg:text-lg text-black text-center font-medium leading-7 mb-7">
                <bdi>مبلغ مورد نظر جهت افزایش موجودی را وارد نمایید:</bdi>
              </p>
              <input
                type="number"
                value={increaseAmount}
                onChange={(event) => setIncreaseAmount(event.target.value)}
                placeholder="100000"
                className='w-full p-3 mb-2 lg:mb-3 bg-white text-base text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px] focus:border-error focus:text-black before:content-["fu"] before:text-lg before:text-error'
              />
              <div className="w-full flex mb-3">
                <button
                  onClick={() => setIncreaseAmount(500000)}
                  className="w-full p-3 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px]"
                >
                  <bdi>{500000} تومان</bdi>
                </button>
                <button
                  onClick={() => setIncreaseAmount(200000)}
                  className="w-full p-3 mx-1 lg:mx-2 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px]"
                >
                  <bdi>{200000} تومان</bdi>
                </button>
                <button
                  onClick={() => setIncreaseAmount(100000)}
                  className="w-full p-3 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px] "
                >
                  <bdi>{100000} تومان</bdi>
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full lg:w-1/3 lg:self-left">
              <button className="w-full text-sm text-white text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] ml-2">
                پرداخت
              </button>
              <label
                onClick={() => setShowModal(false)}
                // htmlFor="add-wallet-modal"
                className="w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error"
              >
                انصراف
              </label>
            </div>
          </form>
        </label>
      </label>
    </Modal>
  );
}
