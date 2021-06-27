import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

function SearchMovie(data, setData, movies) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    let value=e.target.value.toLowerCase()
    setSearch(value);
    let selected = data.filter((item) => item.Title.includes(value));
    setData(selected);
    if (value.trim() === "") setData(movies);
  };
  return (
    <Form className="" onSubmit={(e)=> e.preventDefault()}>
      <FormControl
        type="search"
        placeholder="Search"
        value={search}
        className=""
        aria-label="Search"
        onChange={(e) => handleSearch(e)}
      />
    </Form>
  );
}

export default SearchMovie;
