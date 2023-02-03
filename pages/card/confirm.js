import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//components
import MainLayout from "@/components/common/MainLayout";

//media
import ArrowLeftWhite_Icon from '../../assets/common/leftArrowWhite.svg';
import edit_Icon from '../../assets/common/EditIcon2.svg';
import { useState } from "react";

const confirm = () => {
    const router = useRouter();
    const data = [1,2,3,4,5];
    const discountData = [{code:"1234567", value:70000},{code:"4567", value:80000},{code:"123", value:20000},]
    const [offCode,setOffCode] = useState("");
    const [codeStatus, setCodeStatus] = useState({status:"notYet",value:null})
    const submitHandler = (event) => {
        event.preventDefault();
        const codeSelected = discountData.filter(item => item.code == offCode);
        codeSelected ? setCodeStatus({status:"yes", value:codeSelected[0].value}) : setCodeStatus({status:"no", value:null})
    }
    const exitHandler = () => {
        //
    }

    return (
        <MainLayout>
            <div className="flex flex-col justify-between w-full h-screen lg:h-full bg-[#F8F8F8] lg:py-[50px]">
                <div className="">
                    {/*Heading for mobile */}
                    <div className='w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5'>
                        <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]'>خلاصه سفارش</p>
                        <Link 
                            href='/card/payment' 
                            className='bg-primary opacity-[0.8] p-4 rounded-[15px]'                    
                        >
                            <Image 
                                src={ArrowLeftWhite_Icon} 
                                alt="ArrowIcon" 
                                className='w-full'
                            />
                        </Link>
                    </div>
                    {/* Order Summary */}
                    <div className="flex flex-col items-stretch mx-10 lg:mx-[120px] p-5 lg:px-[100px] lg:py-[34px] bg-white border-[1px] border-secondary lg:border-none rounded-[15px] lg:rounded-[25px] shadow-shadowB">
                        <h6 className="hidden lg:block text-xl text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:align-middle before:ml-2 before:rounded-[2px]"><bdi>خلاصه سفارش</bdi></h6>
                        <div className="flex items-center lg:mt-5">
                            {data && data.map((item,index)=> 
                                <div
                                    key={index} 
                                    className="w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] mx-2 lg:mx-1 bg-gray-400 rounded-[10px] lg:rounded-[15px]"
                                ></div>
                            )}
                        </div>
                        <div className="flex items-center mt-4 lg:mt-5 mx-2 lg:mx-1">
                            <p><bdi>آدرس پستی:</bdi></p>
                            <p className="text-xs lg:text-base text-gray-400 font-medium leading-4 lg:leading-7 mx-2 lg:mx-4"><bdi>{"تهران، خیابان دماوند، سه راه تهرانپارس،شهرک امید،بلوک137"}</bdi></p>
                            <Link href='/card/payment'>
                                <Image
                                    src={edit_Icon}
                                    alt="Edit_Icon"
                                    />
                            </Link>
                        </div>

                    </div>
                    {/* Discount & confirm box */}
                    <div className='flex justify-between mt-5 lg:mt-8 px-10 lg:px-[120px]'>
                        <form
                            onSubmit={submitHandler} 
                            className="flex flex-col lg:flex-row lg:items-end w-full lg:w-2/3"
                        >
                            <div className="flex flex-col">
                                <label className="text-base lg:text-xl text-black font-black lg:font-bold leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]"><bdi>کد تخفیف دارید؟</bdi></label>
                                <input 
                                    type='text'
                                    value={offCode}
                                    onChange={(event) => setOffCode(event.target.value)}
                                    className="text-base text-black font-medium leading-6 px-5 py-4 lg:px-4 lg:py-3 bg-white border-[1px] border-third rounded-[12px] lg:rounded-[5px] appearance-none focus:border-primary focus:outline-none focus:ring-0 peer"
                                />
                                {codeStatus.status ? 
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-base text-verify lg:text-lg font-normal leading-5"><bdi>{`مبلغ ${codeStatus.value} تومان از سبد شما کسر گردید`}</bdi></p>
                                        <p 
                                            onClick={exitHandler}
                                            className="lg:hidden text-base text-error font-normal leading-4"
                                        ><bdi>حذف کد</bdi></p>
                                    </div>
                                : 
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-base text-error lg:text-lg font-normal leading-5"><bdi>{"کد تخفیف وارد شده معتبر نمیباشد!"}</bdi></p>
                                        <p 
                                            onClick={exitHandler}
                                            className="lg:hidden text-base text-error font-normal leading-4"
                                        ><bdi>حذف کد</bdi></p>
                                    </div>
                                }
                            </div>
                            <div className="flex justify-between items-center w-full lg:w-1/3 mt-5 lg:mt-0 lg:mr-4">
                                <button
                                    onClick={exitHandler} 
                                    className="text-base text-error font-medium leading-7 appearance-none w-2/5 py-2 border-[1px] border-error rounded-[5px]"
                                ><bdi>انصراف</bdi></button>
                                <button 
                                    type="submit"
                                    className="text-base text-black font-medium leading-7 appearance-none w-3/5 py-2 bg-[#2DB95D33] border-[1px] border-verify rounded-[5px] mr-2"
                                ><bdi>ثبت</bdi></button>
                            </div>
                        </form>
                        <div className='hidden lg:flex flex-col justify-between items-center w-1/3 p-5 mr-5 bg-[#ea63521a] rounded-[15px]'>
                            <div className='flex justify-between w-full'>
                                <p className='text-xl text-gray-400 font-normal leading-8'>مجموع سبد:</p>
                                <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                            </div>
                            <button
                                onClick={() => router.push('/card/payment-confirmation')} 
                                className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1'
                            >پرداخت</button>
                        </div>
                    </div>
                </div>
                {/* Continue Box for Mobile*/}
                <div className='flex lg:hidden flex-col justify-between items-stretch w-full'>
                    <div className='flex justify-between w-full px-10 py-5'>
                            <p className='text-base text-gray-400 font-medium leading-5'><bdi>هزینه ارسال:</bdi></p>
                            <p className='text-base text-gray-400 font-extrabold leading-5 after:content-["تومان"] after:text-xs after:mr-1'><bdi>{(15000).toLocaleString()}</bdi></p>
                    </div>
                    <div className='flex lg:hidden justify-between items-center w-full px-10 py-5 border-t-[2px] border-secondary'>
                        <button 
                            onClick={() => router.push('/card/payment-confirmation')}
                            className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]'
                            >پرداخت</button>
                        <div className='flex flex-col'>
                            <p className='text-base text-gray-400 font-normal leading-8'>مجموع سبد خرید</p>
                            <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default confirm;