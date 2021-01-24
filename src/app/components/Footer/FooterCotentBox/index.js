import "./index.css";

function FooterContentBox({ title, children }) {
  return (
    <div className="footer-content-box">
      <span className="footer-content-box__title">{title}</span>
      {children}
    </div>
  );
}

export default FooterContentBox;
