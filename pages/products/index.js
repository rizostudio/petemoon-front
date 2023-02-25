import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {v4} from 'uuid';

//component
import MainLayout from '../../components/common/MainLayout'

// media 
import StarEmpty_Icon from '../../assets/common/starEmpty.svg';
import StarGold_Icon from '../../assets/common/startGold.svg';
import leftArrow_Icon from '../../assets/common/leftArrowWhite.svg';
import BookmarkRed_Icon from '../../assets/common/BookmarkRedIcon.svg';
import ShoppingCartRed_Icon from '../../assets/common/shopping-cartRedIcon.svg';
import StoreAlt_Logo from '../../assets/product/StoreLogoAlt.svg';
import ProfileAlt_Pic from '../../assets/product/profilePicAlt.svg';
import Filter_Icon from '../../assets/common/filterIcon.svg';
import DownArrow_Icon from '../../assets/common/downArrow.svg';
import Sort_Icon from '../../assets/common/sortIcon.svg';
import ProductPic from '../../assets/product/ProductPic4.svg';
import SearchRed_Icon from '../../assets/common/SearchRedIcon.svg';


//for open & close filterBox in desktop
//it's defined out of main component, for prevent re-render other components
const FilterBoxDialog = ({brand, petKind, setFilterPageOpen, setMainPageOpen}) => {
    const [FilterBoxOpen, setFilterBoxOpen] = useState(false)  
    return (
        <div 
            className={clsx('lg:w-[300px] ml-5 lg:ml-4 lg:bg-white rounded-t-[25px] relative',{
            'rounded-b-[25px]' : FilterBoxOpen == false ,
            })}
        >
            <div className='flex justify-between items-center lg:px-6 py-2'>
                <div className="flex items-center cursor-pointer lg:cursor-auto" onClick={() => {setFilterPageOpen(true);setMainPageOpen(false)}}>
                    <Image src={Filter_Icon} alt="FilterIcon"/>
                    <p className='text-xl lg:text-base text-black font-medium leading-7 mr-2'>فیلترها</p>
                </div>
                <Image 
                    src={DownArrow_Icon} 
                    alt="DownArrowIcon"
                    onClick={()=>setFilterBoxOpen(!FilterBoxOpen)}
                    className={clsx(`hidden lg:block cursor-pointer`,{
                        'rotate-0' : FilterBoxOpen == false,
                        'rotate-180' : FilterBoxOpen == true
                    })}
                />
            </div>
            <div 
                className={clsx('hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]',{
                    'lg:block' : FilterBoxOpen == true
                })}
            >
                <div className='flex flex-col items-stretch'>
                    <p className="text-base text-black font-medium leading-7 ">برند</p>
                    <div>
                        {brand.map((item,index) => 
                            <div
                                key={v4()} 
                                className='flex items-center'>
                                <input 
                                    id={`brand${index}`}
                                    type="checkbox"
                                    className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                    />
                                <label
                                    htmlFor={`brand${index}`}
                                    className='mr-2 '
                                    ><bdi>{item.name}</bdi></label>
                            </div>
                        )}
                    </div>
                    <label className="text-base text-black font-medium leading-7 mt-6">بازه قیمتی</label>
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>0</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>2500</span>
                    </div>
                    <style jsx>
                        {`
                        
                        `}
                    </style>
                    <input className="" type="range" min="1" max="100" step="1"/>
                    <p className="text-base text-black font-medium leading-7 mt-6">نوع پت</p>
                    <div>
                        {petKind.map((item, index) => 
                            <div
                                key={v4()} 
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
                                    >{item}</label>
                            </div>
                        )}
                    </div>
                    <p  
                        onClick={() => setFilterBoxOpen(false)}
                        className='self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer'
                    >حذف فیلترها</p>
                </div>
            </div>
        
        </div>
    )
}

const Products = () => {
    const router = useRouter()

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
    const brand = [{name:"پت بازار", id:"petBazzar"}, {name:"پت شاپ۱", id:'petShop1'}, {name:"پت ایران",id:'petIran'}, {name:"تهران پت", id:'tehranPet'}, {name:"کافه پت",id:'petCafe'}]
    const petKind = ["سگ خانگی","سگ شکارچی","سگ وحشی","سگ گله","سگ نگهبان"]

    // the array of sort options
    const [sortArr, setSortArr] = useState([{title:"پرفروش ترین"},{title:"محبوب ترین"},{title:"جدید ترین"},{title:"ارزان ترین"},{title:"گران ترین"}])
    // for change the color of choosen option in sorting
    const [sortValue, setSortValue] = useState("پرفروش ترین")

    // for showing stars
    const starsBoxHandler = (stars) => {
        const starsBox = [] ; 
        for(let i=0; i < stars; i++) {
            starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon"/>)
        }
        for(let i=0; i < (5 - stars) ; i++) {
            starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon"/>)
        }
        return starsBox;
    }

    //Dynamic
    const [MainPageOpen, setMainPageOpen] = useState(true) //for open & close Main Page in mobile
    const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
    const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
   
    return (
        <MainLayout>
        <div className='flex flex-col bg-[#f8f8f8] lg:px-[120px] lg:py-10 w-full h-full'>
            {/* Main Page */}
            <div className={clsx('lg:block text-right px-10 py-5 lg:px-0 lg:py-10 ',{
               'block' : MainPageOpen == true,
               'hidden' : MainPageOpen == false
            })}>
                {/* Heading for mobile */}
                <div className='h-[40px] w-full flex lg:hidden justify-between items-center'>
                    <div className='w-full h-full flex justify-between px-5 py-3 bg-[#ECA299] rounded-[15px]'>
                        <input type="text" placeholder='جستجوی محصول' className='w-full text-white border-none bg-transparent placeholder:text-primary focus:border-none focus:outline-none focus:ring-0 peer'/>
                        <Image src={SearchRed_Icon} alt="SearchIcon"/>
                    </div>
                    <Link 
                        href='/'
                        className='h-full px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer'
                    >
                        <Image 
                            src={leftArrow_Icon}
                            alt="LeftArrowIcon"
                        />
                    </Link>
                </div>
                {/*Arrangment Box*/}
                <div className='flex mt-5'>
                    {/* FilterBox */}
                    <FilterBoxDialog 
                        brand={brand} 
                        petKind={petKind} 
                        setFilterPageOpen={setFilterPageOpen}
                        setMainPageOpen={setMainPageOpen}
                    />
                    {/* Sort Box */}
                    <div className='flex items-center'>
                        <div
                            onClick={() => {setSortPageOpen(true); setMainPageOpen(false)}} 
                            className='flex items-center'
                        >
                            <Image 
                                src={Sort_Icon} 
                                alt="SortIcon"
                                className='cursor-pointer lg:cursor-auto'
                            />
                            <p 
                                className='hidden lg:block text-xl text-black font-medium leading-8 mx-2'
                            ><bdi>مرتب سازی:</bdi></p>
                            <p 
                                className='lg:hidden text-xl text-black font-medium leading-8 mx-2 cursor-pointer'
                            >{sortValue}</p>
                        </div>
                        <ul className='hidden lg:flex items-center'>
                            {sortArr.map(item => 
                                <li  
                                    key={v4()}
                                    onClick={() => setSortValue(item.title)}
                                    className={clsx('text-xl font-medium leading-8 mx-2 cursor-pointer',{
                                        'text-primary' : item.title == sortValue ,
                                        'text-gray-400 opacity-80' : item.title !== sortValue
                                    })}
                                >{item.title}</li> 
                            )}
                            
                        </ul>
                    </div>
                </div>
                {/* ProductsBox */}
                <div className='flex flex-col lg:flex-row lg:flex-wrap justify-between items-center mt-5'>
                    {data.similarProduct && data.similarProduct.map((item, index) => 
                        <div 
                            key={v4()}
                            className='lg:m-5 w-full lg:w-[285px] my-1'
                        >
                            <div className='flex flex-row lg:flex-col items-stretch w-full lg:w-[285px] lg:h-[420px] p-4 lg:p-5  bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB border-[1px] border-secondary border-solid lg:border-none'>
                                <div className='relative block w-[100px] lg:w-full h-full lg:h-[200px] p-0 bg-gray-400 border-[1px] border-solid border-primary overflow-hidden rounded-[15px] lg:rounded-[20px]'>
                                    <div
                                        className='hidden lg:block absolute z-10 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full'
                                    >
                                        <Image 
                                            src={BookmarkRed_Icon} 
                                            alt="BookmarkIcon" 
                                            className='w-3 h-3 lg:w-5 lg:h-5'
                                        />
                                    </div>
                                    <div className='w-full h-full'>
                                        <Image 
                                            src={ProductPic} 
                                            alt="ProductPic" 
                                            className='object-cover'
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
                                        <div className='w-full flex lg:flex-col justify-between items-stretch'>
                                            <div className='flex flex-col justify-between'>
                                                <div className='flex flex-col'>
                                                    <p className='lg:hidden text-xs text-gray-400 font-medium lg:leading-5'><bdi>{item.group}</bdi></p>
                                                    <p className='text-sm text-primary font-normal leading-5 opacity-90 mt-1'>{item.store}</p> 
                                                </div>
                                                <p className='lg:hidden text-sm text-white text-center font-medium leading-5 bg-primary px-1 py-[1px] mt-3 rounded-[10px] after:content-["تخفیف"] after:text-[10px] after:mr-[2px] before:content-["%"] before:text-[10px]'><bdi>{item.discount}</bdi></p>   
                                            </div>
                                            <div className='self-end lg:self-stretch'>
                                                {item.amount ? 
                                                    <div className='flex flex-col lg:flex-row justify-between lg:items-center mt-2'>
                                                        <div className='flex flex-col lg:flex-col-reverse'>
                                                            {item.discount && <p className='text-sm text-gray-400 line-through font-light opacity-95 mt-0'>{item.price}</p>}
                                                            <p className='text-base lg:text-lg text-black lg:text-primary font-medium mt-0'><bdi>{item.price * (1 - item.discount/100)} تومان</bdi></p>
                                                        </div> 
                                                        <Link 
                                                            href={`/products/${index}`}
                                                            className='flex lg:flex-row-reverse items-center p-2 lg:bg-[#EA635233] rounded-[10px]'>
                                                            <Image 
                                                                src={ShoppingCartRed_Icon} 
                                                                alt="ShoppingCartRedIcon"
                                                            />
                                                            <p className='text-base text-primary font-medium leading-7 mr-1 lg:mr-0 lg:ml-2'>خرید</p>
                                                        </Link>
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
            {/* Filter Page */}
            <div className={clsx('lg:hidden w-full h-screen',{
               'block' : FilterPageOpen == true,
               'hidden' : FilterPageOpen == false
            })}>
                <div className='h-[40px] w-full flex lg:hidden justify-between items-center p-10'>
                    <div className="flex items-center">
                        <Image src={Filter_Icon} alt="FilterIcon"/>
                        <p className='text-xl lg:text-base text-black font-medium leading-7 mr-2'>فیلترها</p>
                    </div>
                    <div 
                        onClick={() => {setFilterPageOpen(false); setMainPageOpen(true)} } 
                        className='px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer'
                    >
                        <Image
                            src={leftArrow_Icon}
                            alt="LeftArrowIcon"
                        />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between items-stretch mt-5'>
                        <div className='px-10 py-4 border-b-[1px] border-solid border-secondary'>
                            <p className="text-base text-black font-medium leading-7 ">برند</p>
                            <div>
                                {brand.map((item, index) => 
                                    <div 
                                        key={v4()}
                                        className='flex items-center'>
                                        <input 
                                            id={`brand${index}`}
                                            type="checkbox"
                                            className='h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]'
                                        />
                                        <label
                                            htmlFor={`brand${index}`}
                                            className='mr-2'
                                        >{item.name}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='px-10 py-4 border-b-[1px] border-solid border-secondary mt-2'>
                            <label className="text-base text-black font-medium leading-7">بازه قیمتی</label>
                            <div className="w-full flex justify-between text-xs px-2">
                                <span>0</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>2500</span>
                            </div>
                            <input className="w-full border-[3px] border-red-500" type="range" min="1" max="100" step="1"/>
                        </div>
                        <div className='px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10'>
                            <p className="text-base text-black font-medium leading-7 mt-2">نوع پت</p>
                            <div>
                                {petKind.map((item, index) => 
                                    <div 
                                        key={v4()}
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
                                        >{item}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-10 py-5'>
                            <button 
                                className='w-2/3 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]'
                            >اعمال</button>
                            <p  
                                className='w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer'
                                >حذف فیلترها</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sort Page */}
            <div 
                className={clsx('lg:hidden w-full h-screen',{
                    'block' : SortPageOpen == true,
                    'hidden' : SortPageOpen == false
                })}
            >
                <div className='h-[40px] w-full p-10 flex lg:hidden justify-between items-center'>
                    <div className='flex items-center'>
                        <Image 
                            src={Sort_Icon} 
                            alt="SortIcon"
                        />
                        <p className='text-xl text-black font-medium leading-8 mx-2'>مرتب سازی</p>
                    </div>
                    <div 
                        onClick={() => {setSortPageOpen(false); setMainPageOpen(true) }} 
                        className='h-full px-4 py-5 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer flex justify-center items-center'
                    >
                        <Image
                            src={leftArrow_Icon}
                            alt="LeftArrowIcon"
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    {sortArr.map(item => 
                        <p  
                            key={v4()}
                            onClick={() => {setSortValue(item.title);setSortPageOpen(false);setMainPageOpen(true)}}
                            className={clsx('text-base font-medium leading-6 opacity-90 cursor-pointer px-10 py-4 border-b-[1px] border-solid border-secondary',{
                                'text-primary' : item.title == sortValue ,
                                'text-black opacity-80' : item.title !== sortValue
                                    })}
                        >{item.title}</p> 
                    )}
                </div>
            </div>
        </div>
        </MainLayout>
    )
}

export default Products;