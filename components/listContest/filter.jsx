import React, { useState } from 'react';
import { RageBar } from '../common';

export const Filter = () => {
  const listNumber = [10, 15, 20, 25, 30, 40];
  const listQuestions = [
    'C++',
    'Python',
    'Cấu trúc điều kiện',
    'Toán tử',
    'Biến và kiểu dữ liệu',
    'Vòng lặp',
    'Hàm ',
    'Con trỏ',
    'Câu điều kiện',
    'LinkList',
    'Tree',
    'Binary tree'
  ];

  return (
    
      <div className="bg-white h-full px-5 overflow-y-scroll">
      <div className="mb-4">
        <label className="text-secondary-text">Tìm kiếm bằng từ khóa</label>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Ngôn ngữ, từ khóa,..."
            className="border-[1px] p-[6px]"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-secondary-text">Chọn số lượng câu hỏi</label>
        <div className="mt-2 text-secondary-text">
          <select className="w-full">
            <option>Chọn số lượng</option>
            {listNumber.map((num, index) => (
              <option key={index}>{num} câu</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <RageBar
          option={{
            max: 60,
            min: 0,
            step: 10,
          }}
        />
      </div>
      <div>
        <label className="text-secondary-text">Loại câu hỏi</label>
        {listQuestions.map((item, index) => (
          <button className="flex mb-4 items-center cursor-pointer" key={index}>
            <input id="link-checkbox" type="checkbox" defaultValue className="w-[18px] h-[18px] text-btn-color bg-gray-100 border-gray-300    dark:ring-offset-gray-800 focus:bg-btn-color dark:bg-gray-700 dark:border-gray-600 mr-2" />

            <p className="text-secondary-text">{item}</p>
          </button>
        ))}
      </div>

      <button className='rounded-md bg-btn-color w-full py-2'>
        Tìm kiếm ngay
      </button>
      </div>
  );
};
