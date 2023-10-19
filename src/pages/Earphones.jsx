import React from "react";
import CategoryTitle from "../components/CategoryTitle";

import yx1 from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import ContentDirection from "../components/ContentDirection";
import Content_3 from "../components/Content_3";

import headphoneImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Earphones() {
  return (
    <div>
      <CategoryTitle title={"earphones"} />
      <div className="mt-[50px]">
        <ContentDirection
          direction={"right"}
          isNew={true}
          title={"YX1 WIRELESS EARPHONES"}
          text={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
        >
          <img src={yx1} />
        </ContentDirection>
      </div>
      <div className="relative  flex gap-[30px] my-[120px]  ">
        <Content_3 title={"headphones"}>
          <img className="h-[160px] absolute -top-2" src={headphoneImg} />
        </Content_3>
        <Content_3 title={"speakers"}>
          <img className=" absolute -top-2 h-[146px]" src={speakersImg} />
        </Content_3>
        <Content_3 title={"earphones"}>
          <img className=" absolute -top-2 h-[161px]" src={earphonesImg} />
        </Content_3>
      </div>
    </div>
  );
}

export default Earphones;
