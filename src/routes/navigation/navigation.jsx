import { Fragment, useContext } from "react";

//components
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.scss";
//context
import { UserContext } from "../../context/user.context";
import { signOutUserAccount } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const singOutHandler = async () => {
    await signOutUserAccount();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        \<a href="http://"></a>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={singOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
