import React from "react";
import Button from "./Button";

function RecomendedProduct({ title }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[350px] h-[318px] rounded-[8px] bg-mainLightWhite"></div>
      {title}
      <Button>see product</Button>
    </div>
  );
}

export default RecomendedProduct;
