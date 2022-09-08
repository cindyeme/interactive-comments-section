import { Icons } from "../icons/Icons";

export const ActionButtons = ({
  currentUser,
  handleDelete,
  handleEdit,
  handleReply,
}) => {
  return (
    <div className="flex items-center space-x-5">
      {currentUser ? (
        <>
          {/* Delete */}
          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center space-x-2 group transition duration-200 ease-linear delete"
          >
            <Icons.DeleteIcon />
            <span className="text-primary-200 font-semibold md:text-[1.05rem] group-hover:text-primary-100">
              Delete
            </span>
          </button>
          {/* Edit */}
          <button
            type="submit"
            onClick={handleEdit}
            className="flex items-center space-x-2 group transition duration-200 ease-linear primary"
          >
            <Icons.EditIcon />
            <span className="text-primary-400 font-semibold md:text-[1.05rem] group-hover:text-primary-300">
              Edit
            </span>
          </button>
        </>
      ) : (
        <>
          {/* Reply */}
          <button
            type="button"
            onClick={handleReply}
            className="flex items-center space-x-2 group transition duration-200 ease-linear primary"
          >
            <Icons.ReplyIcon />
            <span className="text-primary-400 font-semibold md:text-[1.05rem] group-hover:text-primary-300">
              Reply
            </span>
          </button>
        </>
      )}
    </div>
  );
};
