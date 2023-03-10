import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchDrink = async () => {
    setLoading(true);
    try {
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.data.drinks;
      console.log(data);
      if (data) {
        const {
          strDrink: name,
          strCategory: category,
          strDrinkThumb: img,
          strAlcoholic: alcoholic,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const drink = {
          name,
          category,
          img,
          alcoholic,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(drink);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log("Error!");
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    console.log("useEffect exe");
    fetchDrink();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!cocktail) {
    return (
      <section className="cocktail-page">
        <h2>No cocktail found here, sorry! :(</h2>
      </section>
    );
  }

  console.log(cocktail);

  const { name, img, category, alcoholic, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="cocktail-page">
      <h1>{name}</h1>
      <div className="drink-container">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="info-container">
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Category:</span> {category}
          </p>
          <p>
            <span>alcoholic:</span> {alcoholic}
          </p>
          <p>
            <span>glass:</span> {glass}
          </p>
          <p>
            <span>ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <em key={index}> {item}</em> : null;
            })}
          </p>
          <p>
            <span>instructions:</span> {instructions}
          </p>
        </div>
      </div>

      <Link to="/">Back Home</Link>
    </section>
  );
};
export default SingleCocktail;
