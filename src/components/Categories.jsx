import React from "react";

function Categories({ className }) {
  return (
    <ul className={`flex gap-6 uppercase ${className}`}>
      <li>home</li>
      <li>headphones</li>
      <li>speakers</li>
      <li>earphones</li>
    </ul>
  );
}

export default Categories;
