import React from "react";
import Button from "./Button";

import headphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

function ContentCol({ title, children }) {
  return (
    <div className=" hover:-translate-y-2 transition duration-500 flex flex-col items-center mt-[50px] mb-[50px] w-[350px] h-[204px] rounded-[8px] bg-mainLightWhite">
      <img className=" h-[160px]" src={speakersImg} alt="" />
      <h6 className="text-h6 text-mainBlack uppercase font-bolder">{title}</h6>

      <Button type={3}>shop</Button>
    </div>
  );
}

export default ContentCol;
