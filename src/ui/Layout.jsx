import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />

      <main className=" 	">
        <Outlet />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
