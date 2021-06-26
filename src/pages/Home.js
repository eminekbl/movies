import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form, CarouselItem } from "react-bootstrap";
import { useHistory } from "react-router";
import { get, post } from "../api";

import AddMovieModal from "../components/AddMovieModal";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="container-fluid">
      <div className="row w-100 p-0 m-0">
        <div className="col-md-9 order-2 order-md-1">
          <div className="row">
            {filteredData.map((item, index) => (
              // filmler map ile listeleniyor
              <div key={index} className="card-container col-sm-6 col-md-4 ">
                <Card className="content">
                  <Card.Title>{item.Title}</Card.Title>
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
        <div className="col-md-3 order-1 order-md-2 d-flex flex-column align-items-center mt-5">
          <Button
            className="add-movie-button mb-2"
            onClick={() => {
              handleShow();
            }}
          >
            Add New Film
          </Button>
          <div className="row filter-label-row">
          {categories.map((item, index) => (
            <label key={index} className="col-md-6 col-sm-3 col-6 white filter-label">
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
