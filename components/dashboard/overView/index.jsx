import React, { useEffect, useState, useRef } from "react";
//components
import Mypet from "./Mypet";
import OrderCount from "./OrderCount";
import Wallet from "./Wallet";
import TotalSale from "./TotalSale";
import OrderSummary from "./OrderSummary";
//http
import { getOverView } from "@/services/dashboard/overView/getOverView";
//moment
import moment from "jalali-moment";
export default function DashboardOverView() {
  const dataFetchedRef = useRef(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await getOverView();
      setData(response.data);
      console.log(response.data.my_pet);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  return (
    <div className="flex flex-col items-stretch">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-stretch lg:items-center w-full h-full lg:h-[250px]">
        {/* pet information */}
        <Mypet pet={data.my_pet} />
        {/* orders number*/}
        <OrderCount count={data.orders_count} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center w-full h-full lg:h-[250px] my-3 lg:my-5">
        {/* wallet */}
        <Wallet wallet={data.wallet} />
        {/* orders sum */}
        <TotalSale total={data.total_price} />
      </div>
      {/* orders summary */}

      <OrderSummary orders={data.orders} />
    </div>
  );
}
