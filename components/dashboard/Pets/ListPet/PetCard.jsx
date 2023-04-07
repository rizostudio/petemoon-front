import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";
//media
import PetPicPreserve from "../../../../assets/dashboard/PetPicPreserve.svg";
import TrashRed_Icon from "../../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../../assets/common/EditIcon2.svg";
import More_Icon from "../../../../assets/common/more.svg";
import CloseButton_Icon from "../../../../assets/common/close-button.svg";
//component
import MedicalInfo from "./MedicalInfo";
import GeneralInfo from "./GeneralInfo";
import DeleteModal from "./DeleteModal";
export default function PetCard({ item, setDeleteHandler }) {
  const [tabHandlear, setTabHandlear] = useState("general");
  const [showeModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col bg-[#E7E7E8] rounded-[20px] lg:rounded-[25px] w-full my-2 lg:my-6">
      {/* toggle between general and medical detail */}
      <div className="tabs self-center flex flex-row justify-center lg:justify-start w-full lg:self-end my-3 lg:px-8 lg:my-8 border-b-[1px] solid border-white">
        <a
          className={clsx(
            "tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",
            {
              "tab-active": tabHandlear === "general",
            }
          )}
          onClick={() => setTabHandlear("general")}
        >
          عمومی
        </a>
        <a
          className={clsx(
            "tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",
            {
              "tab-active": tabHandlear === "medical",
            }
          )}
          onClick={() => setTabHandlear("medical")}
        >
          پزشکی
        </a>
      </div>
      <div className="bg-white px-4 py-5 lg:p-10 mx-3 my-4 lg:mx-10 lg:my-8 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
        <div className="flex flex-col justify-between items-stretch">
          {/* heading box */}
          <div className="flex flex-row items-center justify-end lg:justify-between">
            <p className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              <bdi>{item.name}</bdi>
            </p>
            <div className="flex flex-row items-center">
              <Link
                href={`/dashboard/my-pets/edit/${item.id}`}
                className="hidden lg:block p-2 border-[1px] solid border-[#4DA4F4] rounded-[12px]"
              >
                <Image src={Edit2_Icon} alt="EditIcon" width={15} height={15} />
              </Link>
              <label
                htmlFor="Trash-modal"
                onClick={() => setShowModal(true)}
                className="hidden lg:block p-2 border-[1px] solid border-error rounded-[12px] cursor-pointer mr-2 "
              >
                <Image
                  src={TrashRed_Icon}
                  alt="TrashIcon"
                  width={15}
                  height={15}
                />
              </label>
              <label htmlFor="More-modal">
                <Image src={More_Icon} alt="MoreIcon" className="lg:hidden" />
              </label>
            </div>
          </div>

          <div className="flex flex-row justify-between items-stretch mt-2 lg:mt-8">
            {/* general detail */}
            <GeneralInfo tabHandlear={tabHandlear} item={item} />
            {/* medical detail */}
            <MedicalInfo tabHandlear={tabHandlear} item={item} />
            {/* pet's picture */}
            <div className="self-end">
              <div className="w-[100px] h-[100px] relative overflow-hidden rounded-[10px]">
                <Image
                  src={
                    item.photo
                      ? `https://petemoon.com${item.photo}`
                      : PetPicPreserve
                  }
                  alt="PetPic"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Modals */}
          <DeleteModal
            setDeleteHandler={setDeleteHandler}
            showeModal={showeModal}
            setShowModal={setShowModal}
            id={item.id}
          />
        </div>
      </div>
    </div>
  );
}
