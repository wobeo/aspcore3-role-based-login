using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

using mongo.Models;

namespace mongo.Services
{
    public class ProductsService
    {
        private readonly IMongoCollection<Products> _products;

        public ProductsService(IProjetDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Products>(settings.ProductsCollectionName);
        }

        public List<Products> Get() =>
            _products.Find(product => true).ToList();

        public Products Get(string id) =>
            _products.Find<Products>(x => x.Id == id).FirstOrDefault();

        public Products Create(Products product)
        {
            _products.InsertOne(product);
            return product;
        }

        public void Update(string id, Products product) =>
            _products.ReplaceOne(x => x.Id == id, product);

        public void Remove(Products product) =>
            _products.DeleteOne(x => x.Id == product.Id);

        public void Remove(string id) =>
            _products.DeleteOne(x => x.Id == id);
    }
}