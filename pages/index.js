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

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-[#F8F8F8] relative pb-[100px]">
        <MobileHeader />
        <Slider />
        <Brands />
        {/* <OfferProdcuts /> */}
        <Category />
        <OffPriceProdcuts />
        <BestVets />
        <BestSellers />
        <BeneFits />
      </div>
      <BottomNavigation />
    </MainLayout>
  );
}
