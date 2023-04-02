import { getLisOrders } from "@/services/dashboard/orders/orders";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

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
    <div className="flex flex-col items-stretch">
      {orderList &&
        orderList.map((item) => <OrderItem key={item.order_id} item={item} />)}
    </div>
  );
}
