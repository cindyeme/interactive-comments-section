import { useState, useEffect } from "react";
import { ApiService } from "./api/ApiService";
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";

function App() {
  const [comment, setComment] = useState('')
  const [oldComments, setOldComments] = useState([]);
  const [loading, setLoading] = useState(true);
  // let [score, setScore] = useState(0);

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
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col space-y-5">
              {loading ? (
                <h1 className="text-center text-lg text-primary-400">
                  Loading...
                </h1>
              ) : (
                oldComments.map((comment, idx) => {
                  // score = comment?.score;
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

              <AddComment />
            </div>
          </div>
        </div>
      </main>
      <footer className="absolute right-0 bottom-0">
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
