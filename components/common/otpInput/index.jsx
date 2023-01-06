export default function OtpInput({ label, value, setValue, size = 4 }) {
  const arr = new Array(size).fill("-");
  const handleChange = (index) => {
    return (e) => {
      const element = e.target;
      const val = element.value;
      value[index] = val;
      setValue(value);

      if (index != size - 1 && val) element.nextElementSibling.focus();
    };
  };
  return (
    <div className="flex flex-row h-[3.25rem] justify-center items-center bg-white px-10 py-1 md:px-20 rounded-xl relative w-full border-0">
      {arr.map((_, index) => (
        <input
          id="otp"
          key={index}
          className="input z-10 p-0 mr-2 w-6 h-6 md:w-12 lg:w-8 text-center peer"
          inputMode="numeric"
          maxLength={1}
          autoComplete="one-time-code"
          placeholder="-"
          value={value[index]}
          onChange={handleChange(index)}
        />
      ))}
      <div className="absolute top-0 left-0 h-[3.25rem] bg-inherit rounded-xl w-full border peer-focus:border-2 border-[#DEDFE1] peer-focus:border-primary"></div>
      <label
        htmlFor="otp"
        className="absolute px-2 peer-focus:px-1 bg-white text-[#BDBDBD] text-base right-4 -top-3 peer-focus:-top-4 origin-top-right duration-300 scale-[85%] peer-focus:scale-100 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
