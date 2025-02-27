import DashboardLayout from "@/layout/dashboard/DashboardLayout.jsx";
//layout
import MainLayout from "@/layout/main";
//components
import MobileHeader from "@/components/homePage/MobileHeader";
import Slider from "@/components/homePage/Slider";
import Brands from "@/components/homePage/Brands";
import OffPriceProdcuts from "@/components/homePage/OffPriceProducts";
import OfferProdcuts from "@/components/homePage/OfferProducts";
import Category from "@/components/homePage/Category";
import BestVets from "@/components/homePage/BestVets";
import BestSellers from "@/components/homePage/BestSellers";
import BeneFits from "@/components/singleProduct/BeneFits";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import { getTopProduct } from "@/services/home/getTopProduct";
import { getTopSeller } from "@/services/home/getTopSeller";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title> پتمون | ملزومات حیوانات خانگی</title>

        <meta charSet="UTF-8" />
      </Head>
      <MainLayout>
        <div className="bg-[#F8F8F8] relative pb-[100px]">
          <MobileHeader />
          <Slider />
          <Brands />
          <OfferProdcuts data={products} />
          <Category />
          <OffPriceProdcuts data={products} />
          <BestVets />
          {/* <BestSellers data={seller} /> */}
          <BeneFits />
        </div>
        <BottomNavigation />
      </MainLayout>
    </>
  );
}
export async function getStaticProps() {
  // const { slug } = context.params;
  const response = await getTopProduct();
  // const seller = await getTopSeller();
  // console.log(seller);
  // console.log(response);
  // console.log(seller);
  return {
    props: {
      products: response.data,
      // seller: seller,
      // slug,
    },
  };
}
