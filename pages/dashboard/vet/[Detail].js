import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { v4 } from 'uuid';

//component
import DashboardLayout from '@/components/DashboardLayout';

//media 
import ArrowLeftWhite_Icon from '../../../assets/common/leftArrowWhite.svg';
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';

const Detail = () => {
    const data = {
        submitDate:"۲۵ آذر ۱۴۰۰", 
        vetName:"علی محبی", 
        visitDate:" ۵ بهمن ۱۴۰۱", 
        time:"17:30", 
        visitStatus:"انجام شده", 
        petName:"پیترمن", 
        visitCode:"#750BV", 
        vetComment:"سنگ کلیه", 
        vetOrderPic:"Noskhe.jpg", 
        description:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت."
    }
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                {/* Heading for mobile */}
                <div className='w-full flex lg:hidden flex-row justify-between items-center mb-10'>
                    <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>شرح حال پزشک</p>
                    <Link 
                        href='/dashboard/vet' 
                        className='bg-primary opacity-[0.8] p-4 rounded-[15px]'
                    >
                        <Image 
                            src={ArrowLeftWhite_Icon} 
                            alt="ArrowIcon" 
                            className='w-full'
                        />
                    </Link>
                </div>
                {/* Main */}
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between lg:p-10 lg:bg-white lg:rounded-[25px]'>
                    {/* for Mobile */}
                    <div className='flex lg:hidden flex-col'>
                        <div className='pb-4'>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>کد ویزیت</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.visitCode}</bdi></p>
                            </div>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>تاریخ ثبت</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.submitDate}</bdi></p>
                            </div>
                        </div>
                        <div className='py-4 border-y-[2px] border-secondary'>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>دامپزشک</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.vetName}</bdi></p>
                            </div>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>تاریخ ویزیت</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.visitDate}</bdi></p>
                            </div>
                             <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>وضعیت ویزیت</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.visitStatus}</bdi></p>
                            </div>
                        </div>
                        <div className='py-4 border-b-[2px] border-secondary'>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>تشخیص پزشک</bdi></p>
                                <p className='text-base text-black font-medium lg:font-black leading-6 lg:mr-2'><bdi>{data.vetComment}</bdi></p>
                            </div>
                            <div className='flex justify-between items-center my-1'>
                                <p className='text-base text-gray-400  font-medium leading-6'><bdi>تصویر نسخه</bdi></p>
                                <div className='flex items-center'>
                                    <p className='text-sm text-info font-medium leading-6'><bdi>{data.vetOrderPic}</bdi></p>
                                    <button
                                        className='text-sm text-white font-medium leading-5 py-1.5 px-3 mr-2 bg-info rounded-[10px]' 
                                        onClick={() => alert("View")}
                                    >مشاهده</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for Desktop */}
                    <div className='hidden lg:flex flex-col w-1/2'>
                        <p className='hidden lg:block text-lg text-black font-black leading-7 before:inline-block before:w-2 before:h-4 before:bg-primary before:rounded-[2px] before:ml-2'><bdi>شرح حال پزشک</bdi></p>
                        <div className='flex flex-row pt-7'>
                            <div className='flex flex-col'>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>تاریخ ویزیت:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.visitDate}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>تاریخ ثبت:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.submitDate}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>دامپزشک:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.vetName}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5 px-3 py-1.5 border-[1px] border-[#9B9BA1] rounded-[5px]'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>تشخیص پزشک:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.vetComment}</bdi></p>
                                </div>
                            </div>
                            <div className='flex flex-col mr-10'>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>کد ویزیت:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.visitCode}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>نام پت:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.petName}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>وضعیت ویزیت:</bdi></p>
                                    <p className='text-base text-black font-black leading-6 mr-1.5'><bdi>{data.visitStatus}</bdi></p>
                                </div>
                                <div className='flex items-center my-2.5 px-3 py-1.5 border-[1px] border-[#9B9BA1] rounded-[5px]'>
                                    <p className='text-base text-black font-medium leading-6'><bdi>تصویر نسخه:</bdi></p>
                                    <p className='text-base text-info font-black leading-6 mr-1.5'><bdi>{data.vetOrderPic}</bdi></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for Both Mobile & Desktop */}
                    <div className='w-full lg:w-1/2 lg:mr-10 xl:mr-[70px]'>
                        <div className='flex flex-col py-4'>
                            <p className='text-base text-gray-400 lg:text-black font-medium leading-6 lg:opacity-90'><bdi>خلاصه شرح حال پزشک:</bdi></p>
                            <p className='text-base text-black font-medium leading-7 pt-4 lg:px-4 lg:py-2 lg:mt-2 lg:opacity-70 lg:bg-[#F8F8F8] lg:border-[1px] lg:border-gray-400 lg:rounded-[5px]'><bdi>{data.description}</bdi></p>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Detail;