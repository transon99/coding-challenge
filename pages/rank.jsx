import { MainLayout } from '@/components/layout';
import React from 'react';

export default function Rank() {
  const fake = [1, 1, 1, 1];
  return (
    <div className="flex justify-center mt-28 mb-11">
      <div className="mx-auto flex flex-col">
        {/* Vinh danh bảng vang */}
        <div className="flex justify-center items-center ">
          <div className="none xs:inline-block">
            <div className="flex flex-col items-center">
              <div
                className="h-16 w-16 rounded-full border-4 border-gray-300 mx-2 bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/howkteam/image/upload/v1631936305/avatar_user/cbrea3ytl9yg5ybh1ei1.png',
                }}
              ></div>
              <span className="text-sm font-semibold mt-2">vipmath171</span>
              <span className="text-lg font-bold text-primary-dark">44</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full border-4 border-gray-300 mx-2 flex justify-center items-center bg-[#5969C5]">
              <span className="text-xl text-white uppercase font-bold">Ex</span>
            </div>
            <span className="text-sm font-semibold mt-2">Exitw.3</span>
            <span className="text-lg font-bold text-primary-dark">55</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full border-4 border-gray-300 mx-2 flex justify-center items-center bg-[#26A69A]">
              <span className="text-2xl text-white uppercase font-bold">
                Ke
              </span>
            </div>
            <span className="text-sm font-semibold mt-2">KenShine0803</span>
            <span className="text-lg font-bold text-primary-dark">57</span>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="h-20 w-20 rounded-full border-4 border-gray-300 mx-2 bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/howkteam/image/upload/v1655682712/avatar_user/z8la5wwkmimxt9yin1qx.jpg")',
              }}
            ></div>
            <span className="text-sm font-semibold mt-2">Kirigaya</span>
            <span className="text-lg font-bold text-primary-dark">49</span>
          </div>

          <div className="none xs:inline-block">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full border-4 border-gray-300 mx-2 flex justify-center items-center bg-[#EE59BA]">
                <span className="text-lg text-white uppercase font-bold">
                  Lã
                </span>
              </div>
              <span className="text-sm font-semibold mt-2">Lã Minh Phúc</span>
              <span className="text-lg font-bold text-primary-dark">42</span>
            </div>
          </div>
        </div>

        {/* Bảng xếp hạng */}
        <div className="rounded-lg shadow-md p-5 mt-5 bg-white">
          <div className="flex justify-center mb-7">
            <div className="mx-1.5">
              <div className="bg-btn-color cursor-pointer rounded-full px-2 xs:px-5 py-1">
                <div className="font-semibold text-secondary-text">Tất cả</div>
              </div>
            </div>
            <div className="mx-1.5">
              <div className="bg-gray-300 cursor-pointer rounded-full px-2 xs:px-5 py-1">
                <div className="font-semibold text-secondary-text">
                  Tháng này
                </div>
              </div>
            </div>
            <div className="mx-3">
              <div className="bg-gray-300 cursor-pointer rounded-full px-2 xs:px-5 py-1">
                <div className="font-semibold text-secondary-text">
                  Tuần này
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col md:flex-row">
            <table>
              <thead className="text-secondary-text">
                <th className="w-24">
                  <div>Hạng</div>
                </th>
                <th className="w-60 xs:w-72 md:w-80">
                  <div>Người chơi</div>
                </th>
                <th>
                  <div>Số trận thắng</div>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex justify-center text-xl font-semibold text-btn-color">
                      1
                    </div>
                  </td>
                  <td>
                    <div className="flex py-2 items-center justify-center">
                      <div className="h-12 w-12 rounded-full border-2 border-primary flex justify-center items-center bg-red-300">
                        <span className="text-lg text-white uppercase font-bold">
                          Ke
                        </span>
                      </div>
                      <div className="line-clamp-1 ml-3 text-base text-secondary-text">
                        KenShine0803
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center font-bold text-blue-500">
                      57
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-20 flex md:flex-col items-end">
              <div className="mb-2">
                <div
                  className="border-yellow-300 shadow-lg 
                                    cursor-pointer h-12 w-12 rounded-full flex justify-center items-center border-4 bg-[#FEBC38]"
                >
                  <span className="font-semibold text-secondary-text">All</span>
                </div>
              </div>
              {fake?.map((item, index) => (
                <div className="mb-2" key={index}>
                  <div
                    className="border-gray-200 
                                    cursor-pointer h-12 w-12 rounded-full bg-center bg-cover border-4"
                    style={{
                      backgroundImage:
                        'url("https://api.kquiz.vn/Upload/Category/637663475215919216_c.PNG")',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Rank.Layout = MainLayout;
