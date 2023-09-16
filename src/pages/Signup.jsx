import "./Signup.css";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <SignupForm />
      <div>
        <p>
          {" "}
          Already have an account? <Link to="/login">Login </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
