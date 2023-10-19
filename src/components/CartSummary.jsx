import React, { useState } from "react";

import Button from "../components/Button";

function CartSummary() {
  return (
    <div className="h-fit w-[377px] bg-mainWhite rounded-[8px]">
      <div className="flex justify-between items-center">
        <h6 className="text-h6 font-bolder text-black uppercase tracking-[1.2px]">
          CART (3)
        </h6>
        <button className="underline text-mainBlack opacity-50 text-bodyText font-bold">
          Remove All
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="uppercase text-mainBlack opacity-50 text-bodyText font-bold">
          total
        </p>
        <h6 className="text-h6 text-mainBlack font-bolder uppercase">$5.396</h6>
      </div>
      <Button className={"w-[313px]"} type={1}>
        checkout
      </Button>
    </div>
  );
}

export default CartSummary;
