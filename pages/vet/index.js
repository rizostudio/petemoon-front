import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { v4 } from "uuid";

//component
import MainLayout from "@/layout/main";

// media
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";
import StarGold_Icon from "@/assets/common/startGold.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import BookmarkRed_Icon from "@/assets/common/BookmarkRedIcon.svg";
import Filter_Icon from "../../assets/common/filterIcon.svg";
import DownArrow_Icon from "@/assets/common/downArrow.svg";
import Sort_Icon from "@/assets/common/sortIcon.svg";
import SearchRed_Icon from "@/assets/common/SearchRedIcon.svg";
import DoctorPic from "@/assets/vet/DoctorPic.svg";
// import call_Icon from "@/assets/vet/call-calling.svg";

//for open & close filterBox in desktop
//it's defined out of main component, for prevent re-render other components
const FilterBoxDialog = ({
  specialty,
  scoreKind,
  setFilterPageOpen,
  setMainPageOpen,
}) => {
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false);
  return (
    <div
      className={clsx(
        "lg:w-[300px] ml-5 lg:ml-4 lg:bg-white rounded-t-[25px] relative",
        {
          "rounded-b-[25px]": FilterBoxOpen == false,
        }
      )}
    >
      <div className="flex justify-between items-center lg:px-6 py-2">
        <div
          className="flex items-center cursor-pointer lg:cursor-auto"
          onClick={() => {
            setFilterPageOpen(true);
            setMainPageOpen(false);
          }}
        >
          <Image src={Filter_Icon} alt="FilterIcon" />
          <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
            فیلترها
          </p>
        </div>
        <Image
          src={DownArrow_Icon}
          alt="DownArrowIcon"
          onClick={() => setFilterBoxOpen(!FilterBoxOpen)}
          className={clsx(`hidden lg:block cursor-pointer`, {
            "rotate-0": FilterBoxOpen == false,
            "rotate-180": FilterBoxOpen == true,
          })}
        />
      </div>
      <div
        className={clsx(
          "hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]",
          {
            "lg:block": FilterBoxOpen == true,
          }
        )}
      >
        <div className="flex flex-col items-stretch">
          <p className="text-base text-black font-medium leading-7 ">تخصص</p>
          <div>
            {specialty.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`specialty${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`specialty${index}`} className="mr-2 ">
                  <bdi>{item.name}</bdi>
                </label>
              </div>
            ))}
          </div>
          <p className="text-base text-black font-medium leading-7 mt-6">
            امتیاز
          </p>
          <div>
            {scoreKind.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`kind${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`kind${index}`} className="mr-2">
                  {item}
                </label>
              </div>
            ))}
          </div>
          <p
            onClick={() => setFilterBoxOpen(false)}
            className="self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer"
          >
            حذف فیلترها
          </p>
        </div>
      </div>
    </div>
  );
};

const Vet = () => {
  const router = useRouter();

  //fake data
  const data = [
    {
      name: "دکتر افشین نوری",
      pic: DoctorPic,
      adviceAmount: "50",
      score: "5",
      commentsAmount: "200",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر صادق صالحی",
      pic: DoctorPic,
      adviceAmount: "75",
      score: "4",
      commentsAmount: "100",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر ساناز شیری",
      pic: DoctorPic,
      adviceAmount: "100",
      score: "3",
      commentsAmount: "300",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر افشین نوری",
      pic: DoctorPic,
      adviceAmount: "50",
      score: "5",
      commentsAmount: "200",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر صادق صالحی",
      pic: DoctorPic,
      adviceAmount: "75",
      score: "4",
      commentsAmount: "100",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر ساناز شیری",
      pic: DoctorPic,
      adviceAmount: "100",
      score: "3",
      commentsAmount: "300",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر افشین نوری",
      pic: DoctorPic,
      adviceAmount: "50",
      score: "5",
      commentsAmount: "200",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر صادق صالحی",
      pic: DoctorPic,
      adviceAmount: "75",
      score: "4",
      commentsAmount: "100",
      shortSpecialty: "متخصص حیوانات",
    },
    {
      name: "دکتر ساناز شیری",
      pic: DoctorPic,
      adviceAmount: "100",
      score: "3",
      commentsAmount: "300",
      shortSpecialty: "متخصص حیوانات",
    },
  ];
  const specialty = [
    { name: "خزندگان", id: "reptiles" },
    { name: "پرندگان", id: "birds" },
    { name: "گربه ها", id: "cats" },
    { name: "سگ ها", id: "dogs" },
  ];
  const scoreKind = ["۳ از ۵", "۴ از ۵", "۵ از ۵"];

  // the array of sort options
  const [sortArr, setSortArr2] = useState([
    { title: "بالاترین امتیاز" },
    { title: "تعداد مشاوره" },
  ]);

  // for change the color of choosen option in sorting
  const [sortValue, setSortValue] = useState("بالاترین امتیاز");

  // for showing stars
  const starsBoxHandler = (stars) => {
    const starsBox = [];
    for (let i = 0; i < stars; i++) {
      starsBox.push(
        <Image
          src={StarGold_Icon}
          alt="GoldenStarIcon"
          className="w-3 h-3 mx-0.5"
        />
      );
    }
    for (let i = 0; i < 5 - stars; i++) {
      starsBox.push(
        <Image
          src={StarEmpty_Icon}
          alt="EmptyStarIcon"
          className="w-3 h-3 mx-0.5"
        />
      );
    }
    return starsBox;
  };

  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile

  return (
    <MainLayout>
      <div className="flex flex-col bg-[#f8f8f8] lg:px-[120px] lg:py-10 w-full h-full">
        {/* Main Page */}
        <div
          className={clsx("lg:block text-right px-10 py-5 lg:px-0 lg:py-10 ", {
            block: MainPageOpen == true,
            hidden: MainPageOpen == false,
          })}
        >
          {/* Heading for mobile */}
          <div className="h-[40px] w-full flex lg:hidden justify-between items-center">
            <div className="w-full h-full flex justify-between px-5 py-3 bg-[#ECA299] rounded-[15px]">
              <input
                type="text"
                placeholder="جستجوی پزشک"
                className="w-full text-white border-none bg-transparent placeholder:text-primary focus:border-none focus:outline-none focus:ring-0 peer"
              />
              <Image src={SearchRed_Icon} alt="SearchIcon" />
            </div>
            <Link
              href="/"
              className="h-full px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </Link>
          </div>
          {/*Arrangment Box*/}
          <div className="flex mt-5">
            {/* FilterBox */}
            <FilterBoxDialog
              specialty={specialty}
              scoreKind={scoreKind}
              setFilterPageOpen={setFilterPageOpen}
              setMainPageOpen={setMainPageOpen}
            />
            {/* Sort Box */}
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
                    onClick={() => setSortValue(item.title)}
                    className={clsx(
                      "text-xl font-medium leading-8 mx-2 cursor-pointer",
                      {
                        "text-primary": item.title == sortValue,
                        "text-gray-400 opacity-80": item.title !== sortValue,
                      }
                    )}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* DoctorsBox */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-center mt-5">
            {data &&
              data.map((item, index) => (
                <div key={v4()} className="lg:m-5 w-full lg:w-[285px] my-1">
                  <div className="flex flex-row lg:flex-col items-stretch w-full p-4 lg:p-5 bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB border-[1px] border-secondary border-solid lg:border-none">
                    <div className="relative block w-[100px] lg:w-full h-full lg:h-[200px] p-0 bg-gray-400 border-[1px] border-solid border-primary overflow-hidden rounded-[15px] lg:rounded-[20px]">
                      <div className="hidden lg:block absolute z-10 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full">
                        <Image
                          src={BookmarkRed_Icon}
                          alt="Bookmark Icon"
                          className="w-3 h-3 lg:w-5 lg:h-5"
                        />
                      </div>
                      <div className="w-full h-full">
                        <Image
                          src={item.pic}
                          alt="Doctor Pic"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full lg:mt-4 mr-3 lg:mr-0">
                      <div className="flex justify-between items-center content-start">
                        <h2 className="text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
                          {item.name}
                        </h2>
                        <p className="hidden lg:block text-sm text-info font-normal leading-5">
                          <bdi>{`${item.commentsAmount} دیدگاه`}</bdi>
                        </p>
                      </div>
                      <div className="w-full flex lg:flex-col-reverse justify-between items-center lg:items-stretch">
                        <h4 className="text-xs lg:text-base text-primary font-medium leading-4 opacity-95">
                          <bdi>{item.shortSpecialty}</bdi>
                        </h4>
                        <div className="lg:w-full flex lg:flex-row-reverse lg:justify-between items-center">
                          <p className="text-xs lg:text-sm text-gray-400 font-medium leading-4 opacity-95 ml-2 lg:m-0">
                            <bdi>{`${item.adviceAmount} مشاوره`}</bdi>
                          </p>
                          <div className="flex items-center">
                            <div className="hidden lg:flex items-center">
                              {starsBoxHandler(item.score)}
                            </div>
                            <Image
                              src={StarGold_Icon}
                              alt="GoldenStarIcon"
                              className="w-2 h-2 lg:hidden"
                            />
                            <p className="text-[11px] lg:text-xs text-gray-400 font-medium leading-2.5 lg:leading-6 align-bottom  mr-[2.5px] lg:mr-1 align-middle">{`(${item.score})`}</p>
                          </div>
                        </div>
                      </div>
                      <p className="lg:hidden text-xs text-info font-normal leading-4 opacity-90 mt-1">
                        <bdi>{`${item.commentsAmount} دیدگاه`}</bdi>
                      </p>
                      <Link
                        href={`/vet/${index}`}
                        className="self-end flex lg:flex-col items-center p-2 lg:py-1.5 lg:px-5 mt-3 lg:bg-primary lg:rounded-[10px]"
                      >
                        <Image
                          src={call_Icon}
                          alt="Call Icon"
                          className="lg:hidden"
                        />
                        <p className="text-xs lg:text-base lg:text-center text-primary lg:text-white font-medium leading-7 mr-1 lg:mr-0">
                          شروع مشاوره
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Filter Page */}
        <div
          className={clsx("lg:hidden w-full h-screen", {
            block: FilterPageOpen == true,
            hidden: FilterPageOpen == false,
          })}
        >
          <div className="h-[40px] w-full flex lg:hidden justify-between items-center p-10">
            <div className="flex items-center">
              <Image src={Filter_Icon} alt="FilterIcon" />
              <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
                فیلترها
              </p>
            </div>
            <div
              onClick={() => {
                setFilterPageOpen(false);
                setMainPageOpen(true);
              }}
              className="px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between items-stretch mt-5">
              <div className="px-10 py-4 border-b-[1px] border-solid border-secondary">
                <p className="text-base text-black font-medium leading-7 ">
                  تخصص
                </p>
                <div>
                  {specialty.map((item, index) => (
                    <div key={v4()} className="flex items-center">
                      <input
                        id={`specialty${index}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                      />
                      <label htmlFor={`specialty${index}`} className="mr-2">
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10">
                <p className="text-base text-black font-medium leading-7 mt-2">
                  امتیاز
                </p>
                <div>
                  {scoreKind.map((item, index) => (
                    <div key={v4()} className="flex items-center">
                      <input
                        id={`score${index}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                      />
                      <label htmlFor={`score${index}`} className="mr-2">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-between items-center px-10 py-5">
                <button className="w-2/3 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]">
                  اعمال
                </button>
                <p className="w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer">
                  حذف فیلترها
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Sort Page */}
        <div
          className={clsx("lg:hidden w-full h-screen", {
            block: SortPageOpen == true,
            hidden: SortPageOpen == false,
          })}
        >
          <div className="h-[40px] w-full p-10 flex lg:hidden justify-between items-center">
            <div className="flex items-center">
              <Image src={Sort_Icon} alt="SortIcon" />
              <p className="text-xl text-black font-medium leading-8 mx-2">
                مرتب سازی
              </p>
            </div>
            <div
              onClick={() => {
                setSortPageOpen(false);
                setMainPageOpen(true);
              }}
              className="h-full px-4 py-5 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer flex justify-center items-center"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </div>
          </div>
          <div className="flex flex-col">
            {sortArr.map((item) => (
              <p
                key={v4()}
                onClick={() => {
                  setSortValue(item.title);
                  setSortPageOpen(false);
                  setMainPageOpen(true);
                }}
                className={clsx(
                  "text-base font-medium leading-6 opacity-90 cursor-pointer px-10 py-4 border-b-[1px] border-solid border-secondary",
                  {
                    "text-primary": item.title == sortValue,
                    "text-black opacity-80": item.title !== sortValue,
                  }
                )}
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Vet;
