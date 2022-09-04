import Votes from "./Votes";
// import avatar from "../images/avatars/image-amyrobson.png";
import Icons from "../icons/Icons";
import CommentBox from "./Layouts";

export default function SingleComment({
  score,
  handleDownVotes,
  handleUpVotes,
  _avatar,
  username,
  createdAt,
  handleReply,
  content,
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
              <img src={_avatar} alt="avatar" className="w-8 h-8 object-cover" />
              <p className="font-semibold text-neutral-500">{username}</p>
              <p className="text-neutral-400">{createdAt}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={handleReply}
                className="flex items-center space-x-2"
              >
                <Icons.ReplyIcon />
                <span className="text-primary-400 font-semibold text-[1.05rem]">
                  Reply
                </span>
              </button>
            </div>
          </div>
          {/* comment */}
          <div>
            <p className="text-neutral-400">{content}</p>
          </div>
        </div>
      </div>
    </CommentBox>
  );
}
