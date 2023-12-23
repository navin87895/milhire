import React, { useState } from "react";
import Navbar from "../components/user/Navbar";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("0");

  return (
    <>
      <Navbar />
      <div className="m-4 flex gap-6 my-0 pb-2 text-gray-500 border-b">
        <div
          onClick={() => setSelectedComponent("0")}
          className={
            selectedComponent == "0"
              ? "text-blue-600 font-semibold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Upcoming Bookings
        </div>
        <div
          onClick={() => setSelectedComponent("1")}
          className={
            selectedComponent == "1"
              ? "text-blue-600 font-semibold cursor pointer"
              : "cursor-pointer"
          }
        >
          Previous Bookings
        </div>
      </div>
    </>
  );
};

export default Dashboard;
