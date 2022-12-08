import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="navigation">
      <Link className="logoContainer" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="navLinksContainer">
        <Link className="navLink" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="navLink" to="/auth">
            SIGN IN/LOG IN
          </Link>
        )}

        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Navigation;
