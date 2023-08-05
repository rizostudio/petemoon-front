import Link from "next/link";

//components
// import CarouselProduct from '../common/CarouselProduct';
import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";
// media
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";
import ProfileAlt_Pic from "../../assets/product/profilePicAlt.svg";

const OfferProdcuts = ({ data }) => {
  //fake data

  return (
    <div className="py-4 lg:py-[40px]">
      <div className="flex justify-between items-center align-middle px-10 py-6 lg:px-[120px]">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات پیشنهادی
        </h5>
        {/* <Link
          href="/products"
          className='hidden lg:block text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link> */}
      </div>
      <div className="mr-10 lg:m-0 px-0 lg:px-[120px] py-2 lg:py-6">
        <CarouselProduct data={data} />
      </div>
    </div>
  );
};

export default OfferProdcuts;
