import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/SignUpForm.component';

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
 
    return (
        <div>
            Sign In Page
            <button onClick={logGoogleUser}>Sign in with google pop up</button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;