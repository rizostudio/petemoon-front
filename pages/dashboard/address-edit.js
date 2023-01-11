import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFormik } from "formik";
//components
import FloatLabelInput from "../../components/common/input";
import DashboardLayout from '../../components/DashboardLayout';
//media 
import ArrowLeftWhite_Icon from '../../assets/common/leftArrowWhite.svg';
import MapPreserve_Pic from '../../assets/dashboard/mapPicPreserve.svg';
import Map_Pic from "../../assets/dashboard/mapPic.svg";

const AddressEdit = () => {
    const [inputError, setInputError] = useState(false)
    const formik = useFormik({
        initialValues: {
          phoneNumber: "",
        },
        onSubmit: (value) => {
          console.log(value);
        },
      });
    return (
        <DashboardLayout>
            <div className='flex flex-col lg:bg-white lg:rounded-[25px] lg:px-12 lg:py-6'>
                <div className='w-full flex lg:hidden flex-row justify-between items-center mb-10'>
                    <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>جزئیات آدرس</p>
                    <Link 
                        href='/dashboard/addresses' 
                        className='bg-primary opacity-[0.8] p-4 rounded-[15px]'
                    >
                        <Image 
                            src={ArrowLeftWhite_Icon} 
                            alt="ArrowIcon" 
                            className='w-full'
                        />
                    </Link>
                </div>
                <form onSubmit={formik.handleSubmit}
                    className='flex flex-col lg:flex-row justify-start lg:justify-between'
                >
                    <div className='flex flex-col items-stretch w-full lg:w-2/3'>
                        <div className='lg:flex flex-row justify-between items-center w-full'>
                            <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>استان</label>
                                <FloatLabelInput
                                    type={"text"}
                                    placeholder={"استان"}
                                    name="province"
                                    onChange={formik.handleChange}
                                    value={formik.values.primaryname}
                                    list="provinces"
                                    h={"h-12"}
                                    py={"3"}
                                    dir={"rtl"}
                                />
                                <datalist id="provinces" className='border-[1px] solid border-gray-500 rounded-[12px] lg:rounded-[5px]'>
                                    <option>تهران</option>
                                    <option>فارس</option>
                                    <option>سیستان و بلوچستان</option>
                                    <option>کهکلویه و بویراحمد</option>
                                    <option>قم</option>
                                    <option>مازندران</option>
                                    <option>گلستان</option>
                                </datalist>
                                {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                            </div>
                            <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                <label 
                                    className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                >شهر</label>
                                <FloatLabelInput
                                    type={"text"}
                                    placeholder={"شهر"}
                                    name="city"
                                    onChange={formik.handleChange}
                                    value={formik.values.primaryname}
                                    list="cities"
                                    h={"h-12"}
                                    py={"3"}
                                    dir={"rtl"}
                                />
                                <datalist id="cities" className='border-[1px] solid border-gray-500 rounded-[12px] lg:rounded-[5px]'>
                                    <option>تهران</option>
                                    <option>شیراز</option>
                                    <option>اهواز</option>
                                    <option>سمنان</option>
                                    <option>قم</option>
                                </datalist>
                                {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }                 
                            </div>
                        </div>
                        <div className='lg:flex flex-row justify-between items-center w-full lg:my-5'>
                            <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                <label 
                                    className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                >کد پستی</label>
                                <FloatLabelInput
                                    type={"number"}
                                    placeholder={"کد پستی"}
                                    name="zipCode"
                                    onChange={formik.handleChange}
                                    value={formik.values.primaryname}
                                    h={"h-12"}
                                    py={"3"}
                                    dir={"rtl"}
                                />
                                {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                            </div>
                            <div className='text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4'>
                                <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>تحویل گیرنده</label>
                                <FloatLabelInput
                                    type={"text"}
                                    placeholder={"نام تحویل گیرنده"}
                                    name="receiver"
                                    onChange={formik.handleChange}
                                    value={formik.values.primaryname}
                                    h={"h-12"}
                                    py={"3"}
                                    dir={"rtl"}
                                />
                                {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                            </div>
                        </div>
                        <div className='text-right my-4 lg:m-1'>
                            <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>آدرس پستی</label>
                            <FloatLabelInput
                                type={"text"}
                                placeholder={"آدرس پستی"}
                                name="location"
                                onChange={formik.handleChange}
                                value={formik.values.primaryname}
                                h={"h-12"}
                                py={"3"}
                                dir={"rtl"}
                            />
                            {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-col justify-between lg:justify-end items-stretch lg:mr-6'>
                        <div className='w-full h-[150px] relative my-4 lg:my-1 border-[1px] solid border-secondary lg:border-none rounded-[10px] lg:rounded-none overflow-hidden'>
                            <Image 
                                src={MapPreserve_Pic} 
                                alt="MapPic" 
                                className='w-full h-full object-cover'
                            />
                            <p className='text-sm text-error text-center font-medium leading-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>ثبت روی نقشه</p>
                        </div>
                        <div className='w-full flex flex-row mt-10 lg:mt-6'>
                            <Link 
                                href={'/dashboard/addresses'}
                                className='hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]'
                            >انصراف</Link>
                            <button 
                                type='submit' 
                                className='w-full text-lg lg:text-xl text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]'
                            >ذخیره</button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default AddressEdit;