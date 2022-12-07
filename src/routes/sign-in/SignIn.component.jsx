import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div>
            Sign In Page
            <button onClick={logGoogleUser}>Sign in with google pop up</button>
        </div>
    );
}

export default SignIn;