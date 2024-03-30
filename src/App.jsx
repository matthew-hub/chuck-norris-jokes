import { useEffect, useState } from "react";
import { getAccount, getUserDoc, createAnonymousSession, addUserToDataBase } from "./appwrite/appwrite.js";
import { useUserStore } from "./store/store.js";
import Layout from "./layouts/AppLayout.jsx";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    getAccount()
      .then((res) => {
        console.log("[CURRENT ACCOUNT]:", res);
        setUser({ id: res.$id });
        getUserDoc(res.$id).then((res) => {
          console.log("[USER DOC]:", res);
          setUser({ id: res.$id, liked: res.liked, read: res.read });
          setLoading(false);
        });
      })
      .catch((err) => {
        console.error(err);
        createAnonymousSession().then((res) => {
          addUserToDataBase(res).then((res) => {
            setUser({ id: res.$id, liked: res.liked, read: res.read });
            setLoading(false);
          });
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className="app-calling">Calling Chuck Norris... |he is busy|</div>;
  }

  return (
    <div id="app">
      <Layout />
    </div>
  );
}

export default App;
