import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserwithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import "./sign-in-form.styles.scss";

let defaultUserCredentials = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [userCredentials, setUserCredentials] = useState(
    defaultUserCredentials
  );
  const { email, password } = userCredentials;

  const resetUserCredentials = () => {
    setUserCredentials(defaultUserCredentials);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    console.log(userCredentials);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await signInAuthUserwithEmailAndPassword(email, password)
        console.log(response)
        resetUserCredentials();
       
    } catch (error) {
        console.log('There was an an error signing in.', error)
    }
    
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email address"
          type="text"
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
