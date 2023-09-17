import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/features/AuthenticationSlice";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [retypePassword, setRetypePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassowrd] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    tempUser: { email, password, confirmPassword },
  } = useSelector((state) => state.auth);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleRePassword = () => {
    setShowRePassowrd((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password } = formData;
    const repassword = retypePassword;
    const { email } = formData;

    if (password === repassword) {
      dispatch(registerUser({ user: { email, password } }));
      navigate("/confirmation");
    } else {
      alert("Passwords don't match. Please re-enter.");
    }
  };

  return (
    <form className="form-format" onSubmit={handleSubmit}>
      <div>
        <div className="signup-info">
          <p className="form-name">sign up</p>
          <div className="form-components">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="email"
              required
            />
          </div>

          <div className="form-components">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="password"
              required
            />
            {showPassword ? (
              <FaEyeSlash onClick={togglePassword} className="eye-icon" />
            ) : (
              <FaEye onClick={togglePassword} className="eye-icon" />
            )}
          </div>

          <div className="form-components">
            <input
              type={showRePassword ? "text" : "password"}
              id="retypepassword"
              name="retypepassword"
              className="form-input"
              placeholder="re-type password"
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
            {showRePassword ? (
              <FaEyeSlash onClick={toggleRePassword} className="eye-icon" />
            ) : (
              <FaEye onClick={toggleRePassword} className="eye-icon" />
            )}
          </div>
        </div>
        <div>
          <Button> Submit </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
