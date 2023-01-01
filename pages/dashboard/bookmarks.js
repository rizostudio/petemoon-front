import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';
import ProductPic from '../../asset/icons/Capture 1.svg';
import Trash_Icon from '../../asset/icons/trash.svg';
import ShopCart_Icon from '../../asset/icons/shopping-cart.svg';

const Bookmarks = () => {
    const [bookmarkArr,setBookmarkArr] = useState([  
                            {key:1, name:"غذای خشک سگ" , picture:'', price: 120000, discount:0},
                            {key:2, name:"توپ سبک گربه" , picture:'', price: 125000, discount:15},
                            {key:3, name:"اسباب بازی سگ" , picture:'', price: 76000, discount:0},
                            {key:1, name:"غذای خشک سگ" , picture:'', price: 120000, discount:0},
                            {key:2, name:"توپ سبک گربه" , picture:'', price: 125000, discount:15},
                            {key:3, name:"اسباب بازی سگ" , picture:'', price: 76000, discount:0},   
                        ])
    const TrashHandler = (index) => {
        console.log('f')
        const newArr = [...bookmarkArr];
        newArr.splice(1,index);
        setBookmarkArr(newArr)
        console.log(bookmarkArr)
    }
    return (
        <DashboardLayout>
            <div className='w-full h-screen lg:h-auto flex flex-col lg:flex-row-reverse lg:flex-wrap justify-between lg:justify-center items-stretch'>
                {bookmarkArr? bookmarkArr.map((item,index) => 
                    <div key={item.key} className='flex flex-col w-full lg:max-w-[35%] my-2 lg:mx-2 lg:my-3 p-5 lg:p-7 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-second lg:border-gray-400 lg:shadow-shadowB'>
                        <div className='h-[100px] w-full bg-gray-400 overflow-hidden rounded-[10px] lg:rounded-[20px] border-[1px] solid border-first'></div>
                        <div className='w-full flex flex-col justify-between items-stretch'>
                            <div className='w-full flex flex-row-reverse justify-between items-center mt-2'>
                                <div className='w-full flex flex-row-reverse items-center lg:justify-between'>
                                    <h2 className='text-base lg:text-base text-black font-semibold lg:font-black leading-7 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:text-first after:content-[""] after:ml-2 after:align-middle after:rounded-[2px]'>{item.name}</h2>
                                    {item.discount > 0  &&  <p className='text-sm text-white font-medium leading-5 py-[2px] px-[5px] lg:py-[2px] lg:px-2 mr-2 h-full rounded-[5px] lg:rounded-[10px]  bg-first after:content-["%"] after:text-[10px]'>
                                                                <bdi className='hidden lg:inline-block text-[8px] font-normal opacity-[0.8] mr-1'>تخفیف</bdi>
                                                            {item.discount} </p>
                                    }
                                </div>
                                <div className='lg:hidden text-right'>
                                    <p className='text-base text-black font-medium leading-6 flex flex-row-reverse items-center after:content-["تومان"] after:mr-1 after:text-xs'>
                                        {item.discount > 0   ?  (item.price * (1 - item.discount/100)).toLocaleString() : item.price.toLocaleString()}
                                    </p>
                                    {item.discount > 0  && 
                                        <p className='line-through text-sm text-gray-400 font-light'>{item.price.toLocaleString()}</p>
                                    }
                                </div>
                            </div>
                            <div className='w-full flex flex-row-reverse justify-between items-center lg:items-end mt-3'>
                                <div className='hidden lg:block text-right'>
                                    <p className='text-base text-black font-medium flex flex-row-reverse items-center after:content-["تومان"] after:mr-1 after:text-xs'>
                                        {item.discount > 0   ?  (item.price * (1 - item.discount/100)).toLocaleString() : item.price.toLocaleString()}
                                    </p>
                                    {item.discount > 0  && 
                                        <p className='line-through text-sm text-gray-400 font-light'>{item.price.toLocaleString()}</p>
                                    }
                                </div>
                                <div className='w-full flex flex-row-reverse justify-between lg:justify-end items-center'>
                                    <div 
                                        className='flex flex-row-reverse cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px]' 
                                        onClick={()=> TrashHandler(index)}
                                    >
                                        <Image src={Trash_Icon} alt="TrashICon"/>
                                        <p className='lg:hidden text-xs text-gray-400 font-medium align-bottom mr-1'>حذف از لیست</p>
                                    </div>
                                    <div className='flex flex-row-reverse cursor-pointer lg:p-2 border-none lg:border-solid border-[1px] border-gray-400 rounded-[12px] lg:mr-2'>
                                        <Image src={ShopCart_Icon} alt="ShopCartIcon"/>
                                        <p className='lg:hidden text-xs text-[#4DA4F4] font-medium align-bottom mr-1'>مشاهده و خرید</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </DashboardLayout>
    );
};

export default Bookmarks;