import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//media 

import Logo from '../../assets/common/footerLogo.svg';
import card_Icon from '../../assets/common/shopping-cartRedIcon2.svg';
import search_Icon from '../../assets/common/SearchRedIcon.svg';
import userLogOut_Icon from '../../assets/common/user-add.svg';
import userLogIn_Icon from '../../assets/common/user-square2.svg';

const mobileHeader = () => {

    const [login,setLogin] = useState(true)

    return (
        <div className='lg:hidden flex flex-col items-stretch px-10 pt-8 pb-2'>
            <div className='flex justify-between items-center'>
                <Link 
                    href='/'
                >
                    <Image src={Logo} alt="Petemoon Logo" className='w-[120px]'/>
                </Link>
                <div className='flex justify-between items-center'>
                    <Link 
                        href='/card'
                        className='h-10 w-10 flex items-center justify-center border-[1px] border-primary rounded-[15px]'
                    >
                        <Image 
                            src={card_Icon} 
                            alt="Card Icon"
                        />
                    </Link>
                    <Link 
                        href='/dashboard'
                            className='h-10 w-10 flex items-center justify-center bg-[#ea63524d] border-[1px] border-primary rounded-[15px] mr-2'
                    >
                        <Image 
                            src={login ? userLogIn_Icon : userLogOut_Icon}
                            alt="User Icon"
                            className="w-7 h-full"
                            />
                    </Link>
                </div>
            </div>
            <div className='flex h-12 w-full px-5 py-3  mt-5 bg-[#ECA299] rounded-[15px]'>
                <input                             
                    type="text" 
                    placeholder="جستجوی محصول، فروشگاه و..."
                    className='h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer'
                />
                <Image 
                    src={search_Icon} 
                    alt="SearchIcon" 
                />
            </div>          
        </div>
    );
};

export default mobileHeader;