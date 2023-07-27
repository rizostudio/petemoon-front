import React from "react";

export default function ReserveBox() {
  return (
    <div className="text-right px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
      <h5 className="text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
        <bdi>تایم شیت رزرو مشاوره</bdi>
      </h5>
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full px-4 py-8 lg:px-[70px] lg:py:[60px] bg-[#ea63521a] rounded-[15px] lg:rounded-[20px]">
          <div className="flex flex-col items-stretch text-center ml-2 lg:ml-7">
            <p className="text-base lg:text-lg font-black leading-5 opacity-95">
              <bdi>{"آذرماه"}</bdi>
            </p>
            <p className="text-base lg:text-xl font-black leading-6 opacity-95 mt-1 lg:mt-7">
              <bdi>{"1401"}</bdi>
            </p>
          </div>
          {reserveDateData &&
            reserveDateData.map((item, index) => (
              <div
                onClick={() => {
                  setDateSelected({ day: item.day, date: item.date });
                  setDateSelectedValue(true);
                }}
                className={clsx(
                  "flex flex-col items-stretch text-center mx-2 lg:mx-7",
                  {
                    "text-white bg-primary px-1.5 py-2.5 lg:px-2.5 lg:py-5 rounded-[22px] rounded-[40px]":
                      item.date == dateSelected.date,
                    "text-primary": item.date !== dateSelected.date,
                  }
                )}
              >
                <p className="text-xs lg:text-lg font-black leading-5 opacity-95">
                  <bdi>{item.day}</bdi>
                </p>
                <p className="text-sm lg:text-xl font-black leading-6 opacity-95 mt-1 lg:mt-7">
                  <bdi>{item.date}</bdi>
                </p>
              </div>
            ))}
        </div>
        <div
          className={clsx("flex justify-between mt-2 lg:mt-8", {
            grayscale: dateSelectedValue == false,
          })}
        >
          <div className="flex justify-between items-center w-full lg:w-3/5 px-7 py-8  bg-white lg:bg-[#ea63521a] rounded-[15px] lg:rounded-[20px]">
            <p className="text-base lg:text-2xl text-black font-black leading-6 lg:leading-10 ml-10">
              <bdi>ساعت مشاوره : </bdi>
            </p>
            <select
              disabled={dateSelectedValue ? false : true}
              className="text-base lg:text-xl text-white font-medium leading-8 w-full px-5 py-3 bg-primary border-none rounded-[12px] lg:rounded-[15px] focus:outline-none focus:border-none focus:ring-0 peer"
            >
              <option value="time1">6 - 6:30</option>
              <option value="time2">7 - 7:30</option>
              <option value="time3">8 - 8:30</option>
              <option value="time4">9 - 9:30</option>
            </select>
          </div>
          <div className="hidden lg:flex justify-between items-center w-2/5 px-7 py-8 mr-8 bg-[#ea63521a] rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-lg text-gray-400 font-medium leading-8 opacity-95">
                <bdi>قیمت:</bdi>
              </p>
              <p className='text-2xl text-primary font-semibold leading-10 mt-1 after:content-["تومان"] after:text-base after:font-normal after:leading-5 after:mr-1'>
                <bdi>{(63000).toLocaleString()}</bdi>
              </p>
            </div>
            <label
              htmlFor={dateSelectedValue ? "reserve-modal" : ""}
              className="text-base text-center text-white font-bold leading-7 tracking-widest w-full px-10 py-3 mr-7 bg-primary rounded-[15px]"
            >
              <bdi>رزرو</bdi>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
