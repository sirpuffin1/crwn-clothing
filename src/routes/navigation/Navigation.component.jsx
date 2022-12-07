import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown (1).svg';
import './navigation.styles.scss'
const Navigation = () => {
  return (
      <div className="navigation">
        <Link className="logoContainer" to='/'>
        <CrwnLogo className="logo"/>
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
