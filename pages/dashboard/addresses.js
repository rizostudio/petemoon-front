import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//component
import DashboardLayout from '../../components/DashboardLayout';
//media
import MapPreserve_Pic from '../../assets/dashboard/mapPicPreserve.svg';
import Map_Pic from '../../assets/dashboard/mapPic.svg';
import TrashRed_Icon from '../../assets/common/TrashIconRed.svg';
import Edit2_Icon from '../../assets/common/EditIcon2.svg';
import More_Icon from '../../assets/common/more.svg';
import LocationAdd_Icon from '../../assets/dashboard/location-add.svg';
import LocationAdd_White_Icon from '../../assets/dashboard/location-add-white.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';

const Addresses = () => {
    // fake data
    const [AddressesArr,setAddressesArr] = useState([
        {key:0, title:"آدرس اول", province:"تهران", city:"شهرستان آبعلی", zipCode:123456789, receiver:"جنتی دوست", mapLocation:Map_Pic, location:"تهران، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},
        {key:1, title:"آدرس خانه", province:"سیستان و بلوچستان", city:"زاهدان", zipCode:123456789, receiver:"محمد علی باقری کنی همدانی", mapLocation:"", location:"هزاهدان، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},
        {key:2, title:"آدرس محل کار", province:"فارس", city:"شیراز", zipCode:123456789, receiver:"حسین الهی نژاد جنت امامی", mapLocation:Map_Pic, location:"هشیراز، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},

    ]) 
    // for remove data from list
    const TrashHandler = (index) => {
        const newArr = [...AddressesArr];
        newArr.splice(1,index);
        setAddressesArr(newArr)
        console.log(AddressesArr)
    }

    return (
        <DashboardLayout>
            <div className='flex flex-col justify-between items-stretch'>
                {AddressesArr && AddressesArr.map((item,index) => 
                    <div 
                        key={item.key} 
                        className='flex flex-col justify-between items-stretch my-2 lg:my-3 px-5 lg:px-12 py-2 lg:py-8 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-none lg:shadow-shadowB'
                    >
                        <div className='flex flex-row items-center justify-end lg:justify-between'>
                        <p className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'><bdi>{item.title}</bdi></p>
                            <div className='flex flex-row items-center'>
                                <Link 
                                    href={'/dashboard/address-edit'} 
                                    className="hidden lg:block p-2 border-[1px] solid border-[#4DA4F4] rounded-[12px]"
                                >
                                    <Image 
                                        src={Edit2_Icon} 
                                        alt="EditIcon" 
                                        width={15} 
                                        height={15}
                                    />
                                </Link>
                                <label 
                                    htmlFor='Trash-modal'
                                    className="hidden lg:block p-2 border-[1px] solid border-error rounded-[12px] cursor-pointer mr-2 "
                                >
                                    <Image 
                                        src={TrashRed_Icon} 
                                        alt="TrashIcon" 
                                        width={15} 
                                        height={15}
                                    />
                                </label>
                                <label htmlFor='More-modal'>
                                    <Image 
                                        src={More_Icon} 
                                        alt="MoreIcon" 
                                        className="lg:hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-stretch mt-2 lg:mt-8'>
                            <div className='flex flex-col lg:flex-row lg:justify-between'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:my-2'>
                                        <p className='hidden lg:block text-base text-black'>استان</p>
                                        <p className='hidden lg:block text-sm text-gray-400 mr-3 font-medium'><bdi>{item.province}</bdi></p>
                                        <p className='lg:hidden text-sm text-black'><bdi>استان/شهر</bdi></p>
                                        <p className='lg:hidden text-xs text-gray-400 mr-2 font-medium'><bdi>{item.province +"/"+ item.city}</bdi></p>
                                    </div>
                                    <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2'>
                                        <p className='text-sm lg:text-base text-black'>کد پستی</p>
                                        <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.zipCode}</bdi></p>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:mr-10'>
                                    <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 lg:my-2'>
                                        <p className='hidden lg:block text-sm lg:text-base text-black'>شهر</p>
                                        <p className='hidden lg:block text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.city}</bdi></p>
                                    </div>
                                    <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 my-2'>
                                        <p className='text-sm lg:text-base text-black'>تحویل گیرنده</p>
                                        <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.receiver}</bdi></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {item.mapLocation ? <div></div> : <div></div>}
                                <div className='w-[100px] h-[100px] relative border-[1px] solid border-secondary rounded-[10px]'>
                                    <Image 
                                        src={item.mapLocation? item.mapLocation : MapPreserve_Pic} 
                                        alt="MapPic" 
                                        className='w-full h-full'
                                    />
                                    {!item.mapLocation && 
                                        <p className='text-sm text-error text-center font-medium leading-4 absolute top-[40%] left-[15%]'>ثبت روی نقشه</p>}    
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center text-right font-semibold lg:font-bold opacity-90 leading-8 my-2'>
                            <p className='text-sm lg:text-base text-black'>آدرس پستی</p>
                            <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.location}</bdi></p>
                        </div>
                    {/* Modals */}
                    <div>
                        {/* for more-modal  */}
                        <input 
                            type="checkbox" 
                            id="More-modal" 
                            className="modal-toggle" 
                        />
                        <label 
                            htmlFor="More-modal" 
                            className="modal cursor-pointer"
                        >
                            <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 mx-auto p-0 bg-white rounded-none">
                                <div className='w-full flex flex-col justify-between items-end'>  
                                    <label 
                                        htmlFor='Trash-modal'
                                        className="w-full flex flex-row items-center px-10 py-4 border-b-[1px] border-gray-400 solid"
                                    >
                                        <Image 
                                            src={TrashRed_Icon} 
                                            alt="TrashIcon" 
                                            width={15} 
                                            height={15}
                                        />
                                        <p className='text-base text-black font-medium leading-8 mr-2'>حذف آدرس</p>
                                    </label>   
                                    <label 
                                        htmlFor='More-modal'
                                        className="w-full flex flex-row items-center px-9 py-3"
                                    >
                                        <Link
                                            href="/dashboard/address-edit"
                                            className='flex flex-row'
                                        >
                                            <Image 
                                                src={Edit2_Icon} 
                                                alt="EditIcon" 
                                                width={15} 
                                                height={15}
                                            />
                                            <p className='text-base text-black font-medium leading-8 mr-2'>ویرایش آدرس</p>
                                        </Link>
                                    </label>
                                </div>
                            </label>
                        </label>
                        {/* for trash-modal  */}
                        <input 
                            type="checkbox" 
                            id="Trash-modal" 
                            className="modal-toggle" 
                        />
                        <label 
                            htmlFor="Trash-modal" 
                            className="modal cursor-pointer"
                        >
                            <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">                
                                <div className='w-full flex flex-col justify-between items-stretch'>
                                    <div className='w-full flex flex-row justify-between items-center'>
                                        <p className='text-lg text-black font-medium lg:font-bold leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:text-primary before:content-[""] before:ml-2 before:align-middle before:rounded-[2px]'>حذف آدرس</p>
                                        <label htmlFor="Trash-modal">
                                            <Image 
                                                src={CloseButton_Icon} 
                                                alt="CloseIcon"
                                            />
                                        </label>
                                    </div>
                                    <p className='text-base lg:text-xl text-gray-400 text-right font-medium leading-8 my-2 lg:my-5'>آیا از حذف این آدرس از لیست آدرس ها اطمینان دارید؟</p>
                                    <div className='flex flex-row items-center justify-between w-full lg:w-1/2'>
                                        <label 
                                            htmlFor='Trash-modal' 
                                            onClick={() => TrashHandler(index)} 
                                            className='w-full text-sm text-white text-center font-semibold py-3 lg:py-2 lg:px-8 rounded-[5px] bg-error ml-2 border-[2px] solid border-error'
                                        >حذف آدرس</label>
                                        <label 
                                            htmlFor="Trash-modal" 
                                            className='w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error'
                                        >انصراف</label>
                                    </div>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
                )}
                {/* add new location */}
                <div className='w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB'>
                    <Image 
                        src={LocationAdd_White_Icon} 
                        alt="LocationAddIcon" 
                        className='mr-2 lg:mr-0 lg:hidden'
                    />
                    <Image 
                        src={LocationAdd_Icon} 
                        alt="LocationAddIcon" 
                        className='hidden lg:block'
                    />
                    <p className='text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5'>ثبت آدرس جدید</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Addresses;