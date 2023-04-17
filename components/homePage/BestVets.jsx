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
      <div className="hidden lg:flex px-10">
        <div className="w-1/2 relative">
          <Image src={petImage1} alt="Pet Image" className="w-full h-full" />
          <Image
            src={food_Icon}
            alt="Food Icon"
            className="absolute bottom-10 left-20"
          />
          <Image
            src={videoButton_Icon}
            alt="Video Button"
            className="w-[120px] absolute top-10 left-20"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <Image src={paw_Icon} alt="Paw Icon" className="self-end w-[60px]" />
          <h7 className="text-2xl text-[#000] font-bold leading-[50px] my-4">
            <bdi>
              سگ ها حرف می زنند، اما فقط با کسانی که می دانند چگونه گوش کنند.
            </bdi>
          </h7>
          <p className="text-base text-[#4E4C46] font-medium leading-9 mb-10">
            <bdi>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </bdi>
          </p>
          <button className='text-base text-center text-white font-medium leading-8 w-[170px] py-2 px-6 bg-primary rounded-[15px] after:content-[">"] after:text-3xl after:mr-3 after:align-middle'>
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestVets;
