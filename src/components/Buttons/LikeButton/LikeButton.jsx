import likeicon from "../../../assets/icons/likeicon.svg";
// TODO: animate count likes
import "./LikeButton.css";
const LikeButton = () => {
  return (
    <>
      <div className="app-like-button">
        <img src={likeicon} alt="" />
        <p>300</p>
      </div>
    </>
  );
};

export default LikeButton;
