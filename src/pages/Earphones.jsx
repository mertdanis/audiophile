import React from "react";
import CategoryTitle from "../components/CategoryTitle";

import yx1 from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import ContentDirection from "../components/ContentDirection";
import Content_3 from "../components/Content_3";

function Earphones() {
  return (
    <div>
      <CategoryTitle title={"earphones"} />
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
      <div className="flex gap-6">
        <Content_3 title={"headphones"}></Content_3>
        <Content_3 title={"speakers"}></Content_3>
        <Content_3 title={"earphones"}></Content_3>
      </div>
    </div>
  );
}

export default Earphones;
