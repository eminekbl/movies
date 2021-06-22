using System;
using System.Collections.Generic;
using movie.Entities;

namespace movie.Repositories
{
    public interface IMovieRepository
    {
        Movie GetItem(Guid id);
        IEnumerable<Movie> GetItems();
        void CreateItem(Movie movie);
        void UpdateItem(Movie movie);
        void DeleteItem(Guid id);
    }

}