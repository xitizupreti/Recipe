import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Cards";

const Recipe = () => {
  const [query, setquery] = useState();

  const qqq = (e) => {
    e.preventDefault();
    setquery(Input);
  };
  const [data, setData] = useState([]);

  const [Input, setInput] = useState();

  const type = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    async function Data() {
      const app_id = "d49e77b4";
      const app_key = "6d8440650bdd23164a45976c214d97ea";
      const url = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
      );
      setData(url.data.hits);
      console.log(url.data.hits);
    }
    Data();
  }, [query]);
  return (
    <>
      <form className="search" onSubmit={qqq}>
        <input
          type="text"
          value={Input}
          onChange={type}
          placeholder="Search.."
        />
        <button className="but" type="submit">
          Search
        </button>
      </form>
      <div >
        {data.map((item,index) => (
          <Card
          key={index}
            src={item.recipe.image}
            Name={item.recipe.label}
            Calories={item.recipe.calories}
            Ing={item.recipe.ingredientLines}
            link={item.recipe.url}
          />
        ))}
      </div>
    </>
  );
};

export default Recipe;
