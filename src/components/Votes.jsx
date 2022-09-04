import { Icons } from "../icons/Icons";

const Votes = ({ score, handleDownVotes, handleUpVotes }) => (
  <div className="float-left mr-5">
    <div className="bg-neutral-200 border border-neutral-200 flex flex-col items-center space-y- rounded-md">
      <button
        type="button"
        onClick={handleUpVotes}
        className="px-3 pt-3 pb-4 vote"
      >
        <Icons.PlusIcon />
      </button>
      <h3 className="text-primary-400 font-semibold">{score}</h3>
      <button
        type="button"
        onClick={handleDownVotes}
        className="px-3 pb-3 pt-4 vote"
      >
        <Icons.MinusIcon />
      </button>
    </div>
  </div>
);

export default Votes;
