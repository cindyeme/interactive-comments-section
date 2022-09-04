import SingleComment from "./SingleComment";

const CurrentUserComment = ({
  score,
  handleDownVotes,
  handleUpVotes,
  _avatar,
  username,
  createdAt,
  handleReply,
  content,
  handleEdit,
  handleDelete,
  edit,
  disabled
}) => {
  return (
    <SingleComment
      score={score}
      handleDownVotes={handleDownVotes}
      handleUpVotes={handleUpVotes}
      _avatar={_avatar}
      username={username}
      createdAt={createdAt}
      handleReply={handleReply}
      content={content}
      currentUser
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      edit={edit}
      disabled={disabled}
    />
  );
};

export default CurrentUserComment;
