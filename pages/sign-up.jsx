import Image from "next/image";
import backgroundLines from "../assets/common/signUpLoginLines.png";
import { useFormik } from "formik";
import FloatLabelInput from "../components/common/input";
import leftArrow from "../assets/common/leftArrow.png";
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
    <div className="flex flex-col h-screen w-full bg-primaryMobileBg px-8 py-12 relative">
      <Image src={backgroundLines} className="absolute bottom-0 left-0" />
      <div className="flex flex-col h-full justify-around items-center space-y-8 z-10">
        <div className="flex w-full justify-start">
          <button className="btn btn-square border-0 rounded-2xl bg-[#ECA299] active:bg-[#ECA299] focus:bg-[#ECA299]">
            <img src={leftArrow.src} className="w-[15%]" />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <PetemoonLogo size="sm" />
          <div id="header" className="font-black text-[#333333] text-xl">
            کاربر عزیز خوش آمدید
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full h-full">
          <div className="flex flex-col h-full items-center justify-between">
            <FloatLabelInput
              type={"text"}
              placeholder={"نام"}
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              required={true}
              py={"py-3.5"}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"نام خانوادگی"}
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              required={true}
              py={"py-3.5"}
            />
            <FloatLabelInput
              type={"email"}
              placeholder={"ایمیل"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required={false}
              py={"py-3.5"}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"کد معرف"}
              name="refCode"
              onChange={formik.handleChange}
              value={formik.values.refCode}
              required={false}
              py={"py-3.5"}
            />
            <button
              type="submit"
              className="btn border-0 bg-primary active:bg-primary focus:bg-primary w-full mt-6 rounded-lg text-base font-normal"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
