import React, { use, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
// media
import Bookmark_Icon from "../../assets/common/BookmarkBlackIcon.svg";
import Notification_Icon from "../../assets/common/notificationIcon.svg";
//components
import AddToCartForMobile from "@/components/singleProduct/AddToCartForMobile";
import Comments from "@/components/singleProduct/Comments";
import ProductFeatureForDesktop from "@/components/singleProduct/ProductFeatureForDesktop";
import Description from "@/components/singleProduct/Description";
import Sellers from "@/components/singleProduct/Sellers";
import BeneFits from "@/components/singleProduct/BeneFits";
import HeadingForMobile from "@/components/singleProduct/HeadingForMobile";
import SummeryAvailebility from "@/components/singleProduct/SummeryAvailebility";
import DefaultSeller from "@/components/singleProduct/DefaultSeller";
import SummeryFeature from "@/components/singleProduct/SummeryFeature";
import HeadingForDesktop from "@/components/singleProduct/HeadingForDesktop";
import CommentfForm from "./CommentfForm";
import ToastContainer from "@/components/partials/toast/ToatContainer";
import SimilarProducts from "./SimilarProducts";
//formik
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
//services
import { createBookmark } from "@/services/product/addTobookmark";
//toast
import { toast } from "react-toastify";
import { createComment } from "@/services/product/addComment";
export default function SingleProduct({ data }) {
  const router = useRouter();
  const [mainPageOpen, setMainPageOpen] = useState(true);
  const [commentPageOpen, setCommentPageOpen] = useState(false);
  const CommentSchima = Yup.object().shape({
    title: Yup.string().required("فیلد الزامی است"),
    description: Yup.string().required("فیلد الزامی است"),
    rate: Yup.string().required("فیلد الزامی است"),
  });
  const { handleChange, values, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        rate: "",
      },
      onSubmit: async (values) => {
        const reesponse = await createComment(data.slug, values);
        if (reesponse.success) {
          toast.success(" دیدگاه شما با موفقیت ثبت شد", {
            toastId: data.id,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.info(" مشکلی در فرایند ثبت دیدگاه وجود دارد", {
            toastId: data.id,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.log(reesponse);
      },
      validationSchema: CommentSchima,
      validateOnMount: false,
      validateOnChange: false,
      validateOnBlur: false,
    });
  const handleAddToBookmark = async () => {
    const response = await createBookmark(data.id);
    if (response.success) {
      toast.success("محصول به علاقه مندی ها اضافه شد", {
        toastId: data.id,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("این محصول از قبل در علاقه مندی ها موجود است", {
        toastId: data.id,
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <ToastContainer />
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
              <Image
                className="cursor-pointer"
                onClick={handleAddToBookmark}
                src={Bookmark_Icon}
                alt="BookmarkIcon"
              />
            </div>
            {/* Gallery */}
            <div className="self-center w-full lg:w-[450px] h-[200px] lg:h-[360px] rounded-[15px] border-[2px] border-primary solid">
              <Image
                style={{ width: "100%", height: "100%" }}
                width={100}
                height={100}
                src={
                  data.picture_url
                    ? `https://api.petemoon.com${data.picture_url}`
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
          <SimilarProducts data={data} />
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
            title={values.title}
            description={values.description}
            formSubmit={handleSubmit}
            change={handleChange}
            errors={errors}
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
          title={values.title}
          description={values.description}
          rate={values.rate}
          formSubmit={handleSubmit}
          change={handleChange}
          errors={errors}
        />
      </div>
    </>
  );
}
