import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
//media
import DescriptionForPayment from "@/components/payment/setAddress/DescriptionForPayment";
import DeliveryMethod from "@/components/payment/setAddress/DeliveryMethod";
import CreateNewAddressBox from "@/components/payment/setAddress/CreateNewAddressBox";
import AddressItem from "@/components/payment/setAddress/AddressItem";
//http
import { getListAddress } from "@/services/dashboard/address/getList";
import { postBasketToServer } from "@/services/basket/postBasketToServer";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";

export default function SetAddress() {
  const router = useRouter();
  const { state, dispatch } = BasketContext();
  const dataFetchedRef = useRef(false);
  const [AddressesArr, setAddressesArr] = useState([]);
  const [selectAddress, setSelectedAddress] = useState(state.address);
  useEffect(() => {
    const getData = async () => {
      const response = await getListAddress();
      setAddressesArr(response.data);
      setSelectedAddress(response.data[0]);
      if (!response.success) {
        router.push("/auth/login");
      }
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  const totalBasket = state.basket.reduce((total, item) => {
    return total + parseInt(item.count) * parseInt(item.price);
  }, 0);
  const handleAddress = async () => {
    if (state.address) {
      dispatch({
        type: "ADD_ADDRESS",
        payload: {
          address: selectAddress,
        },
      });
      const payload = {};
      state.basket.map((item) => {
        if (!payload[item.id]) payload[item.id] = parseInt(item.count);
      });
      const response = await postBasketToServer(payload, state.address.id);
      if (response.success) {
        router.push("/payment/checkout");
      }
      router.push("/payment/checkout");
    }

    // const response = await postAddress(selectAddress);
    // if (response.success) {
    //   router.push("/payment/checkout");
    // }
  };
  return (
    <div className="flex flex-col justify-between items-stretch bg-[#f8f8f8]">
      <div>
        {/*Heading for mobile */}
        <div className="w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5">
          <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            ادامه
          </p>
          <Link
            href="/cart"
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
              <AddressItem
                selectAddress={selectAddress}
                setSelectedAddress={setSelectedAddress}
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          {/* add new location */}
          <CreateNewAddressBox />
          {/* deliever method */}
          {/* <DeliveryMethod /> */}
          {/* other description & confirm box */}
          <DescriptionForPayment handleAddress={handleAddress} />
        </div>
      </div>
      {/* Continue Box */}
      <div className="flex lg:hidden flex-col justify-between items-stretch w-full">
        {/* <div className="flex justify-between w-full px-10 py-5">
          <p className="text-base text-gray-400 font-medium leading-5">
            <bdi>هزینه ارسال:</bdi>
          </p>
          <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'>
            <bdi>{totalBasket}</bdi>
          </p>
        </div> */}
        <div className="flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary">
          <button
            onClick={handleAddress}
            className="text-base hover:bg-[#d85241] text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]"
          >
            ادامه
          </button>
          <div className="flex flex-col">
            <p className="text-base text-gray-400 font-normal leading-8">
              مجموع سبد خرید
            </p>
            <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
              <bdi>{totalBasket.toLocaleString()}</bdi>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
