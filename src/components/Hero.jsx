import React from "react";
import Button from "./Button";

import bgImg from "../assets/home/desktop/image-hero.jpg";

function Hero() {
  return (
    <div
      className="flex flex-col justify-center gap-[24px] h-[90vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-[25%] ">
        <p className="text-overline font-regular opacity-50">NEW PRODUCT</p>
        <h1 className="text-h1 text-mainWhite font-bolder uppercase">
          XX99 Mark II Headphones
        </h1>
        <p className=" text-bodyText font-bold text-mainWhite opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button type={1}>see product</Button>
      </div>
    </div>
  );
}

export default Hero;
