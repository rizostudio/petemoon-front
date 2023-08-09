import { getListBookMarks } from "@/services/dashboard/bookmarks/getList";
import React, { useState, useEffect } from "react";
import BookMarkItem from "./BookMarkItem";
import Image from "next/image";
//media
import LocationAdd_Icon from "../../../assets/dashboard/location-add.svg";
import LocationAdd_White_Icon from "../../../assets/dashboard/location-add-white.svg";
import Link from "next/link";
export default function Boockmarks() {
  const [bookMarkList, setBookMarkList] = useState([]);
  const [deleteHandler, setDeletHandler] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await getListBookMarks();
      setBookMarkList(response.data);
      console.log(response);
    };
    getData();
  }, [deleteHandler]);
  return (
    <>
      {bookMarkList.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
          {bookMarkList.map((item) => (
            <BookMarkItem
              setDeletHandler={setDeletHandler}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="w-full hidden lg:flex flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB">
            <Image
              src={LocationAdd_White_Icon}
              alt="LocationAddIcon"
              className="mr-2 lg:mr-0 lg:hidden"
            />
            <div className="w-fit cursor-pointer">
              <Link href={"/dashboard/addresses/create"}>
                <Image
                  src={LocationAdd_Icon}
                  alt="LocationAddIcon"
                  className="hidden lg:block"
                />
              </Link>
            </div>
            <Link href={"/dashboard/addresses/create"}>
              <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
                هنوز محصولی به علاقه مندی ها اضاف نکردید
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
