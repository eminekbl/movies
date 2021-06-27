import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { get } from "../api";
import { GlobalState } from "../context/GlobalState";
import AddMovieModal from "../components/AddMovieModal";
import SearchMovie from "../components/SearchMovie";

function Home() {
  const GlobalContextAPI = React.useContext(GlobalState);

  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [className, setClassName] = useState("");

  const [movieFilter, setMovieFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  let history = useHistory();

  useEffect(() => {
    async function fetchMovies() {
      let data = await get("");
      setMovies(data);
      setFilteredData(data);
      console.log(data);
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
                  <Card.Title>
                    {GlobalContextAPI.titleUpperCase(item.Title)}
                  </Card.Title>
                  <Card.Img variant="top" src={item.Poster} />
                  <Button
                    className="bg-blue white edit-movie-button"
                    onClick={() => handleClick(item.Id)}
                  >
                    See More
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`home-sidebar col-md-3 order-1 order-md-2 text-center ${className}`}
        >
          {
            //Filmi ismi ile aratma
            SearchMovie(filteredData, setFilteredData, movies)
          }

          <div className="row filter-label-row mt-3">
            {
              //Filmleri kategori ile filtreleme
              GlobalContextAPI.categories.map((item, index) => (
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
              ))
            }
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
          categories={GlobalContextAPI.categories}
        />
      </div>
    </div>
  );
}

export default Home;
