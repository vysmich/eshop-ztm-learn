import { useState } from "react";
//components
import FormInput from "../form-input/form-input";
import Button from "../button/button";
//styles
import "./sing-in-form.scss";
//utils
import {
  singInUserAccountWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
//context

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
    <div className="sing-up-container">
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
        <div className="buttons-container">
          <Button type="submit">Sing In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={singInWithGoogle}
          >
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SingInForm;
