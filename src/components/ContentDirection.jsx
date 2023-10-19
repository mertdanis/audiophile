import React from "react";
import NewProduct from "./NewProduct";
import Button from "./Button";

function ContentDirection({ isNew, title, text, direction, children }) {
  return (
    <div className="flex gap-[125px] items-center">
      {direction === "right" ? (
        <>
          <div>{children}</div>
          <div className="flex flex-col gap-6 w-[50%]">
            {isNew ? <NewProduct /> : ""}
            <h2 className="text-h2 font-bolder uppercase text-mainBlack">
              {title}
            </h2>
            <p className="opacity-50 text-mainBlack text-bodyText font-regular">
              {text}
            </p>
            <Button type={1}>see product</Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-6 w-[50%]">
            {isNew ? <NewProduct /> : ""}
            <h2 className="text-h2 font-bolder uppercase text-mainBlack">
              {title}
            </h2>
            <p className="opacity-50 text-mainBlack text-bodyText font-regular">
              {text}
            </p>
            <Button type={1}>see product</Button>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );
}

export default ContentDirection;
