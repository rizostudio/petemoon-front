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
                <div className='flex flex-col justify-between items-stretch'>
                    <div className='w-full lg:hidden mb-10 mt-2 lg:order-2 flex flex-row-reverse justify-start items-center self-end'>
                        <Image src={Profile_Alt_Pic} alt="Profile-Pic-Alt" height={75} width={75}/>
                        <div className='mr-5'>
                            <p className='text-black text-right font-black lg:text-white'>علی حسینی نسب</p>
                            <p className='text-gray-400 text-right'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row-reverse justify-between items-center lg:my-8 lg:p-0'>
                        <div className='w-full h-full lg:w-2/3 lg:p-5 lg:ml-6 lg:px-15 lg:py-10 lg:bg-white rounded-[25px] lg:shadow-shadowA'>
                            <form className='w-full flex flex-col lg:flex-row flex-wrap items:center justify-evenly'>                                    
                                <div className='lg:flex justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>نام</label>
                                        <input type='text' placeholder="نام" className='w-full px-5 py-3 lg:py-1 bg-transparent lg:bg-[#eee] text-right border-[1px] solid border-gray-400 lg:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] lg:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>نام خانوادگی</label>
                                        <input type='text' placeholder="نام خانوادگی" className='w-full px-5 py-3 lg:py-1 bg-transparent lg:bg-[#eee] text-right border-[1px] solid border-gray-400 lg:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] lg:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                </div>
                                <div className='lg:flex justify-between items-center w-full'>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>ایمیل</label>
                                        <input type='email' placeholder="ایمیل" className='w-full px-5 py-3 lg:py-1 bg-transparent lg:bg-[#eee] text-right border-[1px] solid border-gray-400 lg:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] lg:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                    <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                                        <label className='text-sm text-black font-bold leading-8  after:w-2 after:h-4 after:bg-first after:text-first after:content-["<"] after:ml-2 after:rounded-[2px]'>شماره تماس</label>
                                        <input type='phone' placeholder="شماره تماس" className='w-full px-5 py-3 lg:py-1 bg-transparent lg:bg-[#eee] text-right border-[1px] solid border-gray-400 lg:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] lg:rounded-[5px] focus:bg-white focus:border-error'/>
                                        {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='w-full h-full lg:w-1/3 mt-6 lg:mt-0 px-4 py-6 lg:px-3 lg:py-5 flex lg:flex-col justify-between lg:justify-center items-center bg-[#FFE2DE] lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowA'>
                           <Image src={Cake_Icon} alt="CakeIcon" className='w-20 lg:w-36'/>
                           <div className='flex flex-col justify-between items:end lg:items-center text-right lg:text-center'>
                            <p className='text-2xl lg:text-xl text-black font-bold leading-6 mb-3 lg:mb-1'>متولد</p>
                            <p className='text-xl lg:text-lg text-gray-400 font-medium tracking-widest leading-6'><bdi>۱ مرداد ۱۳۸۰</bdi></p>
                           </div>
                        </div>
                        <button className='lg:hidden w-full mt-10 py-3 bg-[#CFEBD8] text-black text-center font-medium border-[1px] solid border-verify rounded-[12px]'>ذخیره</button>
                    </div>
                    <div className='hidden lg:block w-full mt-5 bg-white rounded-[25px] shadow-shadowA'>
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