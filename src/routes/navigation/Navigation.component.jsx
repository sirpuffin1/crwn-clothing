import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { ReactComponent as CrwnLogo } from '../../assets/crown (1).svg';
import './navigation.styles.scss'
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser)
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(res);
  }
  return (
      <div className="navigation">
        <Link className="logoContainer" to='/'>
        <CrwnLogo className="logo"/>
        </Link>
        <div className="navLinksContainer">
            <Link className="navLink" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
              ) :
              (
                <Link className="navLink" to='/auth'>
                SIGN IN/LOG IN
            </Link>
              )
            }
            
        </div>
      </div>
  );
};

export default Navigation;
