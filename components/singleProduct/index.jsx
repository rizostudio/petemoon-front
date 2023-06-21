import React, { use, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
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
export default function SingleProduct({ data }) {
  const router = useRouter();
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
          <div className="self-center w-full lg:w-[450px] h-[200px] lg:h-[500px] rounded-[15px] border-[2px] border-primary solid">
            <Image
              style={{ width: "100%", height: "100%" }}
              width={100}
              height={100}
              src={
                data.picture
                  ? `https://api.petemoon.com${data.picture}`
                  : "/assets/product/ProductPic4.svg"
              }
            />
          </div>
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
        {/* <SimilarProducts data={data} /> */}
        {/* Description for desk and mobile */}
        <Description data={data} />
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
