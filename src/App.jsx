import React from "react";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import ContentCol from "./components/ContentCol";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <div className="flex gap-[30px]">
        <ContentCol title={"headphones"}>
          <img src="/my-project/src/assets/shared/desktop/image-category-thumbnail-headphones.png" />
        </ContentCol>
        <ContentCol title={"speakers"}></ContentCol>
        <ContentCol title={"earphones"}></ContentCol>
      </div>
    </div>
  );
}

export default App;
