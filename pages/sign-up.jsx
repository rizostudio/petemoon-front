import Image from "next/image";
import backgroundLines from "../assets/common/signUpLoginLines.png";
import signupLogo from "../assets/common/petemoonLogo.png";
import { useFormik } from "formik";
export default function signUp() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            refCode: '',
        },
        onSubmit: () => {}
    })
  return (
    <div className="flex flex-col h-screen w-full bg-primaryMobileBG py-10 px-5 relative">
      <Image src={backgroundLines} className="absolute bottom-0 left-3" />
      <div id="image" className="hidden"></div>
      <div className="flex flex-col items-center pt-20 space-x-8">
        <div className="flex flex-col space-y-4">
          <div
            id="logo"
            className="flex flex-col items-center text-primaryPetemoon"
          >
            <Image src={signupLogo} width={61} height={61} />
            <p className="font-bold text-xl">petemoon</p>
          </div>
          <div id="header" className="font-black text-[#333333] text-xl">
            کاربر عزیز خوش آمدید
          </div>
        </div>
        <div id="form">
            <input/>
        </div>
      </div>
    </div>
  );
}
