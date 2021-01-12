import "./index.css";
import List from "../List";

function FooterContentBox({ title, children }) {
  console.log(children);
  return (
    <div className="footer-container__item">
      <span className="footer-container__item-title">{title}</span>
      {children}
    </div>
  );
}

export default FooterContentBox;
