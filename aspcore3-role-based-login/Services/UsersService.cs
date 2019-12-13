using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

using mongo.Models;

namespace mongo.Services
{
    public class UsersService
    {
        private readonly IMongoCollection<Users> _users;

        public UsersService(IProjetDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<Users>(settings.UsersCollectionName);
        }

        public List<Users> Get() =>
            _users.Find(user => true).ToList();

        public Users Get(string id) =>
            _users.Find<Users>(user => user.Id == id).FirstOrDefault();

        public Users Create(Users user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, Users user) =>
            _users.ReplaceOne(x => x.Id == id, user);

        public void Remove(Users user) =>
            _users.DeleteOne(x => x.Id == user.Id);

        public void Remove(string id) =>
            _users.DeleteOne(x => x.Id == id);

        public Users CheckUser(string username, string password)
        {
            return _users.Find<Users>(x => x.Name == username && x.Password == password).FirstOrDefault();
        }

    }
}