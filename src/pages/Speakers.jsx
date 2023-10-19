import React from "react";
import CategoryTitle from "../components/CategoryTitle";
import ContentDirection from "../components/ContentDirection";

import zx9 from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7 from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import Content_3 from "../components/Content_3";

function Speakers() {
  return (
    <div>
      <CategoryTitle title={"speakers"} />
      <div className="flex flex-col gap-[50px] my-[50px]">
        <ContentDirection
          isNew={true}
          title={"ZX9 SPEAKER"}
          text={
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
          direction={"right"}
        >
          <img src={zx9} />
        </ContentDirection>

        <ContentDirection
          isNew={false}
          title={"ZX7 SPEAKER"}
          text={
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
          direction={"left"}
        >
          <img src={zx7} />
        </ContentDirection>
      </div>
      <div className="flex gap-6">
        <Content_3 title={"headphones"}></Content_3>
        <Content_3 title={"speakers"}></Content_3>
        <Content_3 title={"earphones"}></Content_3>
      </div>
    </div>
  );
}

export default Speakers;
