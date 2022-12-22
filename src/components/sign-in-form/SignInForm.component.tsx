import { useState, FormEvent, ChangeEvent } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import "./sign-in-form.styles.scss";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { AuthError } from "firebase/auth";

let defaultUserCredentials = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState(
    defaultUserCredentials
  );
  const { email, password } = userCredentials;

  const resetUserCredentials = () => {
    setUserCredentials(defaultUserCredentials);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetUserCredentials();
    } catch (error) {
      alert((error as AuthError).message);
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
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
