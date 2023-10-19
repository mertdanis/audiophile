import React from "react";

function Numbers() {
  return (
    <div className="w-[120px] h-[48px] px-[15px] items-center justify-center bg-mainLightWhite flex gap-6">
      <p className=" cursor-pointer opactity-25 font-bolder text-subTitle text-mainBlack">
        -
      </p>
      <p className=" font-bolder text-subTitle text-mainBlack">0</p>
      <p className="cursor-pointer opactity-25 font-bolder text-subTitle text-mainBlack">
        +
      </p>
    </div>
  );
}

export default Numbers;
