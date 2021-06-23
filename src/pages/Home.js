import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { get, post } from "../api";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  var selected = [];
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
    }
    fetchMovies();
  }, [modalShow]);

  const handleClick = (props) => {
    history.push(`/movie/${props}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await post(movie);
    setMovie([]);
    setModalShow(false);
  };
  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  const handleCategory = async (e) => {
    if (e.target.checked) {
      selected.push(e.target.value);
      console.log(selected);
      setMovie((prevState) => ({
        ...prevState,
        Category: selected.toString(),
      }));
      console.log(movie.Category);
      // setMovie({...movie, Category: movie.Category.concat(e.target.value) });
    } else {
      let filtered = selected.filter((item) => item !== e.target.value);
      selected = filtered;
      setMovie({ ...movie, Category: selected.toString() });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row w-100">
        <div className="col-md-9">
          <div className="row">
            {movies.map((item, index) => (
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
        <div className="col-md-3 d-flex flex-column align-items-center mt-5">
          <Button
            className="add-movie-button mb-5"
            onClick={() => {
              handleShow();
            }}
          >
            Add New Film
          </Button>
        </div>
        <Modal
          className="add-movie-modal"
          centered
          show={modalShow}
          onHide={handleClose}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-center mt-3"
          >
            Add New Film
          </Modal.Title>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)} id="movieform">
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setMovie({ ...movie, Title: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    setMovie({ ...movie, Year: e.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPoster">
                <Form.Label>Poster</Form.Label>
                <div className="row">
                  <div className={movie.Poster ? "col-sm-8" : ""}>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => {
                        setMovie({ ...movie, Poster: e.target.value });
                      }}
                    />
                  </div>
                  <div
                    className={
                      movie.Poster
                        ? "col-sm-3 d-flex justify-content-center"
                        : "d-none"
                    }
                  >
                    <img src={movie.Poster} alt="" />
                  </div>
                </div>
              </Form.Group>
            </Form>
            {categories.map((item, index) => (
              <label key={index} className="mx-2">
                <input
                  className="mx-1"
                  onChange={(e) => handleCategory(e)}
                  type="checkbox"
                  value={item}
                />
                {item}
              </label>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" form="movieform">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
