// button
export const Button = ({
  type = "button",
  handleClick,
  text,
  children,
  disabled,
  className
}) => (
  <button
    type={type}
    className={`${
      disabled ? "cursor-not-allowed bg-primary-300" : "bg-primary-400"
    }  text-white px-4 py-2 uppercase rounded-md hover:bg-primary-300 transition duration-200 ease-linear ${className}`}
    onClick={handleClick}
    disabled={disabled}
  >
    {text || children}
  </button>
);
