import { Link, useLocation } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const { pathname } = useLocation();

  const liContent = () => {
    if (pathname !== "/about-chuck-norris") {
      return <Link to="/about-chuck-norris">About Chuck</Link>;
    }
    return <Link to="/">Jokes</Link>;
  };

  return (
    <>
      <div className="app-topbar">
        <nav>
          <ul>
            <li>{liContent()}</li>
            <li>
              <Link to="/new-joke">New Joke</Link>
            </li>
          </ul>
        </nav>
        {/* <span>EN | PL</span> */}
      </div>
    </>
  );
}

export default Topbar;
