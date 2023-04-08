import React, { useState } from "react";
import Image from "next/image";
import { v4 } from "uuid";
import Link from "next/link";
//components
import Pagination from "@/components/partials/pagination";
// media
import StarGold_Icon from "../../assets/common/startGold.svg";
import BookmarkRed_Icon from "../../assets/common/BookmarkRedIcon.svg";
import ShoppingCartRed_Icon from "../../assets/common/shopping-cartRedIcon.svg";
//services
import { starsBoxHandler } from "@/services/product/starsOfProduct";
export default function SimilarProducts({ data }) {
  const Cards = data.similarProduct;
  const [currentPage, setCurrentPage] = useState(1);
  const [CardsPerPage] = useState(4);
  const indexOfLastPost = currentPage * CardsPerPage;
  const indexOfFirstPost = indexOfLastPost - CardsPerPage;
  const paginateBack = () => {
    if (currentPage !== Math.ceil(Cards.length / CardsPerPage))
      setCurrentPage(currentPage + 1);
  };
  const paginateFront = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col items-stretch px-0 py-5 lg:py-10 border-solid border-b-[2px] border-secondary">
      <div className="flex justify-between items-center align-middle px-10 lg:px-0">
        <h5 className="text-2xl text-black font-black lg:font-bold leading-7 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]">
          محصولات مشابه
        </h5>
        <Link
          href="/products"
          className='text-lg text-primary font-medium leading-4 after:content-[">"] after:mr-2 lg:after:mr-3 after:text-base lg:after:text-2xl'
        >
          <bdi>مشاهده همه</bdi>
        </Link>
      </div>
      <div className="flex justify-center items-center lg:flex-wrap overflow-x-scroll lg:overflow-hidden scrolling-touch scroll-smooth scroll-mx-10 touch-pan-x lg:touch-none scrolling-touch">
        {data.similarProduct &&
          data.similarProduct
            .slice(
              (currentPage - 1) * CardsPerPage,
              (currentPage - 1) * CardsPerPage + CardsPerPage
            )
            .map((item) => (
              <div key={v4()} className="m-3">
                <div className="flex flex-col items-stretch w-[150px] lg:w-[285px] h-[250px] lg:h-[420px] p-4 lg:p-5  bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB">
                  <div className="relative block h-[100px] lg:h-[200px] bg-gray-400 border-[1px] border-solid border-primary rounded-[15px] lg:rounded-[20px]">
                    <div className="absolute z-index-2 top-[-7px] left-[-7px] p-2 lg:p-3 bg-white border-[1px] border-solid border-primary rounded-full">
                      <Image
                        src={BookmarkRed_Icon}
                        alt="BookmarkIcon"
                        className="w-3 h-3 lg:w-5 lg:h-5"
                      />
                    </div>
                  </div>
                  <div className="mt-2 lg:mt-4">
                    <p className="text-sm lg:text-base text-gray-400 font-medium leading-5">
                      <bdi>{item.group}</bdi>
                    </p>
                    <div className="flex justify-between items-center content-start">
                      <h2 className="text-base lg:text-xl text-black font-medium lg:font-bold leading-8 before:hidden lg:before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]">
                        {item.title}
                      </h2>
                      {item.discount && (
                        <p className="text-sm lg:text-base text-primary font-medium py-1 px-2 mr-2 border-solid border-[0.5px] border-primary rounded-[12px] lg:rounded-[15px]">
                          {item.discount}%
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="hidden lg:flex flex-row items-center">
                        <div className="flex flex-row items-center">
                          {starsBoxHandler(item.stars)}
                        </div>
                        <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${item.stars})`}</p>
                      </div>
                      <div className="flex lg:hidden flex-row items-center mr-1">
                        <Image src={StarGold_Icon} alt="GoldenStarIcon" />
                        <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${item.stars})`}</p>
                      </div>
                    </div>
                    <p className="hidden lg:block text-sm text-primary font-normal leading-5 opacity-90 mt-2">
                      {item.store}
                    </p>
                    {item.amount ? (
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex flex-col">
                          <p className="text-base lg:text-lg text-primary font-medium leading-8 mb-0">
                            <bdi>
                              {item.price * (1 - item.discount / 100)} تومان
                            </bdi>
                          </p>
                          {item.discount && (
                            <p className="text-sm text-gray-400 line-through font-light leading-8 opacity-95 mt-0">
                              {item.price}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center p-2 bg-[#EA635233] rounded-[10px]">
                          <p className="hidden lg:block text-base text-primary font-medium leading-7 ml-2">
                            خرید
                          </p>
                          <Image
                            src={ShoppingCartRed_Icon}
                            alt="ShoppingCartRedIcon"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-base text-gray-400 text-center font-medium p-2 mt-3 w-full bg-secondary rounded-[10px]">
                        ناموجود
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
  );
}
