import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCompany from "../components/AboutCompany";

function Layout() {
  return (
    <div className="">
      <Navbar />

      <main className="px-[20vw] ">
        <Outlet />
      </main>

      <AboutCompany />
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
