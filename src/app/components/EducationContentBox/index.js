import "./index.css";

function EducationContentBox({ institution, duration, studyProgram }) {
  return (
    <div className="education-item">
      <p>{institution}</p>
      <p>{duration}</p>
      <p>{studyProgram}</p>
    </div>
  );
}

export default EducationContentBox;
