import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
//component
import AddNewAddress from "./AddNewAddress";
import AddressItem from "./AddressItem";
//http
import { getListAddress } from "@/services/dashboard/address/getList";

export default function index() {
  const dataFetchedRef = useRef(false);
  const [addressesList, setAddressesList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    console.log("test");
    // httpRequest
    //   .get("/dashboard/address/")
    //   .then((response) => {
    //     setAddressesList(response.data.data);
    //     console.log(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const getData = async () => {
      const response = await getListAddress();
      setAddressesList(response.data);
      if (!response.success) {
        router.push("/auth/login");
      }
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-between items-stretch">
      {addressesList.map((item) => (
        <AddressItem key={item.id} data={item} />
      ))}
      {/* <AddressItem /> */}
      {/* add new location */}
      <AddNewAddress />
    </div>
  );
}
