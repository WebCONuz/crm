import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/users/Header";
import Sidebar from "../../components/users/Sidebar";

const UserLayout = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <main className="w-4/5 h-full overflow-y-auto">
          <Header />
          <div className="p-6 bg-gray-50 min-h-[calc(100vh-70px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default UserLayout;
