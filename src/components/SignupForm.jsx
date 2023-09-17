import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import Button from "./Button";
const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setShowRePassowrd] = useState(false)

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    const toggleRePassword = () => {
        setShowRePassowrd((prevState) => !prevState)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            return {
                ...prevState, 
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {
        e.prevenDefault()

        const { password } = formData
        const repassword = e.target.retypeppassword.value

        if (password === repassword) {
            console.log("checked!")
        } else {
            alert("Passwords don't match. Please re-enter.")
        }
    }
    
    return (
        <form className="signup-form">
            <div>
                <div className="signup-info">
                    <p className="form-name">sign up</p>
                    <div className="signup-components">
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

                    <div className="signup-components">
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
                        {showPassword ?  <FaEyeSlash onClick={togglePassword} className="eye-icon" /> : <FaEye onClick={togglePassword} className="eye-icon"/>}
                    </div>

                    <div className="signup-components">
                        <input 
                            type={showRePassword ? "text" : "password"}
                            id="retypepassword"
                            name="retypepassword"
                            className="form-input"
                            placeholder="re-type password"
                            required
                        />
                        {showRePassword ?  <FaEyeSlash onClick={toggleRePassword}  className="eye-icon"/> : <FaEye onClick={toggleRePassword} className="eye-icon"/>}
                    </div>
                </div>
                <div>
                    <Button onClick={handleSubmit}> Submit </Button>
                </div>
            </div>
        </form>
    )
}

export default SignupForm;