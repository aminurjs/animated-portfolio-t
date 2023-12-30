import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <span>Aminur Rahman</span>
        <div className="social">
          <a href="#">
            <img src="./github.png" alt="" />
            <img src="./linkedin.png" alt="" />
            <img src="./facebook.png" alt="" />
            <img src="./instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
