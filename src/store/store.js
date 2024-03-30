import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// create chuck store
// use sessionStorage
const useChuckStore = create(
  persist(
    (set, get) => ({
      joke: {},
      category: null,
      likes: 0,
      id: null, // chuck joke db id not the api joke id
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
        set({ joke: await joke.json(), id: null, likes: 0 });
      },

      setCategory: (category) => {
        if (category) {
          if (category !== get().category) {
            set({ category });
          } else {
            set({ category: null });
          }
        }
      },
      setChuckData: (data) => {
        set((state) => ({
          ...state,
          ...data,
        }));
      },
    }),
    {
      name: "chuckStore", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

const useUserStore = create((set, get) => ({
  id: null, // USER ID
  liked: [],
  read: [],

  setUser: (user) => {
    set({ ...user });
  },

  getUserData: (name) => {
    return get()[name];
  },

  setUserData: (data) => {
    set((state) => ({
      ...state,
      ...data,
    }));
  },
}));

export { useChuckStore, useUserStore };
