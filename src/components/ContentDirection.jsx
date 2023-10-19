import React from "react";
import NewProduct from "./NewProduct";
import Button from "./Button";

import { Link } from "react-router-dom";

function ContentDirection({ isNew, title, text, direction, children }) {
  return (
    <div className="flex gap-[125px] items-center">
      {direction === "right" ? (
        <>
          <div className="basis-1/2">{children}</div>
          <div className="flex flex-col gap-6 basis-1/2	 ">
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
          <div className="flex flex-col gap-6 basis-1/2">
            {isNew ? <NewProduct /> : ""}
            <h2 className="text-h2 font-bolder uppercase text-mainBlack">
              {title}
            </h2>
            <p className="opacity-50 text-mainBlack text-bodyText font-regular">
              {text}
            </p>
            <Link>
              <Button type={1}>see product</Button>
            </Link>
          </div>
          <div className="basis-1/2">{children}</div>
        </>
      )}
    </div>
  );
}

export default ContentDirection;
