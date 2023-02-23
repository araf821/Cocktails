import { useEffect } from "react";
import { useGlobalContext } from "../context";

const List = () => {
  const { data } = useGlobalContext();

  return <div>List</div>;
};
export default List;
