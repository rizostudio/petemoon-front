import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Trash_Icon from '../../asset/icons/trash.svg';
import DashboardLayout from '../../components/DashboardLayout';
const Orders = () => {
    const OrdersArr = [{date:"۱۸ آبان ۱۴۰۰", status:"delivered" ,statusTitle:"تحویل شده", 
                        orderCode:"#75056", price:200000, receiver:"علی حسینی",
                        discount:24000, Address:"تهران، سعادت آباد میدان کاج، کوچه سوم",
                        products:["A","B","C","D","E","F"]},
                    {date:"۱۰ دی ۱۴۰۱", status:"crossed" ,statusTitle:"مرجوع شده", 
                        orderCode:"#56756", price:120000, receiver:"مهدی یاسری",
                        discount:130000, Address:"تهران میدان انقلاب، خیابان کارگر شمالی، کوچه ادوارد براون",
                        products:["A","B","C","D"]},
                    {date:"۱ مرداد ۱۴۰۲", status:"delivered" ,statusTitle:"تحویل شده", 
                        orderCode:"#87632", price:240000, receiver:"علی کریمی",
                        discount:25000, Address:"تهران خیابان جمهوری",
                        products:["A","B"]}
    ]
    return (
        <DashboardLayout>
        <div className='flex flex-col items-stretch'>
            { OrdersArr ?
                OrdersArr.map((item, index) => 
                    item.orderCode ? 
                    <div key={item.orderCode}
                        className='flex flex-col w-full my-1 lg:my-4 px-4 py-2 lg:px-10 lg:py-7 bg-white rounded-[15px] lg:rounded-[25px] border-[1px] solid border-second lg:border-none lg:shadow-shadowB'
                        >

                        <div className='flex flex-row-reverse justify-between lg:justify-between items-center'>
                            <p className='text-sm lg:text-lg text-black font-black lg:font-bold leading-7 lg:leading-8 after:align-middle after:inline-block after:w-2 after:h-2 lg:after:h-4 after:bg-first after:ml-1 lg:after:ml-2 after:rounded-full lg:after:rounded-[2px]'>
                                <bdi>{item.statusTitle}</bdi>
                            </p>
                            <p className='text-sm lg:text-lg text-gray-400 font-medium leading-4'><bdi>{item.date}</bdi></p>
                        </div>
                        <div className='flex flex-row-reverse items-center mt-4 mb-2 lg:my-10'>
                            <div className='flex flex-col items-end'>
                                <p className='text-base text-black font-semibold leading-8 opacity-90'><bdi>کد سفارش
                                    <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4'>{item.orderCode}</span>
                                </bdi></p>
                                <p className='text-base text-black font-semibold leading-8 opacity-90'><bdi>مبلغ
                                    <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4 after:content-["تومان"] after:mr-1 after:text-sm'>{item.price.toLocaleString()}</span>
                                </bdi></p>
                            </div>
                            <div className='flex flex-col items-end mr-6 lg:mr-20'>
                                <p className='text-base text-black font-semibold leading-8 opacity-90'><bdi>تحویل گیرنده
                                    <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4'>{item.receiver}</span>
                                </bdi></p>
                                <p className='text-base text-black font-semibold leading-8 opacity-90'><bdi>تخفیف
                                    <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4 after:content-["تومان"] after:mr-1 after:text-sm'>{item.discount.toLocaleString()}</span>
                                </bdi></p>  
                            </div>
                        </div>
                        <p className='text-base text-right text-black font-semibold leading-8 opacity-90 self-end mb-2 lg:mb-5'><bdi>آدرس پستی : 
                                    <span className='text-base text-gray-400 font-medium leading-4 mr-2 lg:mr-4'>{item.Address}</span>
                        </bdi></p>
                        <div className="flex flex-row justify-end items-center flex-wrap self-end">
                            {item.products.map(item => 
                            <div className='w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] m-1 lg:m-2 bg-gray-600 rounded-[10px] lg:rounded-[10px]'></div>
                            )}
                        </div>
                    </div>
                    : null) 
                : null}

        </div>
    </DashboardLayout>
    );
};

export default Orders;