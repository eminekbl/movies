import React, { useState } from "react";
import { post } from "../api";
import { Button, Modal, Form } from "react-bootstrap";

function AddMovieModal({ setModalShow, modalShow, categories }) {
  const [movie, setMovie] = useState({});
  const handleClose = () => setModalShow(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await post(movie);
    setMovie([]);
    setModalShow(false);
  };
  const handleCategory = (e) => {
    if (e.target.checked) {
      let selected;
      movie.Category
        ? (selected = movie.Category + "," + e.target.value)
        : (selected = e.target.value);
      setMovie((prevState) => ({ ...prevState, Category: selected }));
    } else {
      let selected = movie.Category.split(",").filter(
        (item) => item !== e.target.value
      );
      setMovie((prevState) => ({
        ...prevState,
        Category: selected.toString(),
      }));
    }
  };
  return (
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
  );
}

export default AddMovieModal;
