import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="flex justify-between p-4">
      <div className="font-semibold flex gap-2">
        <span className="text-blue-600">
          <i class="fa-solid fa-car-side"></i>
        </span>
        Milehire
      </div>
      <div className="flex gap-6">
        <div>
          <NavLink className="hover:text-blue-600 hover:underline underline-offset-8">
            New Booking{" "}
            <span>
              <i class="fa-solid fa-plus"></i>
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink className="hover:text-blue-600 hover:underline underline-offset-8">
            Profile <i class="fa-solid fa-user-circle"></i>
          </NavLink>
        </div>
        <div
          onClick={() => handleLogout()}
          className="hover:text-blue-600 hover:underline underline-offset-8"
        >
          Logout{" "}
          <span>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
