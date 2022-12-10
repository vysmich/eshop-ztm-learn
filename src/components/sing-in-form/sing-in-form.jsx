import { useState } from "react";
//components
import FormInput from "../form-input/form-input";
import Button from "../button/button";
//utils
import { singInUserAccountWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase";
//styles
import { SignInContainer, ButtonsContainer } from "./sing-in-form-style";
import { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
    email: "",
    password: "",
};

function SingInForm(props) {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const singInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name } = event.target;
        setFormFields({ ...formFields, [name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await singInUserAccountWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Wrong password");
            } else if (error.code === "auth/user-not-found") {
                alert("User not found");
            } else {
                console.log("Sing In error", error);
            }
        }
    };

    return (
        <SignInContainer>
            <h2>Don´t have an account?</h2>
            <span>Sing in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    inputOptions={{
                        onChange: handleChange,
                        value: email,
                        name: "email",
                        required: true,
                        type: "email",
                    }}
                />

                <FormInput
                    label={"Password"}
                    inputOptions={{
                        onChange: handleChange,
                        value: password,
                        name: "password",
                        required: true,
                        type: "password",
                    }}
                />
                <ButtonsContainer>
                    <Button type='submit'>Sing In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={singInWithGoogle}>
                        Google sing in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SingInForm;
