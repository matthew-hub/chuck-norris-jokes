import { useChuckStore } from "../../store/store";

import "./JokesCategories.css";

const JokesCategories = () => {
  const chuckStoreCategory = useChuckStore((state) => state.category);
  const setChuckCategory = useChuckStore((state) => state.setCategory);
  const getTheJoke = useChuckStore((state) => state.getTheJoke);
  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  const handleClick = (category) => {
    setChuckCategory(category);
    getTheJoke();
  };
  console.log("[chuck]:", chuckStoreCategory);

  return (
    <div className="app-jokes-categories">
      <div className="app-jokes-categories-content">
        {categories.map((category) => {
          return (
            <div className="app-jokes-category" key={category} onClick={() => handleClick(category)}>
              {category === chuckStoreCategory ? <span>{category}</span> : category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JokesCategories;
