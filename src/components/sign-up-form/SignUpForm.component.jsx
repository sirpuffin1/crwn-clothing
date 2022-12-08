import { useState,useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/FormInput.component";

import './sign-up-form.styles.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ [name]: value });
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

     await createUserDocumentFromAuth(user, { displayName });
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
        alert(error.message)
    }
  };
  console.log(formFields);
  return (
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
