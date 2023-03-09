//react&next
import { useRouter } from "next/router";
import { useState } from "react";
//media
import backgroundLines from "@/assets/common/signUpLoginLines.png";
// import FloatLabelInput from "@/components/common/input";
import leftArrow from "@/assets/common/leftArrow.png";
import bigPetsImage from "@/assets/signup/signupImage.png";
import smallPetsImage from "@/assets/login/loginImage.png";
//component
// import PetemoonLogo from "@/components/common/logo";
// services
// import { postSendOTP } from "@/services/login";
// import { OtpId } from "@/localSttorage/auth";
//formik
import { useFormik } from "formik";
import AuthLayout from "@/layout/auth/AuthLayout";
import LoginForm from "@/components/login/LoginForm";

export default function login() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  // const router = useRouter();
  // const formik = useFormik({
  //   initialValues: {
  //     phoneNumber: "",
  //   },
  //   onSubmit: async (value) => {
  //     console.log(value);
  //     toggleSubmitState();
  //     const response = await postSendOTP(value.phoneNumber);
  //     toggleSubmitState();
  //     if (response.success) {
  //       console.log("otp code: ", response.data.otp_code);
  //       OtpId.set(response.data.otp_id);
  //       router.push("/login/validation");
  //     } else {
  //       console.log("Error: ", response.errors);
  //     }
  //   },
  // });
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
