import Link from 'next/link';
import React from 'react';

export default function detail() {
  const listAnswer = [1, 1, 1, 1];
  return (
    <div className="flex w-full items-stretch bg-dark min-h-screen">
      <div className="z-20 mb-3 lg:relative fixed top-0 w-full flex">
        <div className="flex flex-col lg:w-2/3 semi-lg:w-3/4 w-full">
          <div className="px-10 lg:pt-5 pt-2 lg:pb-0 pb-2 bg-dark flex items-center justify-between w-full mb-3">
            <Link href="/" className="flex justify-center items-center">
              <span class="mr-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
                </svg>
              </span>
              <span class=" text-sm lg:text-base font-semibold">Trang chủ</span>
            </Link>
          </div>
          {/* Bài thi */}
          <div className="px-5 lg:pt-0 pt-3 lg:px-10 w-full relative h-full flex flex-col items-center justify-center">
            <div className=" w-full sm:w-3/4 md:w-1/2">
              <div className="flex justify-start">
                <div>
                  <span className="text-white bg-emerald-500  text-sm px-3 py-1 rounded">
                    <span className="none sm:inline-block">Câu hỏi</span> Dễ
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap">
                    <span className="block ml-2 mb-1.5 text-sm bg-gray-600 px-3 py-0.5 rounded text-white">
                      <span className="inline-block">C++</span>
                    </span>
                    <span className="block ml-2 mb-1.5 text-sm bg-gray-600 px-3 py-0.5 rounded text-white">
                      <span className="inline-block">Biến và kiểu dữ liệu</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-gray-200 mt-3 ck-content">
                <p>Chọn đáp án đúng</p>
                <p>Kiểu dữ liệu nào lưu trữ một số nguyên?</p>
              </div>

              <div className="mt-3 mb-0 lg:mb-20">
                {/* Answer */}
                {listAnswer?.map((answer, index) => (
                  <div className="mt-2" key={index}>
                    <div className="flex items-center w-full">
                      <input id="answer_2" className="hidden" type="checkbox" />
                      <label
                        for="answer_2"
                        className="flex flex-1 items-center justify-between px-10 py-1.5 border rounded-lg cursor-pointer  hover:border-opacity-100 transition-all
                             false
                             false
                             false
                              border-white border-opacity-50
                        "
                      >
                        <div>
                          <div className="text-white ">
                            <p>string</p>
                          </div>
                        </div>
                        <div className="flex items-center text-lg"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Điều hướng */}
          <div className="flex flex-1 px-10">
            <div className="flex justify-between items-center px-3 sm:px-5  py-4 bg-black rounded-md shadow w-full mx-auto">
              <div />
              <div className="flex justify-center mx-2 sm:mx-12 xl:mx-24">
                <a className="items-center font-medium cursor-pointer hover:text-white transition-all flex text-white">
                  <span className="mr-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5,2C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2h3.586L12,21.414L15.414,18H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2 H5z M19,16h-4.414L12,18.586L9.414,16H5V4h14V16z" />
                      <path d="M11 6H13V12H11zM11 13H13V15H11z" />
                    </svg>
                  </span>
                  <span className="text-sm">Báo lỗi</span>
                </a>
                <a className="px-6 semi-lg:px-14  py-2 mx-3 sm:mx-7 md:mx-10 cursor-pointer hover:bg-primary-dark hover:text-white transition-all flex items-center border-2 text-primary-dark border-primary-dark rounded">
                  <span className="mr-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">Đáp án</span>
                </a>
                <a className="items-center font-medium cursor-pointer hover:text-white transition-all flex text-white">
                  <span className="text-sm">Tiếp theo</span>
                  <span className="ml-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
                    </svg>
                  </span>
                </a>
              </div>
              <a className="flex cursor-pointer text-base hover:text-gray-100 transition-all items-center text-gray-600 font-semibold">
                <span className="text-sm">Câu 2</span>
                <span className="ml-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Infor */}
        <div className=" hidden lg:block lg:w-1/4  w-80 lg:h-screen mt-[56px] mr-10">
          <div className="w-full rounded-xl shadow-xl px-7 py-3 xl:py-6 2xl:py-10 bg-black">
            <div>
              <div class="text-white font-semibold">
                <span class="font-bold mr-4">#</span> <span>Loại câu hỏi</span>
              </div>
              <div class="mt-3 flex flex-wrap">
                <span class="px-2 py-0.5 bg-gray-700 text-gray-200 text-sm font-normal mr-1.5 mb-1.5 2xl:mr-3 2xl:mb-3 rounded">
                  C++
                </span>
              </div>
            </div>

            {/* Time */}
            <div class="mt-5">
              <div class="text-white font-semibold flex items-center">
                <span class="font-bold mr-4">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Thời gian làm bài</span>
              </div>
              <div class="w-2/3 2xl:w-7/12 mx-auto mt-3">
                {/* <div data-test-id="CircularProgressbarWithChildren">
                <div style="position: relative; width: 100%; height: 100%;">
                  <svg
                    class="CircularProgressbar "
                    viewBox="0 0 100 100"
                    data-test-id="CircularProgressbar"
                  >
                    <path
                      class="CircularProgressbar-trail"
                      d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                      stroke-width="8"
                      fill-opacity="0"
                      style="stroke: rgb(255, 172, 6); stroke-linecap: butt; stroke-width: 2px; transform: rotate(-1turn); transform-origin: center center; stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"
                    ></path>
                    <path
                      class="CircularProgressbar-path"
                      d="
      M 50,50
      m 0,-46
      a 46,46 0 1 1 0,92
      a 46,46 0 1 1 0,-92
    "
                      stroke-width="8"
                      fill-opacity="0"
                      style="stroke: rgb(55, 55, 55); stroke-linecap: butt; stroke-width: 2.5px; transform: rotate(-1turn); transform-origin: center center; stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;"
                    ></path>
                  </svg>
                  <div
                    data-test-id="CircularProgressbarWithChildren__children"
                    style="position: absolute; width: 100%; height: 100%; margin-top: -100%; display: flex; flex-direction: column; justify-content: center; align-items: center;"
                  >
                    <span class=" text-primary text-lg 2xl:text-xl font-medium">
                      Không giới hạn
                    </span>
                  </div>
                </div>
              </div> */}
              </div>
            </div>

            {/* Sơ đồ câu hỏi */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold flex items-center">
                  <span className="font-bold mr-4">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                  <span>Sơ đồ câu hỏi</span>
                </div>
                <div className="text-white font-semibold">
                  <span>0 / 10</span>
                </div>
              </div>
              <div className="flex flex-wrap mt-3 lg:mt-5 ml-0 lg:ml-5">
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600 bg-opacity-100" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
                <a className="cursor-pointer h-9 w-9 rounded mr-2.5 lg:mr-4 mb-2.5 lg:mb-4 bg-gray-600  bg-opacity-40" />
              </div>
            </div>

            {/* Kết quả */}
            <div className="mt-1 xl:mt-7">
              <div className="flex justify-center">
                <a className="cursor-pointer hover:bg-gray-300 transition-all text-black flex justify-center items-center rounded shadow py-3 px-8 text-center bg-gray-200 text-sm font-semibold">
                  <span className=" mr-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                    </svg>
                  </span>
                  <span>Kết thúc bài thi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
