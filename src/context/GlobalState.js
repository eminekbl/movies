import React, { useState } from "react";

const GlobalState = React.createContext();

function Context(props) {
  const [categories, setCategories] = useState([
    "Drama",
    "Romance",
    "Western",
    "Adventure",
    "Action",
    "Sci-Fi",
    "Crime",
    "Biography",
  ]);

  return (
    <GlobalState.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}

export { Context, GlobalState };
