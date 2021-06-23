using System;
using System.Collections.Generic;
using System.Linq;
using movie.Entities;


namespace movie.Repositories
{

    public class InMemMoviesRepository :IMovieRepository
    {
        private readonly List<Movie> movies = new()
        {    
    
            // new Movie {Id=Guid.NewGuid(), Name= "Potion",Price=9, , CreatedDate=DateTimeOffset.UtcNow},
            // new Movie {Id=Guid.NewGuid(), Name= "Iron Sword",Price=20, CreatedDate=DateTimeOffset.UtcNow},
            // new Movie {Id=Guid.NewGuid(), Name= "Bronze Shield",Price=15, CreatedDate=DateTimeOffset.UtcNow}
        };
        public IEnumerable<Movie> GetItems()
        {
            return movies;
        }
        public Movie GetItem(Guid id)
        {
            return movies.Where(item=> item.Id ==id).SingleOrDefault();
        }

        public void CreateItem(Movie movie)
        {
            movies.Add(movie);
        }

        public void UpdateItem(Movie movie)
        {
            var index= movies.FindIndex(item=> item.Id == movie.Id);
            movies[index] = movie;
        }

        public void DeleteItem(Guid id)
        {
        var index= movies.FindIndex(item=> item.Id == id);
        movies.RemoveAt(index);

        }
    }
}