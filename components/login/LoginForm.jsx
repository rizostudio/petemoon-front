import React, { useState } from "react";
import { useRouter } from "next/router";
//component
import FloatLabelInput from "../partials/input";
//formik
import { useFormik } from "formik";
//login service
import { login } from "@/services/auth/login";
//localStorage
import { OtpId } from "@/localSttorage/auth";
//history context
import { useHistory } from "@/store/HistoryCtx/History";
export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { history, back } = useHistory();
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: async (value) => {
      console.log(value);
      // back();
      toggleSubmitState();
      const response = await login(value.phoneNumber);
      console.log(response);
      toggleSubmitState();
      if (response.success) {
        console.log("otp code: ", response.data);
        OtpId.set(response.data.otp_id);

        router.push("/auth/validation");
      } else {
        console.log("Error: ", response.errors);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[50%] lg:h-[50%]">
      <div className="flex flex-col h-full items-center justify-end lg:justify-center space-y-5">
        <FloatLabelInput
          type={"text"}
          placeholder={"شماره همراه"}
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          h={"h-12"}
          dir={"ltr"}
        />
        <button
          type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-primary-dark active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal ${
            isSubmitting && "loading"
          }`}
          disabled={formik.values.phoneNumber === ""}
        >
          ارسال کد
        </button>
      </div>
    </form>
  );
}
