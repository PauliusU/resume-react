import "./index.css";

function FooterContentBox({ title, children }) {
  return (
    <div className="footer-container__item">
      <span className="footer-container__item-title">{title}</span>
      {children}
    </div>
  );
}

export default FooterContentBox;
