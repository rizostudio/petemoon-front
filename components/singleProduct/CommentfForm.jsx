import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
//components
import Modal from "../partials/modal/Modal";
import FloatLabelInput from "../partials/input";
//media
import CloseButton_Icon from "../../assets/common/close-button.svg";
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
export default function CommentfForm({
  setMainPageOpen,
  setCommentPageOpen,
  commentPageOpen,
  data,
  title,
  description,
  rate,
  formSubmit,
  change,
  errors,
}) {
  return (
    <>
      {/* modal */}
      <Modal show={commentPageOpen}>
        <div className="hidden lg:block">
          <input
            type="checkbox"
            id="comment-send-modal"
            className="modal-toggle"
          />
          <label className="modal cursor-pointer">
            <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-xl text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2 before:rounded-[2px]">
                  دیدگاه شما
                </p>
                <label
                  onClick={() => {
                    setCommentPageOpen(false);
                    setMainPageOpen(true);
                  }}
                >
                  <Image
                    className="cursor-pointer"
                    src={CloseButton_Icon}
                    alt="CloseIcon"
                  />
                </label>
              </div>
              <div
                id="form"
                onSubmit={(event) => event.preventDefault()}
                className="flex flex-col items-stretch"
              >
                <p className="text-lg text-black font-medium leading-8 mt-2">
                  <bdi>
                    نظر خود را درباره
                    <span className="text-primary"> {data.name} </span> برای ما
                    بفرستید:
                  </bdi>
                </p>
                <div className="flex justify-between">
                  <label
                    htmlFor="range-score"
                    className="text-lg text-black font-medium leading-8 mt-6"
                  >
                    امتیاز دهید
                  </label>
                  <label
                    htmlFor="range-score"
                    className="text-lg text-black font-medium leading-8 mt-6"
                  >
                    {rate} از ۵
                  </label>
                </div>
                <input
                  onChange={change}
                  value={rate}
                  name="rate"
                  max={5}
                  id="range-score"
                  type="range"
                  className="mt-2"
                />
                <label
                  htmlFor="comment-subject"
                  className="text-lg text-black font-medium leading-8 mt-10"
                >
                  عنوان نظر
                </label>
                <input
                  id="comment-subject"
                  name="title"
                  onChange={change}
                  value={title}
                  type="text"
                  className="block text-sm md:text-xl px-3 h-full ${py} w-[75%] text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer"
                />
                <bdi>
                  <span className="text-primary"> {errors.title} </span>
                </bdi>
                <label
                  htmlFor="comment-text"
                  className="text-lg text-black font-medium leading-8 mt-5"
                >
                  متن نظر
                </label>
                <textarea
                  form="comment-form"
                  id="comment-text"
                  name="description"
                  onChange={change}
                  value={description}
                  className="block text-sm md:text-xl px-3 h-full ${py} w-full text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer"
                ></textarea>
                <bdi>
                  <span className="text-primary">{errors.description} </span>
                </bdi>
                <div className="self-end flex flex-row items-center justify-between w-full lg:w-2/5 mt-6">
                  <label
                    onClick={() => {
                      setCommentPageOpen(false);
                      setMainPageOpen(true);
                    }}
                    // htmlFor="comment-send-modal"
                    className="w-full text-sm hover:bg-primary hover:text-white cursor-pointer text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-primary"
                  >
                    انصراف
                  </label>
                  <label
                    onClick={() => {
                      formSubmit();
                      setCommentPageOpen(false);
                      setMainPageOpen(true);

                      // setShowModal(false);
                    }}
                    // htmlFor="comment-send-modal"
                    className="w-full text-sm cursor-pointer text-white text-center hover:bg-[#0a0af5] font-semibold py-3 lg:py-2 rounded-[5px] bg-[#4DA4F4]  mr-2"
                  >
                    ثبت دیدگاه
                  </label>
                </div>
              </div>
            </label>
          </label>
        </div>
      </Modal>
      <div
        className={clsx("lg:hidden flex-col items-stretch p-10 w-full h-full", {
          flex: commentPageOpen == true,
          hidden: commentPageOpen == false,
        })}
      >
        <div className="h-[40px] w-full flex justify-between items-center">
          <div
            className="flex items-center"
            onClick={() => setFBoxMobileOpen(!fBoxMobileOpen)}
          >
            <p className="text-xl text-black font-medium leading-7 before:inline-block before:w-2 before:h-5 before:bg-primary before:rounded-[2px] before:ml-2">
              دیدگاه شما
            </p>
          </div>
          <div
            onClick={() => {
              setCommentPageOpen(false);
              setMainPageOpen(true);
            }}
            className="px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
          >
            <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
          </div>
        </div>
        <form
          // onSubmit={formSubmit()}
          id="form"
          // onSubmit={(event) => event.preventDefault()}
          className="flex flex-col justify-between items-stretch"
        >
          <div className="flex flex-col items-stretch">
            <p className="text-lg text-black font-medium leading-8 mt-2">
              <bdi>
                نظر خود را درباره
                <span className="text-primary">{data.name}</span> برای ما
                بفرستید:
              </bdi>
            </p>
            <label
              htmlFor="range-score"
              className="text-lg text-black font-medium leading-8 mt-10"
            >
              امتیاز دهید
            </label>
            <input
              onChange={change}
              value={rate}
              name="rate"
              max={5}
              id="range-score"
              type="range"
              className="mt-2 mb-10"
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"عنوان نظر"}
              name="title"
              onChange={change}
              value={title}
              h={"h-12"}
              py={"3"}
              dir={"rtl"}
            />
            <div className="mt-4">
              <FloatLabelInput
                type={"text"}
                placeholder={"متن نظر"}
                name="description"
                h={"h-12"}
                py={"3"}
                dir={"rtl"}
                onChange={change}
                value={description}
              />
            </div>
          </div>
          <div className="self-end flex flex-row items-center justify-between w-full mt-12">
            <button
              onClick={() => {
                setCommentPageOpen(false);
                setMainPageOpen(true);
              }}
              className="w-2/5 text-sm text-error text-center font-semibold py-2 rounded-[5px] bg-white border-[2px] solid border-error"
            >
              انصراف
            </button>
            <button
              onClick={() => {
                formSubmit();
              }}
              // type="submit"
              className="w-3/5 text-sm text-white text-center font-semibold py-2 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] mr-2"
            >
              ثبت دیدگاه
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
