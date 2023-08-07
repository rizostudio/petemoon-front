//react and next
import React, { useState } from "react";
import { useRouter } from "next/router";
//component
import FloatLabelInput from "../partials/input";
//services
import { Register } from "@/services/auth/signUp";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const inputValidation = Yup.object().shape({
    first_name: Yup.string().required("فیلد الزامی است"),
    last_name: Yup.string().required("فیلد الزامی است"),
    email: Yup.string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "فرمت ایمیل درست نیست"
      )
      .required("فیلد الزامی است"),
  });
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
      if (response.success) router.push("/dashboard");
      else console.log("Errors: ", response.errors);
    },
    validationSchema: inputValidation,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[60%] lg:h-[40%]">
      <div className="flex flex-col h-full items-center justify-between">
        <FloatLabelInput
          type={"text"}
          noneHolder={true}
          placeholder={"  نام"}
          name="first_name"
          onChange={formik.handleChange}
          value={formik.values.first_name}
          required={true}
          h={"h-12"}
        />
        <p className="text-[12px] text-error font-semibold leading-5 ml-auto ">
          <bdi>{formik.errors.first_name}</bdi>
        </p>

        <FloatLabelInput
          type={"text"}
          placeholder={" نام خانوادگی"}
          name="last_name"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          required={true}
          noneHolder={true}
          h={"h-12"}
        />
        <p className="text-[12px] text-error font-semibold leading-5 ml-auto ">
          <bdi>{formik.errors.last_name}</bdi>
        </p>

        <FloatLabelInput
          type={"email"}
          placeholder={"  ایمیل*"}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required={false}
          noneHolder={true}
          h={"h-12"}
        />
        <p className="text-[12px] text-error font-semibold leading-5 ml-auto ">
          <bdi>{formik.errors.email}</bdi>
        </p>

        <FloatLabelInput
          type={"text"}
          placeholder={"کد معرف"}
          name="referal_code"
          onChange={formik.handleChange}
          value={formik.values.referal_code}
          required={false}
          noneHolder={true}
          h={"h-12"}
        />
        <button
          type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
`}
          // disabled={formik.values.phoneNumber.length !== 11}
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
          ثبت نام
        </button>
      </div>
    </form>
  );
}
