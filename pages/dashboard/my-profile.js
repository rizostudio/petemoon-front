import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from 'formik';
//components
import DashboardLayout from '../../components/DashboardLayout';
import FloatLabelInput from '../../components/common/input';
//media
import Profile_Alt_Pic from '../../assets/dashboard/profile-pic-alt.svg';
import Cake_Icon from '../../assets/dashboard/cake.svg';
import PenEdit_Icon from '../../assets/common/PenEditIcon.svg';

const profile = () => {
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
                <div className='flex flex-col justify-between items-stretch'>
                    <div className='w-full lg:hidden mb-10 mt-2 lg:order-2 flex flex-row justify-start items-center self-end'>
                        <Image 
                            src={Profile_Alt_Pic} 
                            alt="Profile-Pic-Alt" 
                            height={75} 
                            width={75}
                        />
                        <div className='mr-5 flex flex-col'>
                            <p className='text-black text-right font-black lg:text-white'>علی حسینی نسب</p>
                            <p className='text-gray-400 text-right'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col lg:flex-row justify-between items-center lg:my-8 lg:p-0'>
                        <form className='w-full h-full lg:h-[300px] flex flex-col lg:flex-row items:center justify-evenly'>                                    
                            <div className='w-full h-full lg:w-3/4 flex flex-col items-stretch lg:p-5 lg:ml-6 lg:px-12 lg:py-8 lg:bg-white rounded-[25px] lg:shadow-shadowA'>
                                <div className='lg:flex flex-row justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>نام</label>
                                        <FloatLabelInput
                                                type={"text"}
                                                placeholder={"نام"}
                                                name="firstName"
                                                onChange={formik.handleChange}
                                                value={formik.values.firstname}
                                                h={"h-12"}
                                                py={"3"}
                                                dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1 lg:mr-4'>
                                        <label 
                                             className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >نام خانوادگی</label>
                                        <FloatLabelInput
                                                type={"text"}
                                                placeholder={"نام خانوادگی"}
                                                name="LastName"
                                                onChange={formik.handleChange}
                                                value={formik.values.primaryname}
                                                h={"h-12"}
                                                py={"3"}
                                                dir={"rtl"}
                                        />
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }                 
                                    </div>
                                </div>
                                <div className='lg:flex flex-row justify-between items-center w-full lg:my-5'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label 
                                            className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'
                                        >شماره تماس</label>
                                        <FloatLabelInput
                                                type={"phone"}
                                                placeholder={"شماره تماس"}
                                                name="PhoneNumber"
                                                onChange={formik.handleChange}
                                                value={formik.values.primaryname}
                                                h={"h-12"}
                                                py={"3"}
                                                dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                    <div className='text-right lg:w-1/2 my-4 lg:m-1 lg:mr-4'>
                                        <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>ایمیل</label>
                                        <FloatLabelInput
                                                type={"email"}
                                                placeholder={"ایمیل"}
                                                name="email"
                                                onChange={formik.handleChange}
                                                value={formik.values.firstname}
                                                h={"h-12"}
                                                py={"3"}
                                                dir={"rtl"}
                                        />
                                        {inputError && <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p>}                 
                                    </div>
                                </div>
                            </div>
                            {/* for show and edit user's birthday */}
                            <div className='w-full h-full lg:w-1/4 relative mt-6 lg:mt-0 px-4 py-6 lg:px-3 lg:py-5 flex lg:flex-col justify-between lg:justify-center items-center bg-[#FFE2DE] lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowA'>                                    
                                <Image 
                                    src={Cake_Icon} 
                                    alt="CakeIcon" 
                                    className='w-20 lg:w-36'
                                />
                                <div className='flex flex-col justify-between items:end lg:items-center text-right lg:text-center'>
                                    <p className='text-2xl lg:text-xl text-black font-bold leading-6 mb-3 lg:mb-1'>متولد</p>
                                    <p className='text-xl lg:text-lg text-gray-400 font-medium tracking-widest leading-6'><bdi>۱ مرداد ۱۳۸۰</bdi></p>
                                </div>
                                <Image 
                                    src={PenEdit_Icon} 
                                    alt="PenEditIcon" 
                                    className='absolute bottom-5 left-7'
                                />
                            </div>
                            <button 
                                type='input' 
                                className='lg:hidden w-full mt-10 py-3 bg-[#CFEBD8] text-black text-center font-medium border-[1px] solid border-verify rounded-[12px]'
                            >ذخیره</button>
                        </form>
                    </div>
                </div>
            </DashboardLayout>
    );
};

export default profile;