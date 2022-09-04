import { useState, useEffect } from "react";
import ApiService from "../api/ApiService";
import CommentBox from "./Layouts";
import avatar from "../images/avatars/image-juliusomo.png";
import { TextArea } from "./InputField";
import { Button } from "./Button";

const AddComment = ({value, handleChange}) => {
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
          <TextArea
            name="comment"
            // rows="10"
            value={value}
            handleChange={handleChange}
          />
        </div>
        <div className="flex-none">
          <Button text="Send" />
        </div>
      </div>
    </CommentBox>
  );
};

export default AddComment;
