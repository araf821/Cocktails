import { useRef } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  return (
    <section className="search-box">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search For Your Favourite Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            placeholder="Pina Colada"
            onChange={() => setSearchTerm(searchValue.current.value)}
          />
        </div>
      </form>
    </section>
  );
};
export default Search;
