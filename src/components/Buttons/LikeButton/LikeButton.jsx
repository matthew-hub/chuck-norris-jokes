import LikeIcon from "./LikeIcon";
import { useState } from "react";
// TODO: animate count likes
import "./LikeButton.css";
const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="app-like-button" onClick={handleLike}>
        <LikeIcon isLiked={isLiked} />
        <p>300</p>
      </div>
    </>
  );
};

export default LikeButton;
