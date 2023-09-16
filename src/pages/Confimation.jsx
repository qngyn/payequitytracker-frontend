import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);
  return (
    <div>
      <p> You are successfully signed up! Now direct you to the main page.</p>
    </div>
  );
};

export default Confirmation;
