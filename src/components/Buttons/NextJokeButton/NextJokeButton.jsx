import { useEffect } from "react";
import { useChuckStore, useUserStore } from "../../../store/store.js";
import { getUserDoc, updateUserDoc } from "../../../appwrite/appwrite";

import "./NextJokeButton.css";

const NextJokeButton = () => {
  // CHUCK STORE
  const joke = useChuckStore((state) => state.joke);
  const getTheJoke = useChuckStore((state) => state.getTheJoke);
  // USER STORE
  const userID = useUserStore((state) => state.id);
  const setUserData = useUserStore((state) => state.setUserData);
  // HANDLE NEXT JOKE 
  useEffect(() => {
    return () => {
      console.log("[ADD JOKE TO READ LIST]:", joke.id);
      getUserDoc(userID).then((userDoc) => {
        if (!userDoc.read.includes(joke.id)) {
          const read = [...userDoc.read];
          read.push(joke.id); // ADD ID TO READ LIST
          updateUserDoc(userID, { read: read }).then((userDoc) => {
            setUserData({ read: userDoc.read });
          });
        } else {
          console.log("[JOKE ALREADY SEEN]:", joke.id);
        }
      });
    };
  });

  return (
    <div className="next-joke-button">
      <button className="btn" onClick={getTheJoke} data="next">
        Next
      </button>
    </div>
  );
};

export default NextJokeButton;
