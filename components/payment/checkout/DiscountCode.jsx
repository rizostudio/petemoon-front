import React, { useState } from "react";
import { BasketContext } from "@/store/BasketCtx/BasketContext";
import { changeBasketToOrder } from "@/services/basket/changeBasketToOrder";
import { Basket } from "@/localSttorage/basket";
import { handleDiscountCode } from "@/services/basket/handleDiscountCode";
import { toast } from "react-toastify";
export default function DiscountCode({
  totalBasket,
  shipping,
  setCountOfDiscount,
  setDiscount,
  discount,
}) {
  const [code, setCode] = useState("");
  const { state, dispatch } = BasketContext();
  const handleOrderSubmite = async () => {
    const response = await changeBasketToOrder(state.address.id, discount);
    console.log(response);
    if (response.success) {
      dispatch({
        type: "EMPTY_BASKET",
      });
      Basket.remove();

      window.location.href = response.data?.url;
    }
  };
  const handlediscount = async () => {
    const response = await handleDiscountCode(code);
    if (response.success) {
      setCountOfDiscount(response?.data?.discount_percentage);
      setDiscount(code);
      toast.success("کد تخفیف با موفقیت اعمال شد", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("کد تخفیف   اشتباه است", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const handleDelete = () => {
    setCode("");
    setDiscount("");
  };
  return (
    <div className="flex justify-between mt-5 lg:mt-8 px-10 lg:px-[120px]">
      <div
        // onSubmit={submitHandler}
        className="flex flex-col lg:flex-row lg:items-end w-full lg:w-2/3"
      >
        <div className="flex flex-col">
          <label className="text-base lg:text-xl text-black font-black lg:font-bold leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            <bdi>کد تخفیف دارید؟</bdi>
          </label>
          <input
            type="text"
            value={code}
            onChange={handleChange}
            className="text-base text-black font-medium leading-6 px-5 py-4 lg:px-4 lg:py-3 bg-white border-[1px] border-third rounded-[12px] lg:rounded-[5px] appearance-none focus:border-primary focus:outline-none focus:ring-0 peer"
          />
          {/* {codeStatus.status ? (
            <div className="flex justify-between items-center mt-2">
              <p className="text-base text-verify lg:text-lg font-normal leading-5">
                <bdi>{`مبلغ ${codeStatus.value} تومان از سبد شما کسر گردید`}</bdi>
              </p>
              <p
                // onClick={exitHandler}
                className="lg:hidden text-base text-error font-normal leading-4"
              >
                <bdi>حذف کد</bdi>
              </p>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-2">
              <p className="text-base text-error lg:text-lg font-normal leading-5">
                <bdi>{"کد تخفیف وارد شده معتبر نمیباشد!"}</bdi>
              </p>
              <p
                // onClick={exitHandler}
                className="lg:hidden text-base text-error font-normal leading-4"
              >
                <bdi>حذف کد</bdi>
              </p>
            </div>
          )} */}
        </div>
        <div className="flex justify-between items-center w-full lg:w-1/3 mt-5 lg:mt-0 lg:mr-4">
          <button
            onClick={handleDelete}
            className="text-base hover:bg-[#d85241] hover:text-[#fff] transition ease-in-out  text-error font-medium leading-7 appearance-none w-2/5 py-2 border-[1px] border-error rounded-[5px]"
          >
            <bdi>انصراف</bdi>
          </button>
          <button
            onClick={handlediscount}
            // type="submit"
            className="text-base hover:bg-green-600 hover:text-white transition ease-in-out text-black font-medium leading-7 appearance-none w-3/5 py-2 bg-[#2DB95D33] border-[1px] border-verify rounded-[5px] mr-2"
          >
            <bdi>ثبت</bdi>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between items-center w-1/3 p-5 mr-5 bg-[#ea63521a] rounded-[15px]">
        <div className="flex justify-between w-full">
          <p className="text-xl text-gray-400 font-normal leading-8">
            هزینه ارسال:
          </p>
          <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{parseInt(shipping.price).toLocaleString()}</bdi>
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-xl text-gray-400 font-normal leading-8">
            مجموع سبد:
          </p>
          <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{parseInt(totalBasket).toLocaleString()}</bdi>
          </p>
        </div>
        <button
          onClick={handleOrderSubmite}
          className="text-base text-center hover:bg-[#d85241] text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}
