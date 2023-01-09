import backgroundLines from "@/assets/common/signUpLoginLines.png";
import { useFormik } from "formik";
import leftArrow from "@/assets/common/leftArrow.png";
import bigPetsImage from "@/assets/signup/signupImage.png";
import smallPetsImage from "@/assets/login/loginImage.png";
import PetemoonLogo from "@/components/common/logo";
import OtpInput from "@/components/common/otpInput";
import { postVerifyOTP } from "@/services/login/validation";
import { useRouter } from "next/router";
import { OtpId, refreshToken } from "@/localStorage";
import { useState } from "react";

const OTP_COUNT = 4;

export default function LoginValidation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      confirmationCode: new Array(OTP_COUNT).fill(""),
    },
    onSubmit: async (values) => {
      toggleSubmitState();
      const response = await postVerifyOTP(values.confirmationCode);
      toggleSubmitState();
      if (response.success) {
        OtpId.remove();
        refreshToken.set(response.data.token);
        router.push("/sign-up");
      } else console.log("Error: ", response.errors);
    },
  });
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white lg:bg-[#F1F1F1]">
      <div className="hidden lg:flex justify-center items-center w-[58%]">
        <div className="avatar absolute left-0 bottom-0 hidden lg:block w-[58%]">
          <div className="w-full opacity-50">
            <img src={backgroundLines.src} />
          </div>
        </div>
        <div className="flex justify-center z-10">
          <div className="w-[90%]">
            <img src={bigPetsImage.src} />
          </div>
        </div>
      </div>
      <div className="flex relative justify-center items-center lg:hidden w-full p-10 h-[55%] z-10 bg-gradient-to-br from-primary via-primary to-[#acd4f7]">
        <div className="absolute left-10 top-10 lg:hidden">
          <button className="btn btn-square btn-md md:btn-lg border-0 rounded-2xl bg-primary-light active:bg-primary-light focus:bg-primary-light">
            <img src={leftArrow.src} className="w-[15%]" />
          </button>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <img src={smallPetsImage.src} />
          </div>
        </div>
      </div>
      <div className="bg-white w-full lg:w-[42%] p-4 px-10 lg:px-24 h-[45%] lg:h-full flex flex-col justify-between lg:justify-center items-center relative">
        <div className="avatar absolute left-0 bottom-0 w-full lg:hidden">
          <div className="opacity-50">
            <img src={backgroundLines.src} />
          </div>
        </div>
        <div className="w-full h-full z-10">
          <div className="flex flex-col lg:justify-center items-center space-y-4 md:space-y-8 h-[50%]">
            <PetemoonLogo />
            <div
              id="header"
              className="font-black text-[#333333] text-xl md:text-[40px]"
            >
              کاربر عزیز خوش آمدید
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[50%] lg:h-[50%]"
          >
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
                  <p className="text-secondary text-xs">۰۰:۰۰</p>
                  <p
                    className="text-primary text-sm lg:text-xl"
                    onClick={() => console.log("again!")}
                  >
                    ارسال مجدد کد
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-primary-dark active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal ${
                  isSubmitting && "loading"
                }`}
                disabled={
                  formik.values.confirmationCode.join("").length < OTP_COUNT
                }
              >
                تایید
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
