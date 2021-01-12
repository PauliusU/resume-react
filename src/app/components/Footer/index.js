import "./index.css";
import Link from "../Link";
import FooterContentBox from "../FooterCotentBox";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterContentBox title="address">
          <p>Vilnius</p>
        </FooterContentBox>
        <FooterContentBox title="contact">
          <Link linkLocation="tel:+37063634072">+370 636 34 072</Link>
          <Link linkLocation="mailto:pauliusuosis@gmail.com">
            pauliusuosis@gmail.com
          </Link>
        </FooterContentBox>
        <FooterContentBox title="social">
          <Link linkLocation="https://www.linkedin.com/in/paulius-uosis/">
            LinkedId/paulius-uosis
          </Link>
          <Link linkLocation="https://github.com/pauliusu">
            Github/pauliusu
          </Link>
        </FooterContentBox>
      </div>
    </footer>
  );
}

export default Footer;
