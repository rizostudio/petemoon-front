import React from "react";

export default function AddToCartForMobile({ data }) {
  return (
    <div className="lg:hidden px-10 py-5">
      {data.amount ? (
        <div className="flex justify-between items-center">
          <button className="text-base text-center text-white font-medium w-1/2 px-3 py-6 bg-primary rounded-[12px]">
            افزودن به سبد
          </button>
          <div className="text-left">
            {data.discount && (
              <div>
                <p className="text-base text-gray-400 line-through font-light leading-8 opacity-95">
                  {data.price}
                </p>
                <p className="text-sm text-primary p-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px]">
                  {data.discount}%
                </p>
              </div>
            )}
            <p className="text-lg text-primary font-extrabold leading-8">
              <bdi>{data.price * (1 - data.discount / 100)} تومان</bdi>
            </p>
          </div>
        </div>
      ) : (
        <button className="text-base text-center text-white font-medium w-full px-3 py-6 bg-primary rounded-[12px]">
          موجود شد خبرم کن
        </button>
      )}
    </div>
  );
}
