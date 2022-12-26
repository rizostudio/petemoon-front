import Image from "next/image";
import backgroundLines from "../assets/common/signUpLoginLines.png";
import signupLogo from "../assets/common/petemoonLogo.png";
import { useFormik } from "formik";
import FloatLabelInput from "../components/common/input";
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
    <div className="flex flex-col h-screen w-full bg-primaryMobileBg p-5 relative">
      <Image src={backgroundLines} className="absolute bottom-0 left-0" />
      <div id="image" className="hidden"></div>
      <div className="flex flex-col h-full items-center pt-20 space-y-8 z-10">
        <div className="flex flex-col space-y-4">
          <div id="logo" className="flex flex-col items-center text-primary">
            <Image src={signupLogo} width={61} height={61} />
            <p className="font-bold text-xl">petemoon</p>
          </div>
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
              py={3.5}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"نام خانوادگی"}
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              required={true}
              py={3.5}
            />
            <FloatLabelInput
              type={"email"}
              placeholder={"ایمیل"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required={false}
              py={3.5}
            />
            <FloatLabelInput
              type={"text"}
              placeholder={"کد معرف"}
              name="refCode"
              onChange={formik.handleChange}
              value={formik.values.refCode}
              required={false}
              py={3.5}
            />
            <button type="submit" className="btn bg-primary active:bg-primary focus:bg-primary w-full mt-6 rounded-lg">
              click
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
