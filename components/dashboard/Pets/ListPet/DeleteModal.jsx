import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//media
import TrashRed_Icon from "../../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../../assets/common/EditIcon2.svg";
import CloseButton_Icon from "../../../../assets/common/close-button.svg";
//toast
import { toast } from "react-toastify";
//ModalPortal
import Modal from "@/components/partials/modal/Modal";
import { deletePet } from "@/services/dashboard/pets/delete";
export default function DeleteModal({
  showeModal,
  setShowModal,
  id,
  setDeleteHandler,
}) {
  const handleDeleteItem = async () => {
    const response = await deletePet(id);
    console.log(response.data);
    if (response.success) {
      setDeleteHandler((prev) => !prev);
      setShowModal(false);
      toast.success("آدرس با موفقیت حذف شد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      {/* for more-modal  */}
      <input type="checkbox" id="More-modal" className="modal-toggle" />
      <label htmlFor="More-modal" className="modal cursor-pointer">
        <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 mx-auto p-0 bg-white rounded-none">
          <div className="w-full flex flex-col justify-between items-end">
            <label
              htmlFor="Trash-modal"
              className="w-full flex flex-row items-center px-10 py-4 border-b-[1px] border-gray-400 solid"
            >
              <Image
                src={TrashRed_Icon}
                alt="TrashIcon"
                width={15}
                height={15}
              />
              <p className="text-base text-black font-medium leading-8 mr-2">
                حذف پت
              </p>
            </label>
            <label
              htmlFor="More-modal"
              className="w-full flex flex-row items-center px-9 py-3"
            >
              <Link href="/dashboard/my-pets/edit" className="flex flex-row">
                <Image src={Edit2_Icon} alt="EditIcon" width={15} height={15} />
                <p className="text-base text-black font-medium leading-8 mr-2">
                  ویرایش پت
                </p>
              </Link>
            </label>
          </div>
        </label>
      </label>
      {/* for trash-modal  */}
      <Modal show={showeModal}>
        <input type="checkbox" id="Trash-modal" className="modal-toggle" />
        <label htmlFor="Trash-modal" className="modal cursor-pointer">
          <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
            <div className="w-full flex flex-col justify-between items-stretch">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-lg text-black font-medium lg:font-bold leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  حذف پت
                </p>
                <label onClick={() => setShowModal(false)}>
                  <Image src={CloseButton_Icon} alt="CloseIcon" />
                </label>
              </div>
              <p className="text-base lg:text-xl text-gray-400 text-right font-medium leading-8 my-2 lg:my-5">
                آیا از حذف این پت از لیست پت ها اطمینان دارید؟
              </p>
              <div className="flex flex-row items-center justify-between w-full lg:w-1/2">
                <label
                  onClick={handleDeleteItem}
                  className="w-full text-sm text-white text-center font-semibold py-3 lg:py-2 lg:px-8 rounded-[5px] bg-error ml-2 border-[2px] solid border-error"
                >
                  حذف پت
                </label>
                <label
                  onClick={() => setShowModal(false)}
                  className="w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error"
                >
                  انصراف
                </label>
              </div>
            </div>
          </label>
        </label>
      </Modal>
    </div>
  );
}
