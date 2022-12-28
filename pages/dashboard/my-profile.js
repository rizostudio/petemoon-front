import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
const profile = () => {
    return (
            <DashboardLayout>
                <div className='sm:flex sm:flex-col sm:items-center sm:h-full sm:w-full'>
                    <div>
                        <div>
                            name
                        </div>
                        <div>
                            bitrh
                        </div>
                    </div>
                    <div className='hidden sm:block w-3/4 h-1/4 bg-white rounded-[25px] px-5 py-3'>
                        <div className='flex justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                            <p className='text-primary'>مشاهده همه</p>
                            <p className='text-black after:bg-primary after:w-[10px] after:h-[20px]'>سفارش های من</p>
                        </div>
                        <div className='flex flex-row-reverse'>
                            <div className='p-4'>
                                <div className='p-3'>
                                    <p>سفارش های جاری</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>تحویل شده</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>مرجوع شده</p>
                                    <span><bdi>۲ سفارش</bdi></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
    );
};

export default profile;