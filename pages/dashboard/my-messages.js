import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Trash_Icon from '../../asset/icons/trash.svg';
import DashboardLayout from '../../components/DashboardLayout';
const MyMessage = () => {
    const [messagesArr,setMessagesArr] = useState([   {key:0, from:"پیام از پتمون", date:"۱۸ آبان ۱۴۰۰", subject:"نظراتت برای بهبود سرویس دهی پتمون با ارزشه", text:"لطفا نظرت رو با ما به اشتراک بذار...",CTA:'ثبت نظر'},
                            {key:1, from:"پیام از پتمون", date:"۱۰ آبان ۱۴۰۰", subject:"تخفیف ویژه فروشگاه از ۲۰ آبان", text:"تخفیف ها رو فراموش نکن...", CTA:'فروشگاه'},
                            {key:2, from:"پیام از پتمون", date:"۰۲ مهر ۱۴۰۰", subject:"سایت پتمون از یکشنبه تا سه شنبه در دست تعمیر", text:"ممنون از حمایت و همراهی شما..."},
                            {key:3, from:"پیام از پتمون", date:"", subject:"", text:""},
                            {key:4, from:"", data:"", subject:"", text:""}
                        ]);
    const TrashHandler = (index) => {
        const newArr = [...messagesArr];
        newArr.splice(1,index);
        setMessagesArr(newArr)
    }
    return (
        <DashboardLayout>
            <div className='w-full h-screen lg:h-auto flex flex-col items-stretch'>
                {messagesArr ?
                    messagesArr.map((item, index) => 
                        item.subject ? 
                        <div key={item.key}
                            className="w-full h-auto flex flex-col justify-between items-stretch my-2 lg:my-4 px-4 lg:px-10 py-2 lg:py-8 bg-white rounded-[15px] lg:rounded-3xl border-[1px] solid lg:border-none border-second lg:shadow-shadowB"
                        >
                            <div className='flex flex-row-reverse justify-end lg:justify-between items-center'>
                                <p className='hidden lg:block lg:text-base text-black font-medium lg:font-black leading-7 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:text-first after:content-[""] after:ml-2 after:align-middle after:rounded-[2px]'>
                                    <bdi>{item.from}</bdi>
                                </p>
                                <p className='text-xs lg:text-base text-gray-400 font-medium leading-4'><bdi>{item.date}</bdi></p>
                            </div>
                            <div className='self-end text-right mt-1 mb-6 lg:mt-5'>
                                <h3 className='text-base lg:text-lg text-black font-medium leading-7 mb-1'><bdi>{item.subject}</bdi></h3>
                                <p className='text-sm lg:text-base text-gray-400 font-medium leading-6'><bdi>{item.text}</bdi></p>
                            </div>
                            <div className='w-full flex flex-row-reverse justify-between items-center'>
                                {item.CTA ?
                                    <p className='text-xs lg:text-xl text-first font-medium leading-4 before:content-["<"] before:mr-2 lg:before:mr-3 before:text-base lg:before:text-2xl'><bdi>{item.CTA}</bdi></p>
                                : <p></p>
                                }   
                                <div 
                                    className='flex flex-row-reverse cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px]' 
                                    onClick={()=> TrashHandler(index)}
                                    >
                                    <Image src={Trash_Icon} alt="TrashICon"/>
                                    <p className='lg:hidden text-xs text-gray-400 font-medium align-bottom mr-1'>حذف از لیست</p>
                                </div>
                            </div>    
                        </div>
                        : null) 
                    : null}

            </div>
        </DashboardLayout>
    );
};

export default MyMessage;