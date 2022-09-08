import Votes from "./Votes";
// import avatar from "../images/avatars/image-amyrobson.png";
// import { Icons } from "../icons/Icons";
import CommentBox from "./Layouts";
import { TextArea } from "./InputField";
import { Button } from "./Button";
import { ActionButtons } from "./ActionButtons";

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
  disabled,
  updateComment,
}) {
  return (
    <CommentBox>
      <div>
        {/* votes */}
        <div className="opacity-0 invisible md:opacity-100 md:visible md:float-left">
          <Votes
            score={score}
            handleDownVotes={handleDownVotes}
            handleUpVotes={handleUpVotes}
          />
        </div>
        <div className="flex flex-col space-y-3 flex-wrap -translate-y-5 md:-translate-y-0">
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
            {/* Reply, Edit, Delete */}
            <div className="md:flex hidden">
              <ActionButtons
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleReply={handleReply}
                currentUser={currentUser}
              />
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
                  <Button
                    type="submit"
                    text="update"
                    disabled={disabled}
                    handleClick={updateComment}
                  />
                </div>
              </>
            ) : (
              <p className="text-neutral-400">{content}</p>
            )}
          </div>

          {/* show on mobile screen */}
          <div className="flex justify-between item-center md:hidden mt-3">
            <div className="md:hidden">
              <Votes
                score={score}
                handleDownVotes={handleDownVotes}
                handleUpVotes={handleUpVotes}
              />
            </div>
            {/* Reply, Edit, Delete */}
            <ActionButtons
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleReply={handleReply}
              currentUser={currentUser}
            />
          </div>
        </div>
      </div>
    </CommentBox>
  );
}
