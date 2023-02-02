import Image from 'next/image';
import Link from 'next/link';

//media 
import bestPrice_Icon from '@/assets/common/bestPriceIcon.svg';
import moneyBack_Icon from '@/assets/common/moneyBackIcon.svg';
import security_Icon from '@/assets/common/security-safe-icon.svg';
import freeSend_Icon from '@/assets/common/freeSendIcon.svg';

const Benefits = () => {
    return(
        <div className='hidden lg:flex flex-row justify-evenly px-[120] pt-[110px] pb-[60px] bg-[#F8F8F8]'>
          <div className='flex flex-row items-center'>
            <Image src={bestPrice_Icon} alt="Best Price Icon"/>
            <div className='text-right mr-4'>
              <h5 className='text-base text-black font-bold leading-7'>بهترین قیمت</h5>
              <p className='text-base text-gray-400 font-medium leading-6'><bdi>محصولات پتمون با بهترین قیمت در ایران.</bdi></p>
            </div>
          </div>
          <div className='flex flex-row items-center mx-2'>
            <Image src={moneyBack_Icon} alt="Money Back Icon"/>
            <div className='text-right mr-4'>
              <h5 className='text-base text-black font-bold leading-7'>بازگشت وجه</h5>
              <p className='text-base text-gray-400 font-medium leading-6'><bdi>با خرید از پتمون، مبلغی به عنوان هدیه به حسابتان برگشت می شود.</bdi></p>
            </div>
          </div>
          <div className='flex flex-row items-center mx-2'>
            <Image src={security_Icon} alt="Security Icon"/>
              <div className='text-right mr-4'>
                <h5 className='text-base text-black font-bold leading-7'>امنیت خرید</h5>
                <p className='text-base text-gray-400 font-medium leading-6'><bdi>با خرید از پتمون، از پرداخت و خرید کالای اصلی مطمئن باشید.</bdi></p>
              </div>
          </div>
          <div className='flex flex-row items-center'>
            <Image src={freeSend_Icon} alt="Free Send Icon"/>
            <div className='text-right mr-4'>
              <h5 className='text-base text-black font-bold leading-7'>ارسال رایگان</h5>
              <p className='text-base text-gray-400 font-medium leading-6'><bdi>با خرید از پتمون، ارسال در تهران و شهرستان رایگان است.</bdi></p>
            </div>
          </div>
        </div>
    )
}

export default Benefits