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
                Title = item.Title,
                Year = item.Year,
                Poster = item.Poster,
                Category = item.Category,
                CreatedDate = item.CreatedDate
            };
        }
    }
}