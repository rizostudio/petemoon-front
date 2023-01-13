import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx'
import {v4} from 'uuid';
//components
import DashboardLayout from '../../components/DashboardLayout';
//media
import PetPic from '../../assets/dashboard/PetPic.svg';
import PetPicPreserve from '../../assets/dashboard/PetPicPreserve.svg';
import PetAdd_Icon from '../../assets/dashboard/AddPet.svg';
import PetAdd_IconWhite from '../../assets/dashboard/PetAddWhite.svg';
import TrashRed_Icon from '../../assets/common/TrashIconRed.svg';
import Edit2_Icon from '../../assets/common/EditIcon2.svg';
import More_Icon from '../../assets/common/more.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';

const MyPet = () => {
    //fake data
    const [PetsArr,setPetsArr] = useState([
            {tab:"general", general:{title:"عمومی", name:"پیترمن", kind:"سگ خانگی", sex:"ماده", race:"بولداگ", birth:"۱۵ آگوست ۱۹۹۹", pic:PetPic},
            medical:{title:"پزشکی", weight:"۵کیلوگرم", underlyingDisease:"سرخک حاد", latestVaccinateDate:"۲۱ نوامبر ۲۰۱۰",latestAntiParasiteVaccinateDate:"۷ سپتامبر ۲۰۱۴"}},
            {tab:"general", general:{title:"عمومی", name:"تی تی", kind:"سگ خانگی", sex:"ماده", race:"بولداگ", birth:"۱۵ آگوست ۱۹۹۹", pic:""},
            medical:{title:"پزشکی", weight:"۵کیلوگرم", underlyingDisease:"سرخک حاد", latestVaccinateDate:"۲۱ نوامبر ۲۰۱۰",latestAntiParasiteVaccinateDate:"۷ سپتامبر ۲۰۱۴"}},
    ]) 
    // for remove data from list
    const TrashHandler = (index) => {
        const newArr = [...PetsArr];
        newArr.splice(1,index);
        setPetsArr(newArr)
        console.log(PetsArr)
    }
    //for choose data to show
    const TabHandler = (index,tabKind) => {
        const newData = [...PetsArr];
        newData[index].tab = (tabKind == "general") ? "general" : "medical";
        setPetsArr(newData)
    }

    return (
        <DashboardLayout>
             <div className='flex flex-col justify-between items-stretch'>
                {PetsArr && PetsArr.map((item,index) => 
                    <div 
                        key={v4()} 
                        className='flex flex-col bg-[#E7E7E8] rounded-[20px] lg:rounded-[25px] w-full my-2 lg:my-6'
                    >
                        {/* toggle between general and medical detail */}
                        <div className="tabs self-center flex flex-row justify-center lg:justify-start w-full lg:self-end my-3 lg:px-8 lg:my-8 border-b-[1px] solid border-white">
                            <a className={clsx("tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",{
                                'tab-active' : item.tab == "general"
                            })} onClick={() => TabHandler(index,"general")}>عمومی</a> 
                            <a className={clsx("tab tab-bordered border-white w-1/2 lg:w-auto text-xl font-black leading-10",{
                                'tab-active' : item.tab == "medical"
                            })} onClick={() => TabHandler(index,"medical")}>پزشکی</a>
                         </div>

                        <div className='bg-white px-4 py-5 lg:p-10 mx-3 my-4 lg:mx-10 lg:my-8 rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                            <div
                                className='flex flex-col justify-between items-stretch'
                            >   
                                {/* heading box */}
                                <div className='flex flex-row items-center justify-end lg:justify-between'>
                                    <p className='hidden lg:block text-lg text-right text-black font-bold leading-8 opacity-90 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'><bdi>{item.general.name}</bdi></p>
                                    <div className='flex flex-row items-center'>
                                        <Link 
                                            href={'/dashboard/my-pet-edit'} 
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
                                {/* general detail */}
                                <div className='flex flex-row justify-between items-stretch mt-2 lg:mt-8'>
                                    <div className={clsx('flex-col lg:flex-row justify-between items-stretch',{
                                        'hidden' : item.tab !== 'general',
                                        'flex': item.tab == 'general' })}
                                    >
                                        <div className='lg:hidden flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2'>
                                                <p className='lg:hidden text-base text-black'>نام</p>
                                                <p className='lg:hidden text-sm text-gray-400 mr-3 font-medium'><bdi>{item.general.name}</bdi></p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2'>
                                                <p className='text-base text-black'>نوع</p>
                                                <p className='text-sm text-gray-400 mr-3 font-medium'><bdi>{item.general.kind}</bdi></p>
                                            </div>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4'>
                                                <p className='text-sm lg:text-base text-black'>جنسیت</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.general.sex}</bdi></p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col lg:mr-10'>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2'>
                                                <p className='text-sm lg:text-base text-black'>نژاد</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.general.race}</bdi></p>
                                            </div>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4'>
                                                <p className='text-sm lg:text-base text-black'>تاریخ تولد</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.general.birth}</bdi></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* medical detail */}
                                    <div className={clsx('flex-col lg:flex-row justify-between items-stretch',{
                                        'hidden' : item.tab !== 'medical',
                                        'flex': item.tab == 'medical'
                                    })}>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:m-2'>
                                                <p className='text-base text-black'>وزن</p>
                                                <p className='text-sm text-gray-400 mr-3 font-medium'><bdi>{item.medical.weight}</bdi></p>
                                            </div>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-2 lg:my-4'>
                                                <p className='text-sm lg:text-base text-black'>بیماری زمینه ای</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.medical.underlyingDisease}</bdi></p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col lg:mr-10'>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-2'>
                                                <p className='text-sm lg:text-base text-black'>تاریخ آخرین واکسن</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.medical.latestVaccinateDate}</bdi></p>
                                            </div>
                                            <div className='flex flex-row items-center font-semibold lg:font-bold opacity-90 leading-8 mb-2 lg:mx-0 lg:my-4'>
                                                <p className='text-sm lg:text-base text-black'>تاریخ آخرین واکسن ضد انگل</p>
                                                <p className='text-xs lg:text-sm text-gray-400 mr-2 lg:mr-3 font-medium'><bdi>{item.medical.latestAntiParasiteVaccinateDate}</bdi></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* pet's picture */}
                                    <div className='self-end'>
                                        <div className='w-[100px] h-[100px] relative overflow-hidden rounded-[10px]'>
                                            <Image 
                                                src={item.general.pic? item.general.pic : PetPicPreserve} 
                                                alt="PetPic" 
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                    </div>
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
                                                <p className='text-base text-black font-medium leading-8 mr-2'>حذف پت</p>
                                            </label>   
                                            <label 
                                                htmlFor='More-modal'
                                                className="w-full flex flex-row items-center px-9 py-3"
                                            >
                                                <Link
                                                    href="/dashboard/my-pet-edit"
                                                    className='flex flex-row'
                                                >
                                                    <Image 
                                                        src={Edit2_Icon} 
                                                        alt="EditIcon" 
                                                        width={15} 
                                                        height={15}
                                                    />
                                                    <p className='text-base text-black font-medium leading-8 mr-2'>ویرایش پت</p>
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
                                                <p className='text-lg text-black font-medium lg:font-bold leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>حذف پت</p>
                                                <label htmlFor="Trash-modal">
                                                    <Image 
                                                        src={CloseButton_Icon} 
                                                        alt="CloseIcon"
                                                    />
                                                </label>
                                            </div>
                                            <p className='text-base lg:text-xl text-gray-400 text-right font-medium leading-8 my-2 lg:my-5'>آیا از حذف این پت از لیست پت ها اطمینان دارید؟</p>
                                            <div className='flex flex-row items-center justify-between w-full lg:w-1/2'>
                                                <label 
                                                    htmlFor='Trash-modal' 
                                                    onClick={() => TrashHandler(index)} 
                                                    className='w-full text-sm text-white text-center font-semibold py-3 lg:py-2 lg:px-8 rounded-[5px] bg-error ml-2 border-[2px] solid border-error'
                                                >حذف پت</label>
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
                        </div>
                    </div>
                )}
                {/* for Adding new pet */}
                <Link 
                    href="/dashboard/my-pet-edit" 
                    className='w-full flex flex-row lg:flex-col justify-center items-start lg:items-center mt-10 lg:mt-2 py-5 lg:py-10 bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] shadow-shadowB'
                >
                    <Image 
                        src={PetAdd_IconWhite} 
                        alt="PetAddIcon" 
                        className='mr-2 lg:mr-0 lg:hidden'
                    />
                    <Image 
                        src={PetAdd_Icon} 
                        alt="PetAddIcon" 
                        className='hidden lg:block'
                    />
                    <p className='text-lg lg:text-3xl text-white lg:text-primary text-center font-medium lg:font-bold leading-7 lg:mt-5'>ثبت پت جدید</p>
                </Link>
            </div>
        </DashboardLayout>
    );
};

export default MyPet;