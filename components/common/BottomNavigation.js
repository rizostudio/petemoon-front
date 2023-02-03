import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//media 
import home_Icon from '../../assets/common/homeIcon2.svg';
import category_Icon from '../../assets/common/categoryIcon.svg';
import search_Icon from '../../assets/common/searchIcon3.svg';
import profile_Icon from '../../assets/common/profileIcon4.svg';

const BottomNavigation = () => {
    return (
        <div className='lg:hidden flex justify-between items-center fixed bottom-0 left-0 right-0 px-10 py-3 bg-white'>
            <Link 
                href='/'
                className='flex flex-col items-center'
            >
                <Image 
                    src={home_Icon}
                    alt="Home Icon"
                />
                <h3 className='text-sm text-center text-gray-400 font-medium leading-5 mt-1'><bdi>صفحه اصلی</bdi></h3>
            </Link>
            <Link 
                href='/products'
                className='flex flex-col items-center'
            >
                <Image 
                    src={category_Icon}
                    alt="Category Icon"
                />
                <h3 className='text-sm text-center text-gray-400 font-medium leading-5 mt-1'><bdi>دسته بندی</bdi></h3>
            </Link>
            <Link 
                href='/'
                className='flex flex-col items-center'
            >
                <Image 
                    src={search_Icon}
                    alt="Search Icon"
                />
                <h3 className='text-sm text-center text-gray-400 font-medium leading-5 mt-1'><bdi>جستجو</bdi></h3>
            </Link>
            <Link 
                href='/dashboard/home'
                className='flex flex-col items-center'
            >
                <Image 
                    src={profile_Icon}
                    alt="Profile Icon"
                />
                <h3 className='text-sm text-center text-gray-400 font-medium leading-5 mt-1'><bdi>پروفایل</bdi></h3>
            </Link>
        </div>
    );
};

export default BottomNavigation;