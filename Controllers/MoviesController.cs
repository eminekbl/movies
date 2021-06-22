using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc;
using movie.Dtos;
using movie.Entities;
using movie.Repositories;

namespace movie.Controllers
{
    //GET /items
    [ApiController]
    [Route("movies")]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _itemsRepository;
        public MoviesController(IMovieRepository repository)
        {
            _itemsRepository = repository;

        }

        //GET /items
        [HttpGet]
        public IEnumerable<MovieDto> GetItems()
        {
            var movies = _itemsRepository.GetItems().Select(item => item.AsDto());
            return movies;
        }

        //GET /items/{id}
        [HttpGet("{id}")]
        public ActionResult<MovieDto> GetItem(Guid id)
        {
            var movie = _itemsRepository.GetItem(id);
            if (movie is null)
            {
                return NotFound();
            }
            return movie.AsDto();
        }

        //POST /movies
        [HttpPost]
        public ActionResult<MovieDto> CreateItem(CreateItemDto MovieDto)
        {
            Movie movie = new()
            {
                Id = Guid.NewGuid(),
                imdbID = MovieDto.imdbID,
                Title = MovieDto.Title,
                Year = MovieDto.Year,
                Poster = MovieDto.Poster,
                CreatedDate = DateTimeOffset.UtcNow
            };
            _itemsRepository.CreateItem(movie);
            return CreatedAtAction(nameof(GetItem), new { id = movie.Id }, movie.AsDto());

        }
        //PUT /movies/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateItem(Guid id, UpdateItemDto MovieDto)
        {
            var existingMovie = _itemsRepository.GetItem(id);
            if (existingMovie is null)
            {
                return NotFound();
            }
            Movie updatedmovie = existingMovie with
            {
                imdbID = MovieDto.imdbID,
                Title = MovieDto.Title,
                Year = MovieDto.Year,
                Poster = MovieDto.Poster,
            };
            _itemsRepository.UpdateItem(updatedmovie);
            return NoContent();

        }
        //DELETE /movies/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteItem(Guid id)
        {
            var existingMovie = _itemsRepository.GetItem(id);
            if (existingMovie is null)
            {
                return NotFound();
            }
            _itemsRepository.DeleteItem(id);
            return NoContent();
        }


    }
}