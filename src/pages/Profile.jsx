import { NavLink } from "react-router-dom";
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-survey">

                <NavLink to="/survey" className="profile-link"> Retake Survey</NavLink>
            </div>
        </div>
    )
}

export default Profile;