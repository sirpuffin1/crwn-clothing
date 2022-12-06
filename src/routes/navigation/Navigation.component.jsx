import { Link } from "react-router-dom";

const Navigation = () => {
  return (
      <div className="navigation">
        <Link className="logoContainer" to='/'>
        <div>Logo</div>
        </Link>
        <div className="navLinksContainer">
            <Link className="navLink" to='/shop'>
                SHOP
            </Link>
        </div>
      </div>
  );
};

export default Navigation;
