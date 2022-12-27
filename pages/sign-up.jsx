import backgroundLines from "../assets/common/signUpLoginLines.png";
import { useFormik } from "formik";
import FloatLabelInput from "../components/common/input";
import leftArrow from "../assets/common/leftArrow.png";
import bigPetsImage from "../assets/common/signUpLoginImage.png";
import PetemoonLogo from "../components/common/logo";

export default function signUp() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      refCode: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full bg-white lg:bg-[#F1F1F1] relative">
      <div className="avatar absolute left-0 bottom-0 lg:hidden">
        <div className="w-screen">
          <img src={backgroundLines.src} />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-[58%]">
        <div className="avatar absolute left-0 bottom-0 hidden lg:block w-full">
          <div className="w-full">
            <img src={backgroundLines.src} />
          </div>
        </div>
        <div className="flex justify-center z-10">
          <div className="w-[90%]">
            <img src={bigPetsImage.src} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-[42%] lg:bg-white h-full justify-between items-center space-y-20 lg:space-y-8 z-10 px-8 lg:px-14 py-12">
        <div className="w-full h-[40%] flex flex-col justify-between items-center">
          <div className="flex w-full justify-start lg:hidden">
            <button className="btn btn-square btn-md md:btn-lg border-0 rounded-2xl bg-[#ECA299] active:bg-[#ECA299] focus:bg-[#ECA299]">
              <img src={leftArrow.src} className="w-[15%]" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <PetemoonLogo />
            <div
              id="header"
              className="font-black text-[#333333] text-xl md:text-[40px]"
            >
              کاربر عزیز خوش آمدید
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full h-[60%]">
          <div className="flex flex-col h-full items-center justify-between max-h-[60rem]">
            <FloatLabelInput
              type={"text"}
              placeholder={"نام"}
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              required={true}
              h={"h-[10%]"}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"نام خانوادگی"}
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              required={true}
              h={"h-[10%]"}
            />
            <FloatLabelInput
              type={"email"}
              placeholder={"ایمیل"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required={false}
              h={"h-[10%]"}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"کد معرف"}
              name="refCode"
              onChange={formik.handleChange}
              value={formik.values.refCode}
              required={false}
              h={"h-[10%]"}
            />
            <button
              type="submit"
              className="btn md:h-[10%] border-0 bg-primary active:bg-primary focus:bg-primary w-full mt-4 rounded-lg text-base md:text-xl font-normal"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
