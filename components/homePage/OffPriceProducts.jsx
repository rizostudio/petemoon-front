import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//components
import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";

// media
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";
import ProfileAlt_Pic from "../../assets/product/profilePicAlt.svg";
import timer_Icon from "../../assets/homePage/timerIcon.svg";

const OffPriceProdcuts = ({ data }) => {
  //fake data

  // counter time
  const countDownDate = new Date("Feb 5, 2023 22:34:43").getTime();
  const [time, setTime] = useState("");

  const timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let houres = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (distance < 0) {
      clearInterval(timer);
      setTime("به پایان رسیده!");
    } else {
      setTime(`${houres} : ${minutes} : ${seconds}`);
    }
  }, 1000);

  return (
    <div className="flex lg:flex-col py-4 lg:py-10 bg-secondary">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center align-middle mr-10 ml-5 mt-10 lg:px-[120px]">
        <h5 className="text-base lg:text-2xl text-center text-black font-black leading-7 before:hidden lg:before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          شگفت انگیز امروز
        </h5>
        {/* timerBox */}
        {/* <div className="flex flex-col lg:flex-row justify-between items-center w-[70px] lg:w-auto p-2 lg:px-4 lg:py-2 mt-4 mb-3 lg:my-0 bg-[#F35244] rounded-[12px] lg:rounded-[15px]">
          <Image src={timer_Icon} alt="Timer Icon" className="lg:hidden" />
          <p className="hidden lg:block text-sm text-white font-medium leading-5">
            <bdi>پایان تخفیف:</bdi>
          </p>
          <div className="text-sm text-center text-white font-medium leading-5 lg:mr-8">
            <bdi>{time}</bdi>
          </div>
        </div> */}
        {/* <Link
          href="/products"
          className='text-xs lg:text-lg text-center text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link> */}
      </div>
      <div className="px-0 overflow-hidden lg:px-[120px] py-2 lg:py-6">
        <CarouselProduct data={data} />
      </div>
    </div>
  );
};

export default OffPriceProdcuts;
