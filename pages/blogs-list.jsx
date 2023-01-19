import { BlogRecommendation } from '@/components/home';
import { MainLayout } from '@/components/layout';
import Link from 'next/link';
import React from 'react';
import { blogsList } from '../fakeData';

export default function Blogs() {
  return (
    <div className="mt-5">
      {/* Tin mới nhất */}
      <div className="mt-[70px]">
        <h3 className="font-bold text-base mb-5">Tin tức mới nhất</h3>
        <div className="w-ful">
          <Link
            href="/"
            className="rounded-xl  bg-gray-100 shadow overflow-hidden w-full flex flex-wrap"
          >
            <div className="w-full md:w-1/2">
              <img
                className="rounded-xl"
                src="https://api.kquiz.vn/Upload/Post/637666940695007798_coding_languages_1024x.png"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 px-7 md:px-14 pt-5 pb-10 md:pb-5 flex items-center justify-center">
              <div>
                <h3 className="text-secondary-text font-bold my-4">
                  Bài hướng dẫn chi tiết cách sử dụng Kquiz
                </h3>
                <div className="flex items-center mt-2 text-secondary-text">
                  <div className="mr-3">
                    <div
                      className="bg-cover bg-center h-8 w-8 rounded-full shadow"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/howkteam/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png");',
                      }}
                    ></div>
                  </div>
                  <p className="text-base font-medium mr-10">Đặng Gia Khánh</p>
                  <p className="text-base">8/8/2021</p>
                </div>
                <p className="line-clamp-4 mt-5 text-gray-400">dfkjg;kdf;gks</p>
                <Link
                  className="mt-2 inline-block text-btn-color hover:text-[#E38C00]"
                  href="/blogs/bai_huong_dan_chi_tiet_cach_su_dung_kquiz/6"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Tin tức khác */}
      <div className="my-10">
        <h3 className='class="font-bold text-base mb-5'>Tin tức khác</h3>
        <div className="grid grid-cols-3 gap-5">
          {blogsList?.map((blog, index) => (
            <BlogRecommendation key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

Blogs.Layout = MainLayout;
