import React from "react";

import bestGear from "../../public/shared/desktop/image-best-gear.jpg";

function AboutCompany() {
  return (
    <div className="flex px-[20vw] gap-[200px] items-center my-[100px]">
      <div className="flex flex-col gap-[32px] w-[445px]">
        <h2 className="text-h2 font-bolder text-mainBlack uppercase">
          Bringing you the <span className="text-mainOrange">best</span> audio
          gear
        </h2>
        <p className="text-bodyText opacity-50 text-mainBlack font-bold">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img className="rounded-[8px]" src={bestGear} />
    </div>
  );
}

export default AboutCompany;
