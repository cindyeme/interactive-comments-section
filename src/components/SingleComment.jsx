import Votes from "./Votes";
// import avatar from "../images/avatars/image-amyrobson.png";
import Icons from "../icons/Icons";
import CommentBox from "./Layouts";
import { TextArea } from "./InputField";
import { Button } from "./Button";

export default function SingleComment({
  score,
  handleDownVotes,
  handleUpVotes,
  _avatar,
  username,
  createdAt,
  handleReply,
  content,
  currentUser,
  handleEdit,
  handleDelete,
  edit,
  value,
  handleChange,
}) {
  return (
    <CommentBox>
      <div>
        {/* votes */}
        <Votes
          score={score}
          handleDownVotes={handleDownVotes}
          handleUpVotes={handleUpVotes}
        />
        <div className="flex flex-col space-y-3">
          {/* user details */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={_avatar}
                alt="avatar"
                className="w-8 h-8 object-cover"
              />
              <p className="font-semibold text-neutral-500 flex items-center space-x-2">
                <span>{username} </span>
                {currentUser && (
                  <span className="bg-primary-400 text-white rounded px-1.5 py-px text-xs">
                    You
                  </span>
                )}
              </p>
              <p className="text-neutral-400">{createdAt}</p>
            </div>
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
                    type="button"
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
          </div>
          {/* comment */}
          <div className="flex flex-col space-y-3">
            {edit ? (
              <>
                <TextArea
                  name="update"
                  value={value}
                  handleChange={handleChange}
                />
                <div className="flex items-end justify-end">
                  <Button text="update" />
                </div>
              </>
            ) : (
              <p className="text-neutral-400">{content}</p>
            )}
          </div>
        </div>
      </div>
    </CommentBox>
  );
}
