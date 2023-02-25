import React, {useState } from 'react';
import Image from 'next/image';
import {v4} from 'uuid';
import Link from 'next/link';

//components
import Pagination from '@/components/common/Pagination';

// media 
import StarEmpty_Icon from '../../assets/common/starEmpty.svg';
import StarGold_Icon from '../../assets/common/startGold.svg';
import BookmarkRed_Icon from '../../assets/common/BookmarkRedIcon.svg';
import ShoppingCartRed_Icon from '../../assets/common/shopping-cartRedIcon.svg';

const CarouselProduct = ({data}) => {

    // for showing stars
    const starsBoxHandler = (stars) => {
        const starsBox = [] ; 
        for(let i=0; i < stars; i++) {
            starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon"/>)
        }
        for(let i=0; i < (5 - stars) ; i++) {
            starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon"/>)
        }
        return starsBox;
    }
    
    // for pagination
    const Cards = data;
    const [currentPage, setCurrentPage] = useState(1);
    const [CardsPerPage] = useState(4);
    const paginateBack = () =>{
       if(currentPage !== Math.ceil(Cards.length/ CardsPerPage))
        setCurrentPage(currentPage + 1)
    };
    const paginateFront = () => {
        if(currentPage !== 1)
        setCurrentPage(currentPage - 1)
    };
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* mobile */}
            <div className="lg:hidden block">
                <div className='flex flex-row-reverse justify-center items-center scrollbar overflow-x-scroll scrolling-touch scroll-smooth scroll-mx-10 touch-pan-x scrolling-touch'>
                {data && data.map((item,index) => 
                                <div 
                                    key={v4()}
                                    className='m-2'
                                >
                                    <div className='flex flex-col items-stretch w-[150px] p-4 lg:p-5  bg-white rounded-[15px]'>
                                        <div className='relative block h-[100px] bg-gray-400 border-[1px] border-solid border-primary rounded-[15px]'>
                                            <div className='absolute z-index-2 top-[-7px] left-[-7px] p-2 bg-white border-[1px] border-solid border-primary rounded-full'>
                                                <Image 
                                                    src={BookmarkRed_Icon} 
                                                    alt="BookmarkIcon" 
                                                    className='w-3 h-3'
                                                />
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='text-sm text-gray-400 font-medium leading-5'><bdi>{item.group}</bdi></p>
                                            <div className='flex justify-between items-center content-start'>
                                                <h2 className='text-base text-black font-medium leading-8'>{item.title}</h2>
                                                {item.discount && <p className='text-sm text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px]'>{item.discount}%</p>}                                      
                                            </div>    
                                            <div>
                                                <div className='flex flex-row items-center mr-1'>
                                                    <Image 
                                                        src={StarGold_Icon} 
                                                        alt="GoldenStarIcon"
                                                    />
                                                    <p className='text-base text-gray-400 font-medium leading-7 mr-[2px]'>{`(${item.stars})`}</p>
                                                </div>  
                                            </div>
                                            {item.amount ? 
                                                <div className='flex justify-between items-center mt-2'>
                                                    <div className='flex flex-col'>
                                                        <p className='text-base text-primary font-medium leading-8 mb-0'><bdi>{item.price * (1 - item.discount/100)} تومان</bdi></p>
                                                        {item.discount && <p className='text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0'>{item.price}</p>}
                                                    </div> 
                                                    <Link 
                                                        href={`/products/${index}`}
                                                        className='flex items-center p-2 bg-[#EA635233] rounded-[10px]'
                                                    >
                                                        <Image 
                                                            src={ShoppingCartRed_Icon} 
                                                            alt="ShoppingCartRedIcon"
                                                        />
                                                    </Link>
                                                </div>
                                            : 
                                                <div className='text-base text-gray-400 text-center font-medium p-2 mt-3 w-full bg-secondary rounded-[10px]'>ناموجود</div>
                                            }
                                        </div>
                                    </div>
                                </div>          
                            )}
                </div>
            </div>
            {/* desktop */}
            <div className='hidden lg:flex flex-col items-stretch'>
                <div className='flex justify-center items-center flex-wrap xl:flex-nowrap'>
                    {data && data.slice((currentPage - 1) * CardsPerPage, (currentPage - 1) * CardsPerPage + CardsPerPage).map((item,index) =>
                        <div 
                            key={v4()}
                            className='m-3'
                        >
                            <div className='flex flex-col items-stretch w-[275px] h-[420px] p-5  bg-white rounded-[25px] shadow-shadowB'>
                                <div className='relative block h-[200px] bg-gray-400 border-[1px] border-solid border-primary rounded-[20px]'>
                                    <div className='absolute z-index-2 top-[-7px] left-[-7px] p-3 bg-white border-[1px] border-solid border-primary rounded-full'>
                                        <Image 
                                            src={BookmarkRed_Icon} 
                                            alt="BookmarkIcon" 
                                            className='w-5 h-5'
                                        />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <p className='text-base text-gray-400 font-medium leading-5'><bdi>{item.group}</bdi></p>
                                        <div className='flex justify-between items-center content-start'>
                                            <h2 className='text-xl text-black font-bold leading-8 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>{item.title}</h2>
                                            {item.discount && <p className='text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[15px]'>{item.discount}%</p>}                                      
                                        </div>    
                                        <div className='flex flex-row items-center'>
                                            <div className='flex flex-row items-center'>{starsBoxHandler(item.stars)}</div>
                                            <p className='text-xl text-gray-400 font-medium leading-6 mr-2 align-middle'>{`(${item.stars})`}</p>
                                        </div>  
                                        <p className='block text-sm text-primary font-normal leading-5 opacity-90 mt-2'>{item.store}</p>
                                        {item.amount ? 
                                        <div className='flex justify-between items-center mt-2'>
                                            <div className='flex flex-col'>
                                               <p className='text-lg text-primary font-medium leading-8 mb-0'><bdi>{item.price * (1 - item.discount/100)} تومان</bdi></p>
                                                {item.discount && <p className='text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0'>{item.price}</p>}
                                            </div> 
                                            <Link 
                                                href={`/products/${index}`}
                                                className='flex items-center p-2 bg-[#EA635233] rounded-[10px]'
                                            >
                                                <p className='block text-base text-primary font-medium leading-7 ml-2'>خرید</p>
                                                <Image 
                                                    src={ShoppingCartRed_Icon} 
                                                    alt="ShoppingCartRedIcon"
                                                />
                                            </Link>
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
        </div>
    );
};

export default CarouselProduct;