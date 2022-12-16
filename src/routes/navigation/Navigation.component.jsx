import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import {selectIsCartOpen} from "../../store/cart/cart.selector"


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  
  return (
    <NavigationContainer >
      <LogoContainer  to="/">
        <CrwnLogo className="logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink  to="/shop">
          SHOP
        </NavLink>
        {currentUser ? (
          <NavLink as='span' onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink  to="/auth">
            SIGN IN/LOG IN
          </NavLink>
        )}

        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;
