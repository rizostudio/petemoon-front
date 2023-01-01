import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardLayout from '../../components/DashboardLayout';

const Bookmarks = () => {
    const bookmarkArr = [   
                            {name:"غذای خشک سگ" , picture:'', price: '120000', discount:0},
                            {name:"توپ سبک گربه" , picture:'', price: '100000', discount:15},
                            {name:"اسباب بازی سگ" , picture:'', price: '230000', discount:0},   
                        ]
    return (
        <DashboardLayout>
            <div className='w-full h-screen lg:h-auto flex flex-col lg:flex-row-reverse justify-between items-stretch'>
                {bookmarkArr? bookmarkArr.map(item => 
                    <div className='flex flex-col'>
                        <Image/>
                        <p className='text-base lg:text-base text-black font-medium lg:font-black leading-7 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:text-first after:content-[""] after:ml-2 after:align-middle after:rounded-[2px]'>{item.name}</p>
                        {item.discount > 0  &&  <p><bdi>تخفیف</bdi> {item.discount}% </p>}
                        <div>
                            <p>{item.discount > 0   ?  item.price * (1 - item.discount/100) : item.price}</p>
                            {item.discount > 0  && <p className='line-through'>{item.price}</p>}
                        </div>
                    </div>
                ) : null}
            </div>
        </DashboardLayout>
    );
};

export default Bookmarks;