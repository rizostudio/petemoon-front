import { useState } from "react";

export default function FloatLabelInput({
  name,
  value,
  placeholder,
  type,
  onChange,
  required,
  py,
}) {
  return (
    <div className="relative w-full" dir="rtl">
      <input
        type={type}
        id={name}
        className={`block bg-white px-3 ${py} w-full text-sm text-[#333333] rounded-xl border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer`}
        placeholder=" "
        onChange={onChange}
        value={value}
        name={name}
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-[#9B9BA1] duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white peer-focus:bg-white px-1 peer-placeholder-shown:px-1 peer-focus:pr-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-4 peer-focus:right-4 peer-placeholder-shown:right-4 text-right origin-top-right"
      >
        {placeholder}
      </label>
      <label
        htmlFor={name}
        className="absolute opacity-0 text-sm text-[#9B9BA1] -translate-y-4 top-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 transition-opacity delay-300 peer-focus:opacity-0 peer-placeholder-shown:opacity-100 peer-placeholder-shown:delay-300 peer-focus:delay-[0ms] px-1 z-10 text-right right-4 peer-focus:right-4 peer-placeholder-shown:right-4 origin-top-right"
      >
        {placeholder}
        {required && "*"}
      </label>
    </div>
  );
}
