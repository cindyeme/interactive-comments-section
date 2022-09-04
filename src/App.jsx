import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";

function App() {
  return (
    <>
      <main>
        <div className="App-header bg-neutral-200 w-full">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <SingleComment />
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
