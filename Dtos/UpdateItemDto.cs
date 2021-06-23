using System.ComponentModel.DataAnnotations;

namespace movie.Dtos
{
    public record UpdateItemDto
    {
        [Required]
        public string Title { get; init; }
        [Required]
        public string Year { get; init; }
        [Required]
        public string Poster { get; init; }
        [Required]
        public string Category { get; init; }


    }
}