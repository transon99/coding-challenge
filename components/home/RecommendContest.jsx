import Image from 'next/image';
import React from 'react';

export const RecommendContest = ({ contest }) => {
  return (
    <div className="card">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="https://mona.media/wp-content/uploads/2022/10/c.png"
            alt={contest.contest}
            width="48"
            height="48"
            className="w-20 h-20 rounded-full shadow mb-3"
          />
          <h2 className="text-secondary-text font-bold my-2">
            {contest.contest}
          </h2>
        </div>
        <button className="rounded-full shadow-md border-[1px] text-sm px-[2px] text-secondary-text mt-6 mb-10 font-bold">
          C++
        </button>
        {/* <div className="flex mt-6 mb-10 items-center first-line:marker:">
          <div className="h-9 w-9 flex items-center justify-center shadow rounded-full bg-center bg-cover -mr-3 bg-blue-400">
            <span className="text-lg text-white font-medium">T</span>
          </div>
        </div> */}
        <button className="w-full h-full bg-btn-color text-primary-text py-1 rounded-lg font-bold mx-1">
          Thi ngay &gt;&gt;
        </button>
      </div>
    </div>
  );
};
