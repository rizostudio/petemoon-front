//react&next
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
//component
import OtpInput from "../partials/otpInput";
//services
import { validationOtp } from "@/services/auth/validation";
import { login } from "@/services/auth/login";
//localStorage
import {
  OtpId,
  refreshTokenLS,
  Phone,
  userDataStorage,
} from "@/localSttorage/auth";
//formik
import { useFormik } from "formik";
//count of otp
const OTP_COUNT = 4;
import { toast } from "react-toastify";
import Link from "next/link";

export default function ValidationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const formik = useFormik({
    initialValues: {
      confirmationCode: new Array(OTP_COUNT).fill(""),
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      const response = await validationOtp(values.confirmationCode);
      if (response.success) {
        OtpId.remove();
        console.log(response);
        refreshTokenLS.set(response.data.refreshToken);
        if (!response.data.isRegistered) router.push("/auth/signUp");
        if (response.data.isRegistered) router.push("/dashboard");
      } else {
        setIsSubmitting(false);
        toast.error("کد وارد شده نادرست است", {
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
    },
  });
  const handleResend = async () => {
    if (minutes === 0 && seconds === 0) {
      const response = await login(Phone.get());
      if (response.success) {
        OtpId.set(response.data.otp_id);
        setMinutes(1);
        setSeconds(59);
      } else {
        if (response.errors[0] === "user registered with different user type") {
          toast.error("این شماره از قبل در سیستم موجود است", {
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
      }
    }
  };
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[50%] lg:h-[50%]">
      <div className="flex flex-col h-full items-center justify-around py-2 lg:justify-around space-y-3">
        <div className="flex flex-col w-full items-center space-y-4 lg:space-y-6">
          <OtpInput
            label={"کد ۴ رقمی خود را وارد کنید"}
            value={formik.values.confirmationCode}
            setValue={(newValue) =>
              formik.setFieldValue("confirmationCode", newValue)
            }
            size={OTP_COUNT}
          />
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <p
              className={clsx("text-[#BDBDBD]  text-sm lg:text-xl", {
                "text-primary": seconds === 0,
                "cursor-pointer": seconds === 0,
              })}
              onClick={handleResend}
            >
              ارسال مجدد کد
            </p>
            <Link
              className={clsx("text-[#000] cursor-pointer text-sm lg:text-xl")}
              href={"/auth/login"}
            >
              ویرایش شماره
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
           `}
          disabled={formik.values.confirmationCode.join("").length < OTP_COUNT}
        >
          {isSubmitting && (
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          تایید
        </button>
      </div>
    </form>
  );
}
