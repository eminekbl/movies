using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Driver;
using movie.Entities;

namespace movie.Repositories
{
    public class MongoDbMoviesRepository : IMovieRepository
    {
        private const string databaseName = "MovieDB";
        private const string collectionName = "movies";
        private readonly IMongoCollection<Movie> moviesCollection;
        private readonly FilterDefinitionBuilder<Movie> filterBuilder = Builders<Movie>.Filter;

        public MongoDbMoviesRepository(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase(databaseName);
            moviesCollection = database.GetCollection<Movie>(collectionName);
        }
        public void CreateItem(Movie movie)
        {
            moviesCollection.InsertOne(movie);
        }

        public void DeleteItem(Guid id)
        {
            var filter= filterBuilder.Eq(item => item.Id, id);
            moviesCollection.DeleteOne(filter);
        }

        public Movie GetItem(Guid id)
        {
            var filter= filterBuilder.Eq(item => item.Id, id);
            return moviesCollection.Find(filter).SingleOrDefault();
        }

        public IEnumerable<Movie> GetItems()
        {
            return moviesCollection.Find(new BsonDocument()).ToList();
        }

        public void UpdateItem(Movie movie)
        {
            var filter= filterBuilder.Eq(item => item.Id, movie.Id);
            moviesCollection.ReplaceOne(filter,movie);
        }
    }
}