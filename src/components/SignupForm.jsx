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
                    <div className="signup-components">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
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
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input 
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        {showPassword ?  <FaEyeSlash onClick={togglePassword} /> : <FaEye onClick={togglePassword} />}
                    </div>

                    <div>
                        <label>
                            Re-type Password:
                        </label>
                        <input 
                            type={showRePassword ? "text" : "password"}
                            id="retypepassword"
                            name="retypepassword"
                            required
                        />
                        {showRePassword ?  <FaEyeSlash onClick={toggleRePassword} /> : <FaEye onClick={toggleRePassword} />}
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