import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';
import ArrowLeftWhite_Icon from '../../asset/icons/Arrow-left-white.svg';
import MapPreserve_Pic from '../../asset/icons/mapPicPreserve.svg';
import Map_Pic from '../../asset/icons/mapPic.svg';
const AddressEdit = () => {
    const [inputError, setInputError] = useState(false)
    return (
        <DashboardLayout>
            <div className='flex flex-col lg:bg-white lg:rounded-[25px] lg:px-12 lg:py-6'>
                <div className='w-full flex lg:hidden flex-row-reverse justify-between items-center mb-10'>
                    <p className='text-lg text-black font-black leading-7 align-middle after:inline-block after:w-2 after:h-5 after:bg-first after:ml-1 after:rounded-[2px]'>جزئیات آدرس</p>
                    <Link href='/dashboard' className='bg-first opacity-[0.8] p-4 rounded-[15px]'>
                        <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className='w-full'/>
                    </Link>
                </div>
                <form className='flex flex-col lg:flex-row-reverse justify-start lg:justify-between'>
                    <div className='lg:flex flex-row-reverse justify-between items-center w-full'>
                        <div className='text-right lg:w-1/2 my-2 lg:m-1'>
                            <label className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:ml-2 after:align-middle after:rounded-[2px]'>استان</label>
                            <input list="provinces" type='text' placeholder="استان" className='w-full p-4 lg:p-2 bg-transparent text-right border-[1px] solid border-gray-400 lg:border-[rgba(58, 71, 80, 0.5)] rounded-[12px] lg:rounded-[5px] focus:bg-white focus:border-error'/>
                            <datalist id="provinces" className='border-[1px] solid border-gray-500 rounded-[12px] lg:rounded-[5px]'>
                                <option>تهران</option>
                                <option>فارس</option>
                                <option>سیستان و بلوچستان</option>
                                <option>کهکلویه و بویراحمد</option>
                                <option>قم</option>
                                <option>مازندران</option>
                                <option>گلستان</option>
                            </datalist>
                            {inputError ? <p className='text-[12px] text-error font-semibold leading-5 mt-1'><bdi>فرمت صحیح نمی باشد!</bdi></p> : null }                 
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-between lg:justify-end items-stretch'>
                        <div className='w-full lg:w-[250px] h-[150px] relative my-4 lg:my-1 border-[1px] solid border-second lg:border-none rounded-[10px] overflow-hidden'>
                            <Image src={MapPreserve_Pic} alt="MapPic" className='w-full h-full object-cover'/>
                            <p className='text-sm text-error text-center font-medium leading-4 absolute top-[40%] left-[15%]'>ثبت روی نقشه</p>
                        </div>
                        <div className='w-full flex flex-row mt-10 lg:mt-6'>
                            <button className='w-full text-lg text-black text-center font-medium leading-8 p-3 lg:px-15 lg:py-2 bg-[#CFEBD8] border-[1px] border-verify rounded-[12px] lg:rounded-[5px]'>ذخیره</button>
                            <button className='hidden lg:block text-lg text-error text-center font-medium leading-8 p-3 lg:ml-2 lg:px-4 border-[1px] solid border-error rounded-[5px]'>انصراف</button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
};

export default AddressEdit;