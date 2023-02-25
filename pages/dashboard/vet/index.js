import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { v4 } from 'uuid';

//component
import DashboardLayout from '@/components/DashboardLayout';


//media



const Vet = () => {
    const data = [
        {submitDate:"۲۵ آذر ۱۴۰۰", vetName:"علی محبی", visitDate:" ۵ بهمن ۱۴۰۱", time:"17:30", visitStatus:"انجام شده", visitCode:"#750BV"},
        {submitDate:"۲۵ آذر ۱۴۰۰", vetName:"علی محبی", visitDate:" ۵ بهمن ۱۴۰۱", time:"17:30", visitStatus:"انجام شده", visitCode:"#750BV"},
        {submitDate:"۲۵ آذر ۱۴۰۰", vetName:"علی محبی", visitDate:" ۵ بهمن ۱۴۰۱", time:"17:30", visitStatus:"انجام شده", visitCode:"#750BV"},
        {submitDate:"۲۵ آذر ۱۴۰۰", vetName:"علی محبی", visitDate:" ۵ بهمن ۱۴۰۱", time:"17:30", visitStatus:"انجام شده", visitCode:"#750BV"},
    ]
    return (
        <DashboardLayout>
            <div className='flex flex-col items-stretch'>
                <div className='flex flex-col my-2 lg:my-4 mb-[100px]'>
                    {data.length ? data.map((item,index) => 
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between w-full p-5 lg:px-[65px] lg:py-[10] my-1 lg:my-2 bg-white border-[1px] border-secondary lg:border-none rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xs lg:text-xl text-black font-extrabold leading-6 opacity-90 before:inline-block before:align-middle before:w-2.5 lg:before:w-2 before:h-2.5 lg:before:h-4 before:bg-primary before:rounded-full lg:before:rounded-[2px] before:ml-1 lg:before:mr-2'>
                                    <bdi>{item.submitDate}</bdi>
                                </p>
                                <Link 
                                    href={`/dashboard/vet/${index}`}
                                    className="lg:hidden text-xs text-info font-normal leading-4 opacity-90"
                                ><bdi>جزئیات ویزیت</bdi></Link>
                            </div>
                            {/* mobile */}
                            <div key={v4()} className='lg:hidden flex text-[10px] xs:text-sm sm:text-base mt-4'>
                                <div className='flex flex-col text-[10px] xs:text-sm sm:text-base'>
                                    <div className='flex items-center'>
                                        <p className='text-black font-medium leading-7 opacity-95'><bdi>ساعت</bdi></p>
                                        <p className='text-gray-400 font-medium leading-8 mr-2'><bdi>{item.time}</bdi></p>
                                    </div>
                                    <div className='flex items-center mt-2'>
                                        <p className='text-black font-medium leading-7 opacity-95'><bdi>نام دامپزشک</bdi></p>
                                        <p className='text-gray-400 font-medium leading-8 mr-2'><bdi>{item.vetName}</bdi></p>
                                    </div>
                                </div>
                                <div className='flex flex-col mr-2 sm:mr-[80px]'>
                                    <div className='flex items-center'>
                                        <p className='text-black font-medium leading-7 opacity-95'><bdi>وضعیت</bdi></p>
                                        <p className='text-gray-400 font-medium leading-8 mr-2'><bdi>{item.visitStatus}</bdi></p>
                                    </div>
                                    <div className='flex items-center mt-2'>
                                        <p className='text-black font-medium leading-7 opacity-95'><bdi>کد ویزیت</bdi></p>
                                        <p className='text-gray-400 font-medium leading-8 mr-2'><bdi>{item.visitCode}</bdi></p>
                                    </div>
                                </div>
                            </div>
                            {/* desktop */}
                            <div key={v4()} className='hidden lg:flex mr-10'>
                                <div className='flex lg:flex-col items-center'>
                                    <p className='text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]'><bdi>نام دامپزشک</bdi></p>
                                    <p className='text-lg text-[#3A4750] font-extrabold leading-8 pt-4'><bdi>{item.vetName}</bdi></p>
                                </div>
                                <div className='flex lg:flex-col items-center'>
                                    <p className='text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]'><bdi>تاریخ ویزیت</bdi></p>
                                    <p className='text-lg text-[#3A4750] font-extrabold leading-8 pt-4'><bdi>{item.visitDate}</bdi></p>
                                </div>
                                <div className='flex lg:flex-col items-center'>
                                    <p className='text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]'><bdi>وضعیت ویزیت</bdi></p>
                                    <p className='text-lg text-[#3A4750] font-extrabold leading-8 pt-4'><bdi>{item.visitStatus}</bdi></p>
                                </div>
                                <div className='flex lg:flex-col items-center'>
                                    <p className='text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]'><bdi>جزئیات</bdi></p>
                                    <Link
                                        href={`/dashboard/vet/${index}`}
                                        className="text-xs text-center text-verify font-bold leading-5 px-3 py-1 mt-4 bg-[#3BD8831A] border-[1px] border-verify rounded-[10px]"
                                    >
                                        <bdi>مشاهده</bdi>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : 
                    <p className='text-base lg:text-xl text-error font-black leading-10 mt-10'><bdi>در این ماه هیچ سفارشی برای فروشگاه شما ثبت نشده است!</bdi></p>
                    }                    
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Vet;