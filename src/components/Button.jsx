// button
export const Button = ({ type = "button", handleClick, text, children }) => (
  <button
    type={type}
    className="bg-primary-400 text-white px-4 py-2 uppercase rounded-md hover:bg-primary-300 transition duration-200 ease-linear"
    onClick={handleClick}
  >
    {text || children}
  </button>
);
