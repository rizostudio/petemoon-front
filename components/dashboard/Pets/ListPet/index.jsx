import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
//media
import PetAdd_Icon from "../../../../assets/dashboard/AddPet.svg";
import PetAdd_IconWhite from "../../../../assets/dashboard/PetAddWhite.svg";
//http
import { getListPet } from "@/services/dashboard/pets/getList";
//component
import PetCard from "./PetCard";

export default function Index() {
  const dataFetchedRef = useRef(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getListPet();
      setData(response.data);
      console.log(response.data);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-between items-stretch">
      {data && data.map((item) => <PetCard key={item.id} item={item} />)}
      {/* for Adding new pet */}
      <Link
        href="/dashboard/my-pets/createNewPet"
        className="w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB"
      >
        <Image
          src={PetAdd_IconWhite}
          alt="PetAddIcon"
          className="mr-2 lg:mr-0 lg:hidden"
        />
        <Image src={PetAdd_Icon} alt="PetAddIcon" className="hidden lg:block" />
        <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
          ثبت پت جدید
        </p>
      </Link>
    </div>
  );
}
