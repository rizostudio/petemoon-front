import Link from "next/link";

//components
// import CarouselProduct from '../common/CarouselProduct';
import CarouselProduct from "../partials/CarouselProduct/CarouselProduct";
// media
import StoreAlt_Logo from "../../assets/product/StoreLogoAlt.svg";
import ProfileAlt_Pic from "../../assets/product/profilePicAlt.svg";

const OfferProdcuts = () => {
  //fake data
  const data = {
    similarProduct: [
      {
        id: "1",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 4,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        id: "2",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 5,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "3",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 3,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        id: "4",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "5",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "16",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "6",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "7",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "8",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "9",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "10",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "11",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "12",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "13",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        id: "14",
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
    ],
  };
  return (
    <div className="py-4 lg:py-[40px]">
      <div className="flex justify-between items-center align-middle px-10 py-6 lg:px-[120px]">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات پیشنهادی
        </h5>
        <Link
          href="/products"
          className='hidden lg:block text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link>
      </div>
      <div className="mr-10 lg:m-0 px-0 lg:px-[120px] py-2 lg:py-6">
        <CarouselProduct data={data.similarProduct} />
      </div>
    </div>
  );
};

export default OfferProdcuts;
