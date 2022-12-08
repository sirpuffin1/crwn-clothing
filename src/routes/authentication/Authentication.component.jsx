import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';

const Authentication = () => {
    
    return (
        <div>
            <h2>Sign in/up page</h2>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default Authentication;