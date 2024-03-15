// hooks
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data } = useFetch(url);

  return (
    <div>
      <h2>Search Results</h2>
      {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default Search;
