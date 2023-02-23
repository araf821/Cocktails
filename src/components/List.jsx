import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Card from "./Card";

const List = () => {
  const { data } = useGlobalContext();

  return (
    <main className="cocktails-section">
      <h1 className="list-title">Cocktails</h1>
      <section className="list-section">
        {data.map((cocktail) => {
          // Destructure and rename a few different fields.
          const {
            idDrink,
            strDrink,
            strCategory,
            strDrinkThumb,
            strAlcoholic,
          } = cocktail;
          return (
            <Card
              key={idDrink}
              id={idDrink}
              name={strDrink}
              category={strCategory}
              img={strDrinkThumb}
              alcoholic={strAlcoholic}
            />
          );
        })}
      </section>
    </main>
  );
};
export default List;
