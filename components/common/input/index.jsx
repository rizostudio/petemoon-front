import { useState } from "react";

export default function FloatLabelInput({
  name,
  value,
  placeholder,
  type,
  onChange,
  required,
  py,
  dir = "rtl",
}) {
  const [starShow, setStarShow] = useState(required);
  return (
    <div className="relative w-full" dir={"rtl"}>
      <input
        type={type}
        id={name}
        className={`block bg-white px-3 w-full text-sm text-[#333333] bg-transparent rounded-xl border border-[#9B9BA1] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer py-${py}`}
        placeholder=" "
        onChange={onChange}
        value={value}
        name={name}
        onClick={() => setStarShow(false)}
        onBlur={() => setStarShow(true)}
      />
      <label
        htmlFor={name}
        className="absolute left-auto text-sm text-[#9B9BA1] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:bg-white px-2 peer-focus:px-1 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-1 peer-focus:right-0 secondPeer"
        dir="rtl"
      >
        {placeholder}
        {required && starShow && "*"}
      </label>
    </div>
  );
}
