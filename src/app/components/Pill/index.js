import "./index.css";

function Pill({ children, color, ...props }) {
  const assignedColor = ["green", "yellow", "reddish"].includes(color)
    ? color
    : "grey";

  return (
    <div {...props} className={`pill pill-${assignedColor} m-1`}>
      <p>{children}</p>
    </div>
  );
}

export default Pill;
