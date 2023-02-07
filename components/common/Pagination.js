import React from "react";
import Image from "next/image";
import { v4 } from "uuid";
//media 
import LeftArrow_Icon from '../../assets/common/leftArrowWhite.svg'

export default function Pagination({
  CardsPerPage,
  totalCards,
  paginate,
  currentPage,
  paginateFront,
  paginateBack,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / CardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='self-center mt-8'>
          <div className="flex justify-between items-center">
            <div
                onClick={() => {
                paginateFront();
                }}
                className={currentPage === 1 
                    ?'cursor-pointer p-3 bg-[#EA635266] rounded-[7px] rotate-180 ml-2' 
                    : 'cursor-pointer p-3 bg-primary rounded-[7px] rotate-180 ml-2'}
            >
                <Image src={LeftArrow_Icon} alt="leftArrowIcon"/>
            </div>
            {pageNumbers.map((number) => (
              <div
                key={v4()}
                onClick={() => {
                  paginate(number);
                }}
                className={
                  currentPage === number
                    ? "cursor-pointer w-7 h-2 rounded-[5px] bg-primary mx-2"
                    : "cursor-pointer w-2 h-2 rounded-full bg-[#EA635266] mx-2"
                }
              >
              </div>
            ))}
            <div
                onClick={() => {
                paginateBack();
                }}
                className={currentPage == Math.ceil(totalCards / CardsPerPage)
                    ?'cursor-pointer p-3 bg-[#EA635266] rounded-[7px] mr-2' 
                    : 'cursor-pointer p-3 bg-primary rounded-[7px] mr-2'}
            >
                <Image src={LeftArrow_Icon} alt="leftArrowIcon"/>  
            </div>
        </div>
    </div>
  );
}