/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useChuckStore, useUserStore } from "../../../store/store";
import { createDoc, getUserDoc, updateDoc, updateUserDoc } from "../../../appwrite/appwrite";
import likeicon from "../../../assets/icons/likeicon.svg";
// TODO: animate count likes
import "./LikeButton.css";

const LikeButton = () => {
  const request = useRef(false); // LIKE JOKE EVENT
  // CHUCK STORE
  const joke = useChuckStore((state) => state.joke);
  const id = useChuckStore((state) => state.id);
  const likes = useChuckStore((state) => state.likes);
  const setChuckData = useChuckStore((state) => state.setChuckData);
  // USER STORE
  const userID = useUserStore((state) => state.id);
  const userLiked = useUserStore((state) => state.liked);
  const setUserData = useUserStore((state) => state.setUserData);

  // LIKE JOKE EVENT
  const likeJokeEvent = () => {
    if (request.current) {
      console.log("[EVENT IN PROGRESS]:");
      return;
    }
    // SET EVENT REQUEST TRUE
    request.current = true;
    // IF ID EXIST, JOKE IS IN THE DB
    if (id) {
      // CHECK IF ID ALREADY EXIST IN USER LIKED LIST
      if (!userLiked.includes(id)) {
        console.log("[LIKE THE JOKE]:", id);
        // GET USER DOC, CHECK AGAIN IF USER ALREADY LIKED THE JOKE
        getUserDoc(userID).then((userDoc) => {
          if (!userDoc.liked.includes(id)) {
            // UPDATE LIKES, INCREMENT LIKES
            updateDoc(id, { likes: likes + 1 }).then((doc) => {
              const liked = [...userDoc.liked];
              liked.push(doc.$id); // ADD ID TO LIKED LIST
              // UPDATE USER DOC LIKED LIST
              updateUserDoc(userID, { liked: liked }).then((userDoc) => {
                setUserData({ liked: userDoc.liked }); // SET USER STORE LIKED LIST
                setChuckData({ likes: doc.likes }); // SET CHUCK STORE NUMBERS OF LIKES
                request.current = false; // SET REQUEST TO FALSE
              });
            });
          }
        });
      } else {
        console.log("[UNLIKE THE JOKE]:", id);
        // GET USER DOC, CHECK IF ID EXIST IN USER LIKED LIST
        getUserDoc(userID).then((userDoc) => {
          if (userDoc.liked.includes(id)) {
            // UPDATE LIKES, DECREMENT LIKES -1
            updateDoc(id, { likes: likes - 1 }).then((doc) => {
              const liked = [...userDoc.liked];
              const filterLiked = liked.filter((e) => e !== id); // FILTERED LIKED LIST [UNLIKE JOKE]
              // UPDATE USER DOC LIKED LIST
              updateUserDoc(userID, { liked: filterLiked }).then((userDoc) => {
                setUserData({ liked: userDoc.liked }); // SET USER STORE LIKED LIST
                setChuckData({ likes: doc.likes }); // SET CHUCK STORE NUMBERS OF LIKES
                request.current = false; // SET REQUEST TO FALSE
              });
            });
          }
        });
      }
    } else {
      // CREATE DOC | ADD JOKE TO DB, INCREMENT LIKES
      createDoc({ id: joke.id, likes: likes + 1, categories: joke.categories }).then((doc) => {
        console.log("[ADDED JOKE TO DB]:", doc.$id);
        // GET USER DOC, ADD DOC ID TO LIKED LIST
        getUserDoc(userID).then((userDoc) => {
          const liked = [...userDoc.liked];
          liked.push(doc.$id); // ADD ID TO LIKED LIST
          // UPDATE USER DOC LIKED LIST
          updateUserDoc(userID, { liked: liked }).then((userDoc) => {
            setUserData({ liked: userDoc.liked }); // SET USER STORE LIKED LIST
            setChuckData({ id: doc.$id, likes: doc.likes }); // SET ID AND LIKES
            request.current = false;
          });
        });
      });
    }
  };

  return (
    <div className="app-like-button">
      <button onClick={likeJokeEvent}>
        <img src={likeicon} alt="" />
        <span>{likes}</span>
      </button>
    </div>
  );
};

export default LikeButton;
