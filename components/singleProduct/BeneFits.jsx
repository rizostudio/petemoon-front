import React from "react";
import Image from "next/image";

// media
import Originality_Icon from "../../assets/product/originality.svg";
import Guarantee_Icon from "../../assets/product/GuaranteeIcon.svg";
import Support24_Icon from "../../assets/product/24-support.svg";
import FreeSend_Icon from "../../assets/product/FreeSendIcon.svg";

export default function BeneFits() {
  return (
    <div className="hidden lg:flex flex-row justify-evenly px-10 py-5 lg:px-0 lg:py-10 border-solid border-b-[2px] border-secondary">
      <div className="flex flex-row items-center p-5">
        <Image src={Originality_Icon} alt="OriginalityIcon" />
        <div className="text-right mr-4">
          <h5 className="text-base text-black font-bold leading-7">
            اصالت کالا
          </h5>
          <p className="text-base text-gray-400 font-medium leading-6">
            <bdi>محصولات پتمون با بهترین کیفیت و اصلی در ایران</bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center p-5">
        <Image src={Guarantee_Icon} alt="GuaranteeIcon" />
        <div className="text-right mr-4">
          <h5 className="text-base text-black font-bold leading-7">
            ضمانت ۷ روزه
          </h5>
          <p className="text-base text-gray-400 font-medium leading-6">
            <bdi>با ضمانت 7 روزه بازگشت بی قید و شرط خرید از پتمون</bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center p-5">
        <Image src={Support24_Icon} alt="Support24Icon" />
        <div className="text-right mr-4">
          <h5 className="text-base text-black font-bold leading-7">
            پشتیبانی ۲۴ ساعته
          </h5>
          <p className="text-base text-gray-400 font-medium leading-6">
            <bdi>
              هر لحظه هر سوالی که داشتید با کارشناسان پتمون در ارتباط باشید
            </bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center p-5">
        <Image src={FreeSend_Icon} alt="FreeSendIcon" />
        <div className="text-right mr-4">
          <h5 className="text-base text-black font-bold leading-7">
            ارسال رایگان
          </h5>
          <p className="text-base text-gray-400 font-medium leading-6">
            <bdi>با خرید از پتمون (بیشتر از 200هزارتومان) ارسال رایگان است</bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
