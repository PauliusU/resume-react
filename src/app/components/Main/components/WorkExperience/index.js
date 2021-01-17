import "./index.css";

function WorkExperience({ position, employer, duration, description }) {
  return (
    <div className="work-experience__container-item">
      <p>{position}</p>
      <p>{employer}</p>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
}

export default WorkExperience;
