import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContentArea from "./MainContentArea";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        {/* sidebar is several menus on the left side */}
        <div className="sidebar hidden md:block lg:block">
          <Sidebar />
          <MainContentArea />
          <Footer />
        </div>
      </div>
    </>
  );
}
