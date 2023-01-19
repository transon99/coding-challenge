import Link from 'next/link';
import React from 'react';

export const ContestItem = ({ item }) => {
  return (
    <div className="w-full h-full bg-white cursor-pointer flex px-3 py-3 text-gray-700 hover:text-gray-700 shadow hover:shadow-lg transition-all rounded-md">
      <Link href="/">
        <div></div>
        <div>
          {/* Title */}
          <div className="flex w-full justify-between items-center mb-3">
            <h5 className="font-normal text-base m-0 text-secondary-text">
              {item?.title}
            </h5>
          </div>

          {/* Information */}
          <div className="flex justify-between mb-3 w-full">
            <div className="flex flex-col lg:flex-row items-center text-sm">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </span>
              <span className="lg:pl-2">{item?.numbQues} câu</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-sm">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path>
                  <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                </svg>
              </span>
              <span className="lg:pl-2">{item?.time}</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-sm">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span className="lg:pl-2">{item?.view}</span>
            </div>
          </div>

          {/* Tag */}
          <div className="flex">
            {item?.type?.map((tag, index) => (
              <div
                className=" font-normal text-xs rounded px-2 py-1 mr-2 mb-2 bg-gray-200 bg-opacity-70 whitespace-nowrap"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
