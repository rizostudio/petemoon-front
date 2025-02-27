import React, { useState, useContext, useEffect } from "react";
import { isLogin, refreshTokenLS, userDataStorage } from "@/localSttorage/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx"; //for dynamic style
import { v4 } from "uuid"; // for produce unique key
//media
import Search_Icon from "../../assets/common/search-icon.svg";
import ArrowLeft_Icon from "../../assets/common/arrow-left.svg";
import ArrowLeftWhite_Icon from "../../assets/common/leftArrowWhite.svg";
import Profile_Alt_Pic from "../../assets/dashboard/profile-pic-alt.svg";
import Userpanel_Logo from "../../assets/dashboard/user-panel.svg";
import ShopBag_Icon from "../../assets/dashboard/bagHeader.svg";
//ctx
import { AuthContext } from "@/store/AuthCtx/AuthContext";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
//components
import Loading from "@/components/partials/loading";
//toastContainer
import ToastContainer from "@/components/partials/toast/ToatContainer";
import { logout } from "@/services/dashboard/userInfo/logout";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
const menuArr = [
  {
    id: "/",
    name: "داشبورد",
    icon: "/assets/dashboard/home.svg",
    Activeicon: "/assets/common/home-active.svg",
  },
  {
    id: "profile",
    name: "حساب کاربری",
    icon: "/assets/common/user-edit.svg",
    Activeicon: "/assets/dashboard/user-edit-active.svg",
    notification: 0,
  },
  {
    id: "addresses",
    name: "آدرس ها",
    icon: "/assets/dashboard/location.svg",
    Activeicon: "/assets/dashboard/location-active.svg",
  },
  {
    id: "my-pets",
    name: "پت من",
    icon: "/assets/dashboard/pet.svg",
    Activeicon: "/assets/dashboard/pet-active.svg",
  },
  {
    id: "vet",
    name: "دامپزشک من",
    icon: "/assets/dashboard/vet.svg",
    Activeicon: "/assets/dashboard/vet.svg",
  },
  {
    id: "wallet",
    name: "کیف پول",
    icon: "/assets/dashboard/empty-wallet.svg",
    Activeicon: "/assets/dashboard/empty-wallet-active.svg",
  },
  {
    id: "orders",
    name: "سفارش ها",
    icon: "/assets/dashboard/shopping-bag.svg",
    Activeicon: "/assets/dashboard/shopping-bag-active.svg",
    // notification: 5,
  },
  {
    id: "bookmarks",
    name: "علاقه مندی ها",
    icon: "/assets/common/like.svg",
    Activeicon: "/assets/dashboard/like-active.svg",
  },
  {
    id: "my-messages",
    name: "پیام های من",
    icon: "/assets/common/sms.svg",
    Activeicon: "/assets/dashboard/sms-active.svg",
    // notification: 10,
  },
  {
    id: "support",
    name: "پشتیبانی",
    icon: "/assets/common/alarm.svg",
    Activeicon: "/assets/dashboard/alarm-active.svg",
  },
];
export default function DashboardLayout({ children }) {
  const [openly, setOpenly] = useState(true); //for open and close dashboard in mobile
  const [user, setuser] = useState({});
  const { state, dispatch } = BasketContext();
  const router = useRouter();
  const [Minify, setMinify] = useState(false); // for minify dashboard
  const { authState, authDispatch } = AuthContext();
  const openHandler = () => {
    setOpenly(true);
  };

  //dashboard menu

  const pageName = menuArr.find(
    (item) =>
      // router.asPath.includes(item.id
      `/dashboard/${item.id}` == router.asPath || `/dashboard` == router.asPath
  ); // for showing the title of page in mobile
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const UserState = {
      userData: JSON.parse(userDataStorage.get()),
      isLoggedIn: isLogin.get(),
    };
    if (UserState.isLoggedIn && UserState.isLoggedIn !== null) {
      authDispatch({
        type: "INIT_STATE",
        payload: { ...UserState },
      });
      setuser(UserState.userData);
    } else {
      router.push("/auth/login");
    }

    const handleStart = (url) => {
      setLoading(true);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      refreshTokenLS.remove();
      userDataStorage.remove();
      isLogin.remove();
      router.push("/");
    }
  };
  return (
    <>
      <ToastContainer />
      <BottomNavigation />
      <div className="w-full h-screen flex flex-row justify-between items-stretch ">
        {/* Drawer */}
        <div
          id="Drawer"
          className={clsx(
            "lg:flex h-full  transition ease-in-out transition ease-in-out w-full lg:w-auto lg:overflow-x-hidden overflow-y-scroll scrollbar flex-col justify-between items-stretch bg-fourth lg:bg-[#313131]",
            {
              flex: openly == false,
              hidden: openly == true,
            }
          )}
        >
          <div className="hidden lg:flex justify-center h-full w-full py-10 px-12">
            <Image
              src={"/assets/dashboard/Petemoon.svg"}
              alt="PetemoonLogo"
              width={100}
              height={100}
              className={clsx("w-40 transition ease-in-out", {
                block: Minify == false,
                hidden: Minify == true,
              })}
            />
            <Image
              src={Userpanel_Logo}
              alt="UserPanelLogo"
              className="w-10 mr-3"
            />
          </div>
          <div className="p-10 h-full flex lg:hidden flex-row justify-start items-center border-b-[1px] border-silver solid">
            <Image
              src={Profile_Alt_Pic}
              alt="Profile-Pic-Alt"
              height={50}
              width={50}
            />
            <div className="mr-5 flex flex-col">
              <p className="text-base text-black text-right font-black">
                {`${user?.first_name} ${user?.last_name}`}
              </p>
              <p className="text-base text-gray-400 text-right font-medium">
                {user?.phone_number}
              </p>
            </div>
          </div>
          {/* menu */}
          <ul className="w-full h-full lg:mt-[25px]">
            {menuArr.map((item) => (
              <li
                key={v4()}
                className={clsx(
                  "border-b-[1px] border-silver transition ease-in-out solid lg:border-[#eeeeee26] lg:my-0 lg:mx-9 py-4 px-8 lg:px-0",
                  {
                    "": Minify == false,
                    "lg:border-none ": Minify == true,
                  }
                )}
              >
                <Link
                  href={`/dashboard/${item.id}`}
                  onClick={openHandler}
                  className={clsx(
                    "flex justify-between transition ease-in-out items-center w-full ",
                    {
                      "flex-row ": Minify == false,
                      "flex-row lg:flex-col": Minify == true,
                    }
                  )}
                >
                  <div className="flex flex-row items-stretch relative">
                    <Image
                      src={
                        router.asPath === `/dashboard/${item.id}`
                          ? item.Activeicon
                          : item.icon
                      }
                      alt={item.name}
                      width="20"
                      height="20"
                      className={clsx({
                        "lg:invert": router.asPath !== `/dashboard/${item.id}`,
                      })}
                    />
                    <p
                      className={clsx(
                        "text-base text-black transition ease-in-out hover:text-primary font-bold w-full mr-3",
                        {
                          block: Minify == false,
                          "lg:hidden": Minify == true,
                          "lg:text-primary":
                            router.asPath === `/dashboard/${item.id}`,
                          "lg:text-secondary":
                            router.asPath !== `/dashboard/${item.id}`,
                        }
                      )}
                    >
                      {item.name}
                    </p>
                  </div>
                  {/* showing notification numbers for each section */}
                  {item.notification > 0 && (
                    <p
                      className={clsx(
                        "hidden absolute transition ease-in-out left-20 lg:relative lg:left-0 text-white text-center text-xs bg-primary px-[5px] py-[3px] rounded-[5px]",
                        {
                          "lg:block": Minify == false,
                          "lg:hidden": Minify == true,
                        }
                      )}
                    >
                      {item.notification}
                    </p>
                  )}
                  <Image
                    src={ArrowLeft_Icon}
                    alt="ArrowLeftIcon"
                    className="lg:hidden"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full h-full flex flex-col justify-center items-stretch lg:mt-[50px]">
            {/* user information */}
            <div className="p-10 lg:py-4 h-full hidden lg:flex flex-row justify-start items-center border-b-[1px] border-[#eeeeee26] solid lg:border-none">
              <div className="mr-5 lg:mr-0">
                <div
                  className={clsx("transition ease-in-out", {
                    "flex flex-col": Minify == false,
                    "lg:hidden": Minify == true,
                  })}
                >
                  <p className="text-base text-white text-right font-black">
                    {`${user?.first_name} ${user?.last_name}`}
                  </p>
                  <p className="text-base text-gray-400 text-right font-medium">
                    {user?.phone_number}
                  </p>
                </div>
              </div>
            </div>
            {/* logout */}
            <div
              onClick={handleLogout}
              className={clsx(
                "flex cursor-pointer justify-center lg:justify-between items-center transition ease-in-out self-center bg-primary w-3/4 h-full lg:mx-auto mt-20 lg:mt-2 mb-10 rounded-[12px]",
                {
                  " lg:bg-[#3A4750] p-4 lg:py-2 mx-10": Minify == false,
                  "lg:bg-transparent lg:flex-col p-4 lg:p-0 mx-10 lg:mx-0":
                    Minify == true,
                }
              )}
            >
              <p
                className={clsx(
                  "text-base text-white font-medium leading-7 ml-3",
                  {
                    block: Minify == false,
                    "lg:hidden": Minify == true,
                  }
                )}
              >
                خروج از حساب
              </p>
              <Image
                src={"/assets/dashboard/logout-btn.svg"}
                alt="LogOutBtn"
                width="20"
                height="20"
              />
            </div>
          </div>
        </div>
        {/* main box */}
        <div
          className={clsx(
            "lg:flex flex-col transition ease-in-out justify-between items-stretch w-full h-full bg-fourth",
            {
              hidden: openly == false,
              flex: openly == true,
            }
          )}
        >
          <div className="w-full h-[140px] bg-white hidden lg:flex flex-row justify-between items-center px-[5rem] py-5 relative">
            {/* for minify dashboard in desktop */}
            <Image
              src={ArrowLeft_Icon}
              alt="ArrowLeftIcon"
              onClick={() => setMinify(!Minify)}
              loading="lazy"
              className={clsx(
                "bg-[#eee] p-3 rounded-full w-10 h-10 absolute top-[25%] right-[-2%] transition ease-in-out cursor-pointer rotate-180",
                {
                  "rotate-[-180]": Minify == true,
                }
              )}
            />

            <div className="flex flex-col">
              <p className="text-2xl text-black font-black leading-10">
                خوش آمدی ،{user?.first_name} عزیز
              </p>
              <p className="text-base text-black font-light opacity-[0.9] leading-7">
                {user?.phone_number}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row rounded-[10px]">
                {/* <Image src={Search_Icon} alt="SearchIcon" className="invert" /> */}
                {/* <input
                  type="text"
                  placeholder="جستجو"
                  className="text-base text-right text-black opacity-[0.8] font-bold p-2 w-full border-none bg-transparent peer-focus:border-none"
                /> */}
                <Link
                  href={"/"}
                  className="self-end flex lg:flex-col hover:bg-[#d85241] items-center p-3 lg:py-3 lg:px-5  lg:bg-primary lg:rounded-[5px]"
                >
                  {/* <Image src={call_Icon} alt="Call Icon" className="lg:hidden" /> */}
                  <p className="text-xs lg:text-base  lg:text-center text-primary lg:text-white font-medium leading-7 mr-1 lg:mr-0">
                    برگشت به فروشگاه
                  </p>
                </Link>
              </div>
              <Link href={"/cart"}>
                <div className="p-3 border-[1px] solid border-thirdly rounded-[15px] mr-8 relative">
                  <Image src={ShopBag_Icon} alt="ShopBagPic" />
                  <p className="bg-primary absolute rounded-[10px] text-white w-[20px] h-[20px] top-[-5px] left-[-5px] flex items-center justify-center p-1">
                    {state?.basket ? state?.basket.length : 0}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-full h-full p-5 pb-10 lg:px-20 lg:py-12 overflow-y-scroll mb-[70px] lg:mb-0">
            {/* for showing page title and return to home */}
            {pageName && (
              <div className="w-full flex lg:hidden flex-row justify-between items-center mb-10">
                <p className="text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
                  {pageName.name}
                </p>
                <button
                  // href='/dashboard/'
                  onClick={() => setOpenly(false)}
                  className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
                >
                  <Image
                    src={ArrowLeftWhite_Icon}
                    alt="ArrowIcon"
                    className="w-full"
                  />
                </button>
              </div>
            )}
            {!loading ? children : <Loading />}
            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  );
}
