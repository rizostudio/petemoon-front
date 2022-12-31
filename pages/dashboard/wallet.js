import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';
import ArrowLeft_Icon from '../../asset/icons/Arrow-left-white.svg';
import WalletAdd_Icon from '../../asset/icons/wallet-add.svg';
import CloseButton_Icon from '../../asset/icons/close-button.svg';
const wallet = () => {
    return (
        <DashboardLayout>
            <div className='w-full h-screen sm:h-auto flex flex-col sm:flex-row-reverse justify-between items-stretch'>
                <div className='flex flex-col sm:w-2/3'>
                    <div className='h-[200px] sm:h-full w-full flex flex-col justify-between items-center p-5 rounded-[15px] sm:rounded-[25px] text-white bg-gradient-to-r from-[#FA5456] to-[#FFA000]'>
                        <p className='self-end text-base font-black leading-12'>کیف پول<sup className='text-xs font-normal leading-6'>پتمون</sup></p>
                        <p className='self-center text-3xl font-black leading-16'><bdi>{"۲۵۲.۵۰۰"} تومان</bdi></p>
                        <p className='self-start text-[12px] font-medium leading-5'><bdi>*موجودی کیف پول قابل بازگردانی به حساب نیست</bdi></p>
                    </div>

                </div>
                <label htmlFor="add-wallet-modal" className='w-full sm:w-1/3 flex flex-row-reverse sm:flex-col-reverse justify-between sm:justify-center items-center px-10 sm:px-20 py-5 sm:py-8 sm:mr-5 bg-white border-[2px] solid border-first rounded-[12px] sm:rounded-[25px] cursor-pointer'>
                    <p className='text-2xl sm:text-base text-first font-bold leading-8 sm:mt-10'>افزایش موجودی</p>
                    <Image src={WalletAdd_Icon} alt="WalletAddPic" className='sm:w-40'/>
                </label>
            </div>
                    <div className='bg-white px-10 py-4 rounded-[20px]'>
                                <div className='w-full flex flex-row-reverse justify-between items-center mb-10'>
                                <p className='text-xs sm:text-base text-black font-medium sm:font-black leading-8 after:hidden sm:after:inline-block after:w-2 after:h-4 after:bg-first after:text-first after:content-[""] after:ml-2 after:align-middle after:rounded-[2px]'>افزایش موجودی</p>
                                <label htmlFor="add-wallet-modal" className="">
                                    <Image src={CloseButton_Icon} alt="CloseIcon"/>
                                    </label>
                                </div>
                    </div>
                    <form>
                        <div className='flex flex-col items-stretch justify-center p-4 sm:p-15'>
                            <p className='text-base sm:text-lg text-black text-center font-medium leading-8 mb-7'><bdi>مبلغ مورد نظر جهت افزایش موجودی را وارد نمایید:</bdi></p>
                            <input type="number" placeholder='۵۰۰.۰۰۰ تومان' className='w-full p-3 mb-3 sm:mt-6 sm:mb-4 bg-white text-base text-center text-gray font-medium border-[1px] solid border-third rounded-[12px] sm:rounded-[5px] focus:border-error focus:text-black after:content-["fu"] after:text-lg after:text-error'/>
                            <div className='w-full flex '>
                                <button className="w-full p-3 mb-3 bg-white text-sm text-center text-gray font-medium border-[1px] solid border-third rounded-[12px] sm:rounded-[5px]"><bdi>{500000} تومان</bdi></button>
                                <button className="w-full p-3 mb-3 mx-2 sm:mx-3 bg-white text-sm text-center text-gray font-medium border-[1px] solid border-third rounded-[12px] sm:rounded-[5px]"><bdi>{500000} تومان</bdi></button>
                                <button className="w-full p-3 mb-3 bg-white text-sm text-center text-gray font-medium border-[1px] solid border-third rounded-[12px] sm:rounded-[5px] "><bdi>{500000} تومان</bdi></button>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse items-center justify-between w-full'>
                            <button className='w-full text-sm text-white text-center font-semibold py-3 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] ml-2'>پرداخت</button>
                            <button className='w-full text-sm text-error text-center font-semibold py-3 rounded-[5px] bg-white border-[2px] solid border-error'>انصراف</button>
                        </div>
                    </form>
            <div>
                <input type="checkbox" id="add-wallet-modal" className="modal-toggle" />
                <label htmlFor="add-wallet-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="add-wallet-modal">
                    <div>
                        <div className='w-full flex flex-row-reverse justify-between items-center mb-10'>
                        <p className=' after:w-2 after:h-5 after:bg-first after:text-first after:content-["<"] after:ml-1 after:rounded-[2px]'>افزایش موجودی</p>
                        <label htmlFor="add-wallet-modal" className="btn">x</label>
                    </div>
                    </div>
                    <form>
                        <h3>form</h3>
                    </form>
                </label>
                </label>
            </div>
        </DashboardLayout>
    );
};

export default wallet;