import Image from 'next/image';
import React from 'react';

export const ContestItem = ({ contest }) => {
  return (
    <div className="card">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src="https://mona.media/wp-content/uploads/2022/10/c.png"
            alt={contest.contest}
            width="48"
            height="48"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-2">
            <p className="text-gray-700">{contest.contest}</p>
            <p className="text-gray-700">({contest.numQues} câu hỏi)</p>
          </div>
        </div>
        <button className="px-2 py-1 border-btn-color border-2 rounded-xl text-gray-700">
          Bắt đầu
        </button>
      </div>
    </div>
  );
};
