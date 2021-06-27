using System.ComponentModel.DataAnnotations;

namespace movie.Dtos
{
    public record CreateItemDto
    {

        [Required] 
        public string Title { get; init; }
        public string Description { get; init; }
        public string Trailer { get; init; }
        public string Year { get; init; }
        public string Poster { get; init; }
        public string Category { get; init; }
        
    }
}