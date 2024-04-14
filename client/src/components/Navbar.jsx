import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#E8505C] pt-3 pb-1 pl-4 pr-4 flex justify-between items-start">
      <h1 className="text-xl mb-4">Admin</h1>
      <div>
        <ul className="flex justify-center">
          <li className="mr-4">
            <Link to="/" className=" text-xl">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className=" text-xl">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
