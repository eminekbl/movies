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
    "Fantasy",
    "History",
    "Animation",
    "War",
    "Comedy",
    "Horror"
  ]);
  const titleUpperCase = (title) => {
    title=title.toLowerCase();
    const arr = title.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const title2 = arr.join(" ");
    return title2;
  };
  return (
    <GlobalState.Provider
      value={{
        categories,
        titleUpperCase
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}

export { Context, GlobalState };
