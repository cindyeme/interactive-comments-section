import { useState, useEffect } from "react";
import ApiService from "../api/ApiService";
import CommentBox from "./Layouts";
import avatar from "../images/avatars/image-juliusomo.png";

const AddComment = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    ApiService.getCurrentUserComments().then(res => setUser(res))
  }, []);

  return (
    <CommentBox>
      <div className="float-left mr-4">
        <img src={user?.image?.webp || avatar} alt="avatar" className="w-10 h-10 object-cover" crossOrigin="anonymous" />
      </div>
      <div className="flex">
        <div className="grow w-full mr-4">
          <textarea
            name="comment"
            id="comment"
            // rows="10"
            className="border px-5 py-4 rounded-md w-full focus:border-primary-400"
            placeholder="Add a comment..."
          />
        </div>
        <div className="flex-none">
          <button className="bg-primary-400 text-white px-4 py-2 uppercase rounded-md">
            send
          </button>
        </div>
      </div>
    </CommentBox>
  );
};

export default AddComment;
