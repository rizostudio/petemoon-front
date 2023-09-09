import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "jalali-moment";
//components
import FloatLabelInput from "@/components/partials/input";
import MainLayout from "@/layout/main";

// media
import StarEmpty_Icon from "../../assets/common/starEmpty.svg";
import StarGold_Icon from "../../assets/common/startGold.svg";
import leftArrow_Icon from "../../assets/common/leftArrowWhite.svg";
import Bookmark_Icon from "../../assets/common/BookmarkBlackIcon.svg";
import Notification_Icon from "../../assets/common/notificationIcon.svg";
import Share_Icon from "../../assets/common/shareIcon.svg";
import Info_Icon from "../../assets/common/info-circle.svg";
import Properties_Icon from "../../assets/product/PropertiesIcon.svg";
import ProfileAlt_Pic from "../../assets/common/profileIcon4.svg";
import CloseButton_Icon from "../../assets/common/close-button.svg";
import { getSingleDoctor } from "@/services/Doctor/getSingle";
import { getListOfDoctor } from "@/services/Doctor/getListOfDoctor";
import { getVisitTime } from "@/services/Doctor/getVisitTime";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import { AuthContext } from "@/store/AuthCtx/AuthContext";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Loading from "@/components/partials/loading";
import { createCommentForDoctor } from "@/services/Doctor/addComment";
const SingleDoctor = ({ data }) => {
  const { state, dispatch } = BasketContext();
  const { authState, authDispatch } = AuthContext();
  const router = useRouter();
  const [dateSelected, setDateSelected] = useState({});
  const [dateSelectedValue, setDateSelectedValue] = useState(false);
  const [reserveDateData, setReserveDateData] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const dateConverter = (dateIn) => {
    var dates = [];
    var days = 7;
    for (let i = 0; i < days; i++) {
      var date = dateIn;
      var last = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
      var day = last.getDate();
      var month = last.getMonth() + 1;
      var year = last.getFullYear();
      dates[i] =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    }
    return dates;
  };
  useEffect(() => {
    var today = dateConverter(new Date());
    console.log(today);
    setReserveDateData(today);
    const getTimes = async () => {
      const response = await getVisitTime(router.query.vet, dateSelected);
      setSelectedTime(response.data);
    };
    getTimes();
  }, [dateSelected]);

  console.log(dateSelected);
  // for showing data
  const starsBoxHandler = (stars) => {
    const starsBox = [];
    for (let i = 0; i < stars; i++) {
      starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon" />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon" />);
    }
    return starsBox;
  };
  // for dynamic
  const [mainPageOpen, setMainPageOpen] = useState(true);
  const [commentPageOpen, setCommentPageOpen] = useState(false);
  const [timeinMOdal, setTimInModal] = useState("");
  const handleChangeTime = (e) => {
    selectedTime.map((item) => {
      if (e.target.value == item.id) {
        setTimInModal(item.time);
      }
    });
    dispatch({
      type: "ADD_VET_TIME",
      payload: {
        vetId: router.query.vet,
        time: e.target.value,
      },
    });
  };
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
        rate: 3,
      },
      onSubmit: async (values) => {
        const reesponse = await createCommentForDoctor(data.id, values);
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

  if (router?.isFallback) {
    return <Loading />;
  } else {
    return (
      <>
        <MainLayout>
          <div className="w-full h-full flex flex-col justify-between items-stretch bg-[#f8f8f8] lg:px-[120px] lg:py-5">
            {/* Main Page  */}
            <div
              className={clsx(
                "lg:flex flex-col justify-between items-stretch",
                {
                  flex: mainPageOpen == true,
                  hidden: mainPageOpen == false,
                }
              )}
            >
              {/*Heading for mobile */}
              <div className="flex lg:hidden flex-row justify-between items-center px-10 py-5 lg:px-0 lg:py-10">
                <div className="flex flex-col justify-end">
                  <div className="flex flex-row items-center">
                    <h2 className="text-base text-black font-black leading-7 opacity-90 before:inline-block before:bg-primary before:w-2 before:h-5 before:ml-1 before:align-middle before:rounded-[2px]">
                      {data?.first_name + data?.last_name}
                    </h2>
                    <div className="flex flex-row items-center mr-1">
                      <Image src={StarGold_Icon} alt="GoldenStarIcon" />

                      <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${
                        data?.average_rating ? data?.average_rating : 5
                      })`}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <Link
                    href="/vet"
                    className="p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
                  >
                    <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
                  </Link>
                </div>
              </div>
              {/* Summary box */}
              <div className="w-full flex flex-col lg:flex-row lg:justify-evenly  items-stretch px-10 py-5 lg:px-0 lg:py-10  border-solid border-b-[2px] border-secondary">
                <div className="hidden lg:block p-10">
                  {/* <Image src={Bookmark_Icon} alt="BookmarkIcon" />
              <Image
                src={Notification_Icon}
                alt="NotificationIcon"
                className="my-8"
              />
              <Image src={Share_Icon} alt="ShareIcon" />
              <Image src={Info_Icon} alt="InfoIcon" className="my-8" /> */}
                </div>
                {/* Gallery */}
                <div className="self-center w-full lg:w-[450px] max-h-[200px] lg:max-h-[400px] rounded-[15px] border-[2px] border-primary solid">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    width={100}
                    height={100}
                    src={
                      data.photo
                        ? `https://api.petemoon.com${data.photo}`
                        : "/assets/vet/DoctorPic.svg"
                    }
                  />
                </div>
                <div className="xl:w-full flex flex-col lg:mr-10">
                  {/* Heading for desktop */}
                  <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start py-4  lg:px-4 border-b-[2px] border-none lg:border-solid border-secondary">
                    <div className="flex flex-col">
                      <p className="text-base lg:text-lg text-gray-400 font-normal leading-6">
                        <bdi>{`${5} مشاوره`}</bdi>
                      </p>
                      <h2 className="text-3xl text-black font-bold leading-10 w-full hidden lg:block mt-2 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2  before:rounded-[2px]">
                        {data?.first_name + data?.last_name}
                      </h2>
                    </div>
                    <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start lg:mt-10">
                      <div className="hidden lg:flex flex-row items-center">
                        <div className="flex flex-row items-center">
                          {starsBoxHandler(
                            data?.average_rating ? data?.average_rating : 5
                          )}
                        </div>
                        <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${
                          data?.average_rating ? data?.average_rating : 5
                        })`}</p>
                      </div>
                      <Link
                        href="#cutomersComent"
                        className="text-base lg:text-lg text-info font-normal leading-6 lg:mt-2"
                      >
                        <bdi>{`${data?.comments_count} دیدگاه`}</bdi>
                      </Link>
                    </div>
                  </div>
                  {/* Specialty */}
                  <div className="pb-3 my-2 mt-5 order-2 lg:order-1 ">
                    <div className="flex flex-row items-center mb-1">
                      <Image src={Properties_Icon} alt="PropertiesIcon" />
                      <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
                        <bdi>تخصص</bdi>
                      </p>
                    </div>
                    <div className="flex flex-col my-1 mr-5">
                      <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 my-1 before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>{`فوق تخصص حیوانات خانگی`}</bdi>
                      </p>
                      <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 my-1 before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>{`   دکترای دامپزشکی`}</bdi>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
                <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
                  درباره پزشک
                </h5>
                <p className="text-base lg:text-xl text-black font-medium leading-6 lg:leading-10 opacity-90">
                  <bdi>{data?.about}</bdi>
                </p>
              </div>
              {/* Reserve Box  */}
              <div className="text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
                <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
                  <bdi>تایم شیت رزرو مشاوره</bdi>
                </h5>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center w-full px-4 py-8 lg:px-[70px] lg:py:[60px] bg-[#ea63521a] rounded-[15px] lg:rounded-[20px]">
                    <div className="flex flex-col items-stretch text-center ml-2 lg:ml-7">
                      <p className="text-base lg:text-lg font-black leading-5 opacity-95">
                        <bdi>
                          {moment(reserveDateData[0], "YYYY-MM-DD")
                            .locale("fa")
                            .format("mmmm")}
                        </bdi>
                      </p>
                      <p className="text-base lg:text-xl font-black leading-6 opacity-95 mt-1 lg:mt-7">
                        <bdi>
                          {moment(reserveDateData[0], "YYYY-MM-DD")
                            .locale("fa")
                            .format("yyyy")}
                        </bdi>
                      </p>
                    </div>
                    {reserveDateData &&
                      reserveDateData?.map((item, index) => (
                        <div
                          onClick={() => {
                            setDateSelected(item);
                            setDateSelectedValue(true);
                          }}
                          className={clsx(
                            "flex flex-col items-stretch text-center mx-2 lg:mx-7 cursor-pointer",
                            {
                              "text-white bg-primary px-1.5 py-2.5 lg:px-2.5 lg:py-5 rounded-[22px] lg:rounded-[40px]":
                                item == dateSelected,
                              "text-primary": item !== dateSelected,
                            }
                          )}
                        >
                          <p className="text-[8px] xs:text-[10px] sm:text-sm lg:text-lg font-black leading-5 opacity-95">
                            <bdi>
                              {moment(item, "YYYY-MM-DD")
                                .locale("fa")
                                .format("dddd")}
                            </bdi>
                          </p>
                          <p className="text-[8px] xs:text-[10px] sm:text-sm lg:text-xl font-black leading-6 opacity-95 mt-1 lg:mt-7">
                            <bdi>
                              {moment(item, "YYYY-MM-DD")
                                .locale("fa")
                                .format("MM-DD")}
                            </bdi>
                          </p>
                        </div>
                      ))}
                  </div>
                  <div
                    className={clsx("flex justify-between mt-2 lg:mt-8", {
                      grayscale: dateSelectedValue == false,
                    })}
                  >
                    <div className="flex justify-between items-center w-full lg:w-3/5 px-7 py-8  bg-white lg:bg-[#ea63521a] rounded-[15px] lg:rounded-[20px]">
                      <p className="text-base lg:text-2xl text-black font-black leading-6 lg:leading-10 ml-10">
                        <bdi>ساعت مشاوره : </bdi>
                      </p>
                      {selectedTime?.length ? (
                        <select
                          onChange={handleChangeTime}
                          disabled={dateSelectedValue ? false : true}
                          className="text-base lg:text-xl text-white font-medium leading-8 w-full px-5 py-3 bg-primary border-none rounded-[12px] lg:rounded-[15px] focus:outline-none focus:border-none focus:ring-0 peer h-[50px]"
                        >
                          <option value=""></option>
                          {selectedTime.map((item) => (
                            <option value={item.id}>
                              {moment(item.time, "YYYY-M-D HH:mm:ss")
                                .locale("fa")
                                .format("HH:mm")}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="m-auto">
                          در تاریخ انتخابی شما وقتی برای رزرو موجود نیست
                        </p>
                      )}
                    </div>
                    <div className="hidden lg:flex justify-between items-center w-2/5 px-7 py-8 mr-8 bg-[#ea63521a] rounded-[15px]">
                      <div className="flex flex-col items-start">
                        <p className="text-lg text-gray-400 font-medium leading-8 opacity-95">
                          <bdi>قیمت:</bdi>
                        </p>
                        <p className='text-2xl text-primary font-semibold leading-10 mt-1 after:content-["تومان"] after:text-base after:font-normal after:leading-5 after:mr-1'>
                          <bdi>{data.price.toLocaleString()}</bdi>
                        </p>
                      </div>
                      <label
                        htmlFor={dateSelectedValue ? "reserve-modal" : ""}
                        className="text-base text-center text-white font-bold leading-7 tracking-widest w-full px-10 py-3 mr-7 bg-primary rounded-[15px]"
                      >
                        <bdi>رزرو</bdi>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Coustomers comment   */}
              <div
                id="cutomersComent"
                className="px-10 py-5 lg:px-0 lg:py-10 flex flex-col items-stretch lg:border-none border-b-[2px] border-secondary"
              >
                <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
                  نظرات
                </h5>
                {data?.comments &&
                  data?.comments.map((item) => (
                    <div key={v4()} className="mb-4 lg:mb-8">
                      <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                          {/* <Image src={item.profilePic} alt="ProfilePic" /> */}
                          <h6 className="text-base lg:text-xl text-black font-black opacity-95 mr-2 ml-4 lg:mx-5">
                            <bdi>{item.title}</bdi>
                          </h6>
                          <div className="flex flex-row items-center mr-1">
                            <Image src={StarGold_Icon} alt="GoldenStarIcon" />
                            <p className="text-lg text-gray-400 font-medium leading-5 mr-1 lg:mr-2">{`(${item.rate})`}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base text-gray-400 font-medium leading-5">
                            <bdi>{item.date}</bdi>
                          </p>
                          <p className="text-base text-gray-400 font-medium leading-5 mr-2 lg:mr-5">
                            <bdi>{item.author}</bdi>
                          </p>
                        </div>
                      </div>
                      <p className="text-base lg:text-lg text-black font-medium leading-8 mt-2 lg:mt-5 lg:mr-8">
                        <bdi>{item.text}</bdi>
                      </p>
                    </div>
                  ))}
                <button
                  onClick={() => {
                    setCommentPageOpen(true);
                    setMainPageOpen(false);
                  }}
                  className="lg:hidden text-base text-center text-primary font-bold leading-6 self-end w-1/3 py-2 border-solid border-[1px] border-primary rounded-[12px] "
                >
                  ثبت دیدگاه
                </button>
                <label
                  onClick={handleSubmit}
                  htmlFor="comment-send-modal"
                  className="hidden lg:block text-base text-center text-primary font-bold leading-6 self-end w-1/3 lg:w-1/4 px-10 lg:px-20 py-2 border-solid border-[1px] border-primary rounded-[12px] lg:rounded-[15px]"
                >
                  ثبت دیدگاه
                </label>
                {/* modal */}
                <div>
                  <input
                    type="checkbox"
                    id="comment-send-modal"
                    className="modal-toggle"
                  />
                  <label
                    htmlFor="comment-send-modal"
                    className="modal cursor-pointer"
                  >
                    <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
                      <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-xl text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2 before:rounded-[2px]">
                          دیدگاه شما
                        </p>
                        <label htmlFor="comment-send-modal">
                          <Image src={CloseButton_Icon} alt="CloseIcon" />
                        </label>
                      </div>
                      <form
                        id="form"
                        onSubmit={(event) => event.preventDefault()}
                        className="flex flex-col items-stretch"
                      >
                        <p className="text-lg text-black font-medium leading-8 mt-2">
                          <bdi>
                            نظر خود را درباره{" "}
                            <span className="text-primary">{data?.name}</span>{" "}
                            برای ما بفرستید:
                          </bdi>
                        </p>
                        <label
                          htmlFor="range-score"
                          className="text-lg text-black font-medium leading-8 mt-6"
                        >
                          امتیاز دهید
                        </label>
                        <input
                          onChange={handleChange}
                          value={values.rate}
                          name="rate"
                          max={5}
                          id="range-score"
                          type="range"
                          className="mt-2"
                        />
                        <label
                          htmlFor="comment-subject"
                          className="text-lg text-black font-medium leading-8 mt-10"
                        >
                          عنوان نظر
                        </label>
                        <input
                          id="comment-subject"
                          name="title"
                          onChange={handleChange}
                          value={values.title}
                          type="text"
                          className="px-4 py-2 lg:w-3/4 mt-2 border-[1px] border-solid border-gray-400 focus-visible:border-primary rounded-[5px]"
                        />
                        <label
                          htmlFor="comment-text"
                          className="text-lg text-black font-medium leading-8 mt-5"
                        >
                          متن نظر
                        </label>
                        <textarea
                          // form="comment-form"
                          id="comment-text"
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                          className="px-4 py-2 mt-2 border-[1px] border-solid border-gray-400 rounded-[5px]"
                        ></textarea>
                        <div className="self-end flex flex-row items-center justify-between w-full lg:w-2/5 mt-6">
                          <label
                            htmlFor="comment-send-modal"
                            className="w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error"
                          >
                            انصراف
                          </label>
                          <label
                            onClick={handleSubmit}
                            htmlFor="comment-send-modal"
                            className="w-full text-sm text-white text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] mr-2"
                          >
                            ثبت دیدگاه
                          </label>
                        </div>
                      </form>
                    </label>
                  </label>
                </div>
              </div>
              {/* Reserve Box for mobile  */}
              <div
                className={clsx(
                  "flex justify-between items-center lg:hidden px-10 py-5",
                  {
                    grayscale: dateSelectedValue == false,
                  }
                )}
              >
                <label
                  htmlFor={dateSelectedValue ? "reserve-modal" : ""}
                  className="text-base text-center text-white font-medium w-1/2 px-3 py-6 bg-primary rounded-[12px]"
                >
                  رزرو
                </label>
                <div className="flex flex-col">
                  <p className="text-base text-gray-400 font-light leading-8 opacity-95">
                    <bdi>قیمت:</bdi>
                  </p>
                  <p className="text-lg text-primary font-extrabold leading-8">
                    <bdi>{data.price.toLocaleString()} تومان</bdi>
                  </p>
                </div>
              </div>
            </div>
            {/* Comment Page */}
            <div
              className={clsx(
                "lg:hidden flex-col items-stretch p-10 w-full h-screen",
                {
                  flex: commentPageOpen == true,
                  hidden: commentPageOpen == false,
                }
              )}
            >
              <div className="h-[40px] w-full flex justify-between items-center">
                <div
                  className="flex items-center"
                  onClick={() => setFBoxMobileOpen(!fBoxMobileOpen)}
                >
                  <p className="text-xl text-black font-medium leading-7 before:inline-block before:w-2 before:h-5 before:bg-primary before:rounded-[2px] before:ml-2">
                    دیدگاه شما
                  </p>
                </div>
                <div
                  onClick={() => {
                    setCommentPageOpen(false);
                    setMainPageOpen(true);
                  }}
                  className="px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
                >
                  <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
                </div>
              </div>
              <form
                id="form"
                onSubmit={handleSubmit}
                className="flex flex-col justify-between items-stretch"
              >
                <div className="flex flex-col items-stretch">
                  <p className="text-lg text-black font-medium leading-8 mt-2">
                    <bdi>
                      نظر خود را درباره
                      <span className="text-primary">{data?.name}</span> برای ما
                      بفرستید:
                    </bdi>
                  </p>
                  <label
                    htmlFor="range-score"
                    className="text-lg text-black font-medium leading-8 mt-10"
                  >
                    امتیاز دهید
                  </label>
                  <label
                    htmlFor="range-score"
                    className="text-lg text-black font-medium leading-8 mt-6"
                  >
                    {values.rate} از ۵
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.rate}
                    name="rate"
                    max={5}
                    id="range-score"
                    type="range"
                    className="mt-2"
                  />
                  <label
                    htmlFor="comment-subject"
                    className="text-lg text-black font-medium leading-8 mt-10"
                  >
                    عنوان نظر
                  </label>
                  <input
                    id="comment-subject"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    type="text"
                    className="block text-sm md:text-xl px-3 h-full ${py} w-[75%] text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer"
                  />
                  <div className="mt-4">
                    <label
                      htmlFor="comment-text"
                      className="text-lg text-black font-medium leading-8 mt-5"
                    >
                      متن نظر
                    </label>
                    <textarea
                      // form="comment-form"
                      id="comment-text"
                      name="description"
                      onChange={handleChange}
                      value={values.description}
                      className="block text-sm md:text-xl px-3 h-full ${py} w-full text-[#333333] rounded-lg border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer"
                    ></textarea>
                    <bdi>
                      <span className="text-primary">
                        {errors.description}{" "}
                      </span>
                    </bdi>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full mt-12">
                  <button
                    onClick={() => {
                      setCommentPageOpen(false);
                      setMainPageOpen(true);
                    }}
                    className="w-2/5 text-sm text-error text-center font-semibold py-2 rounded-[5px] bg-white border-[2px] solid border-error"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-3/5 text-sm text-white text-center font-semibold py-2 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] mr-2"
                  >
                    ثبت دیدگاه
                  </button>
                </div>
              </form>
            </div>
            {/* modal  for reserve operation*/}
            <div>
              <input
                type="checkbox"
                id="reserve-modal"
                className="modal-toggle"
              />
              <label htmlFor="reserve-modal" className="modal cursor-pointer">
                <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
                  <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-xl text-black font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2 before:rounded-[2px]">
                      تایید رزرو
                    </p>
                    <label htmlFor="reserve-modal">
                      <Image src={CloseButton_Icon} alt="CloseIcon" />
                    </label>
                  </div>
                  <div className="flex flex-col my-2 lg:my-6 text-xl text-black font-medium leading-8">
                    <p className="hidden lg:block">
                      <bdi>انتخاب شما:</bdi>
                    </p>
                    <div className="hidden lg:flex flex-col mt-5">
                      <p className='text-gray-400 font-bold before:inline-block  before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>
                          متخصص:{" "}
                          <span className="text-black mr-1">{data?.name}</span>
                        </bdi>
                      </p>
                      <p className='text-gray-400 font-bold before:inline-block  before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>
                          روز و ساعت:{" "}
                          <span className="text-black mr-1">{`${moment(
                            dateSelected,
                            "YYYY-MM-DD"
                          )
                            .locale("fa")
                            .format("dddd")} ${moment(
                            dateSelected,
                            "YYYY-MM-DD"
                          )
                            .locale("fa")
                            .format("dddd")}  
                        ساعت ${moment(timeinMOdal, "YYYY-M-D HH:mm:ss")
                          .locale("fa")
                          .format("HH:mm")}`}</span>
                        </bdi>
                      </p>
                    </div>
                    <p className="lg:hidden text-base text-gray-400 font-medium leading-6">{`${moment(
                      dateSelected,
                      "YYYY-MM-DD"
                    )
                      .locale("fa")
                      .format("dddd")} ${moment(dateSelected, "YYYY-MM-DD")
                      .locale("fa")
                      .format("ddd")}  
                        ساعت ${moment(timeinMOdal, "YYYY-M-D HH:mm:ss")
                          .locale("fa")
                          .format("HH:mm")}`}</p>
                  </div>
                  <div className="flex items-center text-base text-center font-medium lg:font-bold leading-6 w-full">
                    <Link
                      href={
                        !authState?.isLoggedIn ? "/auth/login" : "/vet/confirm"
                      }
                      className="text-white bg-[#4DA4F4] rounded-[5px] w-full px-5 py-2.5 ml-2 "
                    >
                      <bdi>تایید و پرداخت</bdi>
                    </Link>
                    <label
                      htmlFor="reserve-modal"
                      className="text-error border-error border-[1px] rounded-[5px] w-full px-5 py-2.5"
                    >
                      <bdi>انصراف</bdi>
                    </label>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </MainLayout>
      </>
    );
  }
};

export async function getStaticProps(context) {
  const { vet } = context.params;
  const response = await getSingleDoctor(vet);

  return {
    props: {
      data: response.data,
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const response = await getListOfDoctor();
  const routes = response.data;
  console.log(routes);
  const paths = routes.map((item) => ({
    params: { vet: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
export default SingleDoctor;
