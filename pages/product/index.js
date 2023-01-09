import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {v4} from 'uuid'
// media 
import StarEmpty_Icon from '../../assets/common/starEmpty.svg';
import StarGold_Icon from '../../assets/common/startGold.svg';
import ShopBagRedMobile_Icon from '../../assets/common/shopping-cartRedIcon2.svg';
import leftArrow_Icon from '../../assets/common/leftArrowWhite.svg';
import Bookmark_Icon from '../../assets/common/BookmarkBlackIcon.svg';
import Notification_Icon from '../../assets/common/notificationIcon.svg';
import Share_Icon from '../../assets/common/shareIcon.svg';
import Info_Icon from '../../assets/common/info-circle.svg';
import Properties_Icon from '../../assets/product/PropertiesIcon.svg';
import StoreAlt_Logo from '../../assets/product/StoreLogoAlt.svg';
import Availability_Icon from '../../assets/product/availability.svg';
import Originality_Icon from '../../assets/product/originality.svg';
import Guarantee_Icon from '../../assets/product/GuaranteeIcon.svg';
import Support24_Icon from '../../assets/product/24-support.svg';
import FreeSend_Icon from '../../assets/product/FreeSendIcon.svg';
import ProfileAlt_Pic from '../../assets/product/profilePicAlt.svg';

const SingleProduct = () => {
    const data = {name:"غذای خشک سگ های خانگی",group:"دسته خوراکی / سگ",commentsNumber:250, stars:3, price:123000, discount:20, amount:10,
        property:{for:"سگ خانگی", kind:"خوراکی حیوانی", MadeIn:"تایوان", dimension:"۲۰۰۰*۱۰۰۰", weight:2000, OtherDescription:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد."}, 
        description:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.", 
        seller:[{name:"شهر پت", logo:StoreAlt_Logo, price:135000},{name:"پتمون", logo:StoreAlt_Logo, price:140000},{name:"پتجا", logo:StoreAlt_Logo, price:150000}], 
        comments:[  {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"}]
                }
    // for showing stars
    const starsBoxHandler = (stars) => {
        const starsBox = [] ; 
        for(let i=0; i < stars; i++) {
            starsBox.push(<Image src={StarGold_Icon}/>)
        }
        for(let i=0; i < (5 - stars) ; i++) {
            starsBox.push(<Image src={StarEmpty_Icon}/>)
        }
        return starsBox;
    }
        
    return (
        <div id="ProductPage" className='w-full h-full flex flex-col justify-between items-stretch bg-[#f8f8f8] lg:px-12 py-5'>
            <style jsx>{`#ProductPage {direction:rtl;}`}</style> {/* change direction for this page */}
            {/*Heading for mobile */}
            <div className='flex lg:hidden flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10'>
                <div className='flex flex-col justify-end'>
                    <div className='flex flex-row items-center'>
                        <h2 className={clsx('text-base text-black font-black leading-7 opacity-90 before:inline-block before:w-2 before:h-5 before:ml-1 before:align-middle before:rounded-[2px]',{
                            "before:bg-first" : data.amount ,
                            "before:bg-gray-400" : !data.amount 
                        }
                        )}>{data.name}</h2>
                        <div className='flex flex-row items-center mr-1'>
                            <Image src={StarGold_Icon}/>
                            <p className='text-base text-gray-400 font-medium leading-7 mr-[2px]'>{`(${data.stars})`}</p>
                        </div>
                    </div>
                    {!data.amount && <p className='text-base text-gray-400 font-medium leading-6 underline mr-4'>ناموجود</p>}
                </div> 
                <div className='flex flex-row justify-between items-center'>
                    <div className='p-2 border-[1px] border-first solid rounded-[15px]'>
                        <Image src={ShopBagRedMobile_Icon}/>
                    </div>
                    <div className='p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-first solid rounded-[15px]'>
                        <Image src={leftArrow_Icon}/>
                    </div>
                </div>
            </div>
            {/* Summary box */}
            <div className='w-full flex flex-col lg:flex-row lg:justify-evenly  items-stretch px-10 py-5 lg:px-0 lg:py-10  border-solid border-b-[2px] border-second'>
                <div className='hidden lg:block p-10'>
                    <Image src={Bookmark_Icon}/>
                    <Image src={Notification_Icon} className="my-8"/>
                    <Image src={Share_Icon}/>
                    <Image src={Info_Icon} className="my-8"/>
                </div>
                {/* Gallery */}
                <div className='self-center w-full lg:w-[450px] h-[200px] lg:h-[600px] rounded-[15px] border-[2px] border-first solid'>
                </div>
                <div className='xl:w-full flex flex-col lg:mr-10'>
                    {/* Heading for desktop */}
                    <div className='flex flex-row lg:flex-col justify-between items-center lg:items-start py-4  lg:px-4 border-b-[2px] border-none lg:border-solid border-second'>
                        <div className='flex flex-col'>
                            <p className='text-base lg:text-lg text-gray-400 font-normal leading-6'><bdi>{data.group}</bdi></p>
                            <div className='w-full hidden lg:flex flex-row items-center justify-between mt-2'>
                                <h2 className='text-3xl text-black font-bold leading-10 before:inline-block before:w-2 before:h-5 before:bg-first before:ml-2  before:rounded-[2px]'>{data.name}</h2>
                                {data.discount > 0  &&  
                                    <p className='text-base text-white font-medium leading-8 px-2 py-1 mr-3 rounded-[10px] bg-first before:content-["%"] before:text-[14px]'>
                                    <bdi>{data.discount}</bdi></p>
                                }
                            </div>
                        </div>
                        <div className='flex flex-row lg:flex-col justify-between items-center lg:items-start lg:mt-10'>
                            <div className='hidden lg:flex flex-row items-center'>
                                <div className='flex flex-row items-center'>{starsBoxHandler(data.stars)}</div>
                                <p className='text-xl text-gray-400 font-medium leading-6 mr-2 align-middle'>{`(${data.stars})`}</p>
                            </div>
                            <p className='text-base lg:text-lg text-info font-normal leading-6 lg:mt-2'><bdi>{`${data.commentsNumber} دیدگاه`}</bdi></p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between mt-5'>
                        {/* Summary Propertiese */}
                        <div className='pb-3 my-2 order-2 lg:order-1 border-none lg:border-solid border-b-[2px] border-second'>
                            <div className='flex flex-row items-center mb-1'>
                                <Image src={Properties_Icon}/>
                                <p className='text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1'><bdi>ویژگی ها</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>مخصوص:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.for}</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>نوع:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.kind}</bdi></p>
                            </div>
                            <div className='lg:hidden flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>کشور سازنده:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.MadeIn}</bdi></p>
                            </div>
                            <div className='lg:hidden flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>ابعاد:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.dimension} cm</bdi></p>
                            </div>
                            <div className='lg:hidden flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>وزن:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.weight} گرم</bdi></p>
                            </div>
                        </div>
                        {/* Summary Sellers */}
                        <div className='flex flex-row justify-between order-1 my-3'>
                            <div className='text-right'>
                                <div className='flex flex-row items-center'>
                                    <Image src={StoreAlt_Logo}/>
                                    <p className='text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1'><bdi>فروشنده</bdi></p>
                                </div>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 mr-5 mt-1 before:content-["."] before:text-4xl before:ml-2'><bdi>پت شاپ</bdi></p>
                            </div>
                            <p className='text-sm lg:text-base text-info font-normal leading-6'><bdi>{`${data.seller.length} فروشنده دیگر`}</bdi></p>
                        </div>
                        {/* Summary availability && Add to card */}
                        <div className={clsx('order-1 w-full mb-3 lg:mb-0',{"lg:mt-9":!data.amount , "lg:mt-2":data.amount})}>
                            {data.amount ? 
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <div className='text-right'>
                                        <div className='flex flex-row items-center'>
                                            <Image src={Availability_Icon}/>
                                            <p className='text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1'><bdi>موجود در</bdi></p>
                                        </div>
                                        <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 mt-2'><bdi>{`انبار فروشنده`}</bdi></p>
                                    </div>
                                    <div className='hidden lg:block bg-[#ea63521a] p-5 rounded-[15px] mr-10'>
                                        <div className='flex flex-row justify-between items-center'>
                                            <p className='text-lg text-gray-400 font-medium leading-8'>قیمت فروشنده:</p>
                                            <p className='text-lg text-first font-medium leading-10 mr-20'><bdi>{`${data.price} تومان`}</bdi></p>
                                        </div>
                                        <button className='text-base text-white font-bold leading-7 bg-first py-3 px-5 w-full rounded-[15px]'>افزودن به سبد خرید</button>
                                    </div>
                                </div>
                            :   <div className='hidden lg:flex flex-row justify-between items-center w-full'>
                                    <button className='text-base text-center text-white font-medium w-1/3 px-3 py-3 bg-gray-400 rounded-[15px]'>ناموجود</button>
                                    <button className='text-base text-center text-white font-medium w-2/3 px-5 py-3 mr-4 bg-first rounded-[15px]'>موجود شد خبرم کن</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Benefits */}
            <div className='hidden lg:flex flex-row justify-evenly px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-second'>
                <div className='flex flex-row items-center p-5'>
                    <Image src={Originality_Icon}/>
                    <div className='text-right mr-4'>
                        <h5 className='text-base text-black font-bold leading-7'>اصالت کالا</h5>
                        <p className='text-base text-gray-400 font-medium leading-6'><bdi>محصولات پتمون با بهترین کیفیت و اصلی در ایران</bdi></p>
                    </div>
                </div>
                <div className='flex flex-row items-center p-5'>
                    <Image src={Guarantee_Icon}/>
                    <div className='text-right mr-4'>
                        <h5 className='text-base text-black font-bold leading-7'>ضمانت ۷ روزه</h5>
                        <p className='text-base text-gray-400 font-medium leading-6'><bdi>با ضمانت 7 روزه بازگشت بی قید و شرط خرید از پتمون</bdi></p>
                    </div>
                </div>
                <div className='flex flex-row items-center p-5'>
                    <Image src={Support24_Icon}/>
                    <div className='text-right mr-4'>
                        <h5 className='text-base text-black font-bold leading-7'>پشتیبانی ۲۴ ساعته</h5>
                        <p className='text-base text-gray-400 font-medium leading-6'><bdi>هر لحظه هر سوالی که داشتید با کارشناسان پتمون در ارتباط باشید</bdi></p>
                    </div>
                </div>
                <div className='flex flex-row items-center p-5'>
                    <Image src={FreeSend_Icon}/>
                    <div className='text-right mr-4'>
                        <h5 className='text-base text-black font-bold leading-7'>ارسال رایگان</h5>
                        <p className='text-base text-gray-400 font-medium leading-6'><bdi>با خرید از پتمون (بیشتر از 200هزارتومان) ارسال  رایگان است</bdi></p>
                    </div>
                </div>
            </div>
            {/* Sellers */}
            <div className='text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-second'>
                <h2 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-first before:ml-1 before:rounded-[2px]'>فروشندگان دیگر</h2>
                <div className='grid lg:grid-cols-2 gap-6'>
                    { data.seller ? data.seller.map(item =>
                        <div key={v4()} className="w-full flex flex-row items-center justify-between my-4">
                            <div className='flex flex-row'>
                                <Image src={item.logo}/>
                                <h6 className='text-xl lg:text-2xl text-black font-bold leading-7 opacity-90 mr-1 lg:mr-5'>{item.name}</h6>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-2xl lg:text-xl text-first font-medium leading-7'><bdi>{`${item.price} تومان`}</bdi></p>
                                <button className='text-base text-center text-white font-bold bg-first w-full py-3 px-5 rounded-[12px] lg:rounded-[15px] mr-2 lg:mr-5'>افزودن به سبد</button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {/* Description */}
            <div className='text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-second'>
                <h2 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-first before:ml-1 before:rounded-[2px]'>توضیح جامع</h2>
                <p><bdi>فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.</bdi></p>
            </div>
            {/* Propertiese  for desktop*/}
            <div className='px-10 py-5 lg:px-0 lg:py-10 hidden lg:block border-none lg:border-solid border-b-[2px] border-second'>
                <h2 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-first before:ml-1 before:rounded-[2px]'>ویژگی ها</h2>
                <div className='grid grid-cols-2'>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>مخصوص:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.for}</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>نوع:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.kind}</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>کشور سازنده:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.MadeIn}</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>ابعاد:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.dimension} cm</bdi></p>
                            </div>
                            <div className='flex flex-row items-center align-middle my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>وزن:</bdi></p>
                                <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{data.property.weight} گرم</bdi></p>
                            </div>
                            <div className='col-span-2 flex flex-row items-end my-1 mr-5'>
                                <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>سایر توضیحات:</bdi></p>
                                <p className='text-lg text-black font-medium leading-7 opacity-90 mr-4 lg:mr-2'><bdi>{data.property.OtherDescription}</bdi></p>
                            </div>            
                </div>
            </div>
            {/* Coustomers comment   */}
            <div className='px-10 py-5 lg:px-0 lg:py-10 flex flex-col items-stretch border-solid border-b-[2px] border-second'>
                <h2 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-first before:ml-1 before:rounded-[2px]'>نظرات</h2>
                {data.comments.map(item => 
                    <div key={v4()} className="mb-4 lg:mb-8">
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center'>
                                <Image src={item.profilePic}/>
                                <h6 className='text-base lg:text-xl text-black font-black opacity-95 mr-2 ml-4 lg:mx-5'><bdi>{item.title}</bdi></h6>
                                <div className='flex flex-row items-center mr-1'>
                                    <Image src={StarGold_Icon}/>
                                    <p className='text-lg text-gray-400 font-medium leading-5 mr-1 lg:mr-2'>{`(${item.stars})`}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-base text-gray-400 font-medium leading-5'><bdi>{item.date}</bdi></p>
                                <p className='text-base text-gray-400 font-medium leading-5 mr-2 lg:mr-5'><bdi>{item.author}</bdi></p>
                            </div>
                        </div>
                        <p className='text-base lg:text-lg text-black font-medium leading-8 mt-2 lg:mt-5 lg:mr-8'><bdi>{item.text}</bdi></p>
                    </div>    
                )}
                <button className='text-base text-center text-first font-bold leading-6 self-end w-1/3 lg:w-1/4 px-10 lg:px-20 py-2 border-solid border-[1px] border-first rounded-[12px] lg:rounded-[15px]'>ثبت دیدگاه</button>
            </div>
            {/* Add to Cart  */}
            <div className='lg:hidden px-10 py-5'>
                {data.amount ? 
                    <div className='flex justify-between items-center'>
                        <button className='text-base text-center text-white font-medium w-1/2 px-3 py-6 bg-first rounded-[12px]'>افزودن به سبد</button>
                        <div className='text-left'>
                            {data.discount && 
                                <div>
                                    <p className='text-base text-gray-400 line-through font-light leading-8 opacity-95'>{data.price}</p>
                                    <p className='text-sm text-first p-1 px-2 mr-2 border-solid border-[0.5px] border-first rounded-[12px]'>{data.discount}%</p>
                                </div>
                            }
                            <p className='text-lg text-first font-extrabold leading-8'><bdi>{data.price * (1 - data.discount/100)} تومان</bdi></p>
                        </div>
                    </div> 
                    : 
                    <button className='text-base text-center text-white font-medium w-full px-3 py-6 bg-first rounded-[12px]'>موجود شد خبرم کن</button>
                }
            </div>
        </div>
    );
};

export default SingleProduct;