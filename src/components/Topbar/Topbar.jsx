import { Link, useLocation } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const { pathname } = useLocation();

  const liContent = () => {
    if (pathname !== "/about-chuck-norris") {
      return <Link to="/about-chuck-norris">About Chuck Norris</Link>;
    }
    return <Link to="/">Chuck Norris Jokes</Link>;
  };

  return (
    <>
      <div className="app-topbar">
        <nav>
          <ul>
            <li>{liContent()}</li>
            <li>
              <Link to="/stats">stats</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Topbar;
