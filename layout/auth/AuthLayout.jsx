import React from "react";
//media
import backgroundLines from "@/assets/common/signUpLoginLines.png";
import leftArrow from "@/assets/common/leftArrow.png";
import bigPetsImage from "@/assets/signup/signupImage.png";
import smallPetsImage from "@/assets/login/loginImage.png";
import Link from "next/link";
//component
import PetemoonLogo from "@/components/partials/logo";

export default function AuthLayout({ children, text }) {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-white min-h-screen max-h-auto lg:bg-[#F1F1F1]">
      <div className="flex relative justify-center items-center lg:hidden w-full p-10  z-10 bg-gradient-to-br from-primary via-primary to-[#acd4f7]">
        <div className="absolute left-10 top-10 lg:hidden">
          <Link href="/">
            <button className="btn btn-square btn-md md:btn-lg border-0 rounded-2xl bg-primary-light active:bg-primary-light focus:bg-primary-light">
              <img src={leftArrow.src} className="w-[15%]" />
            </button>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <img src={"/assets/login/loginImage.png"} />"
          </div>
          "
        </div>
      </div>
      <div className="bg-white w-full lg:w-[42%] pt-4 px-10 lg:px-24  flex flex-col justify-between lg:justify-center items-center relative">
        <div className="avatar absolute left-0 bottom-0 w-full lg:hidden">
          <div className="opacity-50">
            <img src={backgroundLines.src} />
          </div>
        </div>
        <div className="w-full h-full min-h-[screen] h-[100%] flex flex-col justify-center items-center z-10">
          <div className="flex flex-col lg:justify-center items-center space-y-4 md:space-y-8 h  my-10">
            <PetemoonLogo />
            <div
              id="header"
              className="font-black text-center text-[#333333] text-xl md:text-[30px] xl:text-[40px]"
            >
              {!text ? "   کاربر عزیز ، خوش آمدید" : text}
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-[58%]">
        {/* <div className="avatar absolute left-0 bottom-0 hidden lg:block w-[58%]">
          <div className="w-full opacity-50">
            <img src={backgroundLines.src} />
          </div>
        </div> */}
        <div className="flex justify-center z-10">
          <div className="w-[90%]">
            <img src={"/assets/login/loginImage.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}
