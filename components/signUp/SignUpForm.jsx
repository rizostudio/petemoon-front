//react and next
import React, { useState } from "react";
import { useRouter } from "next/router";
//component
import FloatLabelInput from "../partials/input";
//services
import { Register } from "@/services/auth/signUp";
//formik
import { useFormik } from "formik";

export default function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      referal_code: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      toggleSubmitState();
      const response = await Register(values);
      toggleSubmitState();
      console.log(response);
      if (response.success) router.push("/");
      else console.log("Errors: ", response.errors);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[60%] lg:h-[50%]">
      <div className="flex flex-col h-full items-center justify-between">
        <FloatLabelInput
          type={"text"}
          placeholder={"نام"}
          name="first_name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        <FloatLabelInput
          type={"text"}
          placeholder={"نام خانوادگی"}
          name="last_name"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        <FloatLabelInput
          type={"email"}
          placeholder={"ایمیل"}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required={false}
          h={"h-[12%] lg:h-[15%]"}
        />
        <FloatLabelInput
          type={"text"}
          placeholder={"کد معرف"}
          name="referal_code"
          onChange={formik.handleChange}
          value={formik.values.referal_code}
          required={false}
          h={"h-[12%] lg:h-[15%]"}
        />
        <button
          type="submit"
          className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full mt-4 lg:mt-0 rounded-lg text-base md:text-xl font-normal ${
            isSubmitting && "loading"
          }`}
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
}
