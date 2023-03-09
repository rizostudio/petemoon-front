import { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//media
import card_Icon from "../../assets/common/shopping-cartRedIcon2.svg";
import user_Icon from "../../assets/common/user-square.svg";
import search_Icon from "../../assets/common/search-icon.svg";
import instagram_Logo from "../../assets/common/instageram.svg";
import facebook_Logo from "../../assets/common/facebook.svg";
import twitter_Logo from "../../assets/common/twitter.svg";
import linkedin_Logo from "../../assets/common/linkedin.svg";
import header_Logo from "../../assets/common/headerLogo.png";
import footer_Logo from "../../assets/common/footerLogo.svg";
import location_Icon from "../../assets/common/li_map-pin.svg";
import clock_Icon from "../../assets/common/li_clock-9.svg";
import phone_Icon from "../../assets/common/li_phone.svg";
//context
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import AuthContext from "@/store/AuthCtx/AuthContext";
//storage
import { Basket } from "@/localSttorage/basket";

export default function MainLayout({ children }) {
  const router = useRouter;
  const { state, dispatch } = BasketContext();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getInitBasket = () => {
      const currentState = JSON.parse(Basket.get());
      console.log(currentState);
      if (currentState) {
        dispatch({
          type: "INIT_STATE",
          payload: currentState,
        });
      }
    };
    getInitBasket();
  }, []);
  return (
    <>
      <div className="">
        <header className="hidden lg:flex justify-between items-center px-[100px] py-5 bg-white ">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={header_Logo}
                alt="Petemoon Logo"
                className="ml-2 xl:ml-4"
              />
            </Link>
            <Link
              href="/"
              className="text-base text-primary font-medium leading-8 mx-2 xl:mx-4"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/products"
              className="text-base text-black font-medium leading-8 mx-2 xl:mx-4"
            >
              محصولات
            </Link>
            <Link
              href="/"
              className="text-base text-black font-medium leading-8 mx-2 xl:mx-4"
            >
              کلینک ها
            </Link>
            <Link
              href="/"
              className="text-base text-black font-medium leading-8 mx-2 xl:mx-4"
            >
              بلاگ
            </Link>
          </div>
          <div className="flex items-center h-full">
            <div className="flex flex-row h-12 w-[200px] xl:w-[300px] px-5 bg-[#eee] rounded-[10px]">
              <Image src={search_Icon} alt="SearchIcon" className="invert" />
              <input
                type="text"
                placeholder="جستجو"
                className="text-base text-right text-black opacity-[0.8] font-bold p-2 w-full border-none bg-transparent peer-focus:border-none"
              />
            </div>
            <div className="flex items-center h-full lg:mr-[15px] xl:mr-[60px]">
              <div className="h-full p-3 border-[1px] border-primary rounded-[15px]">
                <Link href={"/cart"}>
                  <Image src={card_Icon} alt="Card Icon" className="w-7" />
                </Link>
              </div>
              <div className="h-full px-[6px] py-2 mx-4 border-[1px] border-primary rounded-[15px]">
                <p className="text-base text-gray-400 font-normal leading-8">
                  فروشندگان
                </p>
              </div>
              <Link href={authCtx.isLoggedIn ? "/dashboard" : "/auth/login"}>
                <Image src={user_Icon} alt="User Icon" />
              </Link>
            </div>
          </div>
        </header>
        <div className=" lg:bg-[#F8F8F8]">{children}</div>
        <footer className="hidden lg:block bg-[#F8F8F8] px-[120px]">
          <div className="flex justify-between pt-10 pb-[100px] border-y-[2px] border-[rgba(0, 0, 0, 0.05)]">
            <div>
              <Link href="/" className="mb-5">
                <Image src={footer_Logo} alt="Petemoon Logo" />
              </Link>
              <div className="flex items-center my-2">
                <Image src={location_Icon} alt="Location Icon" />
                <p className="text-base text-black font-medium leading-7 mr-1">
                  <bdi>آدرس:</bdi>
                </p>
                <p className="text-sm text-black font-normal leading-6 mr-2">
                  <bdi>خیابان محمدی، جنب شعبه بانک ملی، پلاک ۱۱۰</bdi>
                </p>
              </div>
              <div className="flex items-center my-2">
                <Image src={phone_Icon} alt="Phone Icon" />
                <p className="text-base text-black font-medium leading-7 mr-1">
                  <bdi>شماره تماس:</bdi>
                </p>
                <p className="text-sm text-black font-normal leading-6 mr-2">
                  <bdi>021-77788123</bdi>
                </p>
              </div>
              <div className="flex items-center my-2">
                <Image src={clock_Icon} alt="Clock Icon" />
                <p className="text-base text-black font-medium leading-7 mr-1">
                  <bdi>ساعت کاری:</bdi>
                </p>
                <p className="text-sm text-black font-normal leading-6 mr-2">
                  <bdi>شنبه الی چهارشنبه ساعت 10 تا 20</bdi>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-2xl text-black font-bold leading-9 mb-7">
                <bdi>حساب کاربری</bdi>
              </h6>
              <Link
                href="/dashboard/bookmarks"
                className="text-base text-black font-medium leading-6 my-1"
              >
                علاقه مندی ها
              </Link>
              <Link
                href="/card"
                className="text-base text-black font-medium leading-6 my-1"
              >
                سبد خرید
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                پیگیری سفارش
              </Link>
              <Link
                href="/dashboard/wallet"
                className="text-base text-black font-medium leading-6 my-1"
              >
                کیف پول
              </Link>
            </div>
            <div className="flex flex-col">
              <h6 className="text-2xl text-black font-bold leading-9 mb-7">
                <bdi>لینک های مفید</bdi>
              </h6>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                درباره ما
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                شگفت انگیز ها
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                دامپزشکان
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                محصولات جدید
              </Link>
            </div>
            <div className="flex flex-col">
              <h6 className="text-2xl text-black font-bold leading-9 mb-7">
                <bdi>پشتیبانی</bdi>
              </h6>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                سوالات متداول
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                تماس با ما
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                Q&A
              </Link>
              <Link
                href="/"
                className="text-base text-black font-medium leading-6 my-1"
              >
                حریم خصوصی
              </Link>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center py-8">
            <div className="flex flex-row-reverse items-center">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Image
                  src={facebook_Logo}
                  alt="Facebook Logo"
                  className="mx-2"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Image
                  src={linkedin_Logo}
                  alt="Linkedin Logo"
                  className="mx-2"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Image
                  src={instagram_Logo}
                  alt="Instagram Logo"
                  className="mx-2"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Image src={twitter_Logo} alt="Twitter Logo" className="mx-2" />
              </a>
            </div>
            <p className="text-base text-black font-medium leading-5">
              <bdi>© 2022, All rights reserved</bdi>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
