import "./card.css";
import noImage from "../../assets/no-image-placeholder-6f3882e0.webp";
import { Link } from "react-router-dom";
const Card = ({ id, imageUrl, title, lang, weight, type, premeireDate }) => {
  return (
    <div className="card--container">
      <div>
        <img
          src={imageUrl ? imageUrl : noImage}
          alt="film-poster-image"
          className="card--img"
        />
      </div>
      <div className="card--details">
        <div className="details--header">
          <Link to={"/" + id}>
            <h3 className="title">{title}</h3>
          </Link>
          <div className="weight--container">
            <p className="film--weight">{weight}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="language">{lang}</p>
        </div>
        <div className="details--footer">
          <p className="film--type">{type}</p>
          <p className="premiered">{premeireDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
