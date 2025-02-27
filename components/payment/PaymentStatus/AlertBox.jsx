import React from "react";
import Image from "next/image";
import clsx from "clsx";

//media
// import infoIcon from "../../assets/alertBox/info.svg";
// import errorIcon from "../../assets/alertBox/error.svg";
// import verifyIcon from "../../assets/alertBox/check.svg";
// import closeIcon from "../../assets/alertBox/x.svg";
export default function AlertBox({ alertKind, title, text }) {
  return (
    <div
      className={clsx(
        "w-full flex justify-between items-start p-4 border-[1px] rounded-[4px]",
        {
          "border-info bg-[#D7ECFF]": alertKind == "info",
          "border-verify bg-[#F1FFF4]": alertKind == "verify",
          "border-error bg-[#FFDDDD]": alertKind == "error",
        }
      )}
    >
      <div className="flex items-start">
        <Image
          width={30}
          height={30}
          src={
            alertKind == "info"
              ? "/assets/alertBox/info.svg"
              : alertKind == "verify"
              ? "/assets/alertBox/check.svg"
              : "/assets/alertBox/error.svg"
          }
          alt="alertIcon"
        />
        <div className="flex flex-col mr-3">
          {title && (
            <p className="text-base text-black font-bold leading-6 mb-2">
              <bdi>{title}</bdi>
            </p>
          )}
          {text && (
            <p className="text-sm text-black font-normal leading-6 mt-0">
              <bdi>{text}</bdi>
            </p>
          )}
        </div>
      </div>
      <Image
        width={30}
        height={30}
        src={"/assets/alertBox/x.svg"}
        alt="closeIcon"
      />
    </div>
  );
}
