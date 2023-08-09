import React, { useState } from "react";
import Image from "next/image";
//component
import DeleteModal from "./DeleteModal";
//media
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";
import More_Icon from "../../../assets/common/more.svg";
import MapPreserve_Pic from "../../../assets/dashboard/mapPicPreserve.svg";
import Link from "next/link";
import AddressMap from "./AddressMap";

export default function AddressItem({ data, setDeleteHandler }) {
  const [showeModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col justify-between items-stretch my-2 lg:my-3 px-5 lg:px-12 py-2 lg:py-8 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-none lg:shadow-shadowB">
      <div className="flex flex-row items-center justify-end lg:justify-between">
        <p className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
          <bdi>{data.receiver}</bdi>
        </p>
        <div className="flex flex-row items-center">
          <Link href={`/dashboard/addresses/edit/${data.id}`}>
            <div className="hidden cursor-pointer lg:block p-2 border-[1px] solid border-[#4DA4F4] rounded-[12px]">
              <Image src={Edit2_Icon} alt="EditIcon" width={15} height={15} />
            </div>
          </Link>
          <label
            onClick={() => setShowModal(true)}
            htmlFor="Trash-modal"
            className="hidden lg:block p-2 border-[1px] solid border-error rounded-[12px] cursor-pointer mr-2 "
          >
            <Image src={TrashRed_Icon} alt="TrashIcon" width={15} height={15} />
          </label>
          <label htmlFor="More-modal">
            <Image src={More_Icon} alt="MoreIcon" className="lg:hidden" />
          </label>
        </div>
      </div>
      <div className="flex lg:flex-row justify-between flex-col items-stretch mt-2 lg:mt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:my-2">
              <p className="hidden lg:block text-base text-black">استان</p>
              <p className="hidden lg:block text-sm text-gray-400 mr-3 font-medium">
                <bdi>{data.province}</bdi>
              </p>
              <p className="lg:hidden text-sm text-black">
                <bdi>استان/شهر</bdi>
              </p>
              <p className="lg:hidden text-xs text-gray-400 mr-2 font-medium">
                <bdi>{data.province + "/" + data.city}</bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2">
              <p className="text-sm lg:text-base text-black">کد پستی</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{data.postal_code}</bdi>
              </p>
            </div>
            <div className="flex flex-row hidden lg:flex items-center text-right font-semibold lg:font-bold opacity-90 leading-8 ml-auto my-2">
              <p className="text-sm lg:text-base text-black">آدرس پستی</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{data.postal_address}</bdi>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mr-10">
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 lg:my-2">
              <p className="hidden lg:block text-sm lg:text-base text-black">
                شهر
              </p>
              <p className="hidden lg:block text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{data.city}</bdi>
              </p>
            </div>
            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2">
              <p className="text-sm lg:text-base text-black"> عنوان آدرس</p>
              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{data.receiver}</bdi>
              </p>
            </div>
            <div className="flex flex-row  lg:hidden items-center text-right font-semibold lg:font-bold opacity-90 leading-8 ml-auto my-2">
              <p className="text-md lg:text-base text-black">آدرس پستی</p>
              <p className="text-sm lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                <bdi>{data.postal_address}</bdi>
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* {item.lat ? <div></div> : <div></div>} */}
          <div className="w-[150px] h-[150px] relative border-[1px] solid border-secondary m-auto rounded-[10px] mt-3">
            {/* <Image
              src={data.mapLocation ? data.mapLocation : MapPreserve_Pic}
              alt="MapPic"
              className="w-full h-full"
            /> */}
            <AddressMap />
            {/* {!data.mapLocation && (
              <p className="text-sm text-error text-center font-medium leading-4 absolute top-[40%] left-[15%]">
                ثبت روی نقشه
              </p>
            )} */}
          </div>
        </div>
      </div>

      {/* Modals */}
      <DeleteModal
        setDeleteHandler={setDeleteHandler}
        showeModal={showeModal}
        setShowModal={setShowModal}
        id={data.id}
      />
    </div>
  );
}
