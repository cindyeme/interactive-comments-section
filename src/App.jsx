import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { ApiService } from "./api/ApiService";
import AddComment from "./components/AddComment";
import Notification from "./components/Notification";
import SingleComment from "./components/SingleComment";

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

  // handle change
  const handleChange = (e) => {
    setNewComment({ ...newComment, content: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = {
      content: newComment.content,
      createdAt: dayjs().toNow(),
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };

    // add comment
    ApiService.addComment(comment)
      .then((result) => {
        setOldComments(oldComments.concat(result));
        console.log(result);
        notify(`Comment successfully added!`, "ok");
      })
      .catch((err) => {
        console.log("Error in create >>>", err);
        notify(`Failed to add comment!`, "error");
      });
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

  // handle reply
  const handleReply = () => {};

  useEffect(() => {
    ApiService.getAllComments()
      .then((res) => {
        setOldComments(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(score);
  // JSON.parse(localStorage.getItem("vote"))
  return (
    <>
      <main>
        <div className="App-header bg-neutral-200 w-full">
          <div className="max-w-3xl mx-auto px-4 h-full overflow-y-auto my-12">
            <div className="flex flex-col space-y-5">
              {loading ? (
                <h1 className="text-center text-lg text-primary-400">
                  Loading...
                </h1>
              ) : (
                oldComments.map((comment, idx) => {
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
                    />
                  );
                })
              )}

              <AddComment
                value={newComment.content}
                handleChange={handleChange}
                loading={loading}
                addComment={handleSubmit}
              />
              <Notification message={message.msg} status={message.status} />
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
