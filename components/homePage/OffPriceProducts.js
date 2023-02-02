import Link from 'next/link';
import Image from 'next/image';

//components
import CarouselProduct from '../common/CarouselProduct';

// media 
import StoreAlt_Logo from '../../assets/product/StoreLogoAlt.svg';
import ProfileAlt_Pic from '../../assets/product/profilePicAlt.svg';
import timer_Icon from '../../assets/homePage/timerIcon.svg';

const OffPriceProdcuts = () => {
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
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:5, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:3, store:"فروشگاه پتیار", amount:0, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:1, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:0, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:1, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:0, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:1, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:0, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},    
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:1, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:0, store:"فروشگاه پتیار", amount:2, discount:20, price:125000},
                    ]
        }
    return (
        <div className="flex lg:flex-col py-4 lg:py-10 bg-secondary">
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center align-middle mr-10 ml-5 mt-10 lg:px-[120px]'>
            <h5 className='text-base lg:text-2xl text-center text-black font-black leading-7 before:hidden lg:before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]'>شگفت انگیز امروز</h5>
            {/* timerBox */}
            <div className='flex flex-col lg:flex-row justify-between items-center w-[70px] lg:w-auto p-2 lg:px-4 lg:py-2 mt-4 mb-3 lg:my-0 bg-[#F35244] rounded-[12px] lg:rounded-[15px]'>
              <Image src={timer_Icon} alt="Timer Icon" className='lg:hidden'/>
              <p className="hidden lg:block text-sm text-white font-medium leading-5"><bdi>پایان تخفیف:</bdi></p>
              <div className='text-sm text-center text-white font-medium leading-5 lg:mr-8'><bdi>10 : 56 : 21</bdi></div>
            </div>
            <Link
                href='/products'  
                className='text-xs lg:text-lg text-center text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
              ><bdi>مشاهده همه</bdi></Link>
          </div>
          <div className='px-0 lg:px-[120px] py-2 lg:py-6'>
            <CarouselProduct data={data.similarProduct}/>
          </div>
        </div>
    );
};

export default OffPriceProdcuts;