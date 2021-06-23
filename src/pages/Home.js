import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { get,post } from "../api";

function Home() {

  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  let history = useHistory()

  useEffect(() => {
    async function fetchMovies() {
      let data = await get("");
      setMovies(data);
    }
    fetchMovies();
  }, [modalShow]);

  const handleClick=(props)=> {
    history.push(`/movie/${props}`)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await post(movie)
    setModalShow(false)
  }
  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div className="col-md-9">
      <div className="row">
        {movies.map((item, index) => (
        // filmler map ile listeleniyor
        <div key={index} className="card-container col-4 ">
          <Card className="content">
              <Card.Title>{item.Title}</Card.Title>
            <Card.Img variant="top" src={item.Poster} />    
              <Button variant="primary" onClick={()=>handleClick(item.Id)}>Edit</Button>
          </Card>
        </div>
      ))}
      </div>
      <Button onClick={()=>{handleShow()}}>Add New Film</Button>
        </div>
          <div className="col-md-3">
          Filter by Category
          </div>
      <Modal centered show={modalShow} onHide={handleClose} >
        <Modal.Title id="contained-modal-title-vcenter" className="d-flex justify-content-center">
         Add New Film
        </Modal.Title>
        <Modal.Body>           
          <Form onSubmit={(e)=>handleSubmit(e)} id="movieform" >
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
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
                type="text"
                value={movie.Year}
                onChange={(e) => {
                  setMovie({ ...movie, Year: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPoster">
              <Form.Label>Poster</Form.Label>
              <div className="row">
              <div  className={movie.Poster ? 'col-sm-8' : ''}>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setMovie({ ...movie, Poster: e.target.value });
                }}
              />
              </div>
               <div className={movie.Poster ? 'col-sm-3 d-flex justify-content-center' : 'd-none'}>
              <img  src={movie.Poster } alt="" />
              </div> 
              </div> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                
                onChange={(e) => {
                  setMovie({ ...movie, Category: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImdbID">
              <Form.Label>ImdbID</Form.Label>
              <Form.Control
                type="text"
                
                onChange={(e) => {
                  setMovie({ ...movie, ImdbID: e.target.value });
                }}
              />
            </Form.Group>
          </Form>

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
