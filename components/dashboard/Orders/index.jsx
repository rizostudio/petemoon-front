import { getLisOrders } from "@/services/dashboard/orders/orders";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import Link from "next/link";
import Image from "next/image";
export default function Orders() {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getLisOrders();
      console.log(response);
      setOrderList(response.data);
    };
    getData();
  }, []);
  return (
    <>
      {orderList.length ? (
        <div className="flex flex-col items-stretch">
          {orderList &&
            orderList.map((item) => (
              <OrderItem key={item.order_id} item={item} />
            ))}
        </div>
      ) : (
        <>
          <p className="text-lg  lg:text-3xl text-primary">
            تا کنون محصولی سفارش نداده اید
          </p>
          <div className="w-full  lg:flex flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB">
            <Image
              width={25}
              height={25}
              src={"/assets/dashboard/box-add-white.svg"}
              alt="LocationAddIcon"
              className="ml-2 lg:mr-0 lg:hidden"
            />
            <div className="w-fit cursor-pointer">
              <Link href={"/"}>
                <Image
                  width={100}
                  height={100}
                  src={"/assets/dashboard/box-add.svg"}
                  alt="LocationAddIcon"
                  className="hidden lg:block"
                />
              </Link>
            </div>
            <Link href={"/"}>
              <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
                ورود به فروشگاه
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
