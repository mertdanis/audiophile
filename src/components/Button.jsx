function Button({ children, className }) {
  return (
    <button
      className={`uppercase ${className} w-[160px] h-[48px] bg-white text-black`}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
