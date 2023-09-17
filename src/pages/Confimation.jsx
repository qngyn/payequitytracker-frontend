import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Confirmation = () => {
  const navigate = useNavigate();

    useEffect( () => {
        setTimeout(() => {
            navigate("/survey", {replace: true});
        }, 3000)
    }, [])
    return (
        <div>
            <p className="redirecting"> You are successfully signed up! Now let's get to know more about you.</p>
        </div>
    )
}

export default Confirmation;
