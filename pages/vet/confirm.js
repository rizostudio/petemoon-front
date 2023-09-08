import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "jalali-moment";
//component
import MainLayout from "@/layout/main";
import FloatLabelInput from "@/components/partials/input";

//media
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import PetPic from "../../assets/dashboard/PetPic.svg";
import PetPicPreserve from "../../assets/dashboard/PetPicPreserve.svg";
import Upload_Icon from "../../assets/common/uploadIcon.svg";
import { getListPet } from "@/services/dashboard/pets/getList";
import PetAdd_Icon from "../../assets/dashboard/AddPet.svg";
import PetAdd_IconWhite from "../../assets/dashboard/PetAddWhite.svg";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import { reserv } from "@/services/Doctor/reserv";
const Confirm = () => {
  //fake data
  // const data = [
  //   {
  //     title: "عمومی",
  //     name: "پیترمن",
  //     kind: "سگ خانگی",
  //     sex: "ماده",
  //     race: "بولداگ",
  //     birth: "۱۵ آگوست ۱۹۹۹",
  //     pic: PetPic,
  //   },
  //   {
  //     title: "عمومی",
  //     name: "تی تی",
  //     kind: "سگ خانگی",
  //     sex: "ماده",
  //     race: "بولداگ",
  //     birth: "۱۵ آگوست ۱۹۹۹",
  //     pic: PetPic,
  //   },
  // ];
  const { state, dispatch } = BasketContext();
  const [data, setData] = useState([]);
  // for dynamic Page
  const [selectPage, setSelectPage] = useState(true);
  const [medicalPage, setMedicalPage] = useState(false);

  // functions for confirm
  const confirmHandler = () => {
    setSelectPage(false);
    setMedicalPage(true);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await getListPet();
      setData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  const finishHandler = () => {
    // هدایت به صفحه پرداخت .
    alert("Done!");
  };
  const [inputError, setInputError] = useState(false);
  const PetSchema = Yup.object().shape({
    explanation: Yup.string().required("فیلد الزامی است"),
    reason: Yup.string().required("فیلد الزامی است"),
  });
  const { handleChange, values, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        explanation: "",
        reason: "",
      },
      onSubmit: async (value) => {
        dispatch({
          type: "ADD_VET_REASON",
          payload: {
            explanation: value.explanation,
            reason: value.reason,
          },
        });
        const response = await reserv(state.vet);
        if (response.data) {
          window.location.href = response?.data.url;
          dispatch({
            type: "CLEAR_VET",
          });
        }
      },
      validationSchema: PetSchema,
    });
  const HandleChangeExp = (e) => {
    setFieldValue("explanation", e.target.value);
  };
  const HandleChangeReason = (e) => {
    setFieldValue("reason", e.target.value);
  };
  return (
    <MainLayout>
      {/* pet select Page */}
      <div
        className={clsx(
          "flex-col justify-between lg:justify-center items-stretch w-full h-screen lg:h-full lg:px-[120px] lg:py-5 bg-[#f8f8f8]",
          {
            flex: selectPage,
            hidden: selectPage == false,
          }
        )}
      >
        {/* Main Box */}
        <div>
          {/*Heading*/}
          <div className="flex flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10">
            <h5 className="text-base lg:text-2xl text-black font-black leading-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
              <bdi>انتخاب پت من</bdi>
            </h5>
            <Link
              href={`/vet/${1}`}
              className="lg:hidden p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </Link>
          </div>
          {/* pets details */}
          <div className="flex flex-col items-stretch px-10 py-5 lg:px-0 lg:py-10">
            {data.length ? (
              data.map((item, index) => (
                <div key={index}>
                  <div className="bg-white px-4 py-5 lg:p-10 mx-3 my-4 lg:mx-10 lg:my-8 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
                    <div className="flex flex-col justify-between items-stretch">
                      <div className="flex items-center">
                        <input
                          id={`pet#${index}`}
                          type="checkbox"
                          checked={item.id === state.vet.pet ? true : false}
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch({
                                type: "ADD_VET_PET",
                                payload: {
                                  pet: item.id,
                                },
                              });
                            } else {
                              dispatch({
                                type: "ADD_VET_PET",
                                payload: {
                                  pet: "",
                                },
                              });
                            }
                          }}
                          className="h-4 w-4 lg:h-8 lg:w-8 text-primary border-primary focus:ring-transparent rounded-[4px]"
                        />
                        <label
                          htmlFor={`pet#${index}`}
                          className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-4"
                        >
                          <bdi>{item.name}</bdi>
                        </label>
                      </div>
                      {/* general detail */}
                      <div className="flex flex-row justify-between items-stretch mt-2 lg:mt-8">
                        <div className=" flex flex-col lg:flex-row justify-between items-stretch">
                          <div className="flex flex-col">
                            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2">
                              <p className="text-base text-black">نوع</p>
                              <p className="text-sm text-gray-400 mr-3 font-medium">
                                <bdi>{item.pet_type.pet_type}</bdi>
                              </p>
                            </div>
                            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4">
                              <p className="text-sm lg:text-base text-black">
                                جنسیت
                              </p>
                              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                                <bdi>{item.sex === "M" ? "نر" : "ماده"}</bdi>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col lg:mr-10">
                            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2">
                              <p className="text-sm lg:text-base text-black">
                                نژاد
                              </p>
                              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                                <bdi>{item.pet_category.pet_category}</bdi>
                              </p>
                            </div>
                            <div className="flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4">
                              <p className="text-sm lg:text-base text-black">
                                تاریخ تولد
                              </p>
                              <p className="text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium">
                                <bdi>
                                  {" "}
                                  {moment(item.birth_date)
                                    .locale("fa")
                                    .format("YYYY/MM/DD")}
                                </bdi>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* pet's picture */}
                        <div className="self-end">
                          <div className="w-[100px] h-[100px] relative overflow-hidden rounded-[10px]">
                            <Image
                              alt="PetPic"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover"
                              src={
                                item.photo
                                  ? `https://api.petemoon.com${item.photo}`
                                  : "/assets/dashboard/defaultpet.jpg"
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Link
                href="/dashboard/my-pets/createNewPet"
                className="w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB"
              >
                <Image
                  src={PetAdd_IconWhite}
                  alt="PetAddIcon"
                  className="mr-2 lg:mr-0 lg:hidden"
                />
                <Image
                  src={PetAdd_Icon}
                  alt="PetAddIcon"
                  className="hidden lg:block"
                />
                <p className="text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5">
                  ثبت پت جدید
                </p>
              </Link>
            )}
          </div>
        </div>
        {/* Confirm Box */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center lg:self-end w-full lg:w-1/2 px-10 py-5 lg:px-7 lg:py-9 lg:bg-[#ea63521a] lg:rounded-[15px] border-t-[2px] border-secondary">
          <div className="hidden lg:flex flex-col ml-8">
            <p className="text-base text-gray-400 font-medium leading-7 opacity-90">
              <bdi>مرحله بعد:</bdi>
            </p>
            <p className="text-xl text-primary font-semibold leading-8">
              <bdi>پرونده پزشکی</bdi>
            </p>
          </div>
          <button
            onClick={confirmHandler}
            className="text-base text-white font-medium leading-8 py-3 px-5 w-full bg-primary rounded-[12px] lg:rounded-[15px]"
          >
            <bdi>ادامه</bdi>
          </button>
        </div>
      </div>
      {/* pet medical details Page */}
      <div
        className={clsx(
          "flex-col justify-between lg:justify-center items-stretch w-full h-screen lg:h-full lg:px-[120px] lg:py-5 bg-[#f8f8f8]",
          {
            flex: medicalPage,
            hidden: medicalPage == false,
          }
        )}
      >
        {/* Main Box */}
        <div>
          {/*Heading*/}
          <div className="flex flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10">
            <h5 className="text-base lg:text-2xl text-black font-black leading-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
              <bdi>پرونده پزشکی</bdi>
            </h5>
            <button
              onClick={() => {
                setSelectPage(true);
                setMedicalPage(false);
              }}
              className="lg:hidden p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </button>
          </div>
          {/* medical details*/}
          <div className="flex flex-col items-stretch px-10 py-5 lg:px-0 lg:py-10">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-col lg:flex-row justify-start lg:px-[54px] lg:py-9 lg:bg-white lg:rounded-[25px]"
            >
              <div className="flex flex-col items-stretch lg:items-start w-full lg:w-2/3">
                <div className="text-right w-full my-4 lg:m-1">
                  <label className="text-lg text-right text-black font-bold leading-8 opacity-90 mb-8 before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    شرح حال
                  </label>
                  <FloatLabelInput
                    type={"text"}
                    placeholder={"شرح حال"}
                    name="explanation"
                    onChange={HandleChangeExp}
                    value={values.explanation}
                    h={"h-30"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>{errors.explanation}</bdi>
                    </p>
                  )}
                </div>
                <div className="text-right w-full my-2 lg:m-1">
                  <label className="text-lg text-right text-black font-bold leading-8 opacity-90 mb-8 before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    علت مراجعه
                  </label>
                  <FloatLabelInput
                    type={"text"}
                    placeholder={"علت مراجعه"}
                    name={"reason"}
                    onChange={HandleChangeReason}
                    value={values.reason}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  {inputError ? (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>{errors.reason}</bdi>
                    </p>
                  ) : null}
                </div>
              </div>
              <div className=" lg:w-1/3 lg:mr-[80px]">
                <div className="text-right my-2 lg:m-1 w-full">
                  <label className="text-base lg:text-lg text-right text-black font-medium lg:font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    تصویر محل ضایعه
                  </label>
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-between lg:justify-end items-stretch w-full">
                  <div>
                    <div className="w-full h-[175px] relative my-4 lg:my-1 p-4 bg-secondary rounded-[15px] lg:rounded-[25px] overflow-hidden">
                      <Image
                        src={PetPicPreserve}
                        alt="PetPic"
                        className="w-full h-full object-contain"
                      />
                      <Image
                        src={Upload_Icon}
                        alt="UploadIcon"
                        className="absolute bottom-4 right-4"
                      />
                    </div>
                    <p className="text-sm text-info text-right font-medium leading-4">
                      <bdi>حداکثر سایز تصویر ۲ مگابایت</bdi>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Confirm Box  */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center lg:self-end w-full lg:w-1/2 px-10 py-5 lg:px-7 lg:py-9 lg:bg-[#ea63521a] lg:rounded-[15px] border-t-[2px] border-secondary">
          <div className="hidden lg:flex flex-col ml-8">
            <p className="text-base text-primary font-medium leading-7 opacity-90">
              <bdi>پایان</bdi>
            </p>
            <p className="text-xl text-primary font-semibold leading-8">
              <bdi>تایید رزرو</bdi>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="text-base text-white font-medium leading-8 py-3 px-5 w-full bg-primary rounded-[12px] lg:rounded-[15px] w-[80%]"
          >
            <bdi>تایید</bdi>
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Confirm;
