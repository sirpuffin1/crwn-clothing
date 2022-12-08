import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown (1).svg';
import './navigation.styles.scss'
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser)
  return (
      <div className="navigation">
        <Link className="logoContainer" to='/'>
        <CrwnLogo className="logo"/>
        </Link>
        <div className="navLinksContainer">
            <Link className="navLink" to='/shop'>
                SHOP
            </Link>
            <Link className="navLink" to='/auth'>
                SIGN IN/LOG IN
            </Link>
        </div>
      </div>
  );
};

export default Navigation;
