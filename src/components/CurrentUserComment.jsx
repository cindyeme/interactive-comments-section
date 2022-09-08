import { Modal } from "./Modal";
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
  disabled,
  updateComment,
  value, 
  handleChange,
  showModal,
  handleCancel,
  handleConfirmDelete,
  loading
}) => {
  return (
    <>
      {showModal && (
        <Modal
          handleCancel={handleCancel}
          handleConfirmDelete={handleConfirmDelete}
          loading={loading}
        />
      )}
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
        updateComment={updateComment}
        edit={edit}
        disabled={disabled}
        value={value}
        handleChange={handleChange}
      />
    </>
  );
};

export default CurrentUserComment;
