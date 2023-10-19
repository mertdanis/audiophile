import React from "react";

import ContentCol from "../components/Content_3";
import Hero from "../components/Hero";
import Button from "../components/Button";

import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import zx7 from "../assets/home/desktop/image-speaker-zx7.jpg";

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
      <div className="w-[1110px] h-[560px] flex gap-[130px] rounded-[8px] bg-mainOrange">
        <img
          className="w-[410.234px] h-[493px] mt-auto ml-[117px]"
          src={zx9}
          alt="speaker"
        />
        <div className="flex flex-col gap-6 w-[30%]">
          <h1 className="text-h1 uppercase font-bolder text-mainWhite tracking-[2px]">
            ZX9 SPEAKER
          </h1>
          <p className="opacity-75 text-mainWhite font-bold text-bodyText">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Button type={2}>see product</Button>
        </div>
      </div>
      <div
        className="h-[320px] w-[1110px]  bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${zx7})`,
        }}
      >
        <div className="flex flex-col gap-[32px]">
          <h4 className="text-h4 text-mainBlack uppercase font-bolder">
            ZX7 SPEAKER
          </h4>
          <Button type={2}>see product</Button>
        </div>
      </div>
    </>
  );
}

export default Home;
