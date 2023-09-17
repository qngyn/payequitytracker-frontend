import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="form-container">
            <LoginForm />
            <div>
                <p className="direct-to"> Haven't signed up yet? <Link to="/signup">Sign Up</Link></p>
            </div>
            
        </div>
    )

}

export default Login;