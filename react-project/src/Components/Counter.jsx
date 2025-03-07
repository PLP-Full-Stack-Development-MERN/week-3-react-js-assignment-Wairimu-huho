import React, { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Counter</h2>

      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>

        <span className="text-3xl font-bold text-cyan-800">{count}</span>

        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={reset}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded w-full"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
