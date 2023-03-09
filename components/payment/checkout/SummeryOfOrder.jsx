import Image from "next/image";
import Link from "next/link";

//media
import edit_Icon from "../../../assets/common/EditIcon2.svg";

export default function SummeryOfOrder({ data }) {
  return (
    <div className="flex flex-col items-stretch mx-10 lg:mx-[120px] p-5 lg:px-[100px] lg:py-[34px] bg-white border-[1px] border-secondary lg:border-none rounded-[15px] lg:rounded-[25px] shadow-shadowB">
      <h6 className="hidden lg:block text-xl text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:align-middle before:ml-2 before:rounded-[2px]">
        <bdi>خلاصه سفارش</bdi>
      </h6>
      <div className="flex items-center lg:mt-5">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] mx-2 lg:mx-1 bg-gray-400 rounded-[10px] lg:rounded-[15px]"
            ></div>
          ))}
      </div>
      <div className="flex items-center mt-4 lg:mt-5 mx-2 lg:mx-1">
        <p>
          <bdi>آدرس پستی:</bdi>
        </p>
        <p className="text-xs lg:text-base text-gray-400 font-medium leading-4 lg:leading-7 mx-2 lg:mx-4">
          <bdi>
            {"تهران، خیابان دماوند، سه راه تهرانپارس،شهرک امید،بلوک137"}
          </bdi>
        </p>
        <Link href="/card/payment">
          <Image src={edit_Icon} alt="Edit_Icon" />
        </Link>
      </div>
    </div>
  );
}
