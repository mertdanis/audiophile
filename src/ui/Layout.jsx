import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <header className=" 	">
        <Header />
      </header>

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
