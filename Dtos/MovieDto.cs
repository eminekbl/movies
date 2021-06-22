using System;

namespace movie.Dtos
{
    public record MovieDto
    {
    public Guid Id { get; init; }
    public string imdbID { get; init; }
    public string Title { get; init; }
    public string Year { get; init; }
    public string Poster { get; init; }
    public string Category { get; init; }
    public DateTimeOffset CreatedDate { get; init; }

    }
}