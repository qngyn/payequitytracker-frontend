import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "./Button";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "null",
    pronounces: "null",
    jobtitle: "",
    yoe: "null",
    industry: "",
    location: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassowrd] = useState(false);

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
    e.prevenDefault();

    const { password } = formData;
    const repassword = e.target.retypeppassword.value;

    if (password === repassword) {
      console.log("checked!");
    } else {
      alert("Passwords don't match. Please re-enter.");
    }
  };

  return (
    <form>
      <div>
        <div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {showPassword ? (
              <FaEyeSlash onClick={togglePassword} />
            ) : (
              <FaEye onClick={togglePassword} />
            )}
          </div>

          <div>
            <label>Re-type Password:</label>
            <input
              type={showRePassword ? "text" : "password"}
              id="retypepassword"
              name="retypepassword"
              required
            />
            {showRePassword ? (
              <FaEyeSlash onClick={toggleRePassword} />
            ) : (
              <FaEye onClick={toggleRePassword} />
            )}
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="null"> Please select</option>
              <option value="female"> Female</option>
              <option value="male">Male</option>
              <option value="intersex">Intersex</option>
              <option value="nonbinary">Non-binary/Third gender</option>
              <option value="transfemale">Transgender Female</option>
              <option value="transmale">Transgender Male</option>
              <option value="other">Other</option>
              <option value="notlised">Not listed</option>
            </select>
          </div>

          <div>
            <label htmlFor="pronounces">Pronounces:</label>
            <select
              id="pronounces"
              name="pronounces"
              value={formData.pronounces}
              onChange={handleInputChange}
              required
            >
              <option value="they">They/Them</option>
              <option value="she">She/her</option>
              <option value="he">He/Him</option>
              <option value="ze">Ze/Zim</option>
              <option value="other"> Others </option>
            </select>
          </div>

          <div>
            <label htmlFor="jobtitle">Job title:</label>
            <input
              type="text"
              id="jobtitle"
              name="jobtitle"
              value={formData.jobtitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="yoe">Years of Experience:</label>
            <select
              id="yoe"
              name="yoe"
              value={formData.yoe}
              onChange={handleInputChange}
              required
            >
              <option value="null"> Please select</option>
              <option value="less1">Less than 1 year</option>
              <option value="onetwo">1 - 2</option>
              <option value="threefive">3 - 5</option>
              <option value="sixten">6 - 10</option>
              <option value="eleventwenty"> 11-20 </option>
              <option value="twentyonemore"> 21+ </option>
            </select>
          </div>

          <div>
            <label htmlFor="industry">Industry:</label>
            <input type="text" required />
          </div>

          <div>
            <label htmlFor="location">Location:</label>
            <input type="text" required />
          </div>
        </div>
        <div>
          <Button onClick={handleSubmit}> Submit </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
