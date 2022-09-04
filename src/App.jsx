import { useState, useEffect } from "react";
import ApiService from "./api/ApiService";
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  // handle down votes
  const handleDownVotes = (score) => {
    setScore(score - 1)
    // localStorage.setItem("downvote", JSON.stringify(score));
  };

  // handle upvotes
  const handleUpVotes = (score) => {};

  const handleReply = () => {};

  useEffect(() => {
    ApiService.getAllComments()
      .then((res) => {
        setComments(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(comments);

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
                comments.map((comment, idx) => (
                  <SingleComment
                    key={idx}
                    _avatar={comment?.user?.image?.webp}
                    score={comment?.score}
                    username={comment?.user.username}
                    createdAt={comment?.createdAt}
                    content={comment?.content}
                    handleDownVotes={() => handleDownVotes(comment?.score)}
                    handleUpVotes={handleUpVotes}
                    handleReply={handleReply}
                  />
                ))
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
