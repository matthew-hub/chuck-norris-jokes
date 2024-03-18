import Header from "../components/Header/Header.jsx";
import Topbar from "../components/Topbar/Topbar.jsx";
import Joke from "../components/Joke/Joke.jsx";
import Footer from "../components/Footer/Footer.jsx";

import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="app-container">
        <Topbar />
        <Header />
        <Joke />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
