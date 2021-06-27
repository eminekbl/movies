using System;

namespace movie.Entities
{
    public record Movie
    {
    public Guid Id { get; init; }
    public string Title { get; init; }
    public string Description { get; init; }
    public string Trailer { get; init; }
    public string Year { get; init; }
    public string Poster { get; init; }
    public string Category { get; init; }
    public DateTimeOffset CreatedDate { get; init; }

    }
}