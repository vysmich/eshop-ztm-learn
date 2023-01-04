import { Fragment } from "react";
//components
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
//utils
import { signOutUserAccount } from "../../utils/firebase";
// hooks
import { useSelector } from "react-redux";
//selectors
import { selectIsCartOpen } from "./../../store/cart/cart-selector";
//styles
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.style";

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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
