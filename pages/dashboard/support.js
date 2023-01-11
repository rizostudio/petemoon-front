import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//component
import DashboardLayout from '../../components/DashboardLayout';
//media
import WhatsApp_Icon from '../../assets/common/whatsapp.svg';
import Instagram_Icon from '../../assets/common/instagram.svg';
import Email_Icon from '../../assets/common/sms-notification.svg';
import Phone_Icon from '../../assets/common/call.svg';

const Support = () => {

    const [inputError, setInputError] = useState(false)
    return (
            <DashboardLayout>
                <div className='flex flex-col items-stretch'>
                    <div className='w-full h-full lg:h-[250px] flex flex-col lg:flex-row justify-between items-center lg:my-8'>
                        <div className='w-full h-full lg:w-3/4 flex flex-col items-stretch justify-between  p-4 lg:px-20 lg:py-8 bg-white rounded-[15px] lg:rounded-[25px] lg:shadow-shadowA border-[1px] border-secondary solid lg:border-none'>
                            <p className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'><bdi>سلام از پتمون&#128400;&#128400;</bdi></p>
                            <div className='text-right lg:py-5 lg:px-2'>
                                <p className='text-base lg:text-lg text-black font-semibold lg:font-bold leading-8 opacity-90'><bdi>جواب سوال هاتون رو میتونید از ما بپرسید، ما همیشه به سوال هاتون جواب میدیم.&#128522;</bdi></p>
                                <p className='text-base lg:text-lg text-gray-400 font-medium leading-6 mt-2'><bdi>با ما در ارتباط باشید...</bdi></p>
                            </div>
                            <p className='self-end text-sm lg:text-base text-primary font-medium lg:font-bold leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'><bdi>تماس با ما</bdi></p>
                        </div>
                        <div className='h-full w-1/4 px-5 py-10 mr-5 hidden lg:flex flex-col justify-center items-center bg-white rounded-[25px] shadow-shadowA'>
                           <Image 
                                src={Phone_Icon} 
                                alt="PhoneIcon" 
                                className='w-[100px]'
                           />
                           <div className='flex flex-col justify-between items-center text-center'>
                            <p className='text-lg text-black font-bold leading-6 mb-1'>تماس تلفنی</p>
                            <p className='text-base text-gray-400 font-medium tracking-widest leading-6'><bdi>02186655877-99</bdi></p>
                           </div>
                        </div>
                    </div>
                    <div className='w-full my-2 lg:px-10 lg:py-8 lg:bg-white rounded-[15px] lg:rounded-[25px] lg:shadow-shadowA'>
                        <p className='hidden lg:block text-base text-right text-black font-semibold leading-8 opacity-90 before:align-middle before:w-2 before:h-5 before:bg-primary before:inline-block before:ml-2 before:rounded-[2px]'>راه های ارتباطی</p>
                        <div className='w-full h-full flex flex-row items-center justify-between lg:mt-5'>
                            <div className='h-full w-1/3 flex flex-col lg:flex-row justify-between lg:justify-start items-center bg-white p-5 border-[1px] solid lg:border-none border-secondary rounded-[15px]'>
                                <Image 
                                    src={WhatsApp_Icon} 
                                    alt="WhatsAppIcon" 
                                    className='w-[75px] lg:w-[100px]'
                                />
                                <div className='flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:mr-4 '>
                                    <p className='text-sm lg:text-base text-black font-medium lg:font-black leading-6 opacity-90'>واتساپ</p>
                                    <span className='text-xs lg:text-sm text-primary font-medium leading-6'>پیام در واتس اپ</span>
                                </div>
                            </div>
                            <div className='h-full w-1/3 flex flex-col lg:flex-row justify-between mx-2 lg:mx-0 lg:justify-start items-center bg-white p-5 border-[1px] solid lg:border-none border-secondary rounded-[15px]'>
                                <Image 
                                    src={Email_Icon} 
                                    alt="WhatsAppIcon" 
                                    className='w-[75px] lg:w-[100px]'
                                />
                                <div className='flex flex-col items-center lg:items-start mt-5 lg:mt-0 lg:mr-4'>
                                    <p className='text-sm lg:text-base text-black font-medium lg:font-black leading-6 opacity-90 break-normal'>ایمیل مجموعه</p>
                                    <span className='text-xs lg:text-sm text-black font-medium leading-6 break-all'>petemoon@gmail</span>
                                </div>
                            </div>
                            <div className='h-full w-1/3 flex flex-col lg:flex-row justify-between lg:justify-start items-center bg-white p-5 border-[1px] solid lg:border-none border-secondary rounded-[15px]'>
                                <Image 
                                    src={Instagram_Icon} 
                                    alt="WhatsAppIcon" 
                                    className='w-[75px] lg:w-[100px]'
                                />
                                <div className='flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:mr-4'>
                                    <p className='text-sm lg:text-base text-black font-medium lg:font-black leading-6 opacity-90'>اینستاگرام</p>
                                    <span className='text-xs lg:text-sm text-black font-medium leading-6 break-all'>petemoo_com</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*  petemoon call numbers only show in mobile*/} 
                    <div className='flex lg:hidden flex-col items-stretch p-4 bg-white border-[1px] solid border-secondary rounded-[15px]'>
                        <div className='flex flex-row justify-between items-start'>
                            <div className='flex flex-col text-base'>
                                <p className='text-black font-semibold leading-7 opacity-90'><bdi>تلفن های مجموعه:</bdi></p>
                                <p className='text-gray-400 font-medium leading-7'><bdi>با ما در ارتباط باشید...</bdi></p>
                            </div>
                            <Image 
                                src={Phone_Icon} 
                                alt="PhoneIcon"
                            />
                        </div>
                        <div className='flex flex-row justify-between xs:flex-wrap items-center mt-2'>
                            <p className='text-sm text-black font-medium leading-4 after:w-[2px] after:h-4 after:bg-gray-200 after:inline-block after:rounded-sm after:mx-5 after:align-middle'>02186655877-90</p>
                            <p className='text-sm text-black font-medium leading-4 after:w-[2px] after:h-4 after:bg-gray-200 after:inline-block after:rounded-sm after:mx-5 after:align-middle'>02186655877-91</p>
                            <p className='text-sm text-black font-medium leading-4'>02186655877-92</p>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
    );
};

export default Support;