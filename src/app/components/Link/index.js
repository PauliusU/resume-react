import "./index.css";

function Link({children, linkLocation, image, imgSrc = "", imgAlt = ""}) {
    return (
        <a href={linkLocation} target="_blank" rel="noreferrer" className="link">
            {image && <img src={imgSrc} alt={imgAlt} className="link__image"></img>}
            {children}
        </a>
    )
}

export default Link;
