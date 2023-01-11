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
import BookmarkRed_Icon from '../../assets/common/BookmarkRedIcon.svg';
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
import ShoppingCartRed_Icon from '../../assets/common/shopping-cartRedIcon.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';
import Filter_Icon from '../../assets/common/filterIcon.svg';
import DownArrow_Icon from '../../assets/common/downArrow.svg';
import Sort_Icon from '../../assets/common/sortIcon.svg';

const Products = () => {
    //fake data
    const data = {name:"غذای خشک سگ های خانگی",group:"دسته خوراکی / سگ",commentsNumber:250, stars:3, price:123000, discount:20, amount:10,
        property:{for:"سگ خانگی", kind:"خوراکی حیوانی", MadeIn:"تایوان", dimension:"۲۰۰۰*۱۰۰۰", weight:2000, OtherDescription:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد."}, 
        description:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.", 
        seller:[{name:"شهر پت", logo:StoreAlt_Logo, price:135000},{name:"پتمون", logo:StoreAlt_Logo, price:140000},{name:"پتجا", logo:StoreAlt_Logo, price:150000}], 
        comments:[  {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"},
                    {title:"عالی و بی نظیر", stars:5, profilePic:ProfileAlt_Pic, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"}
                ],
        similarProduct:[{title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:0, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:0, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        ]
                
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
    const [fBoxOpen, setFBoxOpen] = useState(false)
   
    return (
        <div className='bg-[#e5e5e5] p-10'>
            <div className='text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary'>
                <div className='flex'>
                    <div 
                        className={clsx('w-[300px] mx-4 bg-white rounded-t-[25px] relative',{
                           'rounded-b-[25px]' : fBoxOpen == false ,
                           '' : fBoxOpen == true
                        })}
                    >
                        <div className='flex justify-between items-center px-6 py-2'>
                            <div className="flex items-center">
                                <Image src={Filter_Icon} alt="FilterIcon"/>
                                <p className='text-base text-black font-medium leading-7 mr-2'>فیلترها</p>
                            </div>
                            <Image 
                                src={DownArrow_Icon} 
                                alt="DownArrowIcon"
                                onClick={()=>setFBoxOpen(!fBoxOpen)}
                                className={clsx(``,{
                                    'rotate-0' : fBoxOpen == false,
                                    'rotate-180' : fBoxOpen == true
                                })}
                            />
                        </div>
                        <div 
                            className={clsx('w-full px-6 py-2 bg-white absolute z-10 rounded-b-[25px]',{
                                'hidden' : fBoxOpen == false,
                                'block' : fBoxOpen == true
                            })}
                        >
                            <div className='flex flex-col items-stretch'>
                                <p className="text-base text-black font-medium leading-7 ">برند</p>
                                <div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            className='accent-primary border-primary border-[1px]'
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                </div>
                                <label className="text-base text-black font-medium leading-7 mt-6">بازه قیمتی</label>
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>0</span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span>2500</span>
                                </div>
                                <input type="range" min="0" max="100" className="appearance-none h-[10px] rounded-[20px] bg-secondary accent-primary" />
                                <p className="text-base text-black font-medium leading-7 mt-6">نوع پت</p>
                                <div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input 
                                            id="store1"
                                            type="checkbox"
                                            />
                                        <label
                                            htmlFor='store1'
                                            className='mr-2'
                                            >{`پت بازار`}</label>
                                    </div>
                                </div>
                                <p  
                                    onClick={() => setFBoxOpen(!fBoxOpen)}
                                    className='self-end text-base text-gray-400 font-medium leading-7 mt-5'
                                >حذف فیلترها</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex items-center'>
                        <Image 
                            src={Sort_Icon} 
                            alt="SortIcon"
                        />
                        <p className='text-xl text-black font-medium leading-8 mx-2'>مرتب سازی:</p>
                        <ul className='flex items-center'>
                            <li 
                                className='text-xl text-primary font-medium leading-8 mx-2'
                            >{`پرفروش ترین`}</li> 
                            <li 
                                className='text-xl text-gray-400 font-medium leading-8 mx-2'
                            >{`محبوب ترین`}</li> 
                            <li 
                                className='text-xl text-gray-400 font-medium leading-8 mx-2'
                            >{`جدید ترین`}</li>  
                        </ul>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center lg:grid-cols-4'>
                    {data.similarProduct && data.similarProduct.map(item => 
                        <div className='m-5'>
                            <div className='flex flex-row lg:flex-col items-stretch w-full lg:w-[285px] h-[250px] lg:h-[420px] p-4 lg:p-5  bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                                <div className='relative block w-[100px] lg:w-full h-full lg:h-[200px] bg-gray-400 border-[1px] border-solid border-primary rounded-[15px] lg:rounded-[20px]'>
                                    <div className='hidden lg:block absolute z-index-2 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full'>
                                        <Image 
                                            src={BookmarkRed_Icon} 
                                            alt="BookmarkIcon" 
                                            className='w-3 h-3 lg:w-5 lg:h-5'
                                        />
                                    </div>
                                </div>
                                <div className='w-full lg:mt-4 mr-3 lg:mr-0'>
                                    <p className='hidden lg:block text-base text-gray-400 font-medium leading-5'><bdi>{item.group}</bdi></p>
                                    <div className='hidden lg:flex justify-between items-center content-start'>
                                        <h2 className='text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>{item.title}</h2>
                                        {item.discount && <p className='text-sm lg:text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px] lg:rounded-[15px]'>{item.discount}%</p>}                                      
                                    </div>
                                    <div className='flex lg:hidden justify-between items-center'>
                                        <h2 className='text-base text-black font-medium leading-8'>{item.title}</h2>
                                        <div className='flex flex-row items-center mr-1'>
                                            <Image 
                                                src={StarGold_Icon} 
                                                alt="GoldenStarIcon"
                                                className='w-2'
                                            />
                                            <p className='text-[8px] text-gray-400 font-medium leading-7 mr-[2px]'>{`(${item.stars})`}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row lg:flex-col justify-between'>    
                                        <div className='hidden lg:flex flex-row items-center'>
                                            <div className='flex flex-row items-center'>{starsBoxHandler(item.stars)}</div>
                                            <p className='text-xl text-gray-400 font-medium leading-6 mr-2 align-middle'>{`(${item.stars})`}</p>
                                        </div>
                                        <div className='flex lg:flex-col justify-between lg:items-stretch'>
                                            <div className='flex flex-col'>
                                                <p className='lg:hidden text-xs text-gray-400 font-medium leading-5'><bdi>{item.group}</bdi></p>
                                                <p className='text-sm text-primary font-normal leading-5 opacity-90 mt-2'>{item.store}</p>    
                                            </div>
                                            <div className='self-end lg:self-stretch'>
                                                {item.amount ? 
                                                    <div className='flex flex-col lg:flex-row justify-between lg:items-center mt-2'>
                                                        <div className='flex flex-col lg:flex-col-reverse'>
                                                            {item.discount && <p className='text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0'>{item.price}</p>}
                                                            <p className='text-base lg:text-lg text-primary font-medium leading-8 mb-0'><bdi>{item.price * (1 - item.discount/100)} تومان</bdi></p>
                                                        </div> 
                                                        <div className='flex lg:flex-row-reverse items-center p-2 lg:bg-[#EA635233] rounded-[10px]'>
                                                            <Image 
                                                                src={ShoppingCartRed_Icon} 
                                                                alt="ShoppingCartRedIcon"
                                                            />
                                                            <p className='text-base text-primary font-medium leading-7 mr-1 lg:mr-0 lg:ml-2'>خرید</p>
                                                        </div>
                                                    </div>
                                                : 
                                                    <div className='text-base text-gray-400 text-center font-medium p-2 mt-3 w-full bg-secondary rounded-[10px]'>ناموجود</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products;