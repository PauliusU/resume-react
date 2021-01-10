import "./index.css";

function Pill({children, color, ...props}) {
    // console.log({ children, color });
    // console.log({color});

    // if color is not provided or is wrong
    // const colorClass = `pill--${color || "yellow"}`;
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
