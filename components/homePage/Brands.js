import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//media 
import brand1_logo from '../../assets/homePage/brand1.svg'
import brand2_logo from '../../assets/homePage/brand2.svg'
import brand3_logo from '../../assets/homePage/brand3.svg'
import brand4_logo from '../../assets/homePage/brand4.svg'
import brand5_logo from '../../assets/homePage/brand5.svg'



const Brands = () => {
    return (
        <div className='hidden lg:flex flex-col bg-secondary px-[120px] py-6'>
          <div className='flex justify-between items-center align-middle'>
            <h5 className='text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]'>برندها</h5>
              {/* <Link
                href='/brands'  
                className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
              ><bdi>مشاهده همه</bdi></Link> */}
          </div>
          <div className="grid grid-cols-5 place-content-center place-items-center">
              <Image 
                src={brand1_logo} 
                alt="Brand1 Logo"
                className="w-[300px]"
              />
              <Image 
                src={brand2_logo} 
                alt="Brand2 Logo" 
                className="w-[300px]"
              />
              <Image 
                src={brand3_logo} 
                alt="Brand3 Logo" 
                className="w-[300px]"
              />
              <Image 
                src={brand4_logo} 
                alt="Brand4 Logo" 
                className="w-[300px]"
              />
              <Image 
                src={brand5_logo} 
                alt="Brand5 Logo" 
                className="w-[300px]"
              />
          </div>
        </div>
    );
};

export default Brands;