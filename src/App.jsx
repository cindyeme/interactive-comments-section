import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { ApiService } from "./api/ApiService";
import AddComment from "./components/AddComment";
import Notification from "./components/Notification";
import SingleComment from "./components/SingleComment";
import CurrentUserComment from "./components/CurrentUserComment";
import { Modal } from "./components/Modal";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function App() {
  const [newComment, setNewComment] = useState({
    content: "",
    createdAt: "",
    score: "",
    user: {
      image: {
        png: "",
        webp: "",
      },
      username: "",
    },
  });
  const [oldComments, setOldComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ msg: "", status: "" });
  const [openEdit, setOpenEdit] = useState(false);
  const [editComment, setEditComment] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // handle votes
  const handleVotes = (type, score) => {
    // if (id) {
    if (type === "upvote") {
      // setScore((prev) => prev + 1);
      score += 1;
    } else if (type === "downvote") {
      if (score > 0) {
        // setScore((prev) => prev - 1);
        score -= 1;
      }
    }
    localStorage.setItem("vote", JSON.stringify(score));
    // }
  };

  // notify
  const notify = (msg, status) => {
    setMessage({ msg, status });
    setTimeout(() => {
      setMessage({ msg: "", status: "" });
    }, 5000);
  };

  // handle new comment input change
  const handleNewChange = (e) => {
    setNewComment({ ...newComment, content: e.target.value });
  };

  // handle update input change
  const handleUpdateInputChange = (e) => {
    setEditComment({ ...editComment, content: e.target.value });
  };

  // handle new comment submit
  const handleNewSubmit = (e) => {
    // prevent page from reloading
    e.preventDefault();
    setAddLoading(true);
    // new comment
    const comment = {
      content: newComment.content,
      createdAt: dayjs().fromNow(),
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    // validate
    if (comment.content === "") {
      notify("Please enter a comment", "fail");
    } else {
      // add new comment
      ApiService.addComment(comment)
        .then((result) => {
          setOldComments(oldComments.concat(result));
          setAddLoading(false);
          notify(`Comment successfully added!`, "ok");
        })
        .catch(() => {
          setAddLoading(false);
          notify(`Failed to add comment!`, "error");
        });
    }
    // reset
    setNewComment({
      content: "",
      createdAt: "",
      score: "",
      user: {
        image: {
          png: "",
          webp: "",
        },
        username: "",
      },
    });
  };

  // handle comment update
  const handleCommentUpdate = (e) => {
    // prevent page from reloading
    e.preventDefault();

    // identify comment
    const checkComment = oldComments.find(
      (comment) => comment.id === editComment.id
    );

    // add updated comment
    const updatedComment = { ...checkComment, content: editComment.content };

    // validate
    if (checkComment && updatedComment.content === "") {
      notify("Please enter a comment", "fail");
    } else {
      // update comment
      ApiService.updateComment(checkComment.id, updatedComment)
        .then((result) => {
          setOldComments(
            oldComments.map((comment) =>
              comment.id !== checkComment.id ? comment : result
            )
          );
          setOpenEdit(false);
          notify(`Successfully updated!`, "ok");
        })
        .catch((error) => {
          notify(`Failed to update!`, "fail");
          setOldComments(oldComments.filter((c) => c.id !== checkComment.id));
          console.log(error);
        });
    }
  };

  // handle comment delete
  const handleConfirmDelete = (id) => {
    setDeleteLoading(true)
    if (id) {
      ApiService.deleteComment(id)
        .then(() => {
          setOldComments(oldComments.filter((c) => c.id !== id));
          setDeleteLoading(false)
          notify(`Successfully deleted!`, "ok");
          setShowModal(false);
        })
        .catch(() => {
          notify(`Failed to delete comment!`, "fail");
          setOldComments(oldComments.filter((c) => c.id !== id));
          setDeleteLoading(false);
        });
    }
    console.log(id, oldComments);
  };

  // handle cancel
  const handleCancel = () => {
    setShowModal(false);
  };

  // handle reply
  const handleReply = () => {};

  // handle show edit
  const handleShowEdit = (id) => {
    const singleComment = oldComments.find((comment) => comment.id === id);
    if (id) {
      setEditComment({ ...singleComment });
    }
    if (id) setOpenEdit(true);
  };

  useEffect(() => {
    ApiService.getAllComments()
      .then((res) => {
        setOldComments(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <main>
        {/* {showModal && (
          <Modal
            handleCancel={handleCancel}
            handleConfirmDelete={handleConfirmDelete}
          />
        )} */}
        <div className="App-header bg-neutral-200 w-full z-10">
          <div className="max-w-3xl mx-auto px-4 h-full overflow-y-auto my-12 relative">
            <div className="flex flex-col space-y-5">
              <Notification message={message.msg} status={message.status} />

              {loading ? (
                <h1 className="text-center text-lg text-primary-400">
                  Loading...
                </h1>
              ) : (
                <>
                  {oldComments.slice(0, 2).map((comment, idx) => {
                    return (
                      <SingleComment
                        key={idx}
                        _avatar={comment?.user?.image?.webp}
                        score={comment?.score}
                        username={comment?.user.username}
                        createdAt={comment?.createdAt}
                        content={comment?.content}
                        handleDownVotes={() =>
                          handleVotes("downvote", comment?.score)
                        }
                        handleUpVotes={() =>
                          handleVotes("upvote", comment?.score)
                        }
                        handleReply={handleReply}
                        disabled={loading}
                      />
                    );
                  })}
                  {oldComments.slice(2).map((comment, idx) => {
                    return (
                      <CurrentUserComment
                        key={idx}
                        _avatar={comment?.user?.image?.webp}
                        score={comment?.score}
                        username={comment?.user.username}
                        createdAt={comment?.createdAt}
                        content={comment?.content}
                        handleDownVotes={() =>
                          handleVotes("downvote", comment?.score)
                        }
                        handleUpVotes={() =>
                          handleVotes("upvote", comment?.score)
                        }
                        handleReply={handleReply}
                        edit={openEdit}
                        handleEdit={() => handleShowEdit(comment?.id)}
                        value={editComment?.content}
                        handleChange={handleUpdateInputChange}
                        disabled={loading}
                        updateComment={handleCommentUpdate}
                        handleDelete={() => setShowModal(true)}
                        showModal={showModal}
                        handleCancel={handleCancel}
                        handleConfirmDelete={() =>
                          handleConfirmDelete(comment?.id)
                        }
                        loading={deleteLoading}
                      />
                    );
                  })}
                </>
              )}

              <AddComment
                value={newComment.content}
                handleChange={handleNewChange}
                loading={addLoading}
                addComment={handleNewSubmit}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="hidden md:absolute right-0 bottom-0">
        <div className="attribution pt-10 md:pt-0 text-white">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/emerenini-cynthia-ngozi"
            target="_blank"
            rel="noreferrer"
          >
            Emerenini Cynthia Ngozi
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
