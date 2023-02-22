import { useContext, createContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="">{children}</AppContext.Provider>;
};

export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
