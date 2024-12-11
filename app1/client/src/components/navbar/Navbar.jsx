import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
        <ul className="flex justify-center gap-32 text-white font-semibold">
          <li onClick={() => navigate("/home")} className="hover:text-gray-300 hover:underline cursor-pointer">Home</li>
          <li onClick={() => navigate("/register")} className="hover:text-gray-300 hover:underline cursor-pointer">Register</li>
          <li onClick={() => navigate("/courses")} className="hover:text-gray-300 hover:underline cursor-pointer">Courses</li>
          <li onClick={() => navigate("/cart")} className="hover:text-gray-300 hover:underline cursor-pointer">Cart</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
