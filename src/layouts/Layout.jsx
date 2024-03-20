import Topbar from "../components/Topbar/Topbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="app-container">
        <Topbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
