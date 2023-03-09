import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//media
import MapPreserve_Pic from "../../../assets/dashboard/mapPicPreserve.svg";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//http
import { httpRequest } from "@/services/http";
//component
import FloatLabelInput from "@/components/partials/input";
import { getSingleAddress } from "@/services/dashboard/address/getSingle";
import { editAddress } from "@/services/dashboard/address/edit";

export default function EditAddressForm({ id }) {
  console.log(id);
  const [initialData, setInitialData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await getSingleAddress(id);
      setInitialData(response.data);
    };
    getData();
  }, [id]);
  const router = useRouter();
  const AddressSchema = Yup.object().shape({
    province: Yup.string().required("فیلد الزامی است"),
    city: Yup.string().required("فیلد الزامی است"),
    postal_code: Yup.string()
      .min(10, "کد پستی ۱۰ رقمی است")
      .max(10, "کد پستی ۱۰ رقمی است")
      .required("فیلد الزامی است"),
    postal_address: Yup.string().required("فیلد الزامی است"),
    receiver: Yup.string().required("فیلد الزامی است"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      province: initialData?.province,
      city: initialData?.city,
      postal_code: initialData?.postal_code,
      postal_address: initialData?.postal_address,
      receiver: initialData?.receiver,
      lat: initialData?.lat,
      lon: initialData?.lon,
    },
    onSubmit: async (values) => {
      console.log(values);
      handleEditSubmit(values);
    },
    validationSchema: AddressSchema,
  });
  const handleEditSubmit = async (values) => {
    const response = await editAddress(values, id);
    if (response.success) {
      router.push("/dashboard/addresses");
    }
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col lg:flex-row justify-start lg:justify-between"
    >
      <div className="flex flex-col items-stretch w-full lg:w-2/3">
        <div className="lg:flex flex-row justify-between items-center w-full">
          <div className="text-right lg:w-1/2 my-4 lg:m-1">
            <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              استان
            </label>
            <FloatLabelInput
              type={"text"}
              placeholder={"استان"}
              name="province"
              onChange={formik.handleChange}
              value={formik.values.province}
              list="provinces"
              h={"h-12"}
              py={"3"}
              dir={"rtl"}
            />
            <datalist
              id="provinces"
              className="border-[1px] solid border-gray-500 rounded-[12px] lg:rounded-[5px]"
            >
              <option>تهران</option>
              <option>فارس</option>
              <option>سیستان و بلوچستان</option>
              <option>کهکلویه و بویراحمد</option>
              <option>قم</option>
              <option>مازندران</option>
              <option>گلستان</option>
            </datalist>
            {formik.errors.province && (
              <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                <bdi>{formik.errors.province}</bdi>
              </p>
            )}
          </div>
          <div className="text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4">
            <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              شهر
            </label>
            <FloatLabelInput
              type={"text"}
              placeholder={"شهر"}
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              list="cities"
              h={"h-12"}
              py={"3"}
              dir={"rtl"}
            />
            <datalist
              id="cities"
              className="border-[1px] solid border-gray-500 rounded-[12px] lg:rounded-[5px]"
            >
              <option>تهران</option>
              <option>شیراز</option>
              <option>اهواز</option>
              <option>سمنان</option>
              <option>قم</option>
            </datalist>
            {formik.errors.city && (
              <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                <bdi>{formik.errors.city}</bdi>
              </p>
            )}
          </div>
        </div>
        <div className="lg:flex flex-row justify-between items-center w-full lg:my-5">
          <div className="text-right lg:w-1/2 my-2 lg:m-1">
            <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              کد پستی
            </label>
            <FloatLabelInput
              type={"text"}
              placeholder={"کد پستی"}
              name="postal_code"
              onChange={formik.handleChange}
              value={formik.values.postal_code}
              h={"h-12"}
              py={"3"}
              dir={"rtl"}
            />
            {formik.errors.postal_code && (
              <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                <bdi>{formik.errors.postal_code}</bdi>
              </p>
            )}
          </div>
          <div className="text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4">
            <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
              تحویل گیرنده
            </label>
            <FloatLabelInput
              type={"text"}
              placeholder={"نام تحویل گیرنده"}
              name="receiver"
              onChange={formik.handleChange}
              value={formik.values.receiver}
              h={"h-12"}
              py={"3"}
              dir={"rtl"}
            />
            {formik.errors.receiver && (
              <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                <bdi>{formik.errors.receiver}</bdi>
              </p>
            )}
          </div>
        </div>
        <div className="text-right my-4 lg:m-1">
          <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
            آدرس پستی
          </label>
          <FloatLabelInput
            type={"text"}
            placeholder={"آدرس پستی"}
            name="postal_address"
            onChange={formik.handleChange}
            value={formik.values.postal_address}
            h={"h-12"}
            py={"3"}
            dir={"rtl"}
          />
          {formik.errors.postal_address && (
            <p className="text-[12px] text-error font-semibold leading-5 mt-1">
              <bdi>{formik.errors.postal_address}</bdi>
            </p>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-between lg:justify-end items-stretch lg:mr-6">
        <div className="w-full h-[150px] relative my-4 lg:my-1 border-[1px] solid border-secondary lg:border-none rounded-[10px] lg:rounded-none overflow-hidden">
          <Image
            src={MapPreserve_Pic}
            alt="MapPic"
            className="w-full h-full object-cover"
          />
          <p className="text-sm text-error text-center font-medium leading-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            ثبت روی نقشه
          </p>
        </div>
        <div className="w-full flex flex-row mt-10 lg:mt-6">
          <Link
            href={"/dashboard/addresses"}
            className="hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]"
          >
            انصراف
          </Link>
          <button
            type="submit"
            className="w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]"
          >
            ثبت
          </button>
        </div>
      </div>
    </form>
  );
}
