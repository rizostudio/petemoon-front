import React, { use, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
// media
import Bookmark_Icon from "../../assets/common/BookmarkBlackIcon.svg";
import Notification_Icon from "../../assets/common/notificationIcon.svg";
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";
import ProfileAlt_Pic from "../../assets/product/profilePicAlt.svg";
//components
import AddToCartForMobile from "@/components/singleProduct/AddToCartForMobile";
import Comments from "@/components/singleProduct/Comments";
import ProductFeatureForDesktop from "@/components/singleProduct/ProductFeatureForDesktop";
import Description from "@/components/singleProduct/Description";
import SimilarProducts from "@/components/singleProduct/SimilarProducts";
import Sellers from "@/components/singleProduct/Sellers";
import BeneFits from "@/components/singleProduct/BeneFits";
import HeadingForMobile from "@/components/singleProduct/HeadingForMobile";
import SummeryAvailebility from "@/components/singleProduct/SummeryAvailebility";
import DefaultSeller from "@/components/singleProduct/DefaultSeller";
import SummeryFeature from "@/components/singleProduct/SummeryFeature";
import HeadingForDesktop from "@/components/singleProduct/HeadingForDesktop";
import CommentfForm from "./CommentfForm";
//formik
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
export default function SingleProduct() {
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
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 4,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 5,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 3,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
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

  const [mainPageOpen, setMainPageOpen] = useState(true);
  const [commentPageOpen, setCommentPageOpen] = useState(false);
  const CommentSchima = Yup.object().shape({
    title: Yup.string().required("فیلد الزامی است"),
    description: Yup.string().required("فیلد الزامی است"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: CommentSchima,
  });
  return (
    <div className="w-full h-full flex flex-col justify-between items-stretch bg-[#f8f8f8] lg:px-12 lg:py-5">
      {/* Main Page  */}
      <div
        className={clsx("lg:flex flex-col justify-between items-stretch", {
          flex: mainPageOpen == true,
          hidden: mainPageOpen == false,
        })}
      >
        {/*Heading for mobile */}
        <HeadingForMobile data={data} />
        {/* Summary box */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-evenly  items-stretch px-10 py-5 lg:px-0 lg:py-10  border-solid border-b-[2px] border-secondary">
          <div className="hidden lg:block p-10">
            <Image src={Bookmark_Icon} alt="BookmarkIcon" />
            <Image
              src={Notification_Icon}
              alt="NotificationIcon"
              className="my-8"
            />
          </div>
          {/* Gallery */}
          <div className="self-center w-full lg:w-[450px] h-[200px] lg:h-[600px] rounded-[15px] border-[2px] border-primary solid"></div>
          <div className="xl:w-full flex flex-col lg:mr-10">
            {/* Heading for desktop */}
            <HeadingForDesktop data={data} />
            <div className="flex flex-col justify-between mt-5">
              {/* Summary Propertiese for desk and mobile */}
              <SummeryFeature data={data} />
              {/* Summary Sellers for desk and mobile */}
              <DefaultSeller data={data} />
              {/* Summary availability && Add to card for desk and mobile */}
              <SummeryAvailebility data={data} />
            </div>
          </div>
        </div>
        {/* Benefits */}
        <BeneFits />
        {/* Sellers for desk and mobile */}
        <Sellers data={data} />
        {/* Similar Products for desk and mobile */}
        <SimilarProducts data={data} />
        {/* Description for desk and mobile */}
        <Description />
        {/* Propertiese  for desktop*/}
        <ProductFeatureForDesktop data={data} />
        {/* comments */}
        <Comments
          setMainPageOpen={setMainPageOpen}
          setCommentPageOpen={setCommentPageOpen}
          commentPageOpen={commentPageOpen}
          data={data}
          title={formik.values.title}
          description={formik.values.description}
          formSubmit={formik.handleSubmit}
          change={formik.handleChange}
        />
        {/* Add to Cart mobile  */}
        <AddToCartForMobile data={data} />
      </div>
      {/* CommentForm */}
      <CommentfForm
        setMainPageOpen={setMainPageOpen}
        setCommentPageOpen={setCommentPageOpen}
        commentPageOpen={commentPageOpen}
        data={data}
        title={formik.values.title}
        description={formik.values.description}
        formSubmit={formik.handleSubmit}
        change={formik.handleChange}
      />
    </div>
  );
}
