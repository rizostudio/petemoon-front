import React,{useState} from 'react';
import Image from 'next/image';
//component
import DashboardLayout from '../../components/DashboardLayout';
//media
import WalletAdd_Icon from '../../assets/dashboard/wallet-add.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';

const wallet = () => {
    const [increaseAmount, setIncreaseAmount] = useState()
    console.log(increaseAmount)
    return (
        <DashboardLayout>
            <div className='h-screen lg:h-full flex flex-col lg:flex-row justify-between items-stretch'>
                {/* show user's money */}
                <div className='flex flex-col lg:w-2/3'>
                    <div className='h-[200px] lg:h-full w-full flex flex-col justify-between items-center p-5 rounded-[15px] lg:rounded-[25px] text-white bg-gradient-to-r from-[#FA5456] to-[#FFA000]'>
                        <p className='self-start text-base font-black leading-12'>کیف پول<sup className='text-xs font-normal leading-6'>پتمون</sup></p>
                        <p className='self-center text-3xl font-black leading-16'><bdi>{"۲۵۲.۵۰۰"} تومان</bdi></p>
                        <p className='self-end text-[12px] font-medium leading-5'><bdi>*موجودی کیف پول قابل بازگردانی به حساب نیست</bdi></p>
                    </div>
                </div>
                {/* button that opens the modal */}
                <label 
                    htmlFor="add-wallet-modal" 
                    className='w-full lg:w-1/3 flex flex-row lg:flex-col-reverse justify-between lg:justify-center items-center px-10 lg:px-20 py-5 lg:py-8 lg:mr-5 bg-white border-[2px] solid border-primary rounded-[12px] lg:rounded-[25px] cursor-pointer'
                >
                    <p className='text-2xl lg:text-base text-primary font-bold leading-8 lg:mt-10'>افزایش موجودی</p>
                    <Image 
                        src={WalletAdd_Icon} 
                        alt="WalletAddPic" 
                        className='lg:w-40'
                    />
                </label>
            </div>
            {/* Modal*/}
            <div>
                <input 
                    type="checkbox" 
                    id="add-wallet-modal" 
                    className="modal-toggle" 
                />
                <label 
                    htmlFor="add-wallet-modal" 
                    className="modal cursor-pointer"
                >
                    <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <p className='text-base lg:text-base text-black font-medium lg:font-black leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]'>افزایش موجودی</p>
                            <label htmlFor="add-wallet-modal">
                                <Image 
                                    src={CloseButton_Icon} 
                                    alt="CloseIcon"
                                />
                            </label>
                        </div>
                        <form 
                            onSubmit={event => event.preventDefault()} 
                            className="flex flex-col"
                        >
                            <div className='flex flex-col items-stretch justify-center p-4 lg:p-10'>
                                <p className='text-base lg:text-lg text-black text-center font-medium leading-7 mb-7'><bdi>مبلغ مورد نظر جهت افزایش موجودی را وارد نمایید:</bdi></p>
                                <input 
                                    type="number" 
                                    value={increaseAmount} 
                                    onChange={event => setIncreaseAmount(event.target.value)}    
                                    placeholder="100000"
                                    className='w-full p-3 mb-2 lg:mb-3 bg-white text-base text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px] focus:border-error focus:text-black before:content-["fu"] before:text-lg before:text-error'
                                />
                                <div className='w-full flex mb-3'>
                                    <button 
                                        onClick={() => setIncreaseAmount(500000)} 
                                        className="w-full p-3 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px]"
                                    ><bdi>{500000} تومان</bdi></button>
                                    <button 
                                        onClick={() => setIncreaseAmount(200000)} 
                                        className="w-full p-3 mx-1 lg:mx-2 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px]"
                                    ><bdi>{200000} تومان</bdi></button>
                                    <button 
                                        onClick={() => setIncreaseAmount(100000)} 
                                        className="w-full p-3 bg-white text-sm text-center text-gray-400 font-medium border-[1px] solid border-thirdly rounded-[12px] lg:rounded-[5px] "
                                    ><bdi>{100000} تومان</bdi></button>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full lg:w-1/3 lg:self-left'>
                                <button className='w-full text-sm text-white text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-[#4DA4F4] border-[2px] solid border-[#4DA4F4] ml-2'>پرداخت</button>
                                <label 
                                    htmlFor="add-wallet-modal" 
                                    className='w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error'
                                >انصراف</label>
                            </div>
                        </form>
                    </label>
                </label>
            </div>
        </DashboardLayout>
    );
};

export default wallet;