import "./index.css";

function Divider({ isFancy = true, isShort }) {
  const className = isFancy ? "divider--fancy" : "";
  const classShort = isShort ? "divider--short" : "";

  return <hr className={`divider ${className} ${classShort}`} />;
}

export default Divider;
