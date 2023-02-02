

//component
import MainLayout from '@/components/common/MainLayout'
import Brands from '@/components/homePage/Brands';
import OfferProdcuts from '@/components/homePage/OfferProducts';
import Category from '@/components/homePage/Category';
import OffPriceProducts from '@/components/homePage/OffPriceProducts';
import BestVets from '@/components/homePage/BestVets';
import BestSellers from '@/components/homePage/BestSellers';
import Benefits from '@/components/homePage/Benefits';
import Slider from '@/components/homePage/Slider';



export default function Home() {
  return (
    <MainLayout>
      <div className='bg-[#F8F8F8]'>
        <Slider/>
        <Brands/>
        <OfferProdcuts/>
        <Category/>
        <OffPriceProducts/>
        <BestVets/>
        <BestSellers/>
        <Benefits/>
      </div>
    </MainLayout>
  )
}
