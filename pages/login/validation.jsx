import backgroundLines from "@/assets/common/signUpLoginLines.png";
import { useFormik } from "formik";
import FloatLabelInput from "@/components/common/input";
import leftArrow from "@/assets/common/leftArrow.png";
import bigPetsImage from "@/assets/signup/signupImage.png";
import smallPetsImage from "@/assets/login/loginImage.png";
import PetemoonLogo from "@/components/common/logo";
import Link from "next/link";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      confirmationCode: "",
    },
    onSubmit: (value) => {
      console.log(value);
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
            <div className="flex flex-col h-full items-center justify-end lg:justify-center space-y-5">
              <div className={`relative w-full h-12`} dir={"ltr"}>
                <input
                  type={"text"}
                  id={"confirmationCode"}
                  className={`block text-center text-sm md:text-xl bg-white px-3 h-full w-full text-[#333333] rounded-xl border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer`}
                  placeholder="- - - -"
                  onChange={formik.handleChange}
                  value={
                    formik.values.confirmationCode === ""
                      ? " "
                      : formik.values.confirmationCode
                  }
                  name={"confirmationCode"}
                />
                <label
                  htmlFor={"confirmationCode"}
                  className="absolute scale-75 peer-focus:scale-[85%] peer-placeholder-shown:scale-100   text-sm md:text-lg peer-focus:text-sm peer-focus:md:text-lg peer-placeholder-shown:text-sm peer-placeholder-shown:md:text-lg text-[#9B9BA1] duration-300 transform -translate-y-4 top-2 z-10 bg-white peer-focus:bg-white px-1 peer-placeholder-shown:px-1 peer-focus:pr-2 peer-focus:text-primary peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 right-4 peer-focus:right-4 peer-placeholder-shown:right-4 text-right origin-top-right"
                >
                  {"کد ۴ رقمی را وارد نمایید"}
                </label>
              </div>
              <button
                type="submit"
                className="btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-primary-dark active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal"
                disabled={formik.values.phoneNumber === ""}
              >
                تایید
              </button>
              <div className="flex flex-col justify-center items-center space-y-2">
                <p className="text-[#DEDFE1] text-xs">۰۰:۰۰</p>
                <p
                  className="text-primary text-sm lg:text-xl"
                  onClick={() => console.log("again!")}
                >
                  ارسال مجدد کد
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
