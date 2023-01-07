import React, { useState } from 'react';

const SingleProduct = () => {
    const [productArr,setProductArr] = useState([
        {name:"غذای خشک سگ های خانگی",group:"دسته خوراکی / سگ",commentsNumber:250, stars:4, 
        property:{for:"سگ خانگی", kind:"خوراکی حیوانی", MadeIn:"تایوان", dimension:"۲۰۰۰*۱۰۰۰", weight:2000, OtherDescription:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد."}, 
        description:"فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.", 
        seller:[{name:"شهر پت",logo,price:135000},{name:"پتمون",logo, price:140000},{name:"پتجا",logo, price:150000}], 
        comments:[{title:"عالی و بی نظیر", stars:5, author:"حسین محمدی", date:"۱۲ أذر ۱۴۰۱",text:"بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت"}]}])
    return (
        <div className='w-full h-full flex flex-col justify-between items-stretch bg-[#f8f8f8] px-10 py-20'>
            <div className='self-center w-[350px] h-[200px] rounded-[15px] border-[2px] border-first solid'>
            </div>
            <div>
                <div>
                    <p><bdi>{`دسته خوراکی / سگ`}</bdi></p>
                    <div className='w-full flex flex-row-reverse items-center lg:justify-between'>
                        <h2 className='text-base lg:text-base text-black font-semibold lg:font-black leading-7 after:hidden lg:after:inline-block after:w-2 after:h-4 after:bg-first after:text-first after:content-[""] after:ml-2 after:align-middle after:rounded-[2px]'>{item.name}</h2>
                        {/* {item.discount > 0  &&  
                            <p className='text-sm text-white font-medium leading-5 py-[2px] px-[5px] lg:py-[2px] lg:px-2 mr-2 h-full rounded-[5px] lg:rounded-[10px]  bg-first after:content-["%"] after:text-[10px]'>
                                <bdi className='hidden lg:inline-block text-[8px] font-normal opacity-[0.8] mr-1'>تخفیف</bdi>
                            {"15"}</p>
                        } */}
                    </div>
                </div>
                <div>
                    <p><bdi>{"۳۲۵ دیدگاه"}</bdi></p>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;