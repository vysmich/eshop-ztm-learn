import { Fragment } from "react";
//components
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

// hooks
import { useSelector, useDispatch } from "react-redux";
//selectors
import { selectIsCartOpen } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
//actions
import { signOutStart } from "../../store/user/user-actions";
//styles
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.style";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const singOutHandler = () => dispatch(signOutStart());

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
