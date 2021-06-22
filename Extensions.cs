using movie.Dtos;
using movie.Entities;

namespace movie
{
    public static class Extensions
    {
        public static MovieDto AsDto(this Movie item)
        {
            return new MovieDto
            {
                Id = item.Id,
                imdbID = item.imdbID,
                Title = item.Title,
                Year = item.Year,
                Poster = item.Poster,
                CreatedDate = item.CreatedDate
            };
        }
    }
}