import { useGlobalContext } from "../context";
import Card from "./Card";
import Loading from "./Loader/Loader";

const List = () => {
  const { data, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (data.length < 1) {
    return <h1 className='no-items' >
      Sorry! No items matched the search criteria.
    </h1>
  }

  return (
    <main className="cocktails-section">
      <h1 className="list-title">Cocktails</h1>
      <section className="list-section">
        {data.map((cocktail) => {
          // Destructure
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
