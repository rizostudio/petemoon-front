import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

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
//service

//component
import FilterinMobile from "@/components/listOfProduct/FilterinMobile";
import SortInMobile from "@/components/listOfProduct/SortInMobile";
import FilterInDesktop from "@/components/listOfProduct/FilterInDesktop";
import SortInDesktop from "@/components/listOfProduct/SortInDesktop";
import { getProductFilter } from "@/services/product/getProductFilters";
// import ProducsBox from "./ProducsBox";
import Loading from "../partials/loading";
import DoctorBox from "./DoctorBox";

export default function ProductList() {
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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //Dynamic
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false); //for open & close filterBox in desktop
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  const [petCategory, setPetCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [sortArr, setSortArr] = useState([
    { title: "پرفروش ترین", slug: "1" },
    { title: "محبوب ترین", slug: "2" },
    { title: "جدید ترین", slug: "3" },
    { title: "ارزان ترین", slug: "4" },
    { title: "گران ترین", slug: "5" },
  ]);
  // for change the color of choosen option in sorting
  const [sortValue, setSortValue] = useState("پرفروش ترین");
  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
    };
    const handleComplete = (url) => {
      if (url === router.pathname) {
        setLoading(false);
      } else {
        setLoading(false);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1000);
      }
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  useEffect(() => {
    const getData = async () => {
      const response = await getProductFilter();
      console.log(response);
      setBrand(response.data.brands);
      setPetCategory(response.data.pet_types);
      setMaxPrice(response.data.max_price);
      setMinPrice(response.data.min_price);
    };
    getData();
  }, []);

  return (
    <div className="bg-[#f8f8f8] lg:p-10 w-full h-full">
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
              placeholder="جستجوی محصول"
              className="w-full border-none focus:border-none bg-transparent placeholder:text-primary"
            />
            <Image src={SearchRed_Icon} alt="SearchIcon" />
          </div>
          <div
            onClick={() => router.push("/")}
            className="h-full px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
          >
            <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
          </div>
        </div>
        {/*Arrangment Box*/}
        <div className="flex mt-5">
          {/* FilterBox */}
          <FilterInDesktop
            setFilterPageOpen={setFilterPageOpen}
            setMainPageOpen={setMainPageOpen}
            setFilterBoxOpen={setFilterBoxOpen}
            brand={brand}
            petCategory={petCategory}
            FilterBoxOpen={FilterBoxOpen}
          />
          {/* Sort Box */}
          <SortInDesktop
            // setSortValue={setSortValue}
            setSortPageOpen={setSortPageOpen}
            setMainPageOpen={setMainPageOpen}
            sortValue={sortValue}
            sortArr={sortArr}
          />
        </div>
        {/* ProductsBox */}
        {!loading ? <DoctorBox data={data} /> : <Loading />}
      </div>
      {/* Filter Page */}
      <FilterinMobile
        setFilterPageOpen={setFilterPageOpen}
        setMainPageOpen={setMainPageOpen}
        brand={brand}
        petCategory={petCategory}
        FilterPageOpen={FilterPageOpen}
      />
      {/* Sort Page */}
      <SortInMobile
        setSortValue={setSortValue}
        setSortPageOpen={setSortPageOpen}
        setMainPageOpen={setMainPageOpen}
        SortPageOpen={SortPageOpen}
        sortArr={sortArr}
        sortValue={sortValue}
      />
    </div>
  );
}
