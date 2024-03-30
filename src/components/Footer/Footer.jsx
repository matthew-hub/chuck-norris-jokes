import cup from "../../assets/icons/cup.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app-footer">
      <div className="bmc-container">
        <span>do you Like what i do ?:</span>
        <button className="bmc-button">
          <img src={cup} alt="" />
          <a href="https://www.buymeacoffee.com/matthewhub">buy me a coffee</a>
        </button>
      </div>
      <div className="using-api">
        Using API: &nbsp;
        <a href="https://github.com/chucknorris-io">chucknorris-io</a>
      </div>
    </div>
  );
};

export default Footer;
