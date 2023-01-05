import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx'
import Profile_Icon from '../asset/icons/user-edit.svg';
import Address_Icon from '../asset/icons/location.svg';
import MyPet_Icon from '../asset/icons/pet.svg';
import Wallet_Icon from '../asset/icons/empty-wallet.svg';
import Orders_Icon from '../asset/icons/shopping-bag.svg';
import Favorite_Icon from '../asset/icons/like.svg';
import Message_Icon from '../asset/icons/sms.svg';
import Help_Icon from '../asset/icons/alarm.svg';
import Search_Icon from '../asset/icons/search-icon.svg'
import ArrowLeft_Icon from '../asset/icons/arrow-left.svg';
import ArrowLeftWhite_Icon from '../asset/icons/Arrow-left-white.svg'
import Notification_Icon from '../asset/icons/notification-icon.svg'
import Profile_Alt_Pic from '../asset/icons/profile-pic-alt.svg';
import Logout_Btn from '../asset/icons/logout-btn.svg';
import Petemoon_Logo from '../asset/icons/Petemoon.svg';
import Userpanel_Logo from '../asset/icons/user-panel.svg';
import ShpBag_Icon from '../asset/icons/bagHeader.svg';
import { v4 } from 'uuid';
const DashboardLayout = ({children}) => {
    const router = useRouter()
    const [openly,setOpenly] = useState(false)
    const [minly, setMinly] = useState(false);
    const menuArr = [   {id:"", name:"داشبورد", icon:Profile_Icon},
                        {id:"my-profile", name:"حساب کاربری", icon:Profile_Icon,notification:0},
                        {id:"addresses", name:"آدرس ها", icon:Address_Icon},
                        {id:"my-pets", name:"پت من", icon:MyPet_Icon},
                        {id:"wallet", name:"کیف پول", icon:Wallet_Icon},
                        {id:"orders", name:"سفارش ها", icon:Orders_Icon, notification:5},
                        {id:"bookmarks", name:"علاقه مندی ها", icon:Favorite_Icon},
                        {id:"my-messages", name:"پیام های من", icon:Message_Icon, notification:10},
                        {id:"support", name:"پشتیبانی", icon:Help_Icon},
                    ]
    const pageName = menuArr.find(item => router.asPath.includes(item.id))
    return (
        <div className='w-full h-full flex flex-row-reverse justify-between items-stretch'>
            {/* Drawer */}
            <div id="Drawer" className={clsx('lg:flex h-full w-full lg:w-auto lg:overflow-x-hidden flex-col justify-between items-stretch bg-fourth lg:bg-[#313131]',{
                'flex' : openly == false,
                'hidden' : openly == true
            })}>
                <div className='hidden lg:flex justify-center h-full w-full p-10'>
                    <Image src={Petemoon_Logo} alt="PetemoonLogo" className={clsx("w-40 mr-3",{
                        'block' : minly == false,
                        'hidden' : minly == true
                    })}/>
                    <Image src={Userpanel_Logo} alt="UserPanelLogo" className='w-10'/>
                </div>
                <div className='p-10 h-full flex lg:hidden flex-row-reverse justify-start items-center border-b-[1px] border-silver solid'>
                    <Image src={Profile_Alt_Pic} alt="Profile-Pic-Alt" height={50} width={50}/>
                    <div className='mr-5'>
                        <div className={clsx({
                            'block' : minly == false,
                            'lg:hidden' : minly == true
                        })}>
                            <p className='text-base text-black text-right font-black'>علی حسینی نسب</p>
                            <p className='text-base text-gray-400 text-right font-medium'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                    </div>
                </div>
                <ul className='w-full h-full lg:mt-[75px]'>
                    {menuArr.map(item => 
                        <li key={v4()}  className={clsx("border-b-[1px] border-silver solid lg:border-[#eeeeee26] lg:my-0 lg:mx-9 py-4 px-8 lg:px-0",{
                            ""  : minly == false , 
                            "lg:border-none" : minly == true
                        })}>
                            <Link href={`/dashboard/${item.id}`} onClick={() => setOpenly(true)}
                            className={clsx('flex justify-between items-center w-full',{
                                "flex-row-reverse" :  minly == false ,
                               "flex-row-reverse lg:flex-col" : minly == true 
                            })}>
                                <div className='flex flex-row-reverse items-stretch relative'>
                                    <Image src={item.icon} alt={item.name} width='20' height='20' className='lg:invert'/>
                                    <h3 className={clsx('text-base text-black lg:text-second font-bold w-full mr-3',{
                                        'block' : minly == false , 
                                        'lg:hidden' : minly == true
                                    })}>{item.name}</h3>
                                </div>
                                {item.notification > 0 && <p className={clsx('absolute left-20 lg:relative lg:left-0 text-white text-center text-xs bg-first px-[5px] py-[3px] rounded-[5px]',{
                                    'lg:block' : minly == false , 
                                    'lg:hidden' : minly == true
                                })}>{item.notification}</p>}
                                <Image src={ArrowLeft_Icon} alt="ArrowLeftIcon" className="lg:hidden"/>
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='w-full h-full flex flex-col justify-center items-stretch lg:mt-[50px]'>
                    <div className='p-10 lg:py-4 h-full hidden lg:flex flex-row-reverse justify-start items-center border-b-[1px] border-[#eeeeee26] solid lg:border-none'>
                        <div className='mr-5 lg:mr-0'>
                            <div className={clsx({
                                'block' : minly == false,
                                'lg:hidden' : minly == true
                            })}>
                                <p className='text-base text-white text-right font-black'>علی حسینی نسب</p>
                                <p className='text-base text-gray-400 text-right font-medium'>۰۹۳۰۱۲۳۴۵۶۷</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx("flex justify-center lg:justify-between items-center self-center bg-first w-3/4 h-full lg:mx-auto mt-20 lg:mt-2 mb-10 rounded-[12px]",{
                        ' lg:bg-[#3A4750] p-4 lg:py-2 mx-10'   : minly == false,
                        'lg:bg-transparent lg:flex-col p-4 lg:p-0 mx-10 lg:mx-0' : minly == true
                    })}>
                        <Image src={Logout_Btn} alt="LogOutBtn" width="20" height="20"/>
                        <p className={clsx('text-base text-white font-medium leading-7 ml-3',{
                            'block' : minly == false,
                            'lg:hidden' : minly == true
                        })}>خروج از حساب</p>
                    </div>
                </div>
            </div>
            <div id="Inbox" className={clsx('lg:flex flex-col justify-between items-stretch w-full h-full bg-fourth',{
               'hidden' : openly == false ,
               'flex' : openly == true 
            })}>
                <div className='w-full h-full bg-white hidden lg:flex flex-row-reverse justify-between items-center px-12 py-5 relative'>
                        <Image src={ArrowLeft_Icon} alt="ArrowLeftIcon" onClick={() => setMinly(!minly)} className={clsx('bg-[#eee] w-10 h-10 p-3 rounded-full absolute top-[25%] right-[-2%] rotate-180',{
                            'rotate-0' :  minly == true
                        })}/>
                        <div className='flex flex-col items-end'>
                            <p className="text-2xl text-black font-black leading-10">خوش آمدی، علی عزیز</p>
                            <p className='text-base text-black font-light opacity-[0.9] leading-7'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                        <div className='flex flex-row-reverse items-center'>
                            <div className='flex flex-row-reverse h-12 px-5 bg-[#eee] rounded-[10px]'>
                                <Image src={Search_Icon} alt="SearchIcon" className='invert'/>
                                <input type="text" placeholder="جستجو" className='text-base text-right text-black opacity-[0.8] font-bold p-2 w-full border-none bg-transparent peer-focus:border-none'/>
                            </div>
                            <div className='p-3 border-[1px] solid border-third rounded-[15px] mr-8'>
                                <Image src={ShpBag_Icon} alt="ShopBagPic"/>
                            </div>
                        </div>
                </div>
                <div className=' w-full h-full p-10 pb-10 lg:px-20 lg:py-12'>
                    {pageName && 
                        <div className='w-full flex lg:hidden flex-row-reverse justify-between items-center mb-10'>
                            <p className='text-lg text-black font-black leading-7 align-middle after:inline-block after:w-2 after:h-5 after:bg-first after:ml-1 after:rounded-[2px]'>{pageName.name}</p>
                            <Link href='/dashboard' onClick={() => setOpenly(false)} className='bg-first opacity-[0.8] p-4 rounded-[15px]'>
                                <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className='w-full'/>
                            </Link>
                        </div>
                    }
                    {children}
                </div>
            </div>
        </div>
    );
};
export default DashboardLayout;