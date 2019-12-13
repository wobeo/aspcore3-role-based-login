using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mongo.Models
{
    public interface IProjetDatabaseSettings
    {
        public string UsersCollectionName { get; set; }
        public string ProductsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}

