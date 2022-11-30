import React, { useEffect } from "react";
//components
import SingUpForm from "../../components/sing-up-form/sing-up-form";
import SingInForm from "../../components/sing-in-form/sing-in-form";
//styles
import "./authentication.scss";

function Authentication(props) {
  return (
    <div>
      <div className="auth-container">
        <SingInForm />
        <SingUpForm />
      </div>
    </div>
  );
}

export default Authentication;
