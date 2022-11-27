import React from "react";
import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "../../utils/firebase";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  createUserProfileDocument(user);
};
function SignIn(props) {
  return (
    <div>
      {" "}
      <p>Login page</p>
      <button onClick={logGoogleUser}>Login with Google</button>
    </div>
  );
}

export default SignIn;
