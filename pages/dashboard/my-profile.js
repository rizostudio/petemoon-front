import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DashboardLayout from '../../components/DashboardLayout';
import Profile_Alt_Pic from '../../asset/icons/profile-pic-alt.svg';
import ArrowLeft_Icon from '../../asset/icons/Arrow-left-white.svg';
import Cake_Icon from '../../asset/icons/cake.svg';
import BagDelivered_Icon from '../../asset/icons/bag-tick.svg';
import BagCurrent_Icon from '../../asset/icons/bag-happy.svg';
import BagCrossed_Icon from '../../asset/icons/bag-cross.svg';
const profile = () => {
    const [inputError, setInputError] = useState(false)
    return (
            <DashboardLayout>
                <div className='w-full h-full flex flex-col justify-between items-stretch'>
                    <div className='w-full sm:hidden mb-10 mt-2 sm:order-2 flex flex-row-reverse justify-start items-center self-end'>
                        <Image src={Profile_Alt_Pic} alt="Profile-Pic-Alt" height={75} width={75}/>
                        <div className='mr-5'>
                            <p className='text-black text-right font-black sm:text-white'>علی حسینی نسب</p>
                            <p className='text-gray text-right'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row-reverse justify-between items-center sm:my-8 sm:p-0'>
                        <div className='w-full h-full sm:w-2/3 sm:p-5 sm:ml-6 sm:px-15 sm:py-10 sm:bg-white rounded-[25px] sm:shadow-shadowA'>
                            <form className='w-full flex flex-col sm:flex-row flex-wrap items:center justify-evenly'>                                    
                                <div className='sm:flex justify-between items-center w-full'>
                                    <div className='text-right sm:w-1/2 my-2 sm:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>نام</label>
                                        <input type='text' placeholder="نام" className='w-full px-5 py-3 sm:py-1 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                    <div className='text-right sm:w-1/2 my-2 sm:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>نام خانوادگی</label>
                                        <input type='text' placeholder="نام خانوادگی" className='w-full px-5 py-3 sm:py-1 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                </div>
                                <div className='sm:flex justify-between items-center w-full'>
                                    <div className='text-right sm:w-1/2 my-2 sm:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>ایمیل</label>
                                        <input type='email' placeholder="ایمیل" className='w-full px-5 py-3 sm:py-1 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                    <div className='text-right sm:w-1/2 my-2 sm:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>شماره تماس</label>
                                        <input type='phone' placeholder="شماره تماس" className='w-full px-5 py-3 sm:py-1 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='w-full h-full sm:w-1/3 mt-6 sm:mt-0 px-4 py-6 sm:px-3 sm:py-5 flex sm:flex-col justify-between sm:justify-center items-center bg-[#FFE2DE] sm:bg-white rounded-[12px] sm:rounded-[25px] sm:shadow-shadowA'>
                           <Image src={Cake_Icon} alt="CakeIcon" className='w-20 sm:w-36'/>
                           <div className='flex flex-col justify-between items:end sm:items-center text-right sm:text-center'>
                            <p className='text-2xl sm:text-xl text-black font-bold leading-6 mb-3 sm:mb-1'>متولد</p>
                            <p className='text-xl sm:text-lg text-gray font-medium tracking-widest leading-6'><bdi>۱ مرداد ۱۳۸۰</bdi></p>
                           </div>
                        </div>
                        <button className='sm:hidden w-full mt-10 py-3 bg-[#CFEBD8] text-black text-center font-medium border-[1px] solid border-verify rounded-[12px]'>ذخیره</button>
                    </div>
                    <div className='hidden sm:block w-full m-auto bg-white rounded-[25px] shadow-shadowA'>
                        <div className='flex justify-between items-center px-10 py-8'>
                            <p className=' text-xs text-first font-medium leading-6 before:content-["<"] before:mr-4 before:text-base'>مشاهده همه</p>
                            <p className='text-base text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>سفارش های من</p>
                        </div>
                        <div className='flex flex-row-reverse items-center justify-between w-full px-20 py-12'>
                            <div className='px-1 py-0 flex items-center'>
                                <div className='p-1 text-right'>
                                    <p className='text-sm text-black font-black leading-8 mb-1'>سفارش های جاری</p>
                                    <span className='text-xs text-black font-medium leading-6'><bdi>۲ سفارش</bdi></span>
                                </div>
                                <Image src={BagCurrent_Icon} alt="CurrentBag-pic" width={100} height={100}/>
                            </div>
                            <div className='px-1 py-0 flex items-center border-r-[2px] border-second solid'>
                                <div className='p-1 text-right'>
                                    <p className='text-sm text-black font-black leading-8 mb-1'>تحویل شده</p>
                                    <span className='text-xs text-black font-medium leading-6'><bdi>۲ سفارش</bdi></span>
                                </div>
                                <Image src={BagDelivered_Icon} alt="DeliveredBag-pic" width={100} height={100}/>
                            </div>
                            <div className='px-1 py-0 flex items-center border-r-[2px] border-second solid'>
                                <div className='p-1 text-right'>
                                    <p className='text-sm text-black font-black leading-8 mb-1'>مرجوع شده</p>
                                    <span className='text-xs text-black font-medium leading-6'><bdi>۲ سفارش</bdi></span>
                                </div>
                                <Image src={BagCrossed_Icon} alt="CrossedBag-pic" width={100} height={100}/>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
    );
};

export default profile;