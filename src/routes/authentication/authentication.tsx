import React from "react";
//components
import SingUpForm from "../../components/sing-up-form/sing-up-form";
import SingInForm from "../../components/sing-in-form/sing-in-form";
//styles
import { AuthenticationContainer } from "./authentication-style";

function Authentication() {
    return (
        <div>
            <AuthenticationContainer>
                <SingInForm />
                <SingUpForm />
            </AuthenticationContainer>
        </div>
    );
}

export default Authentication;
