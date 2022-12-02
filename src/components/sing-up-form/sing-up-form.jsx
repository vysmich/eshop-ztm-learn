import React from "react";
//components

import FormInput from "../form-input/form-input";
import Button from "../button/button";
//styles
import "./sing-up-form.scss";

//utils
import {
  createUserAccountWithEmailAndPassword,
  createUserProfileDocument,
} from "../../utils/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SingUpForm(props) {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name } = event.target;
    setFormFields({ ...formFields, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await createUserAccountWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, {
        displayName,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  return (
    <div className="sing-up-container">
      <h2>Don´t have an account?</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            onChange: handleChange,
            value: displayName,
            name: "displayName",
            required: "true",
            type: "text",
          }}
        />

        <FormInput
          label={"Email"}
          inputOptions={{
            onChange: handleChange,
            value: email,
            name: "email",
            required: "true",
            type: "email",
          }}
        />

        <FormInput
          label={"Password"}
          inputOptions={{
            onChange: handleChange,
            value: password,
            name: "password",
            required: "true",
            type: "password",
          }}
        />

        <FormInput
          label={"Confirm Password"}
          s
          inputOptions={{
            onChange: handleChange,
            value: confirmPassword,
            name: "confirmPassword",
            required: "true",
            type: "password",
          }}
        />

        <Button type="submit">Sing Up</Button>
      </form>
    </div>
  );
}

export default SingUpForm;
