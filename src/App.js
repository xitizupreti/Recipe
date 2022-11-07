import React, { useEffect, useState } from "react";
import axios from "axios";
import Axe from "./Axe";

const Recipe = () => {
  const [query, setquery] = useState("");
  const qqq=()=>{
    setquery(Input);
  };

  const [Input, setInput] = useState("");
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
      console.log(url.data);
    }
    Data();
  },[query]);
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={Input}
          onChange={type}
          placeholder="Search.."
        />
        <button onClick={qqq} id="but" type="submit">
          Search
        </button>
      </div>
      <div id="main">
        <Axe />
      </div>
    </>
  );
};

export default Recipe;
