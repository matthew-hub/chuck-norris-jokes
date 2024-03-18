import NextJokeButton from "../Buttons/NextJokeButton/NextJokeButton";

import LikeButton from "../Buttons/LikeButton/LikeButton";

import "./Joke.css";
const Joke = () => {
  return (
    <>
      <div className="app-joke">
        <span> JOKE:</span>
        <p>
          &quot;When Chuck Norris does a push-up, he isn&apos;t lifting himself
          up, he&apos;s pushing the Earth down.&quot;
        </p>
        <div className="app-joke-interaction">
          <NextJokeButton />
          <LikeButton />
        </div>
      </div>
    </>
  );
};
export default Joke;
