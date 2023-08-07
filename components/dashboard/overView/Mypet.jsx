import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//media
import PetPic from "../../../assets/dashboard/PetPic.svg";
//moment
import moment from "jalali-moment";
export default function Mypet({ pet }) {
  return (
    <div className="w-full lg:w-3/4 h-full bg-white px-4 py-5 lg:p-10 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
      <div className="flex justify-between ">
        <p className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
          <bdi>{pet?.length ? pet[0].name : "پت من"}</bdi>
        </p>
        <Link href={"/dashboard/my-pets/createNewPet"}>
          <p className=' text-lg text-primary font-medium leading-6 after:content-[">"] after:mr-4 after:text-base'>
            ثبت پت جدید
          </p>
        </Link>
      </div>
      <div className="flex flex-row justify-between items-stretch mt-2 lg:mt-2">
        <div
          className={"flex flex-col lg:flex-row justify-between items-stretch"}
        >
          <div className="lg:hidden flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2">
            <p className="lg:hidden text-base text-black">نام</p>
            <p className="lg:hidden text-sm text-gray-400 mr-3 font-medium">
              <bdi>{pet?.length ? pet[0].name : "پت من"}</bdi>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2">
              <p className="text-base text-black">نوع</p>
              <p className="text-sm text-gray-400 mr-3 font-medium">
                <bdi>{pet?.length ? pet[0].pet_type?.pet_type : ""}</bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4">
              <p className="text-sm lg:text-base text-black">جنسیت</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                {/* <bdi>
                  {pet?.length && pet[0]?.sex === "M"
                    ? "نر"
                    : pet[0]?.sex === "F"
                    ? "ماده"
                    : ""}
                </bdi> */}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mr-10">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2">
              <p className="text-sm lg:text-base text-black"> نژاد حیوان</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>
                  {pet?.length ? pet[0].pet_category?.pet_category : ""}
                </bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4">
              <p className="text-sm lg:text-base text-black">تاریخ تولد</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>
                  {pet?.length
                    ? moment(pet[0].birth_date)
                        .locale("fa")
                        .format("YYYY  MMM  DD")
                    : ""}
                </bdi>
              </p>
            </div>
          </div>
        </div>

        <div className="self-end">
          <div className="w-[130px] h-[130px] relative overflow-hidden rounded-[10px]">
            <Image
              width={100}
              height={100}
              src={
                pet?.length ? `https://api.petemoon.com${pet[0].photo}` : PetPic
              }
              alt="PetPic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
