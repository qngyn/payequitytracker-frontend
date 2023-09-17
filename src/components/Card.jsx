// Card.js
const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h3 className="card-position">Position</h3>
      </div>
      <div className="card-subtitle">
        <h5 className="card-subtitle-info">Pronounces - YOE - Location</h5>
      </div>
      <div className="card-information">
        <p className="card-salary">Salary</p>
        <p className="card-industry">Industry</p>
        <p className="card-description">Job Description</p>
      </div>
    </div>
  );
};

export default Card;
