import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import Document from 'next/document';
const DashboardLayout = ({children}) => {
    const router = useRouter()
    const [openly,setOpenly] = useState(true);
    const [minly, setMinly] = useState(false);
    const [notificationBar, setNotificationBar] = useState(true);
    const menuArr = [   {id:"my-profile", name:"حساب کاربری", icon:Profile_Icon},
    {id:"addresses", name:"آدرس ها", icon:Address_Icon},
    {id:"my-pet", name:"پت من", icon:MyPet_Icon},
    {id:"wallet", name:"کیف پول", icon:Wallet_Icon},
    {id:"orders", name:"سفارش ها", icon:Orders_Icon},
    {id:"bookmarks", name:"علاقه مندی ها", icon:Favorite_Icon},
    {id:"my-message", name:"پیام های من", icon:Message_Icon},
    {id:"support", name:"پشتیبانی", icon:Help_Icon},
    ]
    const pageName = menuArr.find(item => `/dashboard/${item.id}` == router.asPath).name
    // if(typeof window !== "undefined") {
    //     let Drawer = document.getElementById('Drawer').style.display;
    //     let Inbox = document.getElementById('Inbox').style.display;
    //     openly && (Drawer.toggle('DrawerHidden') & Inbox.toggle('InboxShow'))
    //     console.log(Inbox)
    //     if (openly) {
    //         Drawer = 'block';
    //         Inbox = 'none';
    //     } else {
    //         Drawer = 'none';
    //         Inbox = 'flex';
    //     }
    //     console.log(openly)
    //     // : (Drawer = 'none'; & Inbox = 'flex';)
    //     document.getElementById('Drawer').style.display = "none"
    //     if(window.screen.width > 680) {
    //         setMinly(false)
    //     }
    // }
    // if(typeof window !== 'undefined') {
    //     setMinly(false)
    // }
    return (
        <div className='flex flex-row-reverse justify-between '>
            {/* <style jsx>{`
            .DrawerHidden {
                display : none;
            }
            .InboxShow {
                display : flex;
            }
            @media (min-width:680px) {
                .DrawerHidden , .InboxShow {
                    display:flex;
                }
            }
            `
            }

            </style> */}
            {/* Drawer */}
            <div id="Drawer" className='hidden sm:flex h-full w-full sm:w-auto sm:overflow-hidden flex-col justify-between bg-dashbackground sm:bg-none bg-fourth sm:bg-[#313131] bg-no-repeat bg-cover bg-bottom'>
                <div className='hidden sm:flex justify-between m-10'>
                    {!minly ? <Image src={Petemoon_Logo} alt="PetemoonLogo" className="mr-3"/> : null }
                    <Image src={Userpanel_Logo} alt="UserPanelLogo"/>
                </div>
                <div className='hidden sm:flex flex-row-reverse border-b-[1px] solid border-[#e2e2e2] m-9 py-3'>
                    <Image src={Search_Icon} alt="SearchIcon"/>
                    {!minly ? <input type="text" placeholder="جستجو" className='text-right text-second font-bold p-2 w-full border-none bg-transparent focus:border-none'/> : null }
                </div>
                <div className='p-10 sm:order-2 flex flex-row-reverse justify-start items-center border-b-[1px] border-silver solid sm:border-none'>
                    <Image src={Profile_Alt_Pic} alt="Profile-Pic-Alt" height={50} width={50}/>
                    <div className='mr-5'>
                        {!minly ?   
                            <div>
                                <p className='text-black text-right font-black sm:text-white'>علی حسینی نسب</p>
                                <p className='text-gray text-right'>۰۹۳۰۱۲۳۴۵۶۷</p>
                            </div>
                        : null }
                    </div>
                </div>
                <ul className='h-full w-full'>
                    {menuArr.map(item => 
                        <li key={item.id} onClick={() =>setOpenly(!openly)} className="border-b-[1px] border-silver solid sm:border-[#e2e2e2] sm:my-0 sm:mx-9 py-4 px-5 sm:px-0">
                            <Link href={`/dashboard/${item.id}`} className='flex flex-row-reverse justify-between items-center w-full'>
                                <div className='flex flex-row-reverse items-center'>
                                    <Image src={item.icon} alt={item.name} width='20' height='20' className='sm:invert'/>
                                    {!minly ? <h3 className='text-black text-right text-xs font-bold w-full mr-3 sm:text-second'>{item.name}</h3> : null } 
                                </div>
                                {!minly ? 
                                            ( notificationBar ? 
                                                <p className='hidden sm:block text-white text-center text-xs bg-first px-[5px] py-[3px] rounded-[5px]'>۱۰</p>
                                            : null )
                                : null }
                                <Image src={ArrowLeft_Icon} alt="ArrowLeftIcon" className="sm:hidden"/>
                            </Link>
                        </li>
                    )}
                </ul>
                <button className="relative bg-first sm:bg-[#3A4750] sm:text-xs text-white text-center sm:text-right w-4/5 py-4 sm:p-3 m-auto mb-5 rounded-[12px] border-none sm:order-3">
                    <Image src={Logout_Btn} alt="LogOutBtn" width="20" height="20" className=''/>
                   {!minly ? "خروج از حساب" : null }
                </button>
            </div>
            <div id="Inbox" className='flex flex-col justify-between w-full '>
                <div className='w-full bg-white hidden sm:flex flex-row-reverse justify-between items-center px-10 py-5 relative'>
                        <Image src={ArrowLeft_Icon} alt="ArrowLeftIcon" onClick={() => setMinly(!minly)} className='bg-first w-10 h-10 p-3 rounded-full absolute top-[25%] right-[-2%]'/>
                        <div className='flex flex-col items-end'>
                            <p className="text-black font-black text-2xl">خوش آمدی، علی عزیز</p>
                            <p className='text-black font-light text-base opacity-[0.9] leading-[30px]'>۰۹۳۰۱۲۳۴۵۶۷</p>
                        </div>
                        <div className='flex flex-row-reverse items-center'>
                            <div className='flex flex-row-reverse h-12 mx-5 px-5 bg-[#eee] rounded-[10px]'>
                                <Image src={Search_Icon} alt="SearchIcon" className='invert'/>
                                <input type="text" placeholder="جستجو" className='text-right text-black text-base opacity-[0.8] font-bold p-2 w-full border-none bg-transparent focus:border-none'/>
                            </div>
                            <div className='flex px-5 py-1 border-r-[1px] border-[#3A4750] solid'>
                                <Image src={Notification_Icon} alt="NotificationIcon" className="mr-3"/>
                                <Image src={Notification_Icon} alt="NotificationIcon"/>
                            </div>
                        </div>
                </div>
                <div className='bg-fourth w-full h-full p-10 sm:px-20 sm:py-12'>
                    <div className='w-full flex sm:hidden flex-row-reverse justify-between items-center mb-10'>
                        <p className=' after:w-2 after:h-5 after:bg-first after:text-first after:content-["<"] after:ml-1 after:rounded-[2px]'>{pageName}</p>
                        <div className='bg-first opacity-[0.8] p-4 rounded-[15px]'>
                            <Link href='/dashboard'>
                                <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className='w-full'/>
                            </Link>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;