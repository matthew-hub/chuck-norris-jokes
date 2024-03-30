import { useChuckStore } from "../../store/store";
import NextJokeButton from "../Buttons/NextJokeButton/NextJokeButton";
import LikeButton from "../Buttons/LikeButton/LikeButton";
import "./Joke.css";

const Joke = () => {
  const jokeAPI = useChuckStore((state) => state.joke);

  return (
    <>
      <div className="app-joke">
        <div className="app-joke-text">
          <span>{jokeAPI.id}</span>
          <p>{jokeAPI.value}</p>
          <div className="app-joke-update">
            <h6>Update at:</h6>
            {jokeAPI.updated_at}
          </div>
        </div>
        <div className="app-joke-interaction">
          <NextJokeButton />
          <LikeButton />
        </div>
      </div>
    </>
  );
};

export default Joke;
