import React from "react";
import Button from "./Button";

function ContentCol({ title, children }) {
  return (
    <div className="flex flex-col items-center gap-6 w-[350px] h-[204px] rounded-[8px] bg-mainLightWhite">
      {children}
      <h6 className="text-h6 text-mainBlack uppercase font-bolder">{title}</h6>
      <Button type={3}>shop</Button>
    </div>
  );
}

export default ContentCol;
