import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
const IntroPage = () => {
  const intro =
    "Our mission is to empower individuals in their pursuit of equal pay by providing user-friendly tools and resources to track, analyze, and advocate for wage equality. Join us in the fight for workplace justice, as we strive to ensure that your skills, dedication, and contributions are valued and compensated fairly.";
  const navigate = useNavigate();
  const [showFade, setShowFade] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const redirectSignIn = () => {
    navigate("/login");
  };

  const redirectSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="intro-container">
      <div>
        <div className="headliner">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("pay equity tracker")
                .start()
                .callFunction(() => {
                  setShowFade(true);
                })
                .pauseFor(1000)
                .callFunction(() => {
                  setShowButton(true);
                });
            }}
          />
        </div>
        <div className="intro-description">
          {showFade && <Fade>{intro}</Fade>}
        </div>
        {showButton && (
          <div className="intro-button">
            <Button onClick={redirectSignUp}> Sign Up </Button>
            <Button onClick={redirectSignIn}> Log In </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const redirectSignUp = () => {
  navigate("/signup");
};
return (
  <div className="intro-container">
    <div>
      <h1 className="headliner">Pay Equity Tracker</h1>
      <p>
        {" "}
        Our mission is to empower individuals in their pursuit of equal pay by
        providing user-friendly tools and resources to track, analyze, and
        advocate for wage equality. Join us in the fight for workplace justice,
        as we strive to ensure that your skills, dedication, and contributions
        are valued and compensated fairly.{" "}
      </p>
      <div className="intro-button">
        <Button onClick={redirectSignUp}> Sign Up </Button>
        <Button onClick={redirectSignIn}> Log In </Button>
      </div>
    </div>
  </div>
);

export default IntroPage;
