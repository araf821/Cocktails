import { Link } from "react-router-dom";

const Card = ({ cocktail }) => {
  const {idDrink: id, strDrink: name, strCategory: category, strDrinkThumb: img, strAlcoholic:alcoholic} = cocktail;
  return (
    <article className="card">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="card-footer">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{alcoholic}</p>
        <div className="btn-container">
          <Link to={`/cocktail/${id}`} className="card-btn">
            Pick Me
          </Link>
        </div>
      </div>
    </article>
  );
};
export default Card;
