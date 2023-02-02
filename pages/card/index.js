import React, {useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {v4} from 'uuid';
import Link from 'next/link';
import { useRouter } from 'next/router';
//components
import Pagination from '@/components/common/Pagination';
import FloatLabelInput from '@/components/common/input';

// media 
import StarEmpty_Icon from '../../assets/common/starEmpty.svg';
import StarGold_Icon from '../../assets/common/startGold.svg';
import ShopBagRedMobile_Icon from '../../assets/common/shopping-cartRedIcon2.svg';
import leftArrow_Icon from '../../assets/common/leftArrowWhite.svg';
import Bookmark_Icon from '../../assets/common/BookmarkBlackIcon.svg';
import BookmarkRed_Icon from '../../assets/common/BookmarkRedIcon.svg';
import Notification_Icon from '../../assets/common/notificationIcon.svg';
import Share_Icon from '../../assets/common/shareIcon.svg';
import Info_Icon from '../../assets/common/info-circle.svg';
import Properties_Icon from '../../assets/product/PropertiesIcon.svg';
import StoreAlt_Logo from '../../assets/product/StoreLogoAlt.svg';
import Availability_Icon from '../../assets/product/availability.svg';
import Originality_Icon from '../../assets/product/originality.svg';
import Guarantee_Icon from '../../assets/product/GuaranteeIcon.svg';
import Support24_Icon from '../../assets/product/24-support.svg';
import FreeSend_Icon from '../../assets/product/FreeSendIcon.svg';
import ProfileAlt_Pic from '../../assets/product/profilePicAlt.svg';
import ShoppingCartRed_Icon from '../../assets/common/shopping-cartRedIcon.svg';
import CloseButton_Icon from '../../assets/common/close-button.svg';
import ArrowLeftWhite_Icon from '../../assets/common/leftArrowWhite.svg';
import ProductPic from '../../assets/product/ProductPic1.svg'
import TrashIcon from '../../assets/common/TrashIconRed.svg'
import MainLayout from '@/components/common/MainLayout';

const index = () => {
        const router = useRouter()
        //fake data
        const [data,setData] = useState([   
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:0, discount:20, price:125000, count:2},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:5, store:"فروشگاه پتیار", amount:2, discount:20, price:125000, count:1},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:3, store:"فروشگاه پتیار", amount:0, discount:20, price:125000, count:3},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000, count:1},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:4, store:"فروشگاه پتیار", amount:0, discount:20, price:125000, count:2},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:5, store:"فروشگاه پتیار", amount:2, discount:20, price:125000, count:1},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:3, store:"فروشگاه پتیار", amount:0, discount:20, price:125000, count:3},
                        {title:"غذای خشک سگ", group:'دسته خوراکی', stars:2, store:"فروشگاه پتیار", amount:2, discount:20, price:125000, count:1},
                    ])
        // for showing stars
        const starsBoxHandler = (stars) => {
            const starsBox = [] ; 
            for(let i=0; i < stars; i++) {
                starsBox.push(<Image src={StarGold_Icon} className='w-4 h-4' alt="GoldenStarIcon"/>)
            }
            for(let i=0; i < (5 - stars) ; i++) {
                starsBox.push(<Image src={StarEmpty_Icon} className='w-4 h-4' alt="EmptyStarIcon"/>)
            }
            return starsBox;
        }
        // for pagination 
        const Cards = data;
        const [currentPage, setCurrentPage] = useState(1);
        const [CardsPerPage] = useState(4);
        const indexOfLastPost = currentPage * CardsPerPage;
        const indexOfFirstPost = indexOfLastPost - CardsPerPage;
        const paginateBack = () =>{
           if(currentPage !== Math.ceil(Cards.length/ CardsPerPage))
            setCurrentPage(currentPage + 1)
        };
        const paginateFront = () => {
            if(currentPage !== 1)
            setCurrentPage(currentPage - 1)
        };
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        const [mainPageOpen, setMainPageOpen] = useState(true);
        const [commentPageOpen,setCommentPageOpen] = useState(false);

        const counterHandler = (index,kind) => {
            const newArr = [...data]
            console.log("newArr"+newArr)
            switch(kind) {
                case "increase" : 
                    newArr[index].count++;
                    break;
                case "decrease" :
                    newArr[index].count--;
                    break;
                case "remove" :
                    newArr.splice(1,index);
                    break;
                default:
                    newArr
            }
            setData(newArr);
            console.log("data"+data)
        }
    return (
        <MainLayout>
            <div className=' w-full h-full lg:px-20 lg:py-12 bg-[#f8f8f8]'>
                {/*Heading for mobile */}
                <div className='w-full flex lg:hidden flex-row justify-between items-center p-10 mb-5'>
                    <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]'>سبد خرید</p>
                    <Link 
                        href='/products' 
                        className='bg-primary opacity-[0.8] p-4 rounded-[15px]'                    
                    >
                        <Image 
                            src={ArrowLeftWhite_Icon} 
                            alt="ArrowIcon" 
                            className='w-full'
                        />
                    </Link>
                </div>
                {/* ProductsBox */}
                <div className='flex flex-col justify-center items-center px-10 lg:px-0 lg:relative mb-5 lg:mb-0'>
                        {data && data.map((item, index) => 
                            <div 
                                key={v4()}
                                className='lg:m-5 w-full my-2 lg:my-1'
                            >
                                <div className='flex flex-row items-stretch w-full h-full p-4 lg:p-5 bg-white lg:bg-transparent rounded-[15px] lg:rounded-none shadow-shadowB lg:shadow-none border-b-[2px] border-[rgba(0, 0, 0, 0.05)] border-none lg:border-solid'>
                                    <div className='flex flex-col justify-between items-center'>    
                                        {/* Picture of Product */}
                                        <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] p-0 overflow-hidden bg-gray-400 border-[1px] border-solid border-primary rounded-[15px] lg:rounded-[20px]'>
                                            <Image 
                                                src={ProductPic} 
                                                alt="ProductPic" 
                                                className='object-cover'
                                            />
                                        </div>                                                
                                        {/* Counter Box */}
                                        <div className='self-end lg:self-stretch hidden lg:flex justify-between items-end text-primary align-bottom font-normal leading-7 px-2 border-[1px] border-solid border-secondary rounded-[5px]'>
                                            <p className='text-xl cursor-pointer' onClick={() => counterHandler(index,"increase")}>+</p>
                                            <p className='text-base mx-4'>{item.count}</p>
                                            {item.count === 1 ?
                                                <Image 
                                                    src={TrashIcon} 
                                                    alt="TrashIcon"
                                                    onClick={() => counterHandler(index,"remove")}
                                                    className="w-[12px] h-[12px] self-center cursor-pointer"
                                                /> 
                                            :
                                                <p className='text-xl cursor-pointer' onClick={() => counterHandler(index,"decrease")}>-</p>
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full lg:mt-4 mr-3 lg:mr-10'>
                                        <p className='hidden lg:block text-sm text-gray-400 font-normal leading-5'><bdi>{item.group}</bdi></p>
                                        <div className='hidden lg:flex items-center content-start my-2'>
                                            <h2 className='text-2xl text-black font-bold leading-8'>{item.title}</h2>
                                            {item.discount && <p className='text-base text-white font-medium py-[1px] px-2 mr-2 bg-primary border-solid border-[0.5px] border-primary rounded-[10px]'>{item.discount}%</p>}                                      
                                        </div>
                                        <div className='flex lg:hidden justify-between items-center'>
                                            <h2 className='text-base text-black font-medium leading-8'>{item.title}</h2>
                                            <div className='flex flex-row items-center mr-1'>
                                                <Image 
                                                    src={StarGold_Icon} 
                                                    alt="GoldenStarIcon"
                                                    className='w-2'
                                                />
                                                <p className='text-[8px] text-gray-400 font-medium leading-7 mr-[2px]'>{`(${item.stars})`}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row lg:flex-col justify-between'>    
                                            <div className='hidden lg:flex flex-row items-center'>
                                                <div className='flex flex-row items-center'>{starsBoxHandler(item.stars)}</div>
                                                <p className='text-base text-gray-400 font-medium leading-6 mr-2 align-middle'>{`(${item.stars})`}</p>
                                            </div>
                                            <div className='w-full flex lg:flex-col justify-between items-stretch'>
                                                <div className='flex flex-col justify-between'>
                                                    <div className='flex flex-col'>
                                                        <p className='lg:hidden text-xs text-gray-400 font-medium lg:leading-5'><bdi>{item.group}</bdi></p>
                                                        <p className='text-sm text-primary font-normal leading-5 opacity-90 mt-1'>{item.store}</p> 
                                                    </div>
                                                    <p className='lg:hidden text-sm text-white text-center font-medium leading-5 bg-primary px-1 py-[1px] mt-3 rounded-[10px] after:content-["تخفیف"] after:text-[10px] after:mr-[2px] before:content-["%"] before:text-[10px]'><bdi>{item.discount}</bdi></p>   
                                                </div>
                                                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
                                                    <div className='flex flex-col'>
                                                        {item.discount && <p className='text-sm text-gray-400 line-through font-light opacity-95 mt-0'>{item.price.toLocaleString()}</p>}
                                                        <p className='text-base lg:text-lg text-black lg:text-primary font-medium mt-0 after:content-["تومان"] after:text-xs after:font-normal after:leading-6 after:mr-1'><bdi>{(item.price * (1 - item.discount/100)).toLocaleString()}</bdi></p>
                                                    </div> 
                                                    {/* Counter Box */}
                                                    <div className='self-end lg:self-stretch flex lg:hidden justify-between items-end text-primary align-bottom font-normal leading-7 px-2 border-[1px] border-solid border-secondary rounded-[5px]'>
                                                        <p className='text-xl cursor-pointer' onClick={() => counterHandler(index,"increase")}>+</p>
                                                        <p className='text-base mx-4'>{item.count}</p>
                                                        {item.count === 1 ?
                                                            <Image 
                                                                src={TrashIcon} 
                                                                alt="TrashIcon"
                                                                onClick={() => counterHandler(index,"remove")}
                                                                className="w-[12px] h-[12px] self-center cursor-pointer"
                                                            /> 
                                                            :
                                                            <p className='text-xl cursor-pointer' onClick={() => counterHandler(index,"decrease")}>-</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>          
                        )}
                    {/* Continue Box */}
                    <div className='hidden lg:flex flex-col justify-between items-center w-1/3 p-5 bg-[#ea63521a] rounded-[15px] absolute bottom-10 left-0'>
                        <div className='flex justify-between w-full'>
                            <p className='text-xl text-gray-400 font-normal leading-8'>مجموع سبد خرید:</p>
                            <p className='text-2xl text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                        </div>
                        <button
                            onClick={() => router.push('/card/payment')} 
                            className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-full rounded-[12px] mt-1'
                        >ادامه</button>
                    </div>
                </div>
                {/* Similar Products */}
                <div className='flex flex-col items-stretch px-0 py-5 lg:py-10 border-y-[2px] lg:border-none border-secondary'>
                            <div className='flex justify-between items-center align-middle px-10 lg:px-0'>
                                <h5 className='text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]'>محصولات مشابه</h5>
                                <Link
                                    href='/products'  
                                    className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
                                ><bdi>مشاهده همه</bdi></Link>
                            </div>
                            <div className='flex justify-center items-center lg:flex-wrap overflow-x-scroll lg:overflow-hidden scrolling-touch scroll-smooth scroll-mx-10 touch-pan-x lg:touch-none scrolling-touch'>
                                {data && data.slice((currentPage - 1) * CardsPerPage, (currentPage - 1) * CardsPerPage + CardsPerPage).map(item => 
                                    <div 
                                        key={v4()}
                                        className='m-3'
                                    >
                                        <div className='flex flex-col items-stretch w-[150px] lg:w-[285px] h-[250px] lg:h-[420px] p-4 lg:p-5  bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB'>
                                            <div className='relative block h-[100px] lg:h-[200px] bg-gray-400 border-[1px] border-solid border-primary rounded-[15px] lg:rounded-[20px]'>
                                                <div className='absolute z-index-2 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full'>
                                                    <Image 
                                                        src={BookmarkRed_Icon} 
                                                        alt="BookmarkIcon" 
                                                        className='w-3 h-3 lg:w-5 lg:h-5'
                                                    />
                                                </div>
                                            </div>
                                            <div className='mt-2 lg:mt-4'>
                                                <p className='text-sm lg:text-base text-gray-400 font-medium leading-5'><bdi>{item.group}</bdi></p>
                                                <div className='flex justify-between items-center content-start'>
                                                    <h2 className='text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>{item.title}</h2>
                                                    {item.discount && <p className='text-sm lg:text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px] lg:rounded-[15px]'>{item.discount}%</p>}                                      
                                                </div>    
                                                <div>
                                                    <div className='hidden lg:flex flex-row items-center'>
                                                        <div className='flex flex-row items-center'>{starsBoxHandler(item.stars)}</div>
                                                        <p className='text-xl text-gray-400 font-medium leading-6 mr-2 align-middle'>{`(${item.stars})`}</p>
                                                    </div>
                                                    <div className='flex lg:hidden flex-row items-center mr-1'>
                                                        <Image 
                                                            src={StarGold_Icon} 
                                                            alt="GoldenStarIcon"
                                                        />
                                                        <p className='text-base text-gray-400 font-medium leading-7 mr-[2px]'>{`(${item.stars})`}</p>
                                                    </div>  
                                                </div>
                                                <p className='hidden lg:block text-sm text-primary font-normal leading-5 opacity-90 mt-2'>{item.store}</p>
                                                {item.amount ? 
                                                    <div className='flex justify-between items-center mt-2'>
                                                        <div className='flex flex-col'>
                                                            <p className='text-base lg:text-lg text-primary font-medium leading-8 mb-0'><bdi>{item.price * (1 - item.discount/100)} تومان</bdi></p>
                                                            {item.discount && <p className='text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0'>{item.price}</p>}
                                                        </div> 
                                                        <div className='flex items-center p-2 bg-[#EA635233] rounded-[10px]'>
                                                            <p className='hidden lg:block text-base text-primary font-medium leading-7 ml-2'>خرید</p>
                                                            <Image 
                                                                src={ShoppingCartRed_Icon} 
                                                                alt="ShoppingCartRedIcon"
                                                            />
                                                        </div>
                                                    </div>
                                                : 
                                                    <div className='text-base text-gray-400 text-center font-medium p-2 mt-3 w-full bg-secondary rounded-[10px]'>ناموجود</div>
                                                }
                                            </div>
                                        </div>
                                    </div>          
                                )}
                            </div>
                            <Pagination
                                CardsPerPage={CardsPerPage}
                                totalCards={Cards.length}
                                paginateBack={paginateBack}
                                paginateFront={paginateFront}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                </div>
                {/* Continue Box */}
                <div className='flex lg:hidden justify-between items-center w-full px-10 py-5'>
                    <button 
                        onClick={() => router.push('/card/payment')}
                        className='text-base text-center text-white font-medium leading-7 bg-primary p-3 w-1/2 rounded-[12px]'
                    >ادامه</button>
                    <div className='flex flex-col'>
                        <p className='text-base text-gray-400 font-normal leading-8'>مجموع سبد خرید</p>
                        <p className='text-lg text-primary font-extrabold leading-8 after:content-["تومان"] after:text-sm after:font-normal after:leading-6 after:mr-2'><bdi>{(125000).toLocaleString()}</bdi></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default index;