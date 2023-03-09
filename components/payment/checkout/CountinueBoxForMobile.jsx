export default function CountinueBoxForMobile() {
  return (
    <div className="flex lg:hidden flex-col justify-between items-stretch w-full">
      <div className="flex justify-between w-full px-10 py-5">
        <p className="text-base text-gray-400 font-medium leading-5">
          <bdi>هزینه ارسال:</bdi>
        </p>
        <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'>
          <bdi>{(15000).toLocaleString()}</bdi>
        </p>
      </div>
      <div className="flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary">
        <button
          onClick={() => router.push("/card/payment-confirmation")}
          className="text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]"
        >
          پرداخت
        </button>
        <div className="flex flex-col">
          <p className="text-base text-gray-400 font-normal leading-8">
            مجموع سبد خرید
          </p>
          <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'>
            <bdi>{(125000).toLocaleString()}</bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
