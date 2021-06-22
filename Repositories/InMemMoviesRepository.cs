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
        new Movie {Id=Guid.NewGuid(), imdbID= "tt0076759", Title="Star Wars", Year= "1977", Poster= "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie {Id=Guid.NewGuid(), imdbID= "tt2527336", Title="Star Wars: The Last Jedi", Year= "2017", Poster= "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie {Id=Guid.NewGuid(), imdbID= "tt2488496", Title="Star Wars: The Force Awakens", Year= "2015", Poster= "https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie {Id=Guid.NewGuid(), imdbID= "tt0120915", Title="Star Wars: Episode I - The Phantom Menace", Year= "1999", Poster= "https://ia.media-imdb.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie { Id=Guid.NewGuid(), imdbID= "tt1185834", Title="Star Wars: The Clone Wars", Year= "2008", Poster= "https://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie {Id=Guid.NewGuid(), imdbID= "tt0080684", Title="Star Wars: Episode V - The Empire Strikes Back", Year= "1980", Poster= "https://ia.media-imdb.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie {Id=Guid.NewGuid(), imdbID= "tt0121766", Title="Star Wars: Episode III - Revenge of the Sith", Year= "2005", Poster= "https://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie{Id=Guid.NewGuid(), imdbID= "tt0086190", Title="Star Wars: Episode VI - Return of the Jedi", Year= "1983", Poster= "https://ia.media-imdb.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie{Id=Guid.NewGuid(), imdbID= "tt0121765", Title="Star Wars: Episode II - Attack of the Clones", Year= "2002", Poster= "https://ia.media-imdb.com/images/M/MV5BOWNkZmVjODAtNTFlYy00NTQwLWJhY2UtMmFmZTkyOWJmZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY268_CR10,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie{Id=Guid.NewGuid(), imdbID= "tt2275656", Title="Star Wars: Threads of Destiny", Year= "2014", Poster= "https://ia.media-imdb.com/images/M/MV5BMTkwMzM2NDQ1Nl5BMl5BanBnXkFtZTgwMzAyODExMTE@._V1_UX182_CR0,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie{Id=Guid.NewGuid(), imdbID= "tt6438108", Title="Star Wars: Lost Horizons", Year= "2018", Poster= "https://ia.media-imdb.com/images/M/MV5BZWM3NGRkMTgtNzBmZi00YTQxLWI2NGYtOTExOTg5YWNiYWZhXkEyXkFqcGdeQXVyNzE1MTI0NjY@._V1_UY268_CR52,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
        new Movie{Id=Guid.NewGuid(), imdbID= "tt2076340", Title="Star Wars: Star Warriors ", Year= "2007", Poster= "https://ia.media-imdb.com/images/M/MV5BYjUxN2EwNTEtZjEwYy00YmZiLTg4MDUtZmIxMzQ3MGZlYWU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAwODkyODg@._V1_UY268_CR82,0,182,268_AL_.jpg", CreatedDate=DateTimeOffset.UtcNow},
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