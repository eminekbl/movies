import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form, CarouselItem, FormControl } from "react-bootstrap";
import { useHistory } from "react-router";
import { get, post } from "../api";

import AddMovieModal from "../components/AddMovieModal";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [className, setClassName] = useState("");
  const [search, setSearch] = useState("");

  const [movieFilter, setMovieFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  let history = useHistory();

  useEffect(() => {
    async function fetchMovies() {
      let data = await get("");
      setMovies(data);
      setFilteredData(data);
    }
    fetchMovies();
  }, [modalShow]);

  const handleClick = (props) => {
    history.push(`/movie/${props}`);
  };

  const handleShow = () => setModalShow(true);

  const handleFilter = (e) => {
    let selected;
    if (e.target.checked) {
      selected = movieFilter;
      selected.push(e.target.value); //birden fazla kategori isaretlenmisse array icine ekler
      setMovieFilter(selected);
    } else {
      selected = movieFilter.filter((item) => item !== e.target.value); //check kaldirildigina array icinden elemani cikarir
      setMovieFilter(selected);
    }

    let arr = [];
    movies.map((item, index) => {
      let categoryArray = item.Category.split(",");
      if (selected.every((i) => categoryArray.includes(i))) arr.push(item);
      setFilteredData(arr);
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setClassName("active");
    } else {
      setClassName("");
    }
  };

  const handleSearch = (value) => {
    setSearch(value)
    let selected = movies;
    selected = movies.filter((item) => item.Title.includes(value));
    setFilteredData(selected);
    console.log(selected)

  }

  const titleUpperCase=(title)=>{
    const arr = title.split(" "); 
    for(var i=0; i<arr.length; i++)
  {
    arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }
  const title2 = arr.join(" ");
return(title2)
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="container-fluid home-page">
      <div className="row w-100 p-0 m-0">
        <div className="col-md-9 order-2 order-md-1">
          <div className="row">
            {filteredData.map((item, index) => (
              // filmler map ile listeleniyor
              <div key={index} className="card-container col-sm-6 col-md-4 ">
                <Card className="content">
                  <Card.Title>{
                    titleUpperCase(item.Title.toLowerCase())
                  
                  }</Card.Title>
                  <Card.Img variant="top" src={item.Poster} />
                  <Button
                    className="bg-blue white edit-movie-button"
                    onClick={() => handleClick(item.Id)}
                  >
                    EDIT
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`home-sidebar col-md-3 order-1 order-md-2 text-center ${className}`}
        >
          <Form className="">
            <FormControl
              type="search"
              placeholder="Search"
              value={search}
              className=""
              aria-label="Search"
              onChange={(e)=>handleSearch(e.target.value)}
            />
          </Form>
          <div className="row filter-label-row mt-3">
            {categories.map((item, index) => (
              <label
                key={index}
                className="col-md-6 col-sm-3 col-6 white filter-label"
              >
                <input
                  className="mx-1"
                  onChange={(e) => handleFilter(e)}
                  type="checkbox"
                  value={item}
                />
                {item}
              </label>
            ))}
          </div>
          <Button
            className="add-movie-button mb-2 mt-4"
            onClick={() => {
              handleShow();
            }}
          >
            Add New Film
          </Button>
        </div>

        <AddMovieModal
          setModalShow={setModalShow}
          modalShow={modalShow}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default Home;
