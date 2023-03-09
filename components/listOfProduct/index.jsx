import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

// media
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";
import ProfileAlt_Pic from "../../assets/product/profilePicAlt.svg";
import SearchRed_Icon from "../../assets/common/SearchRedIcon.svg";
//service
import { getListProducts } from "@/services/product/getListOfProducts";
//component
import FilterinMobile from "@/components/listOfProduct/FilterinMobile";
import SortInMobile from "@/components/listOfProduct/SortInMobile";
import FilterInDesktop from "@/components/listOfProduct/FilterInDesktop";
import SortInDesktop from "@/components/listOfProduct/SortInDesktop";
import { getProductFilter } from "@/services/product/getProductFilters";
import ProducsBox from "./ProducsBox";
import Loading from "../partials/loading";

export default function ProductList() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
      const response = getProductFilter();
      console.log(response.data);
    };
    getData();
  }, []);
  //fake data
  const data = {
    name: "غذای خشک سگ های خانگی",
    group: "دسته خوراکی / سگ",
    commentsNumber: 250,
    stars: 3,
    price: 123000,
    discount: 20,
    amount: 10,
    property: {
      for: "سگ خانگی",
      kind: "خوراکی حیوانی",
      MadeIn: "تایوان",
      dimension: "۲۰۰۰*۱۰۰۰",
      weight: 2000,
      OtherDescription:
        "فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد.",
    },
    description:
      "فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.",
    seller: [
      { name: "شهر پت", logo: StoreAlt_Logo, price: 135000 },
      { name: "پتمون", logo: StoreAlt_Logo, price: 140000 },
      { name: "پتجا", logo: StoreAlt_Logo, price: 150000 },
    ],
    comments: [
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
    ],
    similarProduct: [
      {
        id: "15244352",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 4,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        id: "243645756",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 5,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "343386785",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 3,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        id: "445879876",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "586549789",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "16387906098",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "65487690",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "748798670",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "827368769",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "93575698",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "1087980",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "15765967491",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "1248768959",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "136587908670",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "14575648796",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
    ],
  };
  const brand = [
    { name: "پت بازار", id: "petBazzar" },
    { name: "پت شاپ۱", id: "petShop1" },
    { name: "پت ایران", id: "petIran" },
    { name: "تهران پت", id: "tehranPet" },
    { name: "کافه پت", id: "petCafe" },
  ];
  const petKind = [
    { name: "سگ خانگی", id: "petBazzar" },
    { name: "سگ شکارچی", id: "petShop1" },
    { name: "سگ وحشی", id: "petIran" },
    { name: "سگ گله", id: "tehranPet" },
    { name: "سگ نگهبان", id: "petCafe" },
  ];

  // the array of sort options
  const [sortArr, setSortArr] = useState([
    { title: "پرفروش ترین", slug: "1" },
    { title: "محبوب ترین", slug: "2" },
    { title: "جدید ترین", slug: "3" },
    { title: "ارزان ترین", slug: "4" },
    { title: "گران ترین", slug: "5" },
  ]);
  // for change the color of choosen option in sorting
  const [sortValue, setSortValue] = useState("پرفروش ترین");

  //Dynamic
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false); //for open & close filterBox in desktop
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
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
            onClick={() => router.push("/products/1")}
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
            petKind={petKind}
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
        {!loading ? <ProducsBox data={data} /> : <Loading />}
      </div>
      {/* Filter Page */}
      <FilterinMobile
        setFilterPageOpen={setFilterPageOpen}
        setMainPageOpen={setMainPageOpen}
        brand={brand}
        petKind={petKind}
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
