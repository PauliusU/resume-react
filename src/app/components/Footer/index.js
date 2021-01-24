import "./index.css";
import FooterContentBox from "./FooterCotentBox";
import Link from "../Link";
import translations from "../../translations";

function Footer({ lang }) {
  const { footer } = translations[lang];

  return (
    <footer className="footer">
      {footer.blocks.map((block, blockIndex) => (
        <FooterContentBox key={blockIndex} title={block.title}>
          {block.entries.map((entry, entryIndex) => {
            if (entry.linkLocation) {
              return (
                <Link key={entryIndex} linkLocation={entry.linkLocation}>
                  {entry.content}
                </Link>
              );
            }
            return <p key={entryIndex}>{entry.content}</p>;
          })}
        </FooterContentBox>
      ))}
    </footer>
  );
}

export default Footer;
