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
        <form>
            <div> 
                <div>
                    <div>
                        <label htmlFor="username">
                            Username: 
                        </label>
                        <input 
                            id="username"
                            type="text" 
                            value={formData.username}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password: 
                        </label>
                        <input 
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleInputChange}
                            required 
                        />
                        {showPassword ?  <FaEyeSlash onClick={togglePassword} /> : <FaEye onClick={togglePassword} />}
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