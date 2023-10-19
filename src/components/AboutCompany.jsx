import React from "react";

function AboutCompany() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
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

      <img
        src="/my-project/src/assets/shared/desktop/image-best-gear.jpg"
        alt="image-best-gear"
      />
    </div>
  );
}

export default AboutCompany;
