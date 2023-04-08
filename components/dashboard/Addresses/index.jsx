import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
//component
import AddNewAddress from "./AddNewAddress";
import AddressItem from "./AddressItem";
//http
import { getListAddress } from "@/services/dashboard/address/getList";

export default function index() {
  const [addressesList, setAddressesList] = useState([]);
  const [deleteHandler, setDeleteHandler] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const response = await getListAddress();
      setAddressesList(response.data);
      if (!response.success) {
        router.push("/auth/login");
      }
    };
    getData();
  }, [deleteHandler]);
  return (
    <div className="flex flex-col justify-between items-stretch">
      {addressesList.map((item) => (
        <AddressItem
          setDeleteHandler={setDeleteHandler}
          key={item.id}
          data={item}
        />
      ))}
      {/* <AddressItem /> */}
      {/* add new location */}
      <AddNewAddress />
    </div>
  );
}
