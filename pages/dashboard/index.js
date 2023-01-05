import React from 'react';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';
import BagDelivered_Icon from '../../asset/icons/bag-tick.svg';
import BagCurrent_Icon from '../../asset/icons/bag-happy.svg';
import BagCrossed_Icon from '../../asset/icons/bag-cross.svg';
import PetPic from '../../asset/icons/PetPic.svg';
import BagTick_Icon from '../../asset/icons/bag-tick2.svg';
import CartTotal_Icon from '../../asset/icons/card-receive2.svg';
import Uprise_Icon from '../../asset/icons/uprise.svg';
const index = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col justify-between lg:justify-start items-stretch'>           
                            <div className='flex flex-col lg:flex-row-reverse justify-between lg:justify-center items-stretch lg:items-center w-full h-[250px] mb-5'>
                                <div className='lg:w-3/4 w-full h-full bg-white px-4 py-5 lg:p-10 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                                    <p className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'><bdi>{"پیترمن"}</bdi></p>
                                    <div className='flex flex-row-reverse justify-between items-stretch mt-2 lg:mt-8'>
                                        <div className={'flex flex-col lg:flex-row-reverse justify-between items-stretch'}>
                                            <div className='lg:hidden flex flex-row-reverse items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2'>
                                                    <p className='lg:hidden text-base text-black'>نام</p>
                                                    <p className='lg:hidden text-sm text-gray-400 mr-3 font-medium'><bdi>{"پیترمن"}</bdi></p>
                                            </div>
                                            <div className='flex flex-col items-end'>
                                                <div className='flex flex-row-reverse items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2'>
                                                    <p className='text-base text-black'>نوع</p>
                                                    <p className='text-sm text-gray-400 mr-3 font-medium'><bdi>{"سگ خانگی"}</bdi></p>
                                                </div>
                                                <div className='flex flex-row-reverse items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4'>
                                                    <p className='text-sm lg:text-base text-black'>جنسیت</p>
                                                    <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{"ماده"}</bdi></p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-end lg:mr-10'>
                                                <div className='flex flex-row-reverse items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2'>
                                                    <p className='text-sm lg:text-base text-black'>نژاد</p>
                                                    <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{"بولداگ"}</bdi></p>
                                                </div>
                                                <div className='flex flex-row-reverse items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4'>
                                                    <p className='text-sm lg:text-base text-black'>تاریخ تولد</p>
                                                    <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{"۱۹ اکتبر ۲۰۰۳"}</bdi></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='self-end'>
                                            <div className='w-[100px] h-[100px] relative overflow-hidden rounded-[10px]'>
                                                <Image src={PetPic} alt="PetPic" className='w-full h-full object-cover'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                           
                                <div className='lg:w-1/4 w-full h-full flex flex-col justify-between items-stretch bg-white p-5  lg:mr-3 mt-3 lg:mt-0 rounded-[25px] shadow-shadowB'>
                                    <Image src={BagTick_Icon} alt="BagTickIcon" className="self-end"/>
                                    <div className='self-end text-right'>
                                        <p className='text-lg text-black font-bold mb-3'>تعداد سفارشات شما</p>
                                        <p className='text-lg text-black font-bold'><bdi>۲۲۵۵ عدد</bdi></p>
                                    </div>
                                    <div className='flex flex-row-reverse justify-between items-center'>
                                        <p className='text-base text-black font-medium opacity-50'><bdi>در یک ماه گذشته</bdi></p>
                                        <div className='flex flex-row-reverse items-center'>
                                            <p className='text-base text-verify font-medium leading-6'>25 %</p>
                                            <div className='p-2 rounded-full bg-green-100 mr-1'>
                                                <Image src={Uprise_Icon}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                <div className='flex flex-col lg:flex-row-reverse justify-center items-center w-full h-[250px] mb-5'>
                    <div className='h-full w-3/4 flex flex-col justify-between items-center p-5 rounded-[15px] lg:rounded-[25px] text-white bg-gradient-to-r from-[#FA5456] to-[#FFA000]'>
                        <p className='self-end text-base font-black leading-12'>کیف پول<sup className='text-xs font-normal leading-6'>پتمون</sup></p>
                        <p className='self-center text-3xl font-black leading-16'><bdi>{"۲۵۲.۵۰۰"} تومان</bdi></p>
                        <p className='self-start text-[12px] font-medium leading-5'><bdi>*موجودی کیف پول قابل بازگردانی به حساب نیست</bdi></p>
                    </div>
                    <div className='lg:w-1/4 h-full flex flex-col justify-between items-stretch bg-white p-5 mr-5 rounded-[25px] shadow-shadowB'>
                                    <Image src={BagTick_Icon} alt="BagTickIcon" className="self-end"/>
                                    <div className='self-end text-right'>
                                        <p className='text-lg text-black font-bold mb-3'>تعداد سفارشات شما</p>
                                        <p className='text-lg text-black font-bold'><bdi>۲۲۵۵ عدد</bdi></p>
                                    </div>
                                    <div className='flex flex-row-reverse justify-between items-center'>
                                        <p className='text-base text-black font-medium opacity-50'><bdi>در یک ماه گذشته</bdi></p>
                                        <div className='flex flex-row-reverse items-center'>
                                            <p className='text-base text-verify font-medium leading-6'>25 %</p>
                                            <div className='p-2 rounded-full bg-green-100 mr-1'>
                                                <Image src={Uprise_Icon}/>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
                    <div className='block w-full mt-5 bg-white rounded-[25px] shadow-shadowA'>
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

export default index;