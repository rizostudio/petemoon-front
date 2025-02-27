import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

//formik
import { useFormik } from "formik";
//moment
import moment from "jalali-moment";
import * as Yup from "yup";
//component
import FloatLabelInput from "@/components/partials/input";
import { toast } from "react-toastify";
//media
import Profile_Alt_Pic from "../../../assets/dashboard/profile-pic-alt.svg";
import Cake_Icon from "../../../assets/dashboard/cake.svg";
import PenEdit_Icon from "../../../assets/common/PenEditIcon.svg";
import { getuserInfo } from "@/services/dashboard/userInfo/getUserInfo";
import { editUserData } from "@/services/dashboard/userInfo/patchUserInfo";
import { userDataStorage } from "@/localSttorage/auth";
export default function UserInfo() {
  const [userData, setUserData] = useState({});
  // const [editable, setEditble] = useState(false);
  const dataFetchedRef = useRef(false);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const response = await getuserInfo();
      console.log(response.data);
      setUserData(response.data);
      if (!response.success) {
        router.push("/auth/login");
      }
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  const UserInfoSchema = Yup.object().shape({
    first_name: Yup.string().required("فیلد الزامی است"),
    last_name: Yup.string().required("فیلد الزامی است"),
    email: Yup.string()
      .required("فیلد الزامی است")
      .matches(/.+@.+\.[A-Za-z]+$/, "فرمت ایمیل درست نیست"),
    phone_number: Yup.string().required("فیلد الزامی است"),
    birth_date: Yup.string().required("فیلد الزامی است"),
  });

  const { handleChange, values, setFieldValue, handleSubmit, errors } =
    useFormik({
      enableReinitialize: true,
      initialValues: userData,
      onSubmit: (value) => {
        handleCreateSubmit(value);
        console.log(value);
      },
      validationSchema: UserInfoSchema,
      validateOnMount: false,
      validateOnChange: false,
      validateOnBlur: false,
    });
  const birthDate = (e) => {
    console.log(e);
    const datePickerOutput = moment(e.toString()).format("YYYY-MM-DD");
    setFieldValue("birth_date", datePickerOutput);
  };
  const handleCreateSubmit = async (values) => {
    const response = await editUserData(values);
    if (response.success) {
      toast.success("با موفقیت ذخیره شد", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      userDataStorage.set(JSON.stringify(response.data));
    }
    console.log(response);
  };
  return (
    <div className="flex flex-col justify-between items-stretch">
      <div className="w-full lg:hidden mb-10 mt-2 lg:order-2 flex flex-row justify-start items-center self-end">
        {/* <Image
          src={Profile_Alt_Pic}
          alt="Profile-Pic-Alt"
          height={75}
          width={75}
        /> */}
        <div className="mr-5 flex flex-col">
          <p className="text-black text-right font-black lg:text-white">
            {values.first_name}
          </p>
          <p className="text-gray-400 text-right">{values.phone_number}</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center lg:my-8 lg:p-0">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full lg:h-[420px] flex flex-col lg:flex-row items:center justify-evenly"
        >
          <div className="w-full h-full relative lg:w-3/4 flex flex-col items-stretch lg:p-5 lg:ml-6 lg:px-12 lg:py-8 lg:bg-white rounded-[25px] lg:shadow-shadowA">
            <div className="lg:flex flex-row-reverse justify-between items-center w-full">
              <div className="text-right lg:w-1/2 my-2 lg:m-1 ">
                <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  نام خانوادگی
                </label>
                <FloatLabelInput
                  type={"text"}
                  placeholder={"نام خانوادگی"}
                  name="last_name"
                  onChange={handleChange}
                  value={values.last_name}
                  h={"h-12"}
                  py={"3"}
                  dir={"rtl"}
                  // disabled={!editable}
                />
                {errors.last_name ? (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>{errors.last_name}</bdi>
                  </p>
                ) : null}
              </div>
              <div className="text-right lg:w-1/2 my-4 lg:m-1">
                <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  نام
                </label>
                <FloatLabelInput
                  type={"text"}
                  placeholder={"نام"}
                  name="first_name"
                  onChange={handleChange}
                  value={values.first_name}
                  h={"h-12"}
                  py={"3"}
                  dir={"rtl"}
                  // disabled={!editable}
                />
                {errors.first_name ? (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>{errors.first_name}</bdi>
                  </p>
                ) : null}
              </div>
            </div>
            <div className="lg:flex flex-row-reverse justify-between items-center w-full lg:mt-5">
              <div className="text-right lg:w-1/2 my-2 lg:m-1">
                <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  شماره تماس
                </label>
                <FloatLabelInput
                  type={"text"}
                  placeholder={"شماره تماس"}
                  name="phone_number"
                  onChange={handleChange}
                  value={values.phone_number}
                  h={"h-12"}
                  py={"3"}
                  dir={"rtl"}
                  disabled={true}
                />
                {errors.phone_number && (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>{errors.phone_number}</bdi>
                  </p>
                )}
              </div>
              <div className="text-right lg:w-1/2 my-4 lg:m-1 lg:">
                <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  ایمیل
                </label>
                <FloatLabelInput
                  type={"email"}
                  placeholder={"ایمیل"}
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  h={"h-12"}
                  py={"3"}
                  dir={"rtl"}
                  // disabled={!editable}
                />
                {errors.email && (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>{errors.email}</bdi>
                  </p>
                )}
              </div>
            </div>
            <div className="lg:flex flex-row-reverse justify-end items-center  w-full lg:my-5">
              <div className="text-right lg:pl-4 lg:w-1/2 my-4 lg:m-1 lg:">
                <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  تاریخ تولد
                </label>
                <FloatLabelInput
                  type={"date"}
                  placeholder={"تاریخ تولد"}
                  name="birth_date"
                  onChange={birthDate}
                  value={values.birth_date}
                  h={"h-12"}
                  py={"3"}
                  dir={"rtl"}
                  // disabled={!editable}
                />
                {errors.birth_date && (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>{errors.birth_date}</bdi>
                  </p>
                )}
              </div>
              <div
                className={
                  "flex flex-row-reverse absolute bottom-7 left-9 hidden lg:block ml-5"
                }
              >
                <div
                  className={clsx("cursor-pointer w-fit", {
                    // hidden: !editable,
                  })}
                >
                  <button
                    type="submit"
                    className=" w-[200px] hover:bg-green-600 hover:text-white transition ease-in-out mt-10 py-3 bg-[#CFEBD8] text-black text-center font-medium border-[1px] solid border-verify rounded-[5px] ms-10 "
                  >
                    ذخیره
                  </button>
                </div>
                {/* <div
                className={clsx("cursor-pointer w-fit", {
                  hidden: editable,
                })}
              >
                <div onClick={(e) => setEditble((prev) => !prev)}>
                  <Image src={PenEdit_Icon} alt="PenEditIcon" />
                </div>
              </div> */}
              </div>
            </div>
          </div>

          {/* for show and edit user's birthday */}
          <div className="w-full h-full lg:w-1/4 relative mt-6 lg:mt-0 px-4 py-6 lg:px-3 lg:py-5 flex lg:flex-col justify-between lg:justify-center items-center bg-[#FFE2DE] lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowA">
            <Image src={Cake_Icon} alt="CakeIcon" className="w-20 lg:w-36" />
            <div className="flex flex-col justify-between items:end lg:items-center text-right lg:text-center">
              <p className="text-2xl lg:text-xl text-black font-bold leading-6 mb-3 lg:mb-1">
                متولد
              </p>
              <p className="text-xl lg:text-lg text-gray-400 font-medium tracking-widest leading-6">
                <bdi>
                  {values.birth_date &&
                    moment(values.birth_date).locale("fa").format("YYYY-MM-DD")}
                </bdi>
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="lg:hidden w-full mt-10 py-3 bg-[#CFEBD8] text-black text-center hover:bg-border-verify font-medium border-[1px] solid border-verify rounded-[12px]"
          >
            ذخیره
          </button>
        </form>
      </div>
    </div>
  );
}
