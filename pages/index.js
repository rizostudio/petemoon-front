
//component
import MainLayout from '@/components/common/MainLayout'
import MobileHeader from '@/components/homePage/MobileHeader';
import Slider from '@/components/homePage/Slider';
import Brands from '@/components/homePage/Brands';
import OfferProdcuts from '@/components/homePage/OfferProducts';
import Category from '@/components/homePage/Category';
import OffPriceProducts from '@/components/homePage/OffPriceProducts';
import BestVets from '@/components/homePage/BestVets';
import BestSellers from '@/components/homePage/BestSellers';
import Benefits from '@/components/homePage/Benefits';
import BottomNavigation from '@/components/common/BottomNavigation';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


export default function Home() {
  return (
    <MainLayout>
      <div className='bg-[#F8F8F8] relative pb-[100px]'>
        <MobileHeader/>
        <Slider/>
        <Brands/>
        <OfferProdcuts/>
        <Category/>
        <OffPriceProducts/>
        <BestVets/>
        <BestSellers/>
        <Benefits/>
      </div>
      <BottomNavigation/>
    </MainLayout>
  )
}
