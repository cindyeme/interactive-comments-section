
export const TextArea = ({value, handleChange, name}) => (
  <textarea
    name={name}
    id={name}
    value={value}
    onChange={handleChange}
    className="border px-5 py-4 rounded-md w-full focus:border-primary-400 focus:outline-none"
    placeholder="Add a comment..."
  />
);