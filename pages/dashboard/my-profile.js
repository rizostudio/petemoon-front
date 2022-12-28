import React from 'react';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';
import Profile_Alt_Pic from '../../asset/icons/profile-pic-alt.svg';
import ArrowLeft_Icon from '../../asset/icons/Arrow-left-white.svg';
import Cake_Icon from '../../asset/icons/cake.svg';
import BagDelivered_Icon from '../../asset/icons/bag-tick.svg';
import BagCurrent_Icon from '../../asset/icons/bag-happy.svg';
import BagCrossed_Icon from '../../asset/icons/bag-cross.svg';
const profile = () => {
    return (
            <DashboardLayout>
                <div className='w-full h-full flex flex-col justify-between items-center'>
                    <div className='w-full flex sm:hidden flex-col justify-between items-center mb-10 mt-2'>
                        <div className='w-full flex flex-row-reverse justify-between items-center p-10'>
                            <p className=' after:w-2 after:h-5 after:bg-first after:text-first after:content-["<"] after:ml-1 after:rounded-[2px]' >حساب کاربری</p>
                            <div className='bg-first opacity-[0.8] p-4 rounded-[15px]'>
                                <Image src={ArrowLeft_Icon} alt="ArrowIcon" className='w-full'/>
                            </div>
                        </div>
                        <div className='px-10 sm:order-2 flex flex-row-reverse justify-start items-center self-end'>
                            <Image src={Profile_Alt_Pic} alt="Profile-Pic-Alt" height={75} width={75}/>
                            <div className='mr-5'>
                                <p className='text-black text-right font-black sm:text-white'>علی حسینی نسب</p>
                                <p className='text-gray text-right'>۰۹۳۰۱۲۳۴۵۶۷</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row-reverse justify-between w-full sm:w-3/4 p-10'>
                        <div className='w-full sm:w-7/10 sm:p-5 sm:bg-white rounded'>
                            <form className='w-full'>                                    
                                <input type='text' placeholder="نام" className='w-full px-5 py-3 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                <input type='text' placeholder="نام خانوادگی" className='w-full px-5 py-3 my-7 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                <input type='number' placeholder="شماره تماس" className='w-full px-5 py-3 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                                <input type='email' placeholder="ایمیل" className='w-full px-5 py-3 my-7 bg-transparent sm:bg-[#eee] text-right border-[1px] solid border-gray sm:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] sm:rounded-[5px] focus:bg-white focus:border-error'/>
                            </form>
                        </div>
                        <div className='flex sm:flex-col justify-between items-center w-full sm:w-3/10 p-10 sm:px-20 sm:py-10 sm:my-5 bg-[#FFE2DE] sm:bg-white rounded-[12px]'>
                           <Image src={Cake_Icon} alt="CakeIcon" className='w-20 sm:w-36'/>
                           <div className='flex flex-col justify-between items:end sm:items-center text-right sm:text-center'>
                            <p className='text-2xl sm:text-sm text-black font-bold leading-6 mb-7 sm:mb-2'>متولد</p>
                            <p className='text-xl sm:text-xs text-gray font-medium tracking-widest leading-6'><bdi>۱ مرداد ۱۳۸۰</bdi></p>
                           </div>
                        </div>
                        <button className='sm:hidden w-full mt-10 py-3 bg-[#CFEBD8] text-black text-center font-medium border-[1px] solid border-verify rounded-[12px]'>ذخیره</button>
                    </div>
                    <div className='hidden sm:block w-3/4 h-1/4 bg-white rounded-[25px] px-5 py-3'>
                        <div className='flex justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                            <p className='text-primary'>مشاهده همه</p>
                            <p className='text-black after:bg-primary after:w-[10px] after:h-[20px]'>سفارش های من</p>
                        </div>
                        <div className='flex flex-row-reverse'>
                            <div className='p-4'>
                                <div className='p-3'>
                                    <p>سفارش های جاری</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>تحویل شده</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>مرجوع شده</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
    );
};

export default profile;