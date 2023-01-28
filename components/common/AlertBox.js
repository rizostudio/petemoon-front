import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

//media 
import infoIcon from '../../assets/alertBox/info.svg';
import errorIcon from '../../assets/alertBox/error.svg';
import verifyIcon from '../../assets/alertBox/check.svg';
import closeIcon from '../../assets/alertBox/x.svg';

const AlertBox = ({alertKind, title, text}) => {
    return (
        <div className={clsx('w-full flex justify-between items-start p-4 border-[1px] rounded-[4px]',{
            "border-info bg-[#D7ECFF]" : alertKind == "info",
            "border-verify bg-[#F1FFF4]" : alertKind == "verify",
            "border-error bg-[#FFDDDD]" : alertKind == "error"
        })}>
            <div className='flex items-start'>
                <Image 
                    src={alertKind == "info" ? infoIcon : alertKind== "verify" ? verifyIcon : errorIcon}
                    alt="alertIcon"
                />
                <div className='flex flex-col mr-3'>
                    {title && <p className='text-base text-black font-bold leading-6 mb-2'>
                        <bdi>{title}</bdi>
                    </p>}
                    {text && <p className='text-sm text-black font-normal leading-6 mt-0'>
                        <bdi>{text}</bdi>
                    </p>}
                </div>
            </div>
            <Image src={closeIcon} alt="closeIcon"/>
        </div>
    );
};

export default AlertBox;