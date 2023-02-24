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
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      const data = await response.json()
      console.log("Converted to json");
      if (data.drinks[0]) {
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
        } = data.drinks[0];

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
        console.log("Setting drink");
        setCocktail(drink);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log("Error!");
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    console.log("useEffect exe");
    fetchDrink();
    setLoading(false);
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

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="cocktail-page">
      <div className="img-container">{name}</div>
      <div className="info-container">{image}</div>

      <Link to="/">Back Home</Link>
    </section>
  );
};
export default SingleCocktail;
