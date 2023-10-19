import React from "react";
import CategoryTitle from "../components/CategoryTitle";

import xx99_markTwo from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99_markOne from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import Content_3 from "../components/Content_3";
import ContentDirection from "../components/ContentDirection";

import headphoneImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Headphones() {
  return (
    <div>
      <CategoryTitle title={"headphones"} />

      <div className="flex flex-col gap-[50px] my-[50px]">
        <ContentDirection
          title={"XX99 Mark II Headphones"}
          text={
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
          direction={"right"}
          isNew={true}
        >
          <img className="rounded-[8px]" src={xx99_markTwo} />
        </ContentDirection>

        <ContentDirection
          title={"XX99 Mark I Headphones"}
          text={
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          }
          direction={"left"}
          isNew={false}
        >
          <img className="rounded-[8px] pl-auto" src={xx99_markOne} />
        </ContentDirection>
        <ContentDirection
          title={"XX59 Headphones"}
          text={
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          }
          direction={"right"}
          isNew={false}
        >
          <img className="rounded-[8px]" src={xx59} />
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

export default Headphones;
