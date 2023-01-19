import { ListContestLayout } from '@/components/layout';
import { ContestItem, Filter, TopContest } from '@/components/listContest';
import { contestData } from '@/fakeData';
import React from 'react';

function ListConstes() {
  return (
    <>
      {/* <div className='absolute top-0 left-0 h-screen'>
        <Filter />
      </div>
      <div className="h-screen">
        <div className='px-5 sm:px-10  2xl:px-20 py-5'>
        <div className='grid grid-cols-2 gap-5'>
          <ContestItem />
        </div>
        </div>
      </div> */}
      <div className="flex mt-[70px]">
        <div className="hidden lg:block lg:w-2/12 w-0 h-screen">
          <Filter />
        </div>
        <div className="lg:w-8/12  w-full">
          <div className="px-5 sm:px-10  2xl:px-20 py-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
              {contestData?.map((item, index) => (
                <ContestItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-2/12">
          <TopContest />
        </div>
      </div>
    </>
  );
}

ListConstes.Layout = ListContestLayout;

export default ListConstes;
