import React from "react";

import Content_3 from "../components/Content_3";
import Hero from "../components/Hero";
import Button from "../components/Button";

import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import zx7 from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "../assets/home/desktop/image-earphones-yx1.jpg";

function Home() {
  return (
    <>
      <Hero />

      <main className="">
        <div className="flex gap-[30px] my-[120px]  ">
          <Content_3 title={"headphones"}>
            <img src="/my-project/src/assets/shared/desktop/image-category-thumbnail-headphones.png" />
          </Content_3>
          <Content_3 title={"speakers"}></Content_3>
          <Content_3 title={"earphones"}></Content_3>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="w-[1110px] h-[560px] flex gap-[130px] rounded-[8px] bg-mainOrange">
            <img
              className="w-[410.234px] h-[493px] mt-auto ml-[117px]"
              src={zx9}
              alt="speaker"
            />
            <div className="flex flex-col gap-6 w-[30%] mt-[133px] ">
              <h1 className="text-h1 uppercase font-bolder text-mainWhite tracking-[2px]">
                ZX9 SPEAKER
              </h1>
              <p className="opacity-75 text-mainWhite font-bold text-bodyText">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>

              <Button type={4}>see product</Button>
            </div>
          </div>
          <div
            className="h-[320px] w-[1110px]  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${zx7})`,
            }}
          >
            <div className="flex flex-col pl-[95px] pt-[100px] gap-[32px]">
              <h4 className="text-h4 text-mainBlack uppercase font-bolder">
                ZX7 SPEAKER
              </h4>
              <Button type={2}>see product</Button>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <img className="rounded-[8px]" src={yx1} />

            <div className="flex flex-col  gap-6  items-center justify-center  w-[540px] h-[320px] rounded-[8px] bg-mainLightWhite">
              <h4 className="text-h4 font-bolder text-mainBlack uppercase">
                YX1 EARPHONES
              </h4>
              <Button type={2}>see product</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
