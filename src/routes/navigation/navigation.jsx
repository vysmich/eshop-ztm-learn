import { Fragment, useContext } from "react";
//components
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
//utils
import { signOutUserAccount } from "../../utils/firebase";
//context
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
//styles
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.style";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log("🚀 ~ file: navigation.jsx:17 ~ Navigation ~ currentUser", currentUser);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    console.log("isCartOpen", isCartOpen);
    console.log("Navigation ~ isCartOpen", isCartOpen);

    const singOutHandler = async () => {
        await signOutUserAccount();
    };

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={singOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
