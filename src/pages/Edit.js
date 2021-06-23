import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


import { get, put, remove } from "../api";

function Edit() {
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
      title: 'Confirm to delete',
      message: 'Are you sure to detele this movie',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => {
            await remove(id);
            history.push(`/`);
          }
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img className="edit-poster" src={movie.Poster} alt="" />
          {console.log(movie.Poster)}
        </div>
        <div className="col-md-7">
          <Form onSubmit={(e) => handleSubmit(e)}>
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

            <Button
              className="edit-button-save"
              variant="primary"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="edit-button-delete mx-3"
              variant="danger"
              onClick={() => handleDelete()}
            >
              Delete Movie
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
