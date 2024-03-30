import { useEffect } from "react";
import { useChuckStore } from "../../store/store.js";
import { checkJokeDB } from "../../appwrite/appwrite";
import Header from "../../components/Header/Header.jsx";
import Joke from "../../components/Joke/Joke.jsx";
import JokesCategories from "../../components/JokesCategories/JokesCategories.jsx";

const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

function Home() {
  const joke = useChuckStore((state) => state.joke);
  const getTheJoke = useChuckStore((state) => state.getTheJoke);
  const setChuckData = useChuckStore((state) => state.setChuckData);

  console.log("[JOKE]:", joke);

  useEffect(() => {
    console.log("[CHECK JOKE]:");
    if (isObjectEmpty(joke)) {
      console.log("[GET THE JOKE]:");
      getTheJoke();
    }

    // in appwrite the id of doc can't start with _* , it is reason why i use ID.unique() and check db by attr: id
    checkJokeDB(joke.id).then((res) => {
      console.log("[NOT IN DB]:");
      if (res.documents.length) {
        console.log("[CHECK JOKE DB]:", res);
        setChuckData({ id: res.documents[0].$id, likes: res.documents[0].likes });
      }
    });
  }, [getTheJoke, joke, setChuckData]);

  return (
    <>
      <Header title="Chuck Norris Jokes" />
      <JokesCategories />
      <Joke />
    </>
  );
}

export default Home;
