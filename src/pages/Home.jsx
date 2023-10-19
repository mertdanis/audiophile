import React from "react";

import ContentCol from "../components/ContentCol";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="flex gap-[30px] my-[120px] justify-center ">
        <ContentCol title={"headphones"}>
          <img src="/my-project/src/assets/shared/desktop/image-category-thumbnail-headphones.png" />
        </ContentCol>
        <ContentCol title={"speakers"}></ContentCol>
        <ContentCol title={"earphones"}></ContentCol>
      </div>
    </>
  );
}

export default Home;
