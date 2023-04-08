import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//formik
import { useFormik } from "formik";
//moment
import moment from "jalali-moment";
//media
import PetPicPreserve from "../../../assets/dashboard/PetPicPreserve.svg";
import Upload_Icon from "../../../assets/common/uploadIcon.svg";
//components
import FloatLabelInput from "@/components/partials/input";
import { createPet } from "@/services/dashboard/pets/create";
//http
import { getPetType } from "@/services/dashboard/pets/getPetType";
import { getPetCategory } from "@/services/dashboard/pets/getPetCategory";

export default function CreatePet() {
  const router = useRouter();
  const petImageRef = useRef(null);
  const dataFetchedRef = useRef(false);
  const [petImage, setpetImage] = useState(PetPicPreserve);
  const [inputError, setInputError] = useState(false);
  const [petType, setPetTyps] = useState([]);
  const [selectType, setSelectType] = useState("");
  const [petCategory, setPetCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await getPetType();
      setPetTyps(response.data);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  const { handleChange, values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      pet_type: "",
      pet_category: "",
      sex: "",
      birth_date: "",
      weight: 0,
      last_vaccine_date: "",
      underlying_disease: "",
      last_anti_parasitic_vaccine_date: "",
      photo: "",
    },
    onSubmit: (value) => {
      console.log(value);
      handleCreateSubmit(value);
    },
  });
  const handleCreateSubmit = async () => {
    const response = await createPet(values);
    if (response.success) {
      router.push("/dashboard/my-pets");
    }
  };
  const birthDate = (e) => {
    const datePickerOutput = moment(e.toString()).format("YYYY-MM-DD");
    setFieldValue("birth_date", datePickerOutput);
  };
  const lastVaccineDate = (e) => {
    const datePickerOutput = moment(e.toString()).format("YYYY-MM-DD");
    setFieldValue("last_vaccine_date", datePickerOutput);
  };
  const lastAntiParasiticVaccineDate = (e) => {
    const datePickerOutput = moment(e.toString()).format("YYYY-MM-DD");
    setFieldValue("last_anti_parasitic_vaccine_date", datePickerOutput);
  };
  const handleChangePetImage = (e) => {
    if (petImageRef.current) {
      const file = petImageRef.current.files;
      ShowPetImagePreview(file[0]);
      setFieldValue("photo", file[0]);
    }
  };
  const ShowPetImagePreview = (file) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        if (e.target) {
          setpetImage(e.target.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };
  const handleChangeType = (e) => {
    console.log(e.target.value);
    petType.map((item) => {
      if (item.pet_type === e.target.value) {
        setFieldValue("pet_type", item.specific_type);
        setSelectType(e.target.value);
        const getCategory = async () => {
          const response = await getPetCategory(item.specific_type);
          if (response) {
            setPetCategory(response.data);
          }
        };
        getCategory();
      }
    });
  };
  const handleChangeCategory = (e) => {
    setSelectCategory(e.target.value);
    console.log(e.target.value);
    petCategory.map((item) => {
      console.log(item.pet_category);
      if (item.pet_category === e.target.value) {
        setFieldValue("pet_category", item.id);
      }
    });
  };
  return (
    <div className="flex flex-col w-full">
      {/* for show heading in this page */}
      <div className="w-full flex lg:hidden flex-row justify-between items-center mb-10">
        <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
          ویرایش پت من
        </p>
        <Link
          href="/dashboard/my-pets"
          className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
        ></Link>
      </div>
      <div className="flex flex-col bg-[#E7E7E8] rounded-[20px] lg:rounded-[25px] w-full">
        <div className="w-full h-full px-4 pt-10 pb-5 lg:p-10 lg:rounded-[25px] lg:bg-white">
          {/* general details */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row justify-start lg:justify-between h-full"
          >
            <div className="flex flex-col items-stretch w-full lg:w-2/3">
              {/* General Details */}
              <div className="lg:flex flex-row justify-between items-center w-full">
                <div className="text-right lg:w-1/2 my-4 lg:m-1">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    نام
                  </label>
                  <FloatLabelInput
                    type={"text"}
                    placeholder={"نام"}
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
                <div className="text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    نوع
                  </label>
                  <FloatLabelInput
                    type={"select"}
                    placeholder={"نوع"}
                    name="pet_type"
                    onChange={handleChangeType}
                    value={selectType}
                    // list={"kinds"}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  >
                    <option
                      selected="true"
                      style={{ display: "none" }}
                    ></option>
                    {petType &&
                      petType.map((item) => (
                        <option key={item.id}>{item.pet_type}</option>
                      ))}
                  </FloatLabelInput>
                  {inputError ? (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="lg:flex flex-row justify-between items-center w-full lg:my-5">
                <div className="text-right lg:w-1/2 my-2 lg:m-1">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    نژاد
                  </label>
                  <FloatLabelInput
                    type={"select"}
                    placeholder={"نژاد"}
                    name="pet_category"
                    onChange={handleChangeCategory}
                    value={selectCategory}
                    // list="races"
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  >
                    <option
                      selected="true"
                      style={{ display: "none" }}
                    ></option>
                    {petCategory.map((item) => (
                      <option key={item.id}>{item.pet_category}</option>
                    ))}
                  </FloatLabelInput>

                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
                <div className="text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    جنسیت
                  </label>
                  <FloatLabelInput
                    type={"text"}
                    placeholder={"جنسیت"}
                    name="sex"
                    onChange={handleChange}
                    value={values.sex}
                    list="sexes"
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  <datalist id="sexes">
                    <option>نر</option>
                    <option>ماده</option>
                  </datalist>
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right mb-4 lg:m-1">
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
                  dir={"ltr"}
                />
                {inputError && (
                  <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                    <bdi>فرمت صحیح نمی باشد!</bdi>
                  </p>
                )}
              </div>
              {/* Medical Details  */}
              <div className="lg:flex flex-row justify-between items-center w-full">
                <div className="text-right lg:w-1/2 my-4 lg:m-1">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    وزن
                  </label>
                  <FloatLabelInput
                    type={"number"}
                    placeholder={"وزن"}
                    name="weight"
                    onChange={handleChange}
                    value={values.weight}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
                <div className="text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    بیماری زمینه ای
                  </label>
                  <FloatLabelInput
                    type={"text"}
                    placeholder={"بیماری زمینه ای"}
                    name="underlying_disease"
                    onChange={handleChange}
                    value={values.underlying_disease}
                    list={"underlying_disease"}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  <datalist id="underlying_disease">
                    <option>سرخک حاد</option>
                    <option>آنلفونزا</option>
                  </datalist>
                  {inputError ? (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="lg:flex flex-row justify-between items-center w-full lg:my-5">
                <div className="text-right lg:w-1/2 my-2 lg:m-1">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    تاریخ آخرین واکسن
                  </label>
                  <FloatLabelInput
                    type={"date"}
                    placeholder={"تاریخ آخرین واکسن"}
                    // name="last_vaccine_date"
                    onChange={lastVaccineDate}
                    value={values.last_vaccine_date}
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
                <div className="text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4">
                  <label className="hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                    تاریخ آخرین واکسن ضد انگل
                  </label>
                  <FloatLabelInput
                    type={"date"}
                    placeholder={"تاریخ آخرین واکسن ضد انگل"}
                    // name="last_anti_parasitic_vaccine_date"
                    onChange={lastAntiParasiticVaccineDate}
                    value={values.last_anti_parasitic_vaccine_date}
                    list="sexes"
                    h={"h-12"}
                    py={"3"}
                    dir={"rtl"}
                  />
                  <datalist id="sexes">
                    <option>نر</option>
                    <option>ماده</option>
                  </datalist>
                  {inputError && (
                    <p className="text-[12px] text-error font-semibold leading-5 mt-1">
                      <bdi>فرمت صحیح نمی باشد!</bdi>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-stretch h-full w-full lg:w-1/3 lg:mr-6">
              <div className="flex flex-col">
                <div className="w-full h-[175px] relative my-4 lg:my-1 p-4 bg-secondary rounded-[15px] lg:rounded-[25px] overflow-hidden">
                  <input
                    ref={petImageRef}
                    onChange={handleChangePetImage}
                    className="hidden"
                    id="petImage"
                    type="file"
                  />
                  <Image
                    width={100}
                    height={100}
                    src={petImage}
                    alt="PetPic"
                    className="w-full h-full object-contain"
                  />
                  <label htmlFor="petImage">
                    <Image
                      src={Upload_Icon}
                      alt="UploadIcon"
                      className="absolute bottom-4 right-4"
                    />
                  </label>
                </div>
                <p className="text-sm text-info text-right font-medium leading-4">
                  <bdi>حداکثر سایز تصویر ۲ مگابایت</bdi>
                </p>
              </div>
              <div className="flex justify-between items-stretch mt-10 lg:mt-6">
                <Link
                  href={"/dashboard/my-pets"}
                  className="hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]"
                >
                  انصراف
                </Link>
                <button
                  type="submit"
                  className="w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]"
                >
                  ذخیره
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
