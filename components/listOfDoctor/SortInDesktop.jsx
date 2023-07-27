import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
// media
import Sort_Icon from "../../assets/common/sortIcon.svg";
//services
import * as queryString from "@/services/queryString";
export default function SortInDesktop({
  setSortPageOpen,
  setMainPageOpen,
  sortValue,
  sortArr,
}) {
  const router = useRouter();
  const sortQuery = (title, slug) => {
    const query = slug
      ? queryString.addQueryArg(router.query, title, slug)
      : queryString.removeListQueryArg(router.query, title, slug);
    router.push({
      pathname: router.pathname,
      query,
    });
  };
  return (
    <div className="flex items-center">
      <div
        onClick={() => {
          setSortPageOpen(true);
          setMainPageOpen(false);
        }}
        className="flex items-center"
      >
        <Image
          src={Sort_Icon}
          alt="SortIcon"
          className="cursor-pointer lg:cursor-auto"
        />
        <p className="hidden lg:block text-xl text-black font-medium leading-8 mx-2">
          <bdi>مرتب سازی:</bdi>
        </p>
        <p className="lg:hidden text-xl text-black font-medium leading-8 mx-2 cursor-pointer">
          {sortValue}
        </p>
      </div>
      <ul className="hidden lg:flex items-center">
        {sortArr.map((item) => (
          <li
            key={v4()}
            onClick={() => {
              sortQuery("order_by", item.slug);
            }}
            className={clsx(
              "text-xl font-medium leading-8 mx-2 cursor-pointer",
              {
                "text-primary": item.slug == router.query?.order_by,
                "text-gray-400 opacity-80":
                  item.slug !== router.query?.order_by,
              }
            )}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
