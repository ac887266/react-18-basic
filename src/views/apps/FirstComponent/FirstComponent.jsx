import axios from "axios";
import React, { useCallback, useState } from "react";

const FirstComponent = () => {
  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    if (value.length >= 3) {
      axios
        .get(`https://demo.dataverse.org/api/search?q=${value}`)
        .then((res) => setSuggestions(res.data.data.items));
    }
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>Example of debouncing.</h2>

      <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => optimizedFn(e.target.value)}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {suggestions.length > 0 && (
              <div className="autocomplete">
                {suggestions.map((el, i) => (
                  <div key={i} className="autocompleteItems">
                    <span>{el.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
