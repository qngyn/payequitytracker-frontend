// Card.js
const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h3 className="card-position">{props.position} ({props.pronounces})</h3>
      </div>
      <div className="card-subtitle">
        <h5 className="card-subtitle-info">location: {props.location}; years of experience: {props.yoe} years </h5>
      </div>
      <div className="card-detail">
        <p className="card-salary">
            <span className="card-span">salary</span>: ${props.salary}
        </p>
        <p className="card-detail">
            <span className="card-span">industry</span>: {props.industry}
        </p>
        <p className="card-detail">
            <span className="card-span">job description</span>: {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
