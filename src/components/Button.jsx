function Button({ children, className, type }) {
  return (
    <button
      className={`uppercase text-subTitle font-bolder tracking-[1px]  ${
        type === 1 || 2 ? "w-[160px] h-[48px]" : ""
      } ${type === 1 ? "bg-mainOrange text-mainWhite" : ""} ${
        type === 2 ? "border-[1px] border-mainBlack  text-mainBlack" : ""
      } ${
        type === 3
          ? "text-mainBlack tracking-[1px] opacity-50 text-subTitle flex items-center gap-2 w-fit h-fit font-bolder"
          : ""
      }${type === 4 ? "bg-mainBlack text-mainWhite" : ""}`}
    >
      <span>{children}</span>{" "}
      {type === 3 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1.32178 1L6.32178 6L1.32178 11"
            stroke="#D87D4A"
            strokeWidth="2"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
}

export default Button;
