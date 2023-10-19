import React from "react";

function CategoryTitle({ title }) {
  return (
    <h2 className="uppercase border-t-2 bg-[#0E0E0E] px-[500px] py-[50px] text-center text-mainWhite text-h2 font-bolder">
      {title}
    </h2>
  );
}

export default CategoryTitle;
