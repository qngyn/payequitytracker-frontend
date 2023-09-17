import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className="form-container">
            <SignupForm />
            <div> 
                <p className="direct-to"> Already have an account? <Link to="/login">Login </Link></p>
            </div>
        </div>
    )

}

export default Signup;