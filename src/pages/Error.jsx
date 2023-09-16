import "./Error.css"
import { Link } from "react-router-dom"
const Error = () =>  {
    return (
        <div className="error-container">
            <h1>Sorry, the page you are lookin for is not found! Please go back to the home page</h1>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}

export default Error