import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-semibold text-xl text-cyan-800">Login Page</h1>
        <nav className="flex space-x-6">
          <ul className="flex space-x-6">
            <li  className="text-gray-600 hover:text-cyan-700 transition-colors">
              <a href="/">Home</a>
            </li>
            <li  className="text-gray-600 hover:text-cyan-700 transition-colors">
              <a href="#">Profile</a>
            </li>
            <li  className="text-gray-600 hover:text-cyan-700 transition-colors">
              <a href="#">Counter</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
