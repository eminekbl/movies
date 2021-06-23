import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";

import { get, put,remove } from "../api";

function Edit() {
  let history = useHistory()
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
    // const changeProperty = ["imdbID", "title", "year", "poster", "category"];

    // const filtered = Object.keys(movie)
    //   .filter((key) => changeProperty.includes(key))
    //   .reduce((obj, key) => {
    //     return {
    //       ...obj,
    //       [key]: movie[key],
    //     };
    //   }, {});
    //   console.log(filtered)
   await put(movie, id);
   history.push(`/`)

  }
  async function handleDelete(){
   await remove(id)
    history.push(`/`)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img src={movie.Poster} alt="" />
          {console.log(movie.Poster)}
        </div>
        <div className="col-md-7">
          <Form onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={movie.Title}
                onChange={(e) => {
                  setMovie({ ...movie, Title: e.target.value });
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

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={movie.Category}
                onChange={(e) => {
                  setMovie({ ...movie, Category: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImdbID">
              <Form.Label>ImdbID</Form.Label>
              <Form.Control
                type="text"
                value={movie.ImdbID}
                onChange={(e) => {
                  setMovie({ ...movie, ImdbID: e.target.value });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="danger" onClick={()=>handleDelete()} >
              Delete
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
