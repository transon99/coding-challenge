import Image from 'next/image';
import React from 'react';

export function BlogRecommendation({ blog }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src="https://mona.media/wp-content/uploads/2022/10/c.png"
          alt={blog.contest}
          width="48"
          height="48"
          className="w-full h-full "
        />
        <div className="p-4">
          <div className="h-40">
            <h2 className="text-secondary-text font-bold my-2">{blog.title}</h2>
            <p className="text-secondary-text line-clamp-3">{blog.des}</p>
            <div className="flex "></div>
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex">
              <span className="text-btn-color bg-orange-200 rounded-full w-6 h-6 flex justify-center items-center mr-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19,4h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V8V6 C21,4.897,20.103,4,19,4z M19.002,20H5V8h14L19.002,20z"></path>
                  <path d="M11 17.414L16.707 11.707 15.293 10.293 11 14.586 8.707 12.293 7.293 13.707z"></path>
                </svg>
              </span>
              <p className="text-secondary-text">{blog.date}</p>
            </div>
            <div className="flex items-center">
              <span class="text-sm mr-1 text-secondary-text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.516,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 C20,13.309,16.411,16,12,16z"></path>
                </svg>
              </span>
              <p className="text-secondary-text">{blog.comment} Bình luận</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
