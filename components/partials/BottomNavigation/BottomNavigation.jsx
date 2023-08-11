import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//media
import home_Icon from "../../../assets/common/homeIcon2.svg";
import category_Icon from "../../../assets/common/categoryIcon.svg";
import { AuthContext } from "@/store/AuthCtx/AuthContext";
import profile_Icon from "../../../assets/common/profileIcon4.svg";

const BottomNavigation = () => {
  const router = useRouter();
  const { authState, authDispatch } = AuthContext();
  return (
    <div className="lg:hidden flex justify-between items-center fixed bottom-0 left-0 right-0 px-10 py-3 bg-white z-10">
      <Link href="/" className="flex flex-col items-center">
        <Image src={home_Icon} alt="Home Icon" />
        {router.asPath === "/" ? (
          <h3 className="text-sm text-center text-primary font-medium leading-5 mt-1">
            <bdi>صفحه اصلی</bdi>
          </h3>
        ) : (
          <h3 className="text-sm text-center text-gray-400 font-medium leading-5 mt-1">
            <bdi>صفحه اصلی</bdi>
          </h3>
        )}
      </Link>
      <Link href="/product-category/all" className="flex flex-col items-center">
        <Image src={category_Icon} alt="Category Icon" />
        {router.asPath.startsWith("/product-category") ? (
          <h3 className="text-sm text-center text-primary font-medium leading-5 mt-1">
            <bdi> محصولات</bdi>
          </h3>
        ) : (
          <h3 className="text-sm text-center text-gray-400 font-medium leading-5 mt-1">
            <bdi> محصولات</bdi>
          </h3>
        )}
      </Link>
      <Link href="/cart" className="flex flex-col items-center">
        <Image
          width={30}
          height={30}
          src="/assets/common/shopping-cart.svg"
          alt="Search Icon"
        />
        {router.asPath === "/cart" ? (
          <h3 className="text-sm text-center text-primary font-medium leading-5 mt-1">
            <bdi>سبد خرید</bdi>
          </h3>
        ) : (
          <h3 className="text-sm text-center text-gray-400 font-medium leading-5 mt-1">
            <bdi>سبد خرید</bdi>
          </h3>
        )}
      </Link>
      <Link
        href={!authState?.isLoggedIn ? "/auth/login" : "/dashboard"}
        className="flex flex-col items-center"
      >
        <Image src={profile_Icon} alt="Profile Icon" />
        {router.asPath.startsWith("/dashboard") ? (
          <h3 className="text-sm text-center text-primary font-medium leading-5 mt-1">
            <bdi>پروفایل</bdi>
          </h3>
        ) : (
          <h3 className="text-sm text-center text-gray-400 font-medium leading-5 mt-1">
            <bdi>پروفایل</bdi>
          </h3>
        )}
      </Link>
    </div>
  );
};

export default BottomNavigation;
