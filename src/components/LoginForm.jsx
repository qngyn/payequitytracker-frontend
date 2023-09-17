import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import Button from "./Button";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState)
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
        e.preventDefault()

    }

    return (
        <form className="signin-form">
            <div> 
                <div>
                    <p className="form-name">sign in</p>
                    <div className="signup-components">
                        <input 
                            id="username"
                            type="text" 
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="email"
                            className="form-input"
                            required 
                        />
                    </div>

                    <div className="signup-components">
                        <input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="password"
                            className="form-input"
                            required 
                        />
                        {showPassword ?  <FaEyeSlash onClick={togglePassword} className="eye-icon"/> : <FaEye onClick={togglePassword} className="eye-icon"/>}
                    </div>
                </div>
                
                <div>
                    <Button> Submit </Button>

                </div>
                
            </div>
        </form>
    )
}

export default LoginForm;