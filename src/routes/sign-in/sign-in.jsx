import React, { useEffect } from "react";
//components
import SingUpForm from "../../components/sing-up-form/sing-up-form";
//auth Functions
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
} from "../../utils/firebase";

function SignIn(props) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocument(user);
  };
  // useEffect(() => {
  //   const getResponseAfterRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserProfileDocument(response.user);
  //     }
  //   };
  //   getResponseAfterRedirect();
  // }, []);
  return (
    <div>
      {" "}
      <p>Login page</p>
      <button onClick={logGoogleUser}>Login with Google</button>
      {/*<button onClick={signInWithGoogleRedirect}>*/}
      {/*  Login with Google redirect*/}
      {/*</button>*/}
      <SingUpForm />
    </div>
  );
}

export default SignIn;
