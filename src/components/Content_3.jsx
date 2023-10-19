import React from "react";
import Button from "./Button";

import headphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

function Content_3({ title, children }) {
  return (
    <div className="  transition duration-500 flex flex-col justify-center items-center mt-[50px] mb-[50px] w-[350px] h-[204px] rounded-[8px] bg-mainLightWhite">
      {children}

      <div className="flex flex-col items-center gap-6 mt-[30px]">
        <h6 className="text-h6 tracking-[1.286px] text-mainBlack uppercase font-bolder">
          {title}
        </h6>
        <Link to={`/${title}`}>
          <Button type={3}>shop</Button>
        </Link>
      </div>
    </div>
  );
}

export default Content_3;
