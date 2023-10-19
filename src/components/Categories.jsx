import React from "react";

import { NavLink } from "react-router-dom";

function Categories({ className }) {
  return (
    <ul
      className={`flex gap-6 uppercase text-mainWhite text-subTitle font-bolder tracking-[2px] ${className}`}
    >
      <NavLink to="/">
        <li>home</li>
      </NavLink>

      <NavLink to="/headphones">
        <li>headphones</li>
      </NavLink>

      <NavLink to="/speakers">
        <li>speakers</li>
      </NavLink>
      <NavLink to="/earphones">
        <li>earphones</li>
      </NavLink>
    </ul>
  );
}

export default Categories;
