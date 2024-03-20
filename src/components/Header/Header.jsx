import PropTypes from "prop-types";
import "./Header.css";

function Header({ title }) {
  return (
    <header>
      <div className="app-header">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
