import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

//media
import vetPic1 from "../../assets/homePage/vetPic1.svg";
import vetPic2 from "../../assets/homePage/vetPic2.svg";
import vetPic3 from "../../assets/homePage/vetPic3.svg";
import goldenBone_Icon from "../../assets/homePage/goldenBone_Icon.svg";
import emptyBone_Icon from "../../assets/homePage/emptyBone_Icon.svg";
import petImage1 from "../../assets/homePage/petImage1.svg";
import videoButton_Icon from "../../assets/homePage/videoButtonIcon.svg";
import food_Icon from "../../assets/homePage/foodIcon.svg";
import paw_Icon from "../../assets/homePage/pawIcon.svg";

const BestVets = () => {
  //fake data
  const data = [
    {
      name: "دکتر سمیرا بهشتی",
      pic: vetPic1,
      skill: "فوق تخصص دامپزشکی و جراحی حیوانات خانگی",
      score: 4,
    },
    {
      name: "دکتر مریم خانی",
      pic: vetPic2,
      skill: "فوق تخصص دامپزشکی و جراحی حیوانات خانگی",
      score: 3,
    },
    {
      name: "دکتر امیرعلی محمدی",
      pic: vetPic3,
      skill: "فوق تخصص دامپزشکی و جراحی حیوانات خانگی",
      score: 2,
    },
  ];

  // for showing score
  const scoresBoxHandler = (score) => {
    const scoresBox = [];
    for (let i = 0; i < score; i++) {
      scoresBox.push(
        <Image
          src={goldenBone_Icon}
          alt="GoldenBoneIcon"
          className="w-[17px] lg:w-[35px] mx-[6px] lg:mx-1"
        />
      );
    }
    for (let i = 0; i < 5 - score; i++) {
      scoresBox.push(
        <Image
          src={emptyBone_Icon}
          alt="EmptyBoneIcon"
          className="w-[17px] lg:w-[35px] mx-[6px] lg:mx-1"
        />
      );
    }
    return scoresBox;
  };
  return (
    <div className="flex flex-col bg-[#F8F8F8] py-6 lg:py-[80px] lg:px-[80px]">
      {/* <div className="flex justify-between items-center align-middle px-10">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          دامپزشکان برتر
        </h5>
        <Link
          href="/vet"
          className='hidden lg:block text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link>
      </div> */}
      {/* <div className="flex flex-row-reverse lg:justify-center items-center mr-10 lg:m-0 pt-15 lg:py-[150px]">
        <Swiper
          dir="rtl"
          slidesPerView={2}
          spaceBetween={180}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerGroup={1}
          className="mySwiper"
          breakpoints={{
            340: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 320,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 200,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            1324: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
          }}
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide>
                <div key={index} className="w-[310px] lg:w-[400px] m-2 lg:m-10">
                  <div className="relative w-full h-[150px] lg:h-[250px] bg-[#EC995D] rounded-t-[25px]">
                    <Image
                      src={item.pic}
                      alt="Vet Picture"
                      className="absolute bottom-0 h-full"
                    />
                  </div>
                  <div className="flex flex-col items-stretch px-4 pt-1 pb-3 lg:p-8 bg-primary">
                    <h3 className="text-base lg:tex-xl text-center text-white font-black leading-10">
                      <bdi>{item.name}</bdi>
                    </h3>
                    <h5 className="text-sm lg:text-base text-center text-secondary font-medium leading-6 mt-2 mb-3">
                      <bdi>{item.skill}</bdi>
                    </h5>
                    <div className="flex self-center">
                      <div className="flex items-center">
                        {scoresBoxHandler(item.score)}
                      </div>
                      <p className="text-sm lg:text-base text-white font-medium leading-4 mr-2 lg:mr-4">
                        {item.score}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <div className=" lg:flex px-10">
        <div className="w-lg-1/2 relative">
          <video poster="/assets/homePage/petImage1.svg" controls>
            <source
              src="/assets/homePage/Cats.Dogs.3.Paws.Unite.2020.720p.BluRay.YIFY(1) (2).mp4"
              type="video/mp4"
            ></source>
          </video>

          {/* <Image
            src={food_Icon}
            alt="Food Icon"
            className="absolute bottom-10 left-20"
          /> */}
          {/* <Image
            src={videoButton_Icon}
            alt="Video Button"
            className="w-[120px] absolute top-10 left-20"
          /> */}
        </div>
        <div className="flex flex-col w-lg-1/2">
          <Image src={paw_Icon} alt="Paw Icon" className="self-end w-[60px]" />
          <h7 className="text-2xl text-[#000] font-bold leading-[50px] my-4">
            <bdi>پتمون، لبخند قلب خانواده</bdi>
          </h7>
          <p className="text-base text-[#4E4C46] font-medium leading-9 mb-10">
            <bdi>
              حیوانات خانگی قلب خانواده اند و دیدن خوشحالی و رضایت آن ها لذتی
              وصف ناپذیر را برای ما به وجود می آورد.
            </bdi>
          </p>
          <p className="text-base text-[#4E4C46] font-medium leading-9 mb-10">
            <bdi>
              اگر یک حیوان خانگی در خانواده خود داشته باشید برای خوشحالی او از
              صرف وقت و هزینه دریغ نخواهید کرد.امروزه در بازار مجصولات پت و
              خدمات دامپزشکی هزینه ، وقت و انرژی زیادی از صاحبان حیوانات خانگی
              تلف می شود. علی رغم وجود راه های مختلف برطرف کردن نیاز های
              دامپزشکی، هیچ یک از این روش ها قادر به پاسخگویی کامل به نیاز های
              صاحبان پت نیستند. طی کردن مسیر های طولانی برای رسیدن به دامپزشکی،
              عدم امکان مقایسه قیمت ها و کیفیت خدمات، سختی دسترسی به دامپزشکان
              حازق و دلسوز، عدم وجود تنوع کافی محصولات و بسیاری مشکل از این دست
              در کنار سختی های روزمره نگهداری از حیوان خانگی می توانند موجب
              خستگی و فرسودگی صاحبان این موجودات دوست داشتنی بشوند.
            </bdi>
          </p>
          <p className="text-base text-[#4E4C46] font-medium leading-9 mb-10">
            <bdi>
              ما، گروه پتمون، در سال 1401 با در نظر داشتن موانع موجود و برای
              راحتی و آسودگی شما و حیوانات خانگی تان شروع به کار کردیم تا
              بتوانیم لبخند را به قلب خانواده شما هدیه کنیم. ما سعی داریم تا
              ساده ترین راه را برای شما و حیوان خانگیتان که عضوی از خانواده بزرگ
              ماست را فراهم کنیم تا شما با خیالی راحت از اوقات خوشتان در کنار
              دوست کوچکتان لذت ببرید. شاید بار ها برایتان پیش آمده باشد که برای
              پیدا کردن یک محصول زمان زیادی را صرف کرده باشید یا مدت زیادی را در
              صف دامپزشک نشسته باشید. ما برای شما خدماتی فراهم کرده ایم تا حیوان
              خانگی نازنینتان بدون دلهره و اضطراب و در محیط گرم خانه از تمام
              خدمات دامپزشکی بهره مند شود. امیدواریم با گسترش فعالیت های گروه
              پتمون بتوانیم به این موجودات زیبا و صاحبان مهربانشان در هر کجای
              ایران که باشند خدماتی ارایه دهیم که لایق آنند.
            </bdi>
          </p>
          <Link href={"https://petemoon.com/blog"}>
            <button className='text-base text-center text-white font-medium leading-8 w-[170px] py-2 px-6 bg-primary rounded-[15px] after:content-[">"] after:text-3xl after:mr-3 after:align-middle'>
              مشاهده بیشتر
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestVets;
