import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { debounce } from "lodash";
import { search } from "@/services/home/search";
import Link from "next/link";
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

export default function ProductList({ products }) {
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
  const [searchResult, setSearchResult] = useState([]);
  const [searchloading, setSearchLoading] = useState(false);
  const [inputBlur, setInputBlur] = useState(false);
  const performSearch = debounce(async (keyword) => {
    setSearchLoading(true);
    const response = await search(keyword);

    if (response.success) {
      console.log(response.data);
      setSearchResult(response.data);
      setSearchLoading(false);
    }
  }, 1000);
  const handleSearch = (e) => {
    setInputBlur(true);
    if (!e.target.value) {
      setSearchResult([]);
    }
    performSearch(e.target.value);
    setSearchResult([]);
  };
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
    <div className="bg-[#f8f8f8] lg:p-10  w-full h-full">
      {/* Main Page */}
      <div
        className={clsx("lg:block text-right px-4 py-5  lg:px-0 lg:py-10 ", {
          block: MainPageOpen == true,
          hidden: MainPageOpen == false,
        })}
      >
        {/* Heading for mobile */}
        <div className="h-[40px] w-full flex lg:hidden justify-between  items-center">
          <div className="w-full h-full flex justify-between px-5 py-3 bg-[#ECA299]  rounded-[15px]">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="جستجوی محصول"
              className="h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer"
            />
            <Image src={SearchRed_Icon} alt="SearchIcon" />
            {inputBlur && (
              <div
                // aria-hidden="true"
                // data-te-modal-init
                // data-te-toggle="modal"
                className="w-[200px] z-100 xl:w-[300px] px-0 bg-[red] search searchh top-[-300px]"
              >
                {!searchloading ? (
                  searchResult.length ? (
                    searchResult.map((item) => {
                      return (
                        <div key={item.id}>
                          <Link href={`/products/${item.slug}`}>
                            {item.name}
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div>نتیجه ای یافت نشد</div>
                  )
                ) : (
                  <div className="loadingg"></div>
                )}
              </div>
            )}
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
            maxPrice={maxPrice}
            minPrice={minPrice}
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
        {!loading ? <ProducsBox data={products} /> : <Loading />}
      </div>
      {/* Filter Page */}
      <FilterinMobile
        setFilterPageOpen={setFilterPageOpen}
        setMainPageOpen={setMainPageOpen}
        brand={brand}
        petCategory={petCategory}
        FilterPageOpen={FilterPageOpen}
        maxPrice={maxPrice}
        minPrice={minPrice}
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
