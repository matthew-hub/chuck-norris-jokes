import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// create chuck store
// use sessionStorage
const useChuckStore = create(
  persist(
    (set, get) => ({
      joke: {},
      category: null,

      getTheJoke: async () => {
        let joke = {};
        if (!get().category) {
          // "https://api.chucknorris.io/jokes/random"
          joke = await fetch("https://api.chucknorris.io/jokes/random");
        } else {
          // https://api.chucknorris.io/jokes/random?category={category}
          joke = await fetch(`https://api.chucknorris.io/jokes/random?category=${get().category}`);
        }
        // set the joke
        set({ joke: await joke.json() });
      },

      setCategory: (category) => {
        if (category) {
          if (category !== get().category) {
            set({ category });
          } else {
            set({ category: null });
          }

          // get().getTheJoke();
        }
      },
    }),
    {
      name: "chuckStore", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export { useChuckStore };
