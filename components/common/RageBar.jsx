import React, { useEffect, useRef, useState } from 'react';

export const RageBar = ({ option }) => {
  const [time, setTime] = useState(0);
  const inputRange = useRef();

  const handleInput = () => {
    setTime(inputRange.current.value);
  };
  return (
    <div>
      <div>
        <label
          htmlFor="steps-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Thời gian: {time} phút
        </label>
        <input
          ref={inputRange}
          id="steps-range"
          type="range"
          min={option.min}
          max={option.max}
          defaultValue="0"
          step={option.step}
          onInput={handleInput}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </div>
  );
};
