import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/features/AuthenticationSlice";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const dispatch = useDispatch();

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
    dispatch(
      logInUser({
        user: {
          email,
          password,
        },
      })
    );
    navigate("/survey");
  };

  return (
    <form className="form-format" onSubmit={handleSubmit}>
      <div>
        <div>
          <p className="form-name">sign in</p>
          <div className="form-components">
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className="form-input"
              required
            />
          </div>

          <div className="form-components">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              placeholder="password"
              className="form-input"
              required
            />
            {showPassword ? (
              <FaEyeSlash onClick={togglePassword} className="eye-icon" />
            ) : (
              <FaEye onClick={togglePassword} className="eye-icon" />
            )}
          </div>
        </div>

        <div>
          <Button type="submit"> Submit </Button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
