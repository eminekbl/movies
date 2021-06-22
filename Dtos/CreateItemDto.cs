using System.ComponentModel.DataAnnotations;

namespace movie.Dtos
{
    public record CreateItemDto
    {
       [Required]  
        public string imdbID { get; init; }
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