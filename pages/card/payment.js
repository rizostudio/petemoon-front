import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
//component
//media
import MapPreserve_Pic from '../../assets/dashboard/mapPicPreserve.svg';
import Map_Pic from '../../assets/dashboard/mapPic.svg';
import TrashRed_Icon from '../../assets/common/TrashIconRed.svg';
import Edit2_Icon from '../../assets/common/EditIcon2.svg';
import More_Icon from '../../assets/common/more.svg';
import LocationAdd_Icon from '../../assets/dashboard/location-add.svg';
import LocationAdd_White_Icon from '../../assets/dashboard/location-add-white.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';
import ArrowLeftWhite_Icon from '../../assets/common/leftArrowWhite.svg'

const Payment = () => {
    const router = useRouter()
    // fake data
    const [AddressesArr,setAddressesArr] = useState([
        {key:0, title:"آدرس اول", province:"تهران", city:"شهرستان آبعلی", zipCode:123456789, receiver:"جنتی دوست", mapLocation:Map_Pic, location:"تهران، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},
        {key:1, title:"آدرس خانه", province:"سیستان و بلوچستان", city:"زاهدان", zipCode:123456789, receiver:"محمد علی باقری کنی همدانی", mapLocation:"", location:"هزاهدان، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},
        {key:2, title:"آدرس محل کار", province:"فارس", city:"شیراز", zipCode:123456789, receiver:"حسین الهی نژاد جنت امامی", mapLocation:Map_Pic, location:"هشیراز، خیابان دماوند، سه راه تهران پارس، شهرک امید، بلوک۳۷غربی زنگ ۳۸ واحد ۱۲"},

    ]) 
    //deliever method 
    const delieverMethod = [
        {title:"پیک موتوری", name:"motorPost"}, 
        {title:"پیک فروشگاه", name:"storePost"},
        {title:"پست پیشتاز", name:"pishtazPost"}, 
        {title:"اسنپ", name:"snappPost"},
    ]
    // for remove data from list
    const TrashHandler = (index) => {
        const newArr = [...AddressesArr];
        newArr.splice(1,index);
        setAddressesArr(newArr)
        console.log(AddressesArr)
    }

    return (
        <div className='flex flex-col justify-between items-stretch bg-[#f8f8f8]'>
            <div>
                {/*Heading for mobile */}
                <div className='w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5'>
                    <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]'>پرداخت</p>
                    <Link 
                        href='/card' 
                        className='bg-primary opacity-[0.8] p-4 rounded-[15px]'                    
                    >
                        <Image 
                            src={ArrowLeftWhite_Icon} 
                            alt="ArrowIcon" 
                            className='w-full'
                        />
                    </Link>
                </div>
                {/* main container */}
                <div className='flex flex-col px-10 py-5 lg:px-[120px]'>
                    {AddressesArr && AddressesArr.map((item,index) => 
                        <div 
                            key={item.key} 
                            className='flex flex-col justify-between items-stretch my-2 lg:my-3 px-5 lg:px-12 py-4 lg:py-8 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-secondary lg:border-none'
                        >
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex items-center'>
                                    <input 
                                        id={`address${index}`}
                                        type="checkbox"
                                        className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                        />
                                    <label
                                        htmlFor={`address${index}`} 
                                        className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 mr-4'
                                    ><bdi>{item.title}</bdi></label>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Link 
                                        href={'/card/address-edit'} 
                                        className="hidden lg:block p-2 border-[1px] solid border-[#4DA4F4] rounded-[12px]"
                                    >
                                        <Image 
                                            src={Edit2_Icon} 
                                            alt="EditIcon" 
                                            width={15} 
                                            height={15}
                                        />
                                    </Link>
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
                                            htmlFor='More-modal'
                                            className="w-full flex flex-row items-center px-9 py-3 border-b-[1px] border-gray-400 solid"
                                        >
                                            <Link
                                                href="/card/address-edit"
                                                className='flex flex-row'
                                            >
                                                <p className='text-base text-primary font-medium leading-8 mr-2'>آدرس جدید</p>
                                            </Link>
                                        </label>
                                        <label 
                                            htmlFor='More-modal'
                                            className="w-full flex flex-row items-center px-9 py-3"
                                        >
                                            <Link
                                                href="/card/address-edit"
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

                        </div>
                    </div>
                    )}
                    {/* add new location */}
                    <div className='w-full hidden lg:flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 border-[1px] border-primary rounded-[12px] lg:rounded-[25px]'>
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
                    {/* deliever method */}
                    <div className='bg-white my-2 lg:my-3 px-5 lg:px-12 py-4 lg:py-8 rounded-[15px] lg:rounded-[25px]'>
                        <p><bdi>روش ارسال:</bdi></p>
                        <div className='grid grid-cols-2 '>
                            {delieverMethod.map((item, index) => 
                                    <div 
                                        key={index}
                                        className='flex items-center'
                                    >
                                        <input 
                                            id={`kind${index}`}
                                            type="checkbox"
                                            className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                        />
                                        <label
                                            htmlFor={`kind${index}`}
                                            className='mr-2'
                                        >{item.title}</label>
                                    </div>
                            )}
                        </div>
                    </div>
                    {/* other description & confirm box */}
                    <div className='flex justify-between my-5 lg:my-8'>
                        <textarea
                            placeholder='توضیحات'
                            className='text-lg text-gray-400 font-bold leading-8 w-full lg:w-2/3 px-5 py-3 lg:px-10 lg:py-5 border-[1px] border-gray-400 rounded-[15px] lg:rounded-[25px]'   
                        />
                        <div className='hidden lg:flex flex-col justify-between items-center w-1/3 p-5 mr-5 bg-[#ea63521a] rounded-[15px]'>
                            <div className='flex justify-between w-full'>
                                <p className='text-sm text-gray-400 font-medium leading-5'><bdi>هزینه ارسال:</bdi></p>
                                <p className='text-sm text-gray-400 font-medium leading-5 after:content-["تومان"] after:text-xs after:mr-1'><bdi>{(15000).toLocaleString()}</bdi></p>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='text-xl text-gray-400 font-normal leading-8'>مجموع سبد:</p>
                                <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                            </div>
                            <button
                                onClick={() => router.push('/card/payment-confirmation')} 
                                className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1'
                            >پرداخت</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Continue Box */}
            <div className='flex lg:hidden flex-col justify-between items-stretch w-full'>
                <div className='flex justify-between w-full px-10 py-5'>
                        <p className='text-base text-gray-400 font-medium leading-5'><bdi>هزینه ارسال:</bdi></p>
                        <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'><bdi>{(15000).toLocaleString()}</bdi></p>
                </div>
                <div className='flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary'>
                    <button 
                        onClick={() => router.push('/card/payment-confirmation')}
                        className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]'
                        >پرداخت</button>
                    <div className='flex flex-col'>
                        <p className='text-base text-gray-400 font-normal leading-8'>مجموع سبد خرید</p>
                        <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;