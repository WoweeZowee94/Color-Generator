import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState(null);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#91a0b7").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      <section className="container">
        <h3> Ez Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f2f2f2"
            className={`${error ? "error" : false}`}
          ></input>
          <button className="btn" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </section>
      ;
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;
