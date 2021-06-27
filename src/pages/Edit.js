import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import { GlobalState } from "../context/GlobalState";

import "react-confirm-alert/src/react-confirm-alert.css";

import { get, put, remove } from "../api";

function Edit() {
  const GlobalContextAPI = React.useContext(GlobalState);
  let history = useHistory();
  const params = useParams();
  const { id } = params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      let data = await get(id);
      setMovie(data);
      console.log(data);
    }
    fetchMovie();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await put(movie, id);
    history.push(`/`);
  }
  async function handleDelete() {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this movie?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            await remove(id);
            history.push(`/`);
          },
        },
        {
          label: "No",
        },
      ],
    });
  }
  const handleCategory = (e) => {
    let selected;
    if (e.target.checked) {
      movie.Category
        ? (selected = movie.Category + "," + e.target.value)
        : (selected = e.target.value);
      setMovie((prevState) => ({ ...prevState, Category: selected }));
    } else {
      selected = movie.Category.split(",").filter(
        (item) => item !== e.target.value
      );

      setMovie((prevState) => ({
        ...prevState,
        Category: selected.toString(),
      }));
    }
  };

  return (
    <div className="container-fluid edit-page">
      <div className="row p-2 m-0 d-flex justify-content-center mt-3">
        <div className="col-md-5 order-2 order-md-1">
          <img className="edit-poster" src={movie.Poster} alt="" />
        </div>
  
        <div className="col-md-7 white order-1 order-md-2 mb-2">
          <Button
              className="edit-button bg-blue "
              onClick={() => history.push(`/`)}
            >
              Go Back
            </Button>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={movie.Title ? GlobalContextAPI.titleUpperCase(movie.Title):""}
                onChange={(e) => {
                  setMovie({ ...movie, Title: e.target.value.toLowerCase() });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
                type="text"
                value={movie.Description}
                onChange={(e) => {
                  setMovie({ ...movie, Description: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                value={movie.Year}
                onChange={(e) => {
                  setMovie({ ...movie, Year: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPoster">
              <Form.Label>Poster</Form.Label>
              <Form.Control
                type="text"
                value={movie.Poster}
                onChange={(e) => {
                  setMovie({ ...movie, Poster: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTrailer">
              <Form.Label>Trailer</Form.Label>
              <Form.Control
                type="text"
                value={movie.Trailer}
                onChange={(e) => {
                  setMovie({ ...movie, Trailer: e.target.value });
                }}
              />
            </Form.Group>
            <div className=" mb-3 form-group">
            <Form.Label>Categories</Form.Label>
              <div className="row filter-label-row">
              {GlobalContextAPI.categories.map((item, index) => (
                <label
                  key={index}
                  className="col-md-6 col-sm-3 col-6 white filter-label"
                >
                  <input
                    className="mx-1"
                    onChange={(e) => handleCategory(e)}
                    type="checkbox"
                    value={item}
                    checked={
                      movie.Category ? movie.Category.includes(item) : false
                    }
                  />
                  {item}
                </label>
              ))}
              </div>
             
            </div>
            <Button
              className="edit-button-save mt-3 bg-green bg-red"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="edit-button-delete me-3 mt-3 bg-red"
              onClick={() => handleDelete()}
            >
              Delete Movie
            </Button>
          
          </Form>
        </div>
      </div>
      {movie.Trailer ? (
          <video className="col-12 p-3" controls  autoPlay={false} >
          <source src={movie.Trailer} type="video/mp4" />
        </video>
        ): ""}
    </div>
  );
}

export default Edit;
